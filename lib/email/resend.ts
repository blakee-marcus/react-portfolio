import { Resend } from 'resend';
import { getTransactionalEmailConfig } from '@/lib/email/config';

export function getResendClient() {
  const config = getTransactionalEmailConfig();

  if (!config) {
    return null;
  }

  return new Resend(config.apiKey);
}
