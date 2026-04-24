import { NextResponse } from 'next/server';
import type Stripe from 'stripe';
import type { StripeDepositEventType } from '@/lib/deposit/domain';
import {
  isDatabaseConfigured,
  markStripeWebhookEventProcessed,
  recordStripeWebhookEvent,
} from '@/lib/deposit/repository';
import { finalizeDepositFromCheckoutSession } from '@/lib/deposit/service';
import { getStripeClient, getStripeWebhookSecret } from '@/lib/stripe';

export const runtime = 'nodejs';
export const maxDuration = 15;

const supportedEventTypes = new Set<StripeDepositEventType>([
  'checkout.session.completed',
  'checkout.session.async_payment_succeeded',
  'checkout.session.async_payment_failed',
  'checkout.session.expired',
]);

export async function POST(request: Request) {
  const stripe = getStripeClient();
  const webhookSecret = getStripeWebhookSecret();

  if (!stripe || !webhookSecret || !isDatabaseConfigured()) {
    return new NextResponse('Webhook handler is not configured.', { status: 503 });
  }

  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return new NextResponse('Missing stripe-signature header.', { status: 400 });
  }

  const payload = await request.text();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (error) {
    console.error('Failed to verify Stripe webhook signature.', error);
    return new NextResponse('Invalid webhook signature.', { status: 400 });
  }

  if (!supportedEventTypes.has(event.type as StripeDepositEventType)) {
    return NextResponse.json({ received: true });
  }

  const checkoutSession = event.data.object as Stripe.Checkout.Session;

  if (!checkoutSession.id) {
    return NextResponse.json({ received: true });
  }

  try {
    const shouldProcess = await recordStripeWebhookEvent({
      eventId: event.id,
      eventType: event.type,
      checkoutSessionId: checkoutSession.id,
      livemode: event.livemode,
    });

    if (!shouldProcess) {
      return NextResponse.json({ received: true });
    }

    await finalizeDepositFromCheckoutSession(checkoutSession.id, {
      eventType: event.type as StripeDepositEventType,
    });
    await markStripeWebhookEventProcessed(event.id);

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Failed to process Stripe webhook event.', error);
    return new NextResponse('Webhook processing failed.', { status: 500 });
  }
}
