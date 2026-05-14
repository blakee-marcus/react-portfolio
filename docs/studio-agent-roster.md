# Blake Marcus Studio Agent Roster

This roster defines the reusable role agents for Blake Marcus Studio.

Command center: [`studio-command-center.md`](./studio-command-center.md)
Weekly review template: [`studio-weekly-review-template.md`](./studio-weekly-review-template.md)

Use these agents to audit the site, plan weekly priorities, generate focused task lists, review changes, and delegate future sub-agent runs.

## How to Use

When asking for help, name the role you want active.

Examples:

- “Have the Conversion Copywriter review the homepage.”
- “Run the Frontend Technical Lead on the deposit flow.”
- “Ask the SEO Strategist for this week’s top 3 actions.”
- “Have the Client Success agent clean up onboarding.”
- “Let the CEO Operator prioritize the backlog.”

For bigger work, run one agent at a time or ask the CEO / Studio Operator to coordinate the roster.

---

## Core Strategy + Operations

### CEO / Studio Operator

File: [`ceo-studio-operator-agent.md`](./ceo-studio-operator-agent.md)

Owns:

- Weekly priorities
- Business focus
- Revenue targets
- Pipeline health
- Delivery capacity
- Agent coordination
- Deciding what not to do

Use when:

- The task list is too big
- Blake needs the next highest-leverage move
- A decision affects the business model, offer, or workload

---

### Offer / Pricing Strategist

File: [`offer-pricing-strategist-agent.md`](./offer-pricing-strategist-agent.md)

Owns:

- Package structure
- Pricing logic
- Scope boundaries
- Deposit strategy
- Care plan positioning
- Offer clarity

Use when:

- Adjusting packages or prices
- Clarifying what is included
- Creating new offers or support plans
- Avoiding scope creep

---

## Website + Conversion

### Conversion Copywriter

File: [`conversion-copywriter-agent.md`](./conversion-copywriter-agent.md)

Owns:

- Website copy
- CTA language
- FAQs
- Case studies
- Emails
- Outreach copy support
- Objection handling

Use when:

- Copy feels stiff, vague, or generic
- A page needs clearer conversion logic
- A case study or email needs to sound human and persuasive

---

### UX/UI Director

File: [`ux-ui-director-agent.md`](./ux-ui-director-agent.md)

Owns:

- Page structure
- Visual hierarchy
- User journey
- Conversion path
- Layout polish
- Mobile experience
- Design quality

Use when:

- Reviewing the site experience
- Improving package/start/deposit flow
- Making pages feel more premium and easier to buy from

---

### Frontend Technical Lead

File: [`frontend-technical-lead-agent.md`](./frontend-technical-lead-agent.md)

Owns:

- Next.js implementation
- Accessibility
- Performance
- Build/lint/typecheck/test gates
- Deployment health
- Technical QA
- Bug fixes

Use when:

- Vercel deploys fail
- Forms or pages break
- Mobile/accessibility/performance needs review
- Changes need technical verification

---

## Growth + Measurement

### SEO / Analytics Strategist

File: [`seo-analytics-strategist-agent.md`](./seo-analytics-strategist-agent.md)

Owns:

- SEO audits
- Analytics reviews
- Search intent
- Content opportunities
- Local SEO
- Funnel measurement
- Weekly insights

Use when:

- Planning SEO/content work
- Reviewing Vercel analytics
- Looking for growth opportunities
- Turning traffic data into next actions

---

### Local Growth / Outreach Agent

File: [`local-growth-outreach-agent.md`](./local-growth-outreach-agent.md)

Owns:

- Local lead sourcing
- Lead scoring
- Outreach scripts
- Follow-ups
- Referral asks
- Partnership ideas
- Pipeline creation

Use when:

- The studio needs qualified conversations
- Building a lead list
- Writing specific outreach to local service businesses

---

## Client Delivery

### Client Success / Onboarding Agent

File: [`client-success-onboarding-agent.md`](./client-success-onboarding-agent.md)

Owns:

- Intake flow
- Kickoff prep
- Client checklists
- Confirmation emails
- Launch handoff
- Care plan transition
- Client clarity

Use when:

- Improving what happens after deposit
- Building intake/kickoff systems
- Writing client-facing instructions
- Reducing confusion in the delivery flow

---

### Deposit Operations / Launch Manager

File: [`deposit-go-live.md`](./deposit-go-live.md)

Owns:

- Stripe Checkout readiness
- Webhooks
- Vercel env configuration
- Database readiness
- Resend transactional email
- Production smoke tests
- Deposit launch safety

Use when:

- Preparing to accept real deposits
- Testing Stripe and webhooks
- Running `npm run check:deposit`
- Deciding if the payment flow is live-ready

---

## Recommended Weekly Cadence

1. **CEO / Studio Operator** picks the top priorities.
2. **SEO / Analytics Strategist** reviews traffic and funnel signals.
3. **Local Growth / Outreach Agent** builds or follows up with leads.
4. **Conversion Copywriter** improves one sales asset.
5. **UX/UI Director** reviews one page or flow.
6. **Frontend Technical Lead** verifies changes and deploy health.
7. **Client Success / Onboarding Agent** improves one client-facing step.

Keep the weekly output small: 3 to 5 tasks, not a giant backlog.

---

## Current Best First Assignments

For blakemarcus.com right now:

1. **Frontend Technical Lead:** resolve `app/manifest.ts` intentionally and verify app icons/manifest.
2. **Deposit Operations / Launch Manager:** run full production-style deposit QA in test mode.
3. **Conversion Copywriter:** draft real case-study/proof structure for `/work`.
4. **UX/UI Director:** review homepage and start/deposit flow on mobile.
5. **Client Success / Onboarding Agent:** define intake questions and kickoff prep.
6. **SEO / Analytics Strategist:** review analytics setup and propose first SEO content targets.
7. **CEO / Studio Operator:** turn the above into a one-week execution plan.
