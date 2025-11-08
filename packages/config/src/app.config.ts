/**
 * Application configuration
 */

import { env } from './env';

export interface AppConfig {
  name: string;
  version: string;
  environment: string;
  debug: boolean;
  server: {
    port: number;
    host: string;
    apiUrl: string;
    appUrl: string;
  };
  cors: {
    origin: string | string[];
    credentials: boolean;
  };
  rateLimit: {
    requestsPerMinute: number;
    requestsPerHour: number;
  };
  logging: {
    level: string;
    format: string;
    verbose: boolean;
  };
}

/**
 * Get application configuration
 */
export const getAppConfig = (): AppConfig => {
  const config = env();

  return {
    name: 'AIC SMB Copilot',
    version: process.env.npm_package_version || '1.0.0',
    environment: config.NODE_ENV,
    debug: config.DEBUG,
    server: {
      port: config.PORT,
      host: config.HOST,
      apiUrl: config.API_URL,
      appUrl: config.APP_URL,
    },
    cors: {
      origin: config.CORS_ORIGIN.split(',').map((o) => o.trim()),
      credentials: config.CORS_CREDENTIALS,
    },
    rateLimit: {
      requestsPerMinute: config.RATE_LIMIT_REQUESTS_PER_MINUTE,
      requestsPerHour: config.RATE_LIMIT_REQUESTS_PER_HOUR,
    },
    logging: {
      level: config.LOG_LEVEL,
      format: config.LOG_FORMAT,
      verbose: config.VERBOSE_LOGGING,
    },
  };
};

/**
 * Singleton instance
 */
let appConfigInstance: AppConfig | null = null;

/**
 * Get app config (singleton)
 */
export const appConfig = (): AppConfig => {
  if (!appConfigInstance) {
    appConfigInstance = getAppConfig();
  }
  return appConfigInstance;
};