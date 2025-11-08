/**
 * Environment Configuration Loader
 * 
 * This module exports environment-specific configurations and provides
 * a function to load the appropriate configuration based on NODE_ENV.
 */

import { AppConfig, Environment } from '../types';
import { developmentConfig } from './development';
import { stagingConfig } from './staging';
import { productionConfig } from './production';
import { testConfig } from './test';

/**
 * Map of environment configurations
 */
const configurations: Record<Environment, AppConfig> = {
  [Environment.DEVELOPMENT]: developmentConfig,
  [Environment.STAGING]: stagingConfig,
  [Environment.PRODUCTION]: productionConfig,
  [Environment.TEST]: testConfig,
};

/**
 * Get the current environment from NODE_ENV or default to development
 */
export function getCurrentEnvironment(): Environment {
  const env = process.env.NODE_ENV || 'development';
  
  // Map NODE_ENV values to our Environment enum
  switch (env.toLowerCase()) {
    case 'production':
      return Environment.PRODUCTION;
    case 'staging':
      return Environment.STAGING;
    case 'test':
      return Environment.TEST;
    case 'development':
    default:
      return Environment.DEVELOPMENT;
  }
}

/**
 * Load configuration for the current environment
 * 
 * @param environment - Optional environment override
 * @returns The configuration object for the specified environment
 * @throws Error if the environment is invalid
 */
export function loadConfig(environment?: Environment): AppConfig {
  const env = environment || getCurrentEnvironment();
  
  const config = configurations[env];
  
  if (!config) {
    throw new Error(
      `Invalid environment: ${env}. Valid environments are: ${Object.values(Environment).join(', ')}`
    );
  }
  
  return config;
}

/**
 * Get configuration for a specific environment
 * Useful for testing or when you need to access configs from different environments
 */
export function getConfig(environment: Environment): AppConfig {
  return configurations[environment];
}

/**
 * Validate that required environment variables are set
 * This should be called on application startup
 */
export function validateEnvironmentVariables(config: AppConfig): void {
  const errors: string[] = [];

  // Only validate in production and staging
  if (!config.isProduction && config.env !== Environment.STAGING) {
    return;
  }

  // Database validation
  if (!process.env.DB_HOST) errors.push('DB_HOST is required');
  if (!process.env.DB_USERNAME) errors.push('DB_USERNAME is required');
  if (!process.env.DB_PASSWORD) errors.push('DB_PASSWORD is required');
  if (!process.env.DB_NAME) errors.push('DB_NAME is required');

  // Redis validation
  if (!process.env.REDIS_HOST) errors.push('REDIS_HOST is required');
  if (!process.env.REDIS_PASSWORD) errors.push('REDIS_PASSWORD is required');

  // Auth validation
  if (!process.env.JWT_SECRET) errors.push('JWT_SECRET is required');
  if (!process.env.SESSION_SECRET) errors.push('SESSION_SECRET is required');

  // Storage validation
  if (!process.env.S3_BUCKET) errors.push('S3_BUCKET is required');
  if (!process.env.CDN_URL) errors.push('CDN_URL is required');

  // Email validation
  if (!process.env.SENDGRID_API_KEY) errors.push('SENDGRID_API_KEY is required');

  // Kafka validation
  if (!process.env.KAFKA_BROKERS) errors.push('KAFKA_BROKERS is required');

  // Monitoring validation
  if (!process.env.SENTRY_DSN) errors.push('SENTRY_DSN is required');
  if (!process.env.DATADOG_API_KEY) errors.push('DATADOG_API_KEY is required');

  // AI validation
  if (!process.env.OPENAI_API_KEY) errors.push('OPENAI_API_KEY is required');
  if (!process.env.PINECONE_API_KEY) errors.push('PINECONE_API_KEY is required');
  if (!process.env.PINECONE_ENDPOINT) errors.push('PINECONE_ENDPOINT is required');

  // Integration validation
  if (!process.env.STRIPE_SECRET_KEY) errors.push('STRIPE_SECRET_KEY is required');
  if (!process.env.STRIPE_WEBHOOK_SECRET) errors.push('STRIPE_WEBHOOK_SECRET is required');

  if (errors.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${errors.map(e => `  - ${e}`).join('\n')}`
    );
  }
}

/**
 * Print current configuration (sanitized for security)
 * Useful for debugging and startup logging
 */
export function printConfig(config: AppConfig): void {
  const sanitized = {
    env: config.env,
    nodeEnv: config.nodeEnv,
    appName: config.appName,
    appVersion: config.appVersion,
    logLevel: config.logLevel,
    api: {
      host: config.api.host,
      port: config.api.port,
      prefix: config.api.prefix,
      version: config.api.version,
    },
    database: {
      host: config.database.host,
      port: config.database.port,
      database: config.database.database,
      ssl: config.database.ssl,
    },
    redis: {
      host: config.redis.host,
      port: config.redis.port,
      db: config.redis.db,
    },
    featureFlags: config.featureFlags,
    monitoring: {
      sentry: { enabled: config.monitoring.sentry.enabled },
      datadog: { enabled: config.monitoring.datadog.enabled },
      prometheus: { enabled: config.monitoring.prometheus.enabled },
    },
  };

  console.log('='.repeat(60));
  console.log('Application Configuration');
  console.log('='.repeat(60));
  console.log(JSON.stringify(sanitized, null, 2));
  console.log('='.repeat(60));
}

// Export individual configs for direct access if needed
export { developmentConfig } from './development';
export { stagingConfig } from './staging';
export { productionConfig } from './production';
export { testConfig } from './test';

// Export the default configuration (current environment)
export const config = loadConfig();