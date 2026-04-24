export const defaultStudioEmailFrom = 'Blake Marcus Studio <hello@send.blakemarcus.com>';
export const defaultStudioEmailReplyTo = 'hello@blakemarcus.com';

export const requiredTransactionalEmailEnvKeys = ['RESEND_API_KEY'] as const;

type RequiredTransactionalEmailEnvKey = (typeof requiredTransactionalEmailEnvKeys)[number];

const emailAddressPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getConfiguredEnvValue(key: string) {
  const value = process.env[key]?.trim();

  if (!value || value.includes('replace_me')) {
    return null;
  }

  return value;
}

function getMailboxEmail(value: string) {
  const mailboxMatch = /^.+<([^<>]+)>$/.exec(value);
  return (mailboxMatch?.[1] ?? value).trim();
}

function isValidEmailAddress(value: string) {
  return emailAddressPattern.test(value.trim());
}

function isValidMailbox(value: string) {
  return isValidEmailAddress(getMailboxEmail(value));
}

export function getResendApiKey() {
  const value = getConfiguredEnvValue('RESEND_API_KEY');

  return value && value.startsWith('re_') ? value : null;
}

export function getStudioEmailFrom() {
  const value = getConfiguredEnvValue('STUDIO_EMAIL_FROM');

  return value && isValidMailbox(value) ? value : defaultStudioEmailFrom;
}

export function getStudioEmailReplyTo() {
  const value = getConfiguredEnvValue('STUDIO_EMAIL_REPLY_TO');

  return value && isValidEmailAddress(value) ? value : defaultStudioEmailReplyTo;
}

export function getMissingTransactionalEmailEnvVars() {
  const missing: RequiredTransactionalEmailEnvKey[] = [];

  if (!getResendApiKey()) {
    missing.push('RESEND_API_KEY');
  }

  return missing;
}

export function isTransactionalEmailConfigured() {
  return getMissingTransactionalEmailEnvVars().length === 0;
}

export function getTransactionalEmailConfig() {
  const apiKey = getResendApiKey();

  if (!apiKey) {
    return null;
  }

  return {
    apiKey,
    from: getStudioEmailFrom(),
    replyTo: getStudioEmailReplyTo(),
  };
}
