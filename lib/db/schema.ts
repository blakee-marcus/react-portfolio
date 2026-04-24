import { desc } from 'drizzle-orm';
import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const depositStatusEnum = pgEnum('deposit_status', [
  'pending',
  'processing',
  'paid',
  'failed',
  'expired',
]);

export const deposits = pgTable(
  'deposits',
  {
    id: text('id').primaryKey(),
    publicId: text('public_id').notNull().unique(),
    status: depositStatusEnum('status').notNull().default('pending'),
    packageSlug: text('package_slug').notNull(),
    packageName: text('package_name').notNull(),
    priceId: text('price_id').notNull(),
    fullName: text('full_name').notNull(),
    email: text('email').notNull(),
    emailNormalized: text('email_normalized').notNull(),
    businessName: text('business_name').notNull(),
    amountCents: integer('amount_cents').notNull(),
    currency: text('currency').notNull(),
    stripeCheckoutSessionId: text('stripe_checkout_session_id').unique(),
    stripePaymentIntentId: text('stripe_payment_intent_id').unique(),
    stripeCustomerId: text('stripe_customer_id'),
    lastCheckoutUrl: text('last_checkout_url'),
    accessTokenHash: text('access_token_hash').notNull(),
    policyAcknowledgedAt: timestamp('policy_acknowledged_at', { withTimezone: true }).notNull(),
    paidAt: timestamp('paid_at', { withTimezone: true }),
    failedAt: timestamp('failed_at', { withTimezone: true }),
    expiredAt: timestamp('expired_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index('deposits_email_package_created_idx').on(
      table.emailNormalized,
      table.packageSlug,
      desc(table.createdAt),
    ),
    index('deposits_status_idx').on(table.status),
  ],
);

export const stripeWebhookEvents = pgTable('stripe_webhook_events', {
  eventId: text('event_id').primaryKey(),
  eventType: text('event_type').notNull(),
  checkoutSessionId: text('checkout_session_id'),
  livemode: boolean('livemode').notNull().default(false),
  processedAt: timestamp('processed_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});

export type DepositRecord = typeof deposits.$inferSelect;
export type NewDepositRecord = typeof deposits.$inferInsert;
