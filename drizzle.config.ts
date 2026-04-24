import * as nextEnv from '@next/env';
import { defineConfig } from 'drizzle-kit';

const { loadEnvConfig } = nextEnv;

loadEnvConfig(process.cwd());

export default defineConfig({
  schema: './lib/db/schema.ts',
  out: './db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL ?? '',
  },
  verbose: true,
  strict: true,
});
