import assert from 'node:assert/strict';
import test from 'node:test';
import { notifyPaidDepositEmailTransition } from '../lib/deposit/service';
import type { StoredDeposit } from '../lib/deposit/repository';

type DepositStatus = StoredDeposit['status'];

const now = new Date('2026-01-01T00:00:00.000Z');

function makeDeposit(status: DepositStatus, overrides: Partial<StoredDeposit> = {}): StoredDeposit {
  return {
    id: 'dep_record_123',
    publicId: 'dep_public_123',
    status,
    packageSlug: 'growth',
    packageName: 'Growth',
    priceId: 'price_growth',
    fullName: 'Blake Marcus',
    email: 'blake@example.com',
    emailNormalized: 'blake@example.com',
    businessName: 'Studio Name',
    amountCents: 15000,
    currency: 'usd',
    stripeCheckoutSessionId: 'cs_test_123',
    stripePaymentIntentId: 'pi_test_123',
    stripeCustomerId: 'cus_test_123',
    lastCheckoutUrl: 'https://checkout.stripe.com/c/pay/cs_test_123',
    accessTokenHash: 'token_hash',
    policyAcknowledgedAt: now,
    paidAt: status === 'paid' ? now : null,
    failedAt: status === 'failed' ? now : null,
    expiredAt: status === 'expired' ? now : null,
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}

test('does not send paid deposit emails for non-paid transitions', async () => {
  const statuses = ['pending', 'processing', 'failed', 'expired'] as const;

  for (const status of statuses) {
    let calls = 0;
    const sent = await notifyPaidDepositEmailTransition(
      makeDeposit(status),
      makeDeposit(status),
      async () => {
        calls += 1;
      },
    );

    assert.equal(sent, false);
    assert.equal(calls, 0);
  }
});

test('sends paid deposit emails when a deposit first becomes paid', async () => {
  const calls: StoredDeposit[] = [];
  const updatedDeposit = makeDeposit('paid');
  const sent = await notifyPaidDepositEmailTransition(
    makeDeposit('processing'),
    updatedDeposit,
    async (deposit) => {
      calls.push(deposit);
    },
  );

  assert.equal(sent, true);
  assert.equal(calls.length, 1);
  assert.equal(calls[0], updatedDeposit);
});

test('does not send paid deposit emails when a deposit was already paid', async () => {
  let calls = 0;
  const sent = await notifyPaidDepositEmailTransition(
    makeDeposit('paid'),
    makeDeposit('paid'),
    async () => {
      calls += 1;
    },
  );

  assert.equal(sent, false);
  assert.equal(calls, 0);
});

test('reports skipped paid deposit emails without failing the transition', async () => {
  const sent = await notifyPaidDepositEmailTransition(
    makeDeposit('pending'),
    makeDeposit('paid'),
    async () => false,
  );

  assert.equal(sent, false);
});

test('logs and continues when paid deposit email delivery fails', async () => {
  const originalConsoleError = console.error;
  let logged = false;
  console.error = () => {
    logged = true;
  };

  try {
    const sent = await notifyPaidDepositEmailTransition(
      makeDeposit('pending'),
      makeDeposit('paid'),
      async () => {
        throw new Error('Resend unavailable');
      },
    );

    assert.equal(sent, false);
    assert.equal(logged, true);
  } finally {
    console.error = originalConsoleError;
  }
});
