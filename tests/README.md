# Testing Standards

This project uses a small TDD system built around Node's native test runner, TypeScript, and the current deposit-first sales flow.

## TDD Loop

1. Red: write or update a focused test that describes the expected behavior before changing implementation code.
1. Green: make the smallest useful implementation change that passes the test.
1. Refactor: simplify names, boundaries, and duplication while keeping the test suite green.

Use this loop for new features, bug fixes, refactors, API routes, deposit behavior, email behavior, and reusable components.

## Test Placement

- Put tests in `tests/` using the `*.test.ts` suffix.
- Keep business rules testable in `lib/` modules before wiring them into routes or components.
- Prefer testing the deposit, intake access, webhook, email, and package-selection paths because those protect revenue, trust, and client confidence.
- Use route tests for server behavior that must be proven through `NextRequest` or response redirects.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run test` | Run the full automated test suite once. |
| `npm run test:watch` | Re-run tests while developing. |
| `npm run test:coverage` | Run tests with Node coverage reporting. |
| `npm run typecheck` | Verify TypeScript without emitting build output. |
| `npm run check` | Run lint, typecheck, and tests before handing off code. |
| `npm run check:deposit` | Validate production deposit readiness when real Stripe/Postgres env values are available. |

## Release Standard

Before shipping code, run `npm run check`. For changes touching Stripe, Postgres, webhooks, deposit access, intake, kickoff, or production launch readiness, also run `npm run check:deposit` against a reachable database with real environment values.
