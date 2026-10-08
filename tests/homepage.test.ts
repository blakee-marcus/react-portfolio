import assert from 'node:assert/strict';
import test from 'node:test';
import { renderToStaticMarkup } from 'react-dom/server';
import HomePage from '../app/page';

function renderHomePage() {
  return renderToStaticMarkup(HomePage());
}

test('homepage is one focused sales page with one working deposit form', () => {
  const html = renderHomePage();

  assert.equal((html.match(/<form\b/g) ?? []).length, 1);
  assert.match(html, /id="packages"/);
  assert.match(html, /id="process"/);
  assert.match(html, /id="project-form"/);
  assert.match(html, /action="\/api\/checkout\/deposit"/);
  assert.match(html, /method="POST"/);
  assert.match(html, /name="package"/);
  assert.match(html, /name="fullName"/);
  assert.match(html, /name="email"/);
  assert.match(html, /name="businessName"/);
  assert.match(html, /name="acknowledgePolicy"/);
  assert.doesNotMatch(html, /type="radio"[^>]*checked/);
  assert.match(html, /Reserve your project slot/);
  assert.match(html, /mailto:hello@blakemarcus\.com/);
});

test('homepage removes unverified proof and repeated studio marketing', () => {
  const html = renderHomePage();

  assert.doesNotMatch(html, />Proof</);
  assert.doesNotMatch(html, /Studio snapshot/);
  assert.doesNotMatch(html, /See Proof/);
  assert.doesNotMatch(html, /Meet The Studio/);
});
