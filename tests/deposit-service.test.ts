import assert from 'node:assert/strict';
import test from 'node:test';
import { buildCheckoutSuccessUrl } from '../lib/deposit/service';

test('keeps the Stripe Checkout session placeholder literal in the success URL', () => {
  const url = buildCheckoutSuccessUrl(
    'https://example.com',
    'dep_123',
    'access_token_123',
  );

  assert.equal(
    url,
    'https://example.com/start/access/dep_123?token=access_token_123&session_id={CHECKOUT_SESSION_ID}',
  );
  assert.equal(url.includes('%7BCHECKOUT_SESSION_ID%7D'), false);
});
