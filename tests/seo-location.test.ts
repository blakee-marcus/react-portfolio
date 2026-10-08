import assert from 'node:assert/strict';
import test from 'node:test';
import { metadata as homeMetadata } from '../app/page';
import { metadata as processMetadata } from '../app/process/page';
import { metadata as servicesMetadata } from '../app/services/page';
import { metadata as startMetadata } from '../app/start/page';
import { metadata as studioMetadata } from '../app/studio/page';
import { metadata as workMetadata } from '../app/work/page';
import { rootMetadata, siteConfig, siteSchema } from '../lib/seo';

const publicMetadata = [
  rootMetadata,
  homeMetadata,
  servicesMetadata,
  processMetadata,
  workMetadata,
  studioMetadata,
  startMetadata,
];

function asJson(value: unknown) {
  return JSON.stringify(value);
}

test('site SEO identifies Honolulu as the studio location', () => {
  assert.deepEqual(siteConfig.location, {
    city: 'Honolulu',
    region: 'HI',
    regionName: 'Hawaii',
    country: 'US',
  });

  const metadata = asJson(publicMetadata);
  assert.match(metadata, /Honolulu/);
  assert.match(metadata, /Hawaii/);
  assert.doesNotMatch(metadata, /Las Vegas|Nevada/);
});

test('local intent is focused on the homepage and studio metadata', () => {
  assert.match(asJson(homeMetadata), /Honolulu web design/i);
  assert.match(asJson(studioMetadata), /Honolulu web design studio/i);
  assert.doesNotMatch(asJson(processMetadata), /Honolulu|Hawaii/);
  assert.doesNotMatch(asJson(startMetadata), /Honolulu|Hawaii/);
});

test('structured data describes a remote studio without a public street address', () => {
  const graph = siteSchema['@graph'];
  const studio = graph.find((entity) => entity['@id'] === `${siteConfig.url}/#studio`);
  const person = graph.find((entity) => entity['@id'] === `${siteConfig.url}/#person`);

  assert.equal(studio?.['@type'], 'Organization');
  assert.equal('address' in (studio ?? {}), false);
  assert.equal('address' in (person ?? {}), false);
  assert.deepEqual(studio?.areaServed, [
    {
      '@type': 'City',
      name: 'Honolulu',
      sameAs: 'https://en.wikipedia.org/wiki/Honolulu',
    },
    { '@type': 'AdministrativeArea', name: 'Hawaii' },
    { '@type': 'Country', name: 'United States' },
  ]);
});

test('offer catalog and services carry the Honolulu service area', async () => {
  const { buildOfferCatalogSchema } = await import('../lib/seo');
  const catalog = buildOfferCatalogSchema([
    { name: 'Essentials', summary: 'A focused site.', startingPrice: '$2,000+', slug: 'essentials' },
  ]);
  const areaServed = catalog.areaServed;
  const service = catalog.itemListElement[0].itemOffered;

  assert.match(asJson(areaServed), /Honolulu/);
  assert.match(asJson(areaServed), /Hawaii/);
  assert.match(asJson(service.areaServed), /Honolulu/);
});
