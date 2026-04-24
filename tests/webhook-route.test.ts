import assert from 'node:assert/strict';
import test from 'node:test';

test('rejects webhook requests with an invalid Stripe signature', async () => {
  process.env.DATABASE_URL = 'postgres://postgres:postgres@localhost:5432/react_portfolio';
  process.env.STRIPE_SECRET_KEY = 'sk_test_123';
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test_123';

  const webhookRoute = await import('../app/api/webhooks/stripe/route');
  const request = new Request('https://example.com/api/webhooks/stripe', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'stripe-signature': 't=0,v1=invalid',
    },
    body: JSON.stringify({ id: 'evt_test', type: 'checkout.session.completed' }),
  });

  const response = await webhookRoute.POST(request);

  assert.equal(response.status, 400);
});
