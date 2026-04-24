import assert from 'node:assert/strict';
import test from 'node:test';
import * as depositDomain from '../lib/deposit/domain';

test('validates the production deposit checkout fields', () => {
  const result = depositDomain.validateDepositCheckoutFields({
    packageSlug: 'growth',
    fullName: ' Blake Marcus ',
    email: ' Blake@Example.com ',
    businessName: ' Studio Name ',
    acknowledgePolicy: 'on',
  });

  assert.equal(result.success, true);

  if (!result.success) {
    return;
  }

  assert.deepEqual(result.data, {
    packageSlug: 'growth',
    fullName: 'Blake Marcus',
    email: 'Blake@Example.com',
    emailNormalized: 'blake@example.com',
    businessName: 'Studio Name',
    acknowledgePolicy: true,
  });
});

test('rejects incomplete checkout submissions', () => {
  const result = depositDomain.validateDepositCheckoutFields({
    packageSlug: 'growth',
    fullName: '',
    email: 'not-an-email',
    businessName: '',
    acknowledgePolicy: undefined,
  });

  assert.equal(result.success, false);

  if (result.success) {
    return;
  }

  assert.equal(result.errors.fullName, 'Enter your name.');
  assert.equal(result.errors.email, 'Enter a valid email address.');
  assert.equal(result.errors.businessName, 'Enter your business name.');
  assert.equal(
    result.errors.acknowledgePolicy,
    'You need to acknowledge the deposit policy.',
  );
});

test('builds, parses, hashes, and verifies the signed access token', () => {
  const token = depositDomain.createDepositAccessToken();
  const cookieValue = depositDomain.buildDepositAccessCookieValue('dep_123', token);
  const parsed = depositDomain.parseDepositAccessCookieValue(cookieValue);

  assert.deepEqual(parsed, {
    publicId: 'dep_123',
    token,
  });

  const hash = depositDomain.hashDepositAccessToken(token);

  assert.equal(depositDomain.verifyDepositAccessToken(token, hash), true);
  assert.equal(depositDomain.verifyDepositAccessToken('wrong-token', hash), false);
});

test('prefers resuming an already paid deposit before reusing pending work', () => {
  const result = depositDomain.pickDuplicateDepositAction([
    {
      id: 'pending',
      publicId: 'dep_pending',
      status: 'pending',
      stripeCheckoutSessionId: 'cs_open',
    },
    {
      id: 'paid',
      publicId: 'dep_paid',
      status: 'paid',
      stripeCheckoutSessionId: 'cs_paid',
    },
  ]);

  assert.deepEqual(result, {
    kind: 'resume_paid',
    deposit: {
      id: 'paid',
      publicId: 'dep_paid',
      status: 'paid',
      stripeCheckoutSessionId: 'cs_paid',
    },
  });
});

test('never downgrades a paid deposit when a later webhook disagrees', () => {
  const status = depositDomain.reconcileDepositStatusTransition(
    'paid',
    {
      status: 'expired',
      payment_status: 'unpaid',
    },
    'checkout.session.expired',
  );

  assert.equal(status, 'paid');
});
