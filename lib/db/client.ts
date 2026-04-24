import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { getDatabaseUrl } from '@/lib/deposit';
import * as schema from '@/lib/db/schema';

type Database = ReturnType<typeof drizzle<typeof schema>>;

declare global {
  var __portfolioPostgresClient: ReturnType<typeof postgres> | undefined;
  var __portfolioDatabase: Database | undefined;
  var __portfolioDatabaseUrl: string | undefined;
}

export function getDb() {
  const databaseUrl = getDatabaseUrl();

  if (!databaseUrl) {
    return null;
  }

  if (!globalThis.__portfolioPostgresClient || globalThis.__portfolioDatabaseUrl !== databaseUrl) {
    globalThis.__portfolioPostgresClient = postgres(databaseUrl, {
      prepare: false,
    });
    globalThis.__portfolioDatabaseUrl = databaseUrl;
    globalThis.__portfolioDatabase = undefined;
  }

  if (!globalThis.__portfolioDatabase) {
    globalThis.__portfolioDatabase = drizzle(globalThis.__portfolioPostgresClient, {
      schema,
    });
  }

  return globalThis.__portfolioDatabase;
}
