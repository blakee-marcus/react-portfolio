import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const rootDir = process.cwd();

function readText(relativePath: string) {
  return readFileSync(path.join(rootDir, relativePath), 'utf8');
}

function readPackageJson() {
  return JSON.parse(readText('package.json')) as {
    scripts?: Record<string, string>;
  };
}

test('exposes the local TDD command set', () => {
  const scripts = readPackageJson().scripts ?? {};

  assert.equal(scripts.test, 'node --import tsx --test tests/**/*.test.ts');
  assert.equal(scripts['test:watch'], 'node --watch --import tsx --test tests/**/*.test.ts');
  assert.equal(
    scripts['test:coverage'],
    'node --import tsx --experimental-test-coverage --test tests/**/*.test.ts',
  );
  assert.equal(scripts.typecheck, 'tsc --noEmit');
  assert.equal(scripts.check, 'npm run lint && npm run typecheck && npm run test');
});

test('keeps CI wired to the required quality gates', () => {
  const workflowPath = '.github/workflows/ci.yml';

  assert.equal(existsSync(path.join(rootDir, workflowPath)), true);

  const workflow = readText(workflowPath);

  for (const command of [
    'npm ci',
    'npm audit --omit=dev --audit-level=high',
    'npm run lint',
    'npm run typecheck',
    'npm run test',
    'npm run build',
    'npm run check:deposit',
  ]) {
    assert.match(workflow, new RegExp(command.replaceAll(' ', '\\s+')));
  }

  assert.match(workflow, /permissions:\s*\n\s*contents:\s*read/);
  assert.match(workflow, /concurrency:/);
  assert.match(workflow, /workflow_dispatch:/);
  assert.match(workflow, /NEXT_TELEMETRY_DISABLED/);
  assert.match(workflow, /deposit-readiness:/);
  assert.match(workflow, /github\.event_name != 'pull_request'/);
  assert.match(workflow, /DATABASE_URL/);
  assert.match(workflow, /STRIPE_SECRET_KEY/);
  assert.match(workflow, /STRIPE_WEBHOOK_SECRET/);
  assert.match(workflow, /RESEND_API_KEY/);
});

test('documents the expected red-green-refactor workflow', () => {
  const guidePath = 'tests/README.md';

  assert.equal(existsSync(path.join(rootDir, guidePath)), true);

  const guide = readText(guidePath);

  for (const phrase of [
    'Red',
    'Green',
    'Refactor',
    'deposit',
    'npm run test:coverage',
    'npm run check',
  ]) {
    assert.match(guide, new RegExp(phrase, 'i'));
  }
});
