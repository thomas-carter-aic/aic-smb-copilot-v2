/**
 * Database configuration
 */

import { env } from './env';

export interface DatabaseConfig {
  url: string;
  pool: {
    min: number;
    max: number;
  };
  ssl: boolean;
  logging: boolean;
  migrations: {
    directory: string;
    tableName: string;
  };
}

/**
 * Get database configuration
 */
export const getDatabaseConfig = (): DatabaseConfig => {
  const config = env();

  return {
    url: config.DATABASE_URL,
    pool: {
      min: config.DATABASE_POOL_MIN,
      max: config.DATABASE_POOL_MAX,
    },
    ssl: config.DATABASE_SSL,
    logging: config.DEBUG || config.VERBOSE_LOGGING,
    migrations: {
      directory: './migrations',
      tableName: 'migrations',
    },
  };
};

/**
 * Singleton instance
 */
let databaseConfigInstance: DatabaseConfig | null = null;

/**
 * Get database config (singleton)
 */
export const databaseConfig = (): DatabaseConfig => {
  if (!databaseConfigInstance) {
    databaseConfigInstance = getDatabaseConfig();
  }
  return databaseConfigInstance;
};