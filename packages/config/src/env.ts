/**
 * Environment variable configuration with validation
 */

import { z } from 'zod';

/**
 * Node environment
 */
export enum NodeEnv {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  TEST = 'test',
  STAGING = 'staging',
}

/**
 * Environment schema with validation
 */
const envSchema = z.object({
  // Node environment
  NODE_ENV: z
    .enum(['development', 'production', 'test', 'staging'])
    .default('development'),

  // Server
  PORT: z.string().default('3000').transform(Number),
  HOST: z.string().default('0.0.0.0'),
  API_URL: z.string().url().default('http://localhost:3000'),
  APP_URL: z.string().url().default('http://localhost:3001'),

  // Database
  DATABASE_URL: z.string().url(),
  DATABASE_POOL_MIN: z.string().default('2').transform(Number),
  DATABASE_POOL_MAX: z.string().default('10').transform(Number),
  DATABASE_SSL: z
    .string()
    .default('false')
    .transform((val) => val === 'true'),

  // Redis
  REDIS_URL: z.string().url().default('redis://localhost:6379'),
  REDIS_TTL: z.string().default('3600').transform(Number),
  REDIS_MAX_RETRIES: z.string().default('3').transform(Number),

  // Authentication
  JWT_SECRET: z.string().min(32),
  JWT_EXPIRATION: z.string().default('7d'),
  JWT_REFRESH_EXPIRATION: z.string().default('30d'),

  // Encryption
  ENCRYPTION_KEY: z.string().min(32),

  // External services - OpenAI
  OPENAI_API_KEY: z.string().optional(),
  OPENAI_MODEL: z.string().default('gpt-4'),
  OPENAI_MAX_TOKENS: z.string().default('2000').transform(Number),
  OPENAI_TEMPERATURE: z.string().default('0.7').transform(Number),

  // External services - Anthropic
  ANTHROPIC_API_KEY: z.string().optional(),
  ANTHROPIC_MODEL: z.string().default('claude-3-sonnet-20240229'),

  // Email - SendGrid
  SENDGRID_API_KEY: z.string().optional(),
  SENDGRID_FROM_EMAIL: z.string().email().optional(),
  SENDGRID_FROM_NAME: z.string().optional(),

  // Email - AWS SES
  AWS_SES_REGION: z.string().optional(),
  AWS_SES_ACCESS_KEY_ID: z.string().optional(),
  AWS_SES_SECRET_ACCESS_KEY: z.string().optional(),

  // SMS - Twilio
  TWILIO_ACCOUNT_SID: z.string().optional(),
  TWILIO_AUTH_TOKEN: z.string().optional(),
  TWILIO_PHONE_NUMBER: z.string().optional(),

  // Push notifications - Firebase
  FCM_SERVER_KEY: z.string().optional(),
  FCM_PROJECT_ID: z.string().optional(),

  // Payment - Stripe
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_PUBLIC_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),

  // Storage - AWS S3
  AWS_S3_REGION: z.string().default('us-east-1'),
  AWS_S3_BUCKET: z.string().optional(),
  AWS_S3_ACCESS_KEY_ID: z.string().optional(),
  AWS_S3_SECRET_ACCESS_KEY: z.string().optional(),

  // Storage - MinIO (local)
  MINIO_ENDPOINT: z.string().optional(),
  MINIO_PORT: z.string().default('9000').transform(Number).optional(),
  MINIO_ACCESS_KEY: z.string().optional(),
  MINIO_SECRET_KEY: z.string().optional(),
  MINIO_BUCKET: z.string().optional(),
  MINIO_USE_SSL: z
    .string()
    .default('false')
    .transform((val) => val === 'true')
    .optional(),

  // Message queue - Kafka
  KAFKA_BROKERS: z.string().default('localhost:9092'),
  KAFKA_CLIENT_ID: z.string().default('aic-copilot'),
  KAFKA_GROUP_ID: z.string().default('aic-copilot-group'),

  // Search - Elasticsearch
  ELASTICSEARCH_URL: z.string().url().optional(),
  ELASTICSEARCH_USERNAME: z.string().optional(),
  ELASTICSEARCH_PASSWORD: z.string().optional(),

  // Workflow - Temporal
  TEMPORAL_ADDRESS: z.string().default('localhost:7233'),
  TEMPORAL_NAMESPACE: z.string().default('default'),
  TEMPORAL_TASK_QUEUE: z.string().default('aic-copilot-tasks'),

  // Monitoring - Sentry
  SENTRY_DSN: z.string().url().optional(),
  SENTRY_ENVIRONMENT: z.string().optional(),
  SENTRY_TRACES_SAMPLE_RATE: z.string().default('0.1').transform(Number).optional(),

  // Monitoring - Datadog
  DATADOG_API_KEY: z.string().optional(),
  DATADOG_APP_KEY: z.string().optional(),
  DATADOG_SERVICE_NAME: z.string().default('aic-copilot'),

  // Logging
  LOG_LEVEL: z
    .enum(['error', 'warn', 'info', 'debug', 'verbose'])
    .default('info'),
  LOG_FORMAT: z.enum(['json', 'pretty']).default('json'),

  // CORS
  CORS_ORIGIN: z.string().default('http://localhost:3001'),
  CORS_CREDENTIALS: z
    .string()
    .default('true')
    .transform((val) => val === 'true'),

  // Rate limiting
  RATE_LIMIT_REQUESTS_PER_MINUTE: z.string().default('60').transform(Number),
  RATE_LIMIT_REQUESTS_PER_HOUR: z.string().default('1000').transform(Number),

  // Feature flags
  FEATURE_AI_CHAT: z
    .string()
    .default('true')
    .transform((val) => val === 'true'),
  FEATURE_DOCUMENT_PROCESSING: z
    .string()
    .default('true')
    .transform((val) => val === 'true'),
  FEATURE_WORKFLOW_BUILDER: z
    .string()
    .default('true')
    .transform((val) => val === 'true'),
  FEATURE_ANALYTICS: z
    .string()
    .default('true')
    .transform((val) => val === 'true'),

  // Development
  DEBUG: z
    .string()
    .default('false')
    .transform((val) => val === 'true'),
  VERBOSE_LOGGING: z
    .string()
    .default('false')
    .transform((val) => val === 'true'),
});

