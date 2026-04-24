#!/usr/bin/env node

import nextEnv from '@next/env';
import postgres from 'postgres';

const { loadEnvConfig } = nextEnv;

loadEnvConfig(process.cwd());

const requiredEnvChecks = [
  {
    key: 'DATABASE_URL',
    description: 'Managed Postgres connection string',
    validate: (value) => value.startsWith('postgres://') || value.startsWith('postgresql://'),
  },
  {
    key: 'STRIPE_SECRET_KEY',
    description: 'Stripe secret key',
    validate: (value) => value.startsWith('sk_'),
  },
  {
    key: 'STRIPE_WEBHOOK_SECRET',
    description: 'Stripe webhook signing secret',
    validate: (value) => value.startsWith('whsec_'),
  },
  {
    key: 'STRIPE_DEPOSIT_PRICE_ID_ESSENTIALS',
    description: 'Stripe Price ID for the Essentials deposit',
    validate: (value) => value.startsWith('price_'),
  },
  {
    key: 'STRIPE_DEPOSIT_PRICE_ID_GROWTH',
    description: 'Stripe Price ID for the Growth deposit',
    validate: (value) => value.startsWith('price_'),
  },
  {
    key: 'STRIPE_DEPOSIT_PRICE_ID_FULL_BRAND',
    description: 'Stripe Price ID for the Full Brand Build deposit',
    validate: (value) => value.startsWith('price_'),
  },
  {
    key: 'INTAKE_FORM_URL',
    description: 'External intake form URL',
    validate: (value) => isHttpUrl(value),
  },
  {
    key: 'KICKOFF_BOOKING_URL',
    description: 'External kickoff booking URL',
    validate: (value) => isHttpUrl(value),
  },
  {
    key: 'STUDIO_SUPPORT_EMAIL',
    description: 'Studio support inbox',
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  },
];

function getConfiguredValue(key) {
  const value = process.env[key]?.trim();

  if (!value || value.includes('replace_me')) {
    return null;
  }

  return value;
}

function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.trim()}`
      : null);

  if (!configuredUrl) {
    return null;
  }

  try {
    return new URL(configuredUrl).toString().replace(/\/$/, '');
  } catch {
    return null;
  }
}

function printLine(label, value) {
  console.log(`${label.padEnd(34)} ${value}`);
}

function formatError(error) {
  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }

  if (error && typeof error === 'object') {
    const details = [
      'code' in error && typeof error.code === 'string' ? `code=${error.code}` : null,
      'errno' in error && typeof error.errno !== 'undefined' ? `errno=${String(error.errno)}` : null,
      'name' in error && typeof error.name === 'string' ? `name=${error.name}` : null,
    ].filter(Boolean);

    if (details.length > 0) {
      return details.join(', ');
    }
  }

  return String(error);
}

let hasErrors = false;

console.log('Deposit launch readiness');
console.log('');

for (const check of requiredEnvChecks) {
  const value = getConfiguredValue(check.key);

  if (!value) {
    hasErrors = true;
    printLine(check.key, `missing (${check.description})`);
    continue;
  }

  if (!check.validate(value)) {
    hasErrors = true;
    printLine(check.key, `invalid (${check.description})`);
    continue;
  }

  printLine(check.key, 'ok');
}

printLine(
  'STRIPE_DEPOSIT_AUTOMATIC_TAX',
  process.env.STRIPE_DEPOSIT_AUTOMATIC_TAX === 'true' ? 'enabled' : 'disabled',
);

const resendApiKey = getConfiguredValue('RESEND_API_KEY');

printLine(
  'RESEND_API_KEY',
  resendApiKey
    ? resendApiKey.startsWith('re_')
      ? 'configured'
      : 'invalid optional key'
    : 'optional missing, deposit flow still works',
);
printLine(
  'STUDIO_EMAIL_FROM',
  getConfiguredValue('STUDIO_EMAIL_FROM') ?? 'Blake Marcus Studio <hello@send.blakemarcus.com>',
);
printLine(
  'STUDIO_EMAIL_REPLY_TO',
  getConfiguredValue('STUDIO_EMAIL_REPLY_TO') ?? 'hello@blakemarcus.com',
);

console.log('');

const databaseUrl = getConfiguredValue('DATABASE_URL');

if (databaseUrl) {
  let sql;

  try {
    sql = postgres(databaseUrl, {
      prepare: false,
      max: 1,
      connect_timeout: 5,
      idle_timeout: 5,
    });

    const [row] = await sql`
      select
        to_regclass('public.deposits')::text as deposits,
        to_regclass('public.stripe_webhook_events')::text as stripe_webhook_events,
        to_regtype('public.deposit_status')::text as deposit_status
    `;

    const schemaReady = Boolean(row?.deposits && row?.stripe_webhook_events && row?.deposit_status);

    printLine('database connection', 'ok');
    printLine('deposit schema', schemaReady ? 'ok' : 'missing tables or enum');

    if (!schemaReady) {
      hasErrors = true;
    }
  } catch (error) {
    hasErrors = true;
    printLine('database connection', `failed (${formatError(error)})`);
  } finally {
    await sql?.end({ timeout: 5 });
  }
}

console.log('');
console.log('Manual launch checks');

const siteUrl = getSiteUrl();

if (siteUrl) {
  printLine('expected webhook URL', `${siteUrl}/api/webhooks/stripe`);
} else {
  printLine('expected webhook URL', 'https://<your-domain>/api/webhooks/stripe');
}

printLine('Vercel Stripe integration', 'confirm installed for the target project');
printLine('Vercel Resend integration', 'confirm installed or set RESEND_API_KEY manually');
printLine('Google Workspace MX', 'keep root-domain email hosted by Google Workspace');
printLine('Resend sending domain', 'verify send.blakemarcus.com, not the root inbox domain');
printLine('Stripe live prices', 'confirm all three deposit prices exist at $150');
printLine('Stripe receipts', 'confirm customer email receipts are enabled');
printLine('Business profile & payouts', 'confirm statement descriptor, payout bank, and live-mode business profile');

console.log('');

if (hasErrors) {
  console.error('Deposit launch readiness failed.');
  process.exit(1);
}

console.log('Deposit launch readiness passed.');
