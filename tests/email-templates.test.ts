import assert from 'node:assert/strict';
import test from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import DepositConfirmationEmail from '../emails/deposit-confirmation';
import NewPaidDepositEmail from '../emails/new-paid-deposit';

test('renders the client paid deposit confirmation template with handoff links', () => {
  const html = renderToStaticMarkup(
    createElement(DepositConfirmationEmail, {
      fullName: 'Blake Marcus',
      packageName: 'Growth',
      amountLabel: '$150.00',
      intakeFormUrl: 'https://forms.example.com/intake',
      kickoffBookingUrl: 'https://cal.example.com/kickoff',
      supportEmail: 'hello@example.com',
    }),
  );

  assert.match(html, /Your deposit is confirmed/);
  assert.match(html, /Growth/);
  assert.match(html, /\$150\.00/);
  assert.match(html, /https:\/\/forms\.example\.com\/intake/);
  assert.match(html, /https:\/\/cal\.example\.com\/kickoff/);
  assert.match(html, /hello@example\.com/);
});

test('renders the internal paid deposit notification template with client details', () => {
  const html = renderToStaticMarkup(
    createElement(NewPaidDepositEmail, {
      fullName: 'Blake Marcus',
      clientEmail: 'blake@example.com',
      businessName: 'Studio Name',
      packageName: 'Growth',
      amountLabel: '$150.00',
      publicId: 'dep_public_123',
      checkoutSessionId: 'cs_test_123',
    }),
  );

  assert.match(html, /A new project deposit came in/);
  assert.match(html, /Blake Marcus/);
  assert.match(html, /blake@example\.com/);
  assert.match(html, /Studio Name/);
  assert.match(html, /dep_public_123/);
  assert.match(html, /cs_test_123/);
});
