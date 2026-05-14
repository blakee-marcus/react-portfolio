# Blake Marcus Studio Client Onboarding System

This is the operating system for moving a paid client from deposit to kickoff, production, launch, and optional care.

The goal is simple:

> A client should always know what just happened, what happens next, what Blake needs from them, and when the project moves forward.

---

## Onboarding Promise

Blake Marcus Studio should feel:

- Calm
- Clear
- Premium
- Human
- Organized
- Direct
- Easy to trust

Clients should not have to chase next steps, decode agency jargon, or wonder if they did something wrong.

---

## Client Journey

| Stage | Client Goal | Studio Goal | Primary Asset |
| --- | --- | --- | --- |
| Deposit paid | Know payment worked and next step is clear | Confirm package/payment and move client into intake | Confirmation page + deposit email |
| Intake | Share business, content, goals, and assets | Gather context before kickoff | Intake questionnaire |
| Kickoff | Align scope, timeline, and decisions | Confirm working plan and remaining balance | Kickoff agenda |
| Prep | Provide content/assets without overwhelm | Remove production blockers | Client content checklist |
| Build | Give focused feedback at checkpoints | Keep momentum and avoid scope drift | Status/update templates |
| Launch | Approve final QA and go live confidently | Launch safely and hand off clearly | Launch handoff checklist |
| Care | Decide on ongoing support | Convert good-fit clients to recurring support | Care plan transition email |

---

## Source Files

Use these docs as the client onboarding toolkit:

- Intake questionnaire: [`client-intake-questionnaire.md`](./client-intake-questionnaire.md)
- Kickoff agenda: [`client-kickoff-agenda.md`](./client-kickoff-agenda.md)
- Client content checklist: [`client-content-checklist.md`](./client-content-checklist.md)
- Launch handoff checklist: [`client-launch-handoff-checklist.md`](./client-launch-handoff-checklist.md)
- Client email templates: [`client-email-templates.md`](./client-email-templates.md)

Related strategy:

- Client Success / Onboarding Agent: [`client-success-onboarding-agent.md`](./client-success-onboarding-agent.md)
- Studio Command Center: [`studio-command-center.md`](./studio-command-center.md)

---

## Stage 1: Deposit Confirmation

### Trigger

Client pays the $150 deposit through Stripe Checkout.

### Client should know

- Payment worked.
- The deposit applies to the total project fee.
- Their package is recorded.
- The next step is intake.
- Kickoff gets booked after or alongside intake.
- They can reply/contact support if links fail.

### Assets

- `/start/confirmation`
- `emails/deposit-confirmation.tsx`
- `INTAKE_FORM_URL`
- `KICKOFF_BOOKING_URL`

### Improvement notes

- Keep one primary CTA: complete intake.
- Kickoff can be secondary, but intake should come first.
- Confirmation should reassure the client that the project is active, not merely paid.

---

## Stage 2: Intake

### Trigger

Client opens the intake form after deposit.

### Client should know

- This form prevents messy back-and-forth.
- They do not need perfect answers.
- Useful links, screenshots, and rough notes are welcome.
- The form should take roughly 20–35 minutes depending on readiness.

### Studio should collect

- Contact and business basics
- Package and project context
- Services/offers
- Audience and decision-makers
- Current website/social links
- Goals and success criteria
- Required pages
- Copy/content status
- Brand assets and preferences
- Proof/testimonials
- Technical/integration needs
- Timeline constraints
- Care plan interest

Detailed questions: [`client-intake-questionnaire.md`](./client-intake-questionnaire.md)

---

## Stage 3: Kickoff

### Trigger

Client completes intake and books kickoff.

### Client should know

- Kickoff confirms the working plan before production.
- Scope, timeline, page priorities, and remaining balance are confirmed.
- This is not a vague discovery call; it is the bridge into production.

### Studio should confirm

- Package and scope
- Page list
- Primary conversion goal
- Key audience
- Content responsibilities
- Asset gaps
- Review checkpoints
- Timeline
- Remaining payment expectations
- Communication rhythm
- Launch target

Detailed agenda: [`client-kickoff-agenda.md`](./client-kickoff-agenda.md)

---

## Stage 4: Content + Asset Prep

### Trigger

After kickoff, before production or during early production.

### Client should know

- Exactly what content/assets are needed.
- What can be rough versus final.
- What happens if something is missing.
- Where to send/upload items.

### Studio should collect

- Logo files
- Brand colors/fonts if available
- Photos/headshots
- Service descriptions
- Testimonials/reviews
- FAQs
- Legal/contact details
- Booking/contact links
- Domain/DNS access when needed

Detailed checklist: [`client-content-checklist.md`](./client-content-checklist.md)

---

## Stage 5: Production + Reviews

### Trigger

Scope is confirmed and production starts.

### Client should know

- When they will see work.
- What kind of feedback is useful.
- How many review rounds are included.
- What counts as a scope change.
- When feedback is due.

### Recommended review rhythm

| Package | Suggested Review Points |
| --- | --- |
| Essentials | Structure/copy direction → final page review → launch QA |
| Growth | Sitemap/copy direction → homepage direction → core pages review → launch QA |
| Full Brand Build | Strategy/structure → visual direction → page build review → polish review → launch QA |

### Feedback guidance

Ask clients to focus feedback on:

- Accuracy
- Missing information
- Trust concerns
- Offer clarity
- Priority changes
- Photos/assets that feel off

Discourage vague feedback like:

- “Make it pop”
- “Can we try a totally different vibe?” after direction approval
- Adding new pages/features after scope confirmation without discussing scope

---

## Stage 6: Launch Handoff

### Trigger

Site is approved for launch or ready for final QA.

### Client should know

- What has been checked.
- What they need to approve.
- What happens on launch day.
- What to expect after launch.
- How to request updates.

Detailed checklist: [`client-launch-handoff-checklist.md`](./client-launch-handoff-checklist.md)

---

## Stage 7: Care Plan Transition

### Trigger

After successful launch.

### Client should know

- The site is live.
- A website still needs maintenance, updates, and small improvements.
- Care is optional but recommended for clients who want Blake to remain the trusted site partner.

### Care plan should be offered when

- Client values ongoing help.
- Site needs periodic content updates.
- Client does not want to manage technical details.
- Launch went well and trust is high.

Use email template: [`client-email-templates.md`](./client-email-templates.md)

---

## Internal Rules

1. **One clear next action per client message.**
2. **Never leave a client wondering what happens next.**
3. **Do not begin production without confirmed scope, content status, and timeline.**
4. **Do not let missing content silently delay the project. Name the blocker clearly.**
5. **Do not surprise clients with scope changes. Explain them early.**
6. **Keep the language warm, direct, and practical.**

---

## Current Implementation Tasks

- [ ] Build or connect the real external intake form using `client-intake-questionnaire.md`.
- [ ] Confirm `INTAKE_FORM_URL` points to the live intake form.
- [ ] Confirm `KICKOFF_BOOKING_URL` points to the live scheduling page.
- [ ] Review `/start/confirmation`, `/start/intake`, `/start/kickoff`, and `/start/onboarding` against this system.
- [ ] Update deposit confirmation email if the intake/kickoff flow changes.
- [ ] Add a client prep checklist link to the onboarding flow if useful.
- [ ] Create a private client project tracker once the first paid client arrives.
