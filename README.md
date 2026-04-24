# Blake Marcus Studio

Production website for Blake Marcus Studio, a Las Vegas based web design studio serving founder-led service businesses. The application combines a public marketing site, package selection, Stripe-backed deposit checkout, gated onboarding access, SEO metadata, dynamic Open Graph images, and launch operations documentation.

## Live Site

- Production: [blakemarcus.com](https://blakemarcus.com)
- Local development: [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework:** Next.js 16 App Router, React 19, TypeScript
- **Styling:** Tailwind CSS 4, Radix UI Slot, Framer Motion, Lucide icons
- **Data:** Postgres, Drizzle ORM, `postgres`
- **Payments:** Stripe Checkout, Stripe webhooks
- **Email:** Resend transactional email, React Email templates, Google Workspace inboxes
- **Quality:** ESLint 9, Next.js lint config, Node.js test runner with `tsx`
- **Deployment:** Vercel

## Key Features

- Marketing pages for services, process, proof, studio positioning, support, and legal content.
- Package-driven deposit funnel for Essentials, Growth, and Full Brand Build offers.
- Stripe Checkout integration for the $150 project deposit.
- Idempotent Stripe webhook processing for completed, async, failed, and expired checkout sessions.
- Postgres-backed deposit records and webhook event tracking through Drizzle.
- Signed `HttpOnly` access cookie that unlocks intake, kickoff, and onboarding pages after payment.
- Best-effort Resend emails for paid deposit confirmations and internal studio notifications.
- Centralized SEO helpers, schema.org structured data, sitemap, robots configuration, and dynamic OG image generation.
- Deposit launch readiness script and production go-live runbook.

## Architecture

The app uses the Next.js App Router. Public pages live in `app/`, shared site UI lives in `components/site/`, low-level UI primitives live in `components/ui/`, and business logic lives in `lib/`.

The deposit system is split by responsibility:

- `lib/deposit/domain.ts` validates form input, package selection, token behavior, and deposit state transitions.
- `lib/deposit/service.ts` coordinates Stripe Checkout, deposit creation, fulfillment, and access finalization.
- `lib/deposit/repository.ts` persists deposits and Stripe webhook events.
- `lib/email/deposit.tsx` sends paid deposit email notifications without blocking fulfillment.
- `lib/db/schema.ts` defines the Drizzle schema for deposits and webhook processing.
- `app/api/checkout/deposit/route.ts` starts checkout sessions from form submissions.
- `app/api/webhooks/stripe/route.ts` verifies Stripe signatures and processes supported webhook events.

## Getting Started

### Prerequisites

- Node.js `>=22.0.0 <25.0.0`
- npm
- Postgres database for the deposit flow
- Stripe account and Stripe CLI for local webhook testing

### Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Copy `.env.example` to `.env.local` and replace placeholder values before testing the full deposit flow.

| Variable | Required | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | Yes | Postgres connection string used by Drizzle and deposit persistence. |
| `STRIPE_SECRET_KEY` | Yes | Stripe secret key used to create Checkout sessions and retrieve sessions. |
| `STRIPE_WEBHOOK_SECRET` | Yes | Stripe webhook signing secret used to verify incoming webhook requests. |
| `STRIPE_DEPOSIT_PRICE_ID_ESSENTIALS` | Yes | Stripe Price ID for the Essentials deposit. |
| `STRIPE_DEPOSIT_PRICE_ID_GROWTH` | Yes | Stripe Price ID for the Growth deposit. |
| `STRIPE_DEPOSIT_PRICE_ID_FULL_BRAND` | Yes | Stripe Price ID for the Full Brand Build deposit. |
| `STRIPE_DEPOSIT_AUTOMATIC_TAX` | No | Set to `true` to enable Stripe automatic tax for deposit checkout. Defaults to disabled. |
| `INTAKE_FORM_URL` | Yes | External intake form opened after a paid deposit. |
| `KICKOFF_BOOKING_URL` | Yes | External kickoff scheduler opened after intake. |
| `STUDIO_SUPPORT_EMAIL` | Yes | Human support inbox and internal paid-deposit notification recipient. |
| `RESEND_API_KEY` | No | Resend server-side API key used for transactional studio emails. Deposits still work if it is missing. |
| `STUDIO_EMAIL_FROM` | No | Verified Resend sender. Defaults to `Blake Marcus Studio <hello@send.blakemarcus.com>`. |
| `STUDIO_EMAIL_REPLY_TO` | No | Human reply-to inbox. Defaults to `hello@blakemarcus.com`. |
| `NEXT_PUBLIC_SITE_URL` | No | Public site URL used by readiness checks when available. |
| `SITE_URL` | No | Server-side site URL fallback used by readiness checks. |

The app treats placeholder values containing `replace_me` as missing for launch readiness.

Use Google Workspace for `hello@blakemarcus.com` and any personal studio inboxes. Verify
`send.blakemarcus.com` in Resend for app-generated transactional email so Resend DNS records do
not interfere with Google Workspace MX records on the root domain.

## Database

The Drizzle schema is defined in `lib/db/schema.ts`, and migrations are written to `db/migrations`.

Apply the schema with Drizzle:

```bash
npm run db:push
```

Or apply the existing migration manually:

```bash
psql "$DATABASE_URL" -f db/migrations/0000_deposit_system.sql
```

Generate new migrations after schema changes:

```bash
npm run db:generate
```

## Stripe Deposit Flow

1. Create three `$150` Stripe Prices for the package deposits.
1. Add each `price_...` ID to `.env.local`.
1. Apply the database schema.
1. Start the development server:

```bash
npm run dev
```

1. Forward Stripe webhooks locally:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

1. Open `/deposit?package=growth`, submit the form, and complete Checkout with a Stripe test card.
1. Confirm Stripe returns through `/start/access/[publicId]`, finalizes the deposit, sends best-effort studio emails when Resend is configured, sets the signed access cookie, and redirects to `/start/confirmation`.

For production launch details, use the [deposit go-live runbook](docs/deposit-go-live.md).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Build the production application. |
| `npm run start` | Start the built production server. |
| `npm run lint` | Run ESLint. |
| `npm run test` | Run the Node.js test suite. |
| `npm run check:deposit` | Validate deposit launch configuration and database readiness. |
| `npm run db:generate` | Generate Drizzle migrations from schema changes. |
| `npm run db:push` | Push the Drizzle schema to the configured database. |

## Verification

Run automated tests before shipping changes:

```bash
npm run test
```

Run linting for code changes:

```bash
npm run lint
```

Use the deposit readiness check only after real environment values and a reachable database are configured:

```bash
npm run check:deposit
```

Manual deposit checks:

- Invalid or incomplete form submissions redirect back to `/deposit` with the expected message.
- Successful card payments reach `/start/confirmation`.
- Paid deposits unlock `/start/intake`, `/start/kickoff`, and `/start/onboarding`.
- Paid deposits send the client confirmation and studio notification when `RESEND_API_KEY` and the Resend sender domain are configured.
- Replayed Stripe webhook events do not duplicate fulfillment.
- Protected `/start/*` pages redirect to `/deposit` without the signed access cookie.

## Deployment Notes

The app is configured for Vercel deployment. Set the required environment variables in the target Vercel environment before enabling the deposit flow. Register the Stripe webhook endpoint as:

```text
https://<your-domain>/api/webhooks/stripe
```

Security headers are configured in `vercel.json`. Production launch steps, Stripe dashboard checks, database verification, and live smoke-test guidance are documented in [docs/deposit-go-live.md](docs/deposit-go-live.md).
