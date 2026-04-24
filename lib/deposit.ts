export const depositAmountInCents = 15_000;
export const depositCurrency = 'usd';
export const depositAccessCookieName = 'studio_deposit_access';
export const depositAccessCookiePath = '/start';
export const depositAccessMaxAgeInSeconds = 60 * 60 * 24 * 30;
export const depositAutomaticTaxEnabled = process.env.STRIPE_DEPOSIT_AUTOMATIC_TAX === 'true';
export const requiredDepositEnvKeys = [
  'DATABASE_URL',
  'STRIPE_SECRET_KEY',
  'STRIPE_WEBHOOK_SECRET',
  'STRIPE_DEPOSIT_PRICE_ID_ESSENTIALS',
  'STRIPE_DEPOSIT_PRICE_ID_GROWTH',
  'STRIPE_DEPOSIT_PRICE_ID_FULL_BRAND',
  'INTAKE_FORM_URL',
  'KICKOFF_BOOKING_URL',
  'STUDIO_SUPPORT_EMAIL',
] as const;

type RequiredDepositEnvKey = (typeof requiredDepositEnvKeys)[number];
const supportEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const depositAmountLabel = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: depositCurrency,
  maximumFractionDigits: 0,
}).format(depositAmountInCents / 100);

export function formatDepositAmount(amountInCents = depositAmountInCents) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: depositCurrency,
  }).format(amountInCents / 100);
}

function getConfiguredEnvValue(key: string) {
  const value = process.env[key]?.trim();

  if (!value || value.includes('replace_me')) {
    return null;
  }

  return value;
}

function getConfiguredExternalUrl(key: string) {
  const value = getConfiguredEnvValue(key);

  if (!value) {
    return null;
  }

  try {
    const url = new URL(value);

    if (url.protocol !== 'https:' && url.protocol !== 'http:') {
      return null;
    }

    return url.toString().replace(/\/$/, '');
  } catch {
    return null;
  }
}

export function getStripeSecretKey() {
  const value = getConfiguredEnvValue('STRIPE_SECRET_KEY');

  return value && value.startsWith('sk_') ? value : null;
}

export function getStripeWebhookSecret() {
  const value = getConfiguredEnvValue('STRIPE_WEBHOOK_SECRET');

  return value && value.startsWith('whsec_') ? value : null;
}

export function getDatabaseUrl() {
  return getConfiguredEnvValue('DATABASE_URL');
}

export function getDepositPriceId(packageSlug: 'essentials' | 'growth' | 'full-brand') {
  const priceMap = {
    essentials: getConfiguredEnvValue('STRIPE_DEPOSIT_PRICE_ID_ESSENTIALS'),
    growth: getConfiguredEnvValue('STRIPE_DEPOSIT_PRICE_ID_GROWTH'),
    'full-brand': getConfiguredEnvValue('STRIPE_DEPOSIT_PRICE_ID_FULL_BRAND'),
  } as const;
  const priceId = priceMap[packageSlug];

  return priceId && priceId.startsWith('price_') ? priceId : null;
}

export function getIntakeFormUrl() {
  return getConfiguredExternalUrl('INTAKE_FORM_URL');
}

export function getKickoffBookingUrl() {
  return getConfiguredExternalUrl('KICKOFF_BOOKING_URL');
}

export function getStudioSupportEmail() {
  const value = getConfiguredEnvValue('STUDIO_SUPPORT_EMAIL');

  return value && supportEmailPattern.test(value) ? value : null;
}

export function getStudioSupportMailtoHref(subject?: string) {
  const email = getStudioSupportEmail();

  if (!email) {
    return null;
  }

  const params = new URLSearchParams();
  const subjectValue = subject?.trim();

  if (subjectValue) {
    params.set('subject', subjectValue);
  }

  const query = params.toString();

  return `mailto:${email}${query ? `?${query}` : ''}`;
}

export function getMissingDepositEnvVars() {
  const missing: RequiredDepositEnvKey[] = [];

  if (!getDatabaseUrl()) {
    missing.push('DATABASE_URL');
  }

  if (!getStripeSecretKey()) {
    missing.push('STRIPE_SECRET_KEY');
  }

  if (!getStripeWebhookSecret()) {
    missing.push('STRIPE_WEBHOOK_SECRET');
  }

  if (!getDepositPriceId('essentials')) {
    missing.push('STRIPE_DEPOSIT_PRICE_ID_ESSENTIALS');
  }

  if (!getDepositPriceId('growth')) {
    missing.push('STRIPE_DEPOSIT_PRICE_ID_GROWTH');
  }

  if (!getDepositPriceId('full-brand')) {
    missing.push('STRIPE_DEPOSIT_PRICE_ID_FULL_BRAND');
  }

  if (!getIntakeFormUrl()) {
    missing.push('INTAKE_FORM_URL');
  }

  if (!getKickoffBookingUrl()) {
    missing.push('KICKOFF_BOOKING_URL');
  }

  if (!getStudioSupportEmail()) {
    missing.push('STUDIO_SUPPORT_EMAIL');
  }

  return missing;
}

export function isDepositSystemConfigured() {
  return getMissingDepositEnvVars().length === 0;
}
