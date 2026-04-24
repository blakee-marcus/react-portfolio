import assert from 'node:assert/strict';
import test from 'node:test';
import { NextRequest } from 'next/server';
import * as accessRoute from '../app/start/access/[publicId]/route';

test('rejects access-route requests without a signed token', async () => {
  const request = new NextRequest('https://example.com/start/access/dep_123', {
    method: 'GET',
  });

  const response = await accessRoute.GET(request, {
    params: Promise.resolve({ publicId: 'dep_123' }),
  });

  assert.equal(response.status, 303);
  assert.equal(
    response.headers.get('location'),
    'https://example.com/deposit?checkout=restricted',
  );
});
