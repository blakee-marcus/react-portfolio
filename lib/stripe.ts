import Stripe from 'stripe';
import { getStripeSecretKey as getConfiguredStripeSecretKey, getStripeWebhookSecret as getConfiguredStripeWebhookSecret } from '@/lib/deposit';

let stripeClient: Stripe | null = null;
let stripeClientKey: string | null = null;

export function getStripeClient() {
  const stripeSecretKey = getConfiguredStripeSecretKey();

  if (!stripeSecretKey) {
    return null;
  }

  if (!stripeClient || stripeClientKey !== stripeSecretKey) {
    stripeClient = new Stripe(stripeSecretKey, {
      apiVersion: '2026-03-25.dahlia',
      typescript: true,
    });
    stripeClientKey = stripeSecretKey;
  }

  return stripeClient;
}

export function getStripeWebhookSecret() {
  return getConfiguredStripeWebhookSecret();
}
