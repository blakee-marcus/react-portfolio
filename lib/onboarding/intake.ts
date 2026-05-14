import { eq } from 'drizzle-orm';
import { projectIntakes, type NewProjectIntakeRecord } from '@/lib/db/schema';
import { getDbOrThrow } from '@/lib/deposit/repository';
import type { StoredDeposit } from '@/lib/deposit/repository';

export type IntakeResponses = Record<string, string>;

export type IntakeFieldName =
  | 'businessSummary'
  | 'idealClient'
  | 'primaryOffer'
  | 'primaryGoal'
  | 'primaryAction'
  | 'currentWebsite'
  | 'neededPages'
  | 'copyStatus'
  | 'brandDirection'
  | 'proofAssets'
  | 'integrations'
  | 'timeline'
  | 'carePlanInterest'
  | 'additionalNotes';

const requiredFields: IntakeFieldName[] = [
  'businessSummary',
  'idealClient',
  'primaryOffer',
  'primaryGoal',
  'primaryAction',
  'neededPages',
  'copyStatus',
  'timeline',
];

const fieldLabels: Record<IntakeFieldName, string> = {
  businessSummary: 'What does your business do in plain language?',
  idealClient: 'Who is your ideal client/customer?',
  primaryOffer: 'What service or offer should the website emphasize most?',
  primaryGoal: 'What should the website help accomplish?',
  primaryAction: 'What is the main action visitors should take?',
  currentWebsite: 'Current website/social/profile links',
  neededPages: 'Pages or sections needed',
  copyStatus: 'Copy/content readiness',
  brandDirection: 'Brand direction, inspiration, and styles to avoid',
  proofAssets: 'Proof, testimonials, reviews, or client wins',
  integrations: 'Needed integrations or technical requirements',
  timeline: 'Timeline, deadlines, or availability constraints',
  carePlanInterest: 'Care plan interest after launch',
  additionalNotes: 'Anything else Blake should know before kickoff?',
};

export type IntakeValidationResult =
  | { success: true; responses: IntakeResponses }
  | { success: false; errors: Partial<Record<IntakeFieldName, string>>; responses: IntakeResponses };

function cleanMultiline(value: FormDataEntryValue | null) {
  return typeof value === 'string' ? value.trim().replace(/\r\n/g, '\n') : '';
}

export function validateIntakeFormData(formData: FormData): IntakeValidationResult {
  const responses = Object.keys(fieldLabels).reduce((acc, key) => {
    acc[key] = cleanMultiline(formData.get(key));
    return acc;
  }, {} as IntakeResponses);

  const errors: Partial<Record<IntakeFieldName, string>> = {};

  for (const field of requiredFields) {
    if (!responses[field]) {
      errors[field] = 'Please answer this before submitting intake.';
    }
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors, responses };
  }

  return { success: true, responses };
}

export function createProjectIntakeId() {
  return crypto.randomUUID();
}

export async function upsertProjectIntake(deposit: StoredDeposit, responses: IntakeResponses) {
  const db = getDbOrThrow();
  const values: NewProjectIntakeRecord = {
    id: createProjectIntakeId(),
    depositId: deposit.id,
    depositPublicId: deposit.publicId,
    packageSlug: deposit.packageSlug,
    packageName: deposit.packageName,
    fullName: deposit.fullName,
    email: deposit.email,
    businessName: deposit.businessName,
    responses,
  };

  const existing = await db
    .select()
    .from(projectIntakes)
    .where(eq(projectIntakes.depositId, deposit.id))
    .limit(1);

  if (existing[0]) {
    const [intake] = await db
      .update(projectIntakes)
      .set({
        ...values,
        id: existing[0].id,
        submittedAt: existing[0].submittedAt,
        updatedAt: new Date(),
      })
      .where(eq(projectIntakes.id, existing[0].id))
      .returning();

    return intake;
  }

  const [intake] = await db.insert(projectIntakes).values(values).returning();
  return intake;
}

export async function getProjectIntakeByDepositId(depositId: string) {
  const db = getDbOrThrow();
  const [intake] = await db
    .select()
    .from(projectIntakes)
    .where(eq(projectIntakes.depositId, depositId))
    .limit(1);

  return intake ?? null;
}

export function formatIntakeResponsesForEmail(responses: IntakeResponses) {
  return Object.entries(fieldLabels)
    .map(([key, label]) => {
      const answer = responses[key]?.trim() || '—';
      return `${label}\n${answer}`;
    })
    .join('\n\n---\n\n');
}
