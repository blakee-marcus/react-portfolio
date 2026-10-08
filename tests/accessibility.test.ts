import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { renderToStaticMarkup } from 'react-dom/server';
import HomePage from '../app/page';

const projectRoot = process.cwd();
const globalCss = readFileSync(join(projectRoot, 'app/globals.css'), 'utf8');
const rootLayout = readFileSync(join(projectRoot, 'app/layout.tsx'), 'utf8');

function renderHomePage() {
  return renderToStaticMarkup(HomePage());
}

function cssVariable(name: string) {
  const match = globalCss.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`));
  assert.ok(match, `Expected --${name} to use a six-digit hex color`);
  return match[1];
}

function relativeLuminance(hex: string) {
  const channels = [1, 3, 5].map((offset) => Number.parseInt(hex.slice(offset, offset + 2), 16) / 255);
  const [red, green, blue] = channels.map((channel) =>
    channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  );
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrastRatio(foreground: string, background: string) {
  const values = [relativeLuminance(foreground), relativeLuminance(background)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

function collectTsxFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? collectTsxFiles(path) : entry.name.endsWith('.tsx') ? [path] : [];
  });
}

test('site shell provides keyboard users a skip link and named landmarks', () => {
  assert.match(rootLayout, /<html lang='en-US'/);
  assert.match(rootLayout, /href='#main-content'[^>]*>[\s\S]*?Skip to main content[\s\S]*?<\/a>/);
  assert.match(rootLayout, /<main[^>]+id='main-content'[^>]+tabIndex=\{-1\}/);
  assert.match(rootLayout, /<SiteHeader \/>/);
  assert.match(rootLayout, /<nav aria-label='Footer navigation'/);
});

test('the primary project form has an accessible name', () => {
  const html = renderHomePage();

  assert.match(html, /<h2[^>]+id="project-form-heading"/);
  assert.match(html, /<form[^>]+aria-labelledby="project-form-heading"/);
});

test('every multi-step form exposes a concise accessible name', () => {
  const deposit = readFileSync(join(projectRoot, 'app/deposit/page.tsx'), 'utf8');
  const intake = readFileSync(join(projectRoot, 'app/start/intake/page.tsx'), 'utf8');

  assert.match(deposit, /<form[^>]+aria-label='Project deposit details'/);
  assert.match(intake, /<form[^>]+aria-label='Project intake'/);
});

test('package links select and focus the matching form control', async () => {
  const packageChoiceModule = (await import('../components/site/package-choice-link')) as Record<string, unknown>;
  const activatePackageChoice = packageChoiceModule.activatePackageChoice as
    | ((input: { click(): void; focus(): void } | null, schedule: (callback: () => void) => void) => void)
    | undefined;
  const events: string[] = [];

  assert.equal(typeof activatePackageChoice, 'function');
  activatePackageChoice?.(
    {
      click: () => events.push('click'),
      focus: () => events.push('focus'),
    },
    (callback) => callback()
  );
  assert.deepEqual(events, ['click', 'focus']);
});

test('muted and placeholder text colors meet WCAG AA contrast', () => {
  const backgrounds = [cssVariable('background'), cssVariable('surface')];

  for (const foreground of [cssVariable('muted'), cssVariable('input-placeholder')]) {
    for (const background of backgrounds) {
      assert.ok(
        contrastRatio(foreground, background) >= 4.5,
        `${foreground} must reach 4.5:1 against ${background}`
      );
    }
  }
});

test('brand tokens use the approved Kukui Leaf and Pacific Ink palette', () => {
  assert.equal(cssVariable('primary'), '#35543D');
  assert.equal(cssVariable('primary-hover'), '#294432');
  assert.equal(cssVariable('primary-active'), '#203629');
  assert.equal(cssVariable('primary-soft'), '#E9EEE9');
  assert.equal(cssVariable('accent'), '#075E63');
  assert.equal(cssVariable('accent-hover'), '#064F53');
  assert.equal(cssVariable('accent-soft'), '#E4F0EF');
  assert.equal(cssVariable('focus-color'), '#35543D');
  assert.ok(contrastRatio(cssVariable('primary'), '#FFFFFF') >= 4.5);
  assert.ok(contrastRatio(cssVariable('accent'), '#FFFFFF') >= 4.5);
});

test('public interface no longer contains the retired bright-blue palette', () => {
  const files = [
    ...collectTsxFiles(join(projectRoot, 'app')),
    ...collectTsxFiles(join(projectRoot, 'components')),
  ];
  const retiredColors = /#(?:1748e8|103bc7|0d30a4|e8edff|9bb8ff)/i;

  assert.doesNotMatch(globalCss, retiredColors);
  for (const file of files) {
    assert.doesNotMatch(readFileSync(file, 'utf8'), retiredColors, file);
  }
});

test('keyboard focus uses a solid high-contrast indicator', () => {
  assert.match(globalCss, /:focus-visible\s*\{[^}]*outline:\s*3px solid var\(--focus-color\)/);
  assert.match(globalCss, /outline-offset:\s*3px/);
});

test('interface labels do not use text smaller than 12 pixels', () => {
  const files = [
    ...collectTsxFiles(join(projectRoot, 'app')),
    ...collectTsxFiles(join(projectRoot, 'components')),
  ];

  for (const file of files) {
    const source = readFileSync(file, 'utf8');
    assert.doesNotMatch(source, /text-\[(?:10|11)px\]/, file);
  }
});

test('server-rendered checkout and intake feedback exposes status semantics', () => {
  const deposit = readFileSync(join(projectRoot, 'app/deposit/page.tsx'), 'utf8');
  const intake = readFileSync(join(projectRoot, 'app/start/intake/page.tsx'), 'utf8');
  const confirmation = readFileSync(join(projectRoot, 'app/start/confirmation/page.tsx'), 'utf8');
  const kickoff = readFileSync(join(projectRoot, 'app/start/kickoff/page.tsx'), 'utf8');

  assert.match(deposit, /role='alert'/);
  assert.match(intake, /role='alert'/);
  assert.match(confirmation, /role='status'/);
  assert.match(kickoff, /role='status'/);
});
