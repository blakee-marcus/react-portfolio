import assert from 'node:assert/strict';
import test from 'node:test';
import * as emailConfig from '../lib/email/config';

const originalEnv = {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  STUDIO_EMAIL_FROM: process.env.STUDIO_EMAIL_FROM,
  STUDIO_EMAIL_REPLY_TO: process.env.STUDIO_EMAIL_REPLY_TO,
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

test('treats placeholder transactional email env values as missing or defaulted', () => {
  process.env.RESEND_API_KEY = 're_replace_me';
  process.env.STUDIO_EMAIL_FROM = 'replace_me';
  process.env.STUDIO_EMAIL_REPLY_TO = 'replace_me@example.com';

  assert.equal(emailConfig.getResendApiKey(), null);
  assert.equal(emailConfig.getStudioEmailFrom(), emailConfig.defaultStudioEmailFrom);
  assert.equal(emailConfig.getStudioEmailReplyTo(), emailConfig.defaultStudioEmailReplyTo);
  assert.deepEqual(emailConfig.getMissingTransactionalEmailEnvVars(), ['RESEND_API_KEY']);
  assert.equal(emailConfig.isTransactionalEmailConfigured(), false);
  assert.equal(emailConfig.getTransactionalEmailConfig(), null);
});

test('uses valid transactional email env values when present', () => {
  process.env.RESEND_API_KEY = 're_live_123';
  process.env.STUDIO_EMAIL_FROM = 'Blake Marcus Studio <hello@send.example.com>';
  process.env.STUDIO_EMAIL_REPLY_TO = 'hello@example.com';

  assert.equal(emailConfig.getResendApiKey(), 're_live_123');
  assert.equal(emailConfig.getStudioEmailFrom(), 'Blake Marcus Studio <hello@send.example.com>');
  assert.equal(emailConfig.getStudioEmailReplyTo(), 'hello@example.com');
  assert.deepEqual(emailConfig.getMissingTransactionalEmailEnvVars(), []);
  assert.equal(emailConfig.isTransactionalEmailConfigured(), true);
  assert.deepEqual(emailConfig.getTransactionalEmailConfig(), {
    apiKey: 're_live_123',
    from: 'Blake Marcus Studio <hello@send.example.com>',
    replyTo: 'hello@example.com',
  });
});

test('falls back to default sender addresses for invalid optional values', () => {
  process.env.RESEND_API_KEY = 're_live_123';
  process.env.STUDIO_EMAIL_FROM = 'not-an-email';
  process.env.STUDIO_EMAIL_REPLY_TO = 'also-not-an-email';

  assert.equal(emailConfig.getStudioEmailFrom(), emailConfig.defaultStudioEmailFrom);
  assert.equal(emailConfig.getStudioEmailReplyTo(), emailConfig.defaultStudioEmailReplyTo);
  assert.deepEqual(emailConfig.getMissingTransactionalEmailEnvVars(), []);
});
