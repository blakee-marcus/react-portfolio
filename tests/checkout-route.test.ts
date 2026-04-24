import assert from 'node:assert/strict';
import test from 'node:test';
import { NextRequest } from 'next/server';
import * as checkoutRoute from '../app/api/checkout/deposit/route';

function buildCheckoutRequest(formData: FormData) {
  return new NextRequest('https://example.com/api/checkout/deposit', {
    method: 'POST',
    body: formData,
  });
}

test('redirects invalid package submissions back to deposit selection', async () => {
  const formData = new FormData();
  formData.set('package', 'unknown');
  formData.set('fullName', 'Blake Marcus');
  formData.set('email', 'blake@example.com');
  formData.set('businessName', 'Studio Name');
  formData.set('acknowledgePolicy', 'on');

  const response = await checkoutRoute.POST(buildCheckoutRequest(formData));

  assert.equal(response.status, 303);
  assert.equal(response.headers.get('location'), 'https://example.com/deposit?checkout=invalid');
});

test('redirects incomplete submissions back with a validation message', async () => {
  const formData = new FormData();
  formData.set('package', 'growth');

  const response = await checkoutRoute.POST(buildCheckoutRequest(formData));

  assert.equal(response.status, 303);
  assert.equal(
    response.headers.get('location'),
    'https://example.com/deposit?package=growth&checkout=validation',
  );
});
