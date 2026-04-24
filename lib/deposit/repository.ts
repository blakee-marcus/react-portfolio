import { and, desc, eq } from 'drizzle-orm';
import type { DepositRecord, NewDepositRecord } from '@/lib/db/schema';
import { deposits, stripeWebhookEvents } from '@/lib/db/schema';
import { getDb } from '@/lib/db/client';
import type { PackageKey } from '@/lib/site-content';

export function isDatabaseConfigured() {
  return Boolean(getDb());
}

export function getDbOrThrow() {
  const db = getDb();

  if (!db) {
    throw new Error('DATABASE_URL is not configured.');
  }

  return db;
}

export async function listDepositsByEmailAndPackage(emailNormalized: string, packageSlug: PackageKey) {
  const db = getDbOrThrow();

  return db
    .select()
    .from(deposits)
    .where(and(eq(deposits.emailNormalized, emailNormalized), eq(deposits.packageSlug, packageSlug)))
    .orderBy(desc(deposits.createdAt))
    .limit(10);
}

export async function getDepositByPublicId(publicId: string) {
  const db = getDbOrThrow();
  const [deposit] = await db
    .select()
    .from(deposits)
    .where(eq(deposits.publicId, publicId))
    .limit(1);

  return deposit ?? null;
}

export async function getDepositByCheckoutSessionId(sessionId: string) {
  const db = getDbOrThrow();
  const [deposit] = await db
    .select()
    .from(deposits)
    .where(eq(deposits.stripeCheckoutSessionId, sessionId))
    .limit(1);

  return deposit ?? null;
}

export async function createDepositRecord(input: NewDepositRecord) {
  const db = getDbOrThrow();
  const [deposit] = await db.insert(deposits).values(input).returning();

  return deposit;
}

export async function updateDepositRecord(
  id: string,
  patch: Partial<NewDepositRecord>,
) {
  const db = getDbOrThrow();
  const [deposit] = await db
    .update(deposits)
    .set({
      ...patch,
      updatedAt: new Date(),
    })
    .where(eq(deposits.id, id))
    .returning();

  return deposit ?? null;
}

export async function recordStripeWebhookEvent(input: {
  eventId: string;
  eventType: string;
  checkoutSessionId?: string | null;
  livemode: boolean;
}) {
  const db = getDbOrThrow();
  const inserted = await db
    .insert(stripeWebhookEvents)
    .values({
      eventId: input.eventId,
      eventType: input.eventType,
      checkoutSessionId: input.checkoutSessionId ?? null,
      livemode: input.livemode,
    })
    .onConflictDoNothing({
      target: stripeWebhookEvents.eventId,
    })
    .returning({
      eventId: stripeWebhookEvents.eventId,
    });

  return inserted.length > 0;
}

export async function markStripeWebhookEventProcessed(eventId: string) {
  const db = getDbOrThrow();
  await db
    .update(stripeWebhookEvents)
    .set({
      processedAt: new Date(),
    })
    .where(eq(stripeWebhookEvents.eventId, eventId));
}

export type StoredDeposit = DepositRecord;
