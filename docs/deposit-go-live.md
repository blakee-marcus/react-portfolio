# Deposit Go-Live Runbook

This project uses hosted Stripe Checkout, Drizzle, and Postgres for the production deposit flow.

## 1. Vercel Project Setup

1. Link the project to Vercel.
1. Install the Stripe integration for the Vercel project:

```bash
vercel integration add stripe
```

1. Confirm Vercel has the server-side secrets needed by the app:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
1. Add the repo-specific env vars Vercel does not create for you:
   - `DATABASE_URL`
   - `STRIPE_DEPOSIT_PRICE_ID_ESSENTIALS`
   - `STRIPE_DEPOSIT_PRICE_ID_GROWTH`
   - `STRIPE_DEPOSIT_PRICE_ID_FULL_BRAND`
   - `STRIPE_DEPOSIT_AUTOMATIC_TAX=false`

## 2. Database

1. Provision managed Postgres.
1. Set `DATABASE_URL` for the target Vercel environment.
1. Apply the schema before sending traffic to the flow:

```bash
npm run db:push
```

1. Verify the expected database objects exist:
   - `deposits`
   - `stripe_webhook_events`
   - `deposit_status`

## 3. Stripe Dashboard

1. Stay in Stripe test mode until end-to-end verification is complete.
1. Create three Stripe Prices at `$150`:
   - Essentials deposit
   - Growth deposit
   - Full Brand Build deposit
1. Copy each `price_...` id into the matching env var.
1. Register the webhook endpoint:
   - `https://<your-domain>/api/webhooks/stripe`
1. Enable customer email receipts.
1. Confirm the live-mode business profile, payout bank, and statement descriptor are complete before switching to live mode.

## 4. Launch Verification

Run the repo-side readiness check once env vars are present:

```bash
npm run check:deposit
```

Then verify the hosted flow in Stripe test mode:

1. Submit a valid deposit from `/deposit?package=growth`.
1. Confirm Checkout opens with the expected package price.
1. Complete payment with a test card.
1. Confirm the return path goes through `/start/access/[publicId]` and lands on `/start/confirmation`.
1. Confirm `/start/intake`, `/start/kickoff`, and `/start/onboarding` require the signed access cookie.
1. Replay the same webhook event and confirm fulfillment is still idempotent.
1. Cancel Checkout and confirm the app returns to `/deposit` with the expected message.

## 5. Live Smoke Test

After all test-mode checks pass:

1. Switch to live Stripe price ids and live secrets in Vercel.
1. Submit one real low-risk deposit.
1. Confirm:
   - the deposit record is created in Postgres
   - Stripe sends the receipt
   - webhook delivery succeeds
   - the gated onboarding pages unlock correctly
1. Review Stripe event logs for successful delivery of:
   - `checkout.session.completed`
   - `checkout.session.async_payment_succeeded` when applicable
   - `checkout.session.expired` and `checkout.session.async_payment_failed` for edge-case handling