/**
 * Parsed and validated environment variables
 */
export type Env = z.infer<typeof envSchema>;

/**
 * Load and validate environment variables
 */
export const loadEnv = (): Env => {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.errors
        .filter((e) => e.message === 'Required')
        .map((e) => e.path.join('.'));

      const invalidVars = error.errors
        .filter((e) => e.message !== 'Required')
        .map((e) => `${e.path.join('.')}: ${e.message}`);

      console.error('❌ Invalid environment configuration:');
      if (missingVars.length > 0) {
        console.error('\nMissing required variables:');
        missingVars.forEach((v) => console.error(`  - ${v}`));
      }
      if (invalidVars.length > 0) {
        console.error('\nInvalid variables:');
        invalidVars.forEach((v) => console.error(`  - ${v}`));
      }
      process.exit(1);
    }
    throw error;
  }
};

/**
 * Get environment variable with type safety
 */
export const getEnv = <K extends keyof Env>(key: K): Env[K] => {
  const env = loadEnv();
  return env[key];
};

/**
 * Check if environment is production
 */
export const isProduction = (): boolean => {
  return process.env.NODE_ENV === NodeEnv.PRODUCTION;
};

/**
 * Check if environment is development
 */
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === NodeEnv.DEVELOPMENT;
};

/**
 * Check if environment is test
 */
export const isTest = (): boolean => {
  return process.env.NODE_ENV === NodeEnv.TEST;
};

/**
 * Check if environment is staging
 */
export const isStaging = (): boolean => {
  return process.env.NODE_ENV === NodeEnv.STAGING;
};

/**
 * Singleton instance of validated environment
 */
let envInstance: Env | null = null;

/**
 * Get validated environment (singleton)
 */
export const env = (): Env => {
  if (!envInstance) {
    envInstance = loadEnv();
  }
  return envInstance;
};