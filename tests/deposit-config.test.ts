import assert from 'node:assert/strict';
import test from 'node:test';
import * as depositConfig from '../lib/deposit';

const originalEnv = {
  DATABASE_URL: process.env.DATABASE_URL,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  STRIPE_DEPOSIT_PRICE_ID_ESSENTIALS: process.env.STRIPE_DEPOSIT_PRICE_ID_ESSENTIALS,
  STRIPE_DEPOSIT_PRICE_ID_GROWTH: process.env.STRIPE_DEPOSIT_PRICE_ID_GROWTH,
  STRIPE_DEPOSIT_PRICE_ID_FULL_BRAND: process.env.STRIPE_DEPOSIT_PRICE_ID_FULL_BRAND,
  INTAKE_FORM_URL: process.env.INTAKE_FORM_URL,
  KICKOFF_BOOKING_URL: process.env.KICKOFF_BOOKING_URL,
  STUDIO_SUPPORT_EMAIL: process.env.STUDIO_SUPPORT_EMAIL,
};

function restoreEnv() {
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
}

test.afterEach(() => {
  restoreEnv();
});

test('treats placeholder launch env values as missing', () => {
  process.env.DATABASE_URL = 'postgres://postgres:postgres@localhost:5432/react_portfolio';
  process.env.STRIPE_SECRET_KEY = 'sk_test_replace_me';
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_replace_me';
  process.env.STRIPE_DEPOSIT_PRICE_ID_ESSENTIALS = 'price_replace_me';
  process.env.STRIPE_DEPOSIT_PRICE_ID_GROWTH = 'price_replace_me';
  process.env.STRIPE_DEPOSIT_PRICE_ID_FULL_BRAND = 'price_replace_me';
  process.env.INTAKE_FORM_URL = 'https://replace_me.example.com/intake';
  process.env.KICKOFF_BOOKING_URL = 'https://replace_me.example.com/kickoff';
  process.env.STUDIO_SUPPORT_EMAIL = 'replace_me@example.com';

  assert.equal(depositConfig.isDepositSystemConfigured(), false);
  assert.deepEqual(depositConfig.getMissingDepositEnvVars(), [
    'STRIPE_SECRET_KEY',
    'STRIPE_WEBHOOK_SECRET',
    'STRIPE_DEPOSIT_PRICE_ID_ESSENTIALS',
    'STRIPE_DEPOSIT_PRICE_ID_GROWTH',
    'STRIPE_DEPOSIT_PRICE_ID_FULL_BRAND',
    'INTAKE_FORM_URL',
    'KICKOFF_BOOKING_URL',
    'STUDIO_SUPPORT_EMAIL',
  ]);
});

test('requires external handoff configuration before the deposit flow is launch-ready', () => {
  process.env.DATABASE_URL = 'postgres://postgres:postgres@localhost:5432/react_portfolio';
  process.env.STRIPE_SECRET_KEY = 'sk_test_123';
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_123';
  process.env.STRIPE_DEPOSIT_PRICE_ID_ESSENTIALS = 'price_essentials';
  process.env.STRIPE_DEPOSIT_PRICE_ID_GROWTH = 'price_growth';
  process.env.STRIPE_DEPOSIT_PRICE_ID_FULL_BRAND = 'price_full_brand';
  delete process.env.INTAKE_FORM_URL;
  delete process.env.KICKOFF_BOOKING_URL;
  delete process.env.STUDIO_SUPPORT_EMAIL;

  assert.equal(typeof depositConfig.getIntakeFormUrl, 'function');
  assert.equal(typeof depositConfig.getKickoffBookingUrl, 'function');
  assert.equal(typeof depositConfig.getStudioSupportEmail, 'function');
  assert.equal(typeof depositConfig.getStudioSupportMailtoHref, 'function');
  assert.equal(depositConfig.getStripeSecretKey(), 'sk_test_123');
  assert.equal(depositConfig.getStripeWebhookSecret(), 'whsec_123');
  assert.equal(depositConfig.getDepositPriceId('essentials'), 'price_essentials');
  assert.equal(depositConfig.isDepositSystemConfigured(), false);
  assert.deepEqual(depositConfig.getMissingDepositEnvVars(), [
    'INTAKE_FORM_URL',
    'KICKOFF_BOOKING_URL',
    'STUDIO_SUPPORT_EMAIL',
  ]);
});

test('marks the deposit flow configured only when all required launch envs are present', () => {
  process.env.DATABASE_URL = 'postgres://postgres:postgres@localhost:5432/react_portfolio';
  process.env.STRIPE_SECRET_KEY = 'sk_live_123';
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_live_123';
  process.env.STRIPE_DEPOSIT_PRICE_ID_ESSENTIALS = 'price_live_essentials';
  process.env.STRIPE_DEPOSIT_PRICE_ID_GROWTH = 'price_live_growth';
  process.env.STRIPE_DEPOSIT_PRICE_ID_FULL_BRAND = 'price_live_full_brand';
  process.env.INTAKE_FORM_URL = ' https://forms.example.com/intake ';
  process.env.KICKOFF_BOOKING_URL = ' https://cal.example.com/blake/kickoff ';
  process.env.STUDIO_SUPPORT_EMAIL = ' hello@example.com ';

  assert.deepEqual(depositConfig.getMissingDepositEnvVars(), []);
  assert.equal(depositConfig.isDepositSystemConfigured(), true);
  assert.equal(depositConfig.getIntakeFormUrl(), 'https://forms.example.com/intake');
  assert.equal(depositConfig.getKickoffBookingUrl(), 'https://cal.example.com/blake/kickoff');
  assert.equal(depositConfig.getStudioSupportEmail(), 'hello@example.com');
  assert.equal(
    depositConfig.getStudioSupportMailtoHref('Launch support'),
    'mailto:hello@example.com?subject=Launch+support',
  );
});

test('rejects invalid external handoff values', () => {
  process.env.DATABASE_URL = 'postgres://postgres:postgres@localhost:5432/react_portfolio';
  process.env.STRIPE_SECRET_KEY = 'sk_live_123';
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_live_123';
  process.env.STRIPE_DEPOSIT_PRICE_ID_ESSENTIALS = 'price_live_essentials';
  process.env.STRIPE_DEPOSIT_PRICE_ID_GROWTH = 'price_live_growth';
  process.env.STRIPE_DEPOSIT_PRICE_ID_FULL_BRAND = 'price_live_full_brand';
  process.env.INTAKE_FORM_URL = 'not-a-url';
  process.env.KICKOFF_BOOKING_URL = 'ftp://calendar.example.com/kickoff';
  process.env.STUDIO_SUPPORT_EMAIL = 'not-an-email';

  assert.equal(depositConfig.getIntakeFormUrl(), null);
  assert.equal(depositConfig.getKickoffBookingUrl(), null);
  assert.equal(depositConfig.getStudioSupportEmail(), null);
  assert.equal(depositConfig.getStudioSupportMailtoHref(), null);
  assert.deepEqual(depositConfig.getMissingDepositEnvVars(), [
    'INTAKE_FORM_URL',
    'KICKOFF_BOOKING_URL',
    'STUDIO_SUPPORT_EMAIL',
  ]);
});
