/**
 * Staging Environment Configuration
 * 
 * This configuration is used for staging/pre-production environment.
 * It mimics production settings but with some relaxed constraints for testing.
 */

import {
  AppConfig,
  Environment,
  LogLevel,
  NodeEnv,
} from '../types';

export const stagingConfig: AppConfig = {
  env: Environment.STAGING,
  nodeEnv: NodeEnv.PRODUCTION,
  appName: 'AIC SMB Copilot',
  appVersion: process.env.APP_VERSION || '1.0.0',
  logLevel: LogLevel.INFO,
  isDevelopment: false,
  isProduction: false,
  isTest: false,

  api: {
    host: process.env.API_HOST || '0.0.0.0',
    port: parseInt(process.env.API_PORT || '3000', 10),
    prefix: '/api',
    version: 'v1',
    corsOrigins: process.env.CORS_ORIGINS?.split(',') || [
      'https://staging.aic-copilot.com',
      'https://staging-admin.aic-copilot.com',
    ],
    rateLimitWindow: 15 * 60 * 1000, // 15 minutes
    rateLimitMax: 500,
    timeout: 30000, // 30 seconds
    bodyLimit: '10mb',
  },

  database: {
    host: process.env.DB_HOST || 'staging-db.aic-copilot.internal',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME || 'aic_staging',
    ssl: true,
    poolMin: 5,
    poolMax: 20,
    connectionTimeout: 10000,
    synchronize: false, // Never auto-sync in staging
    logging: false,
  },

  redis: {
    host: process.env.REDIS_HOST || 'staging-redis.aic-copilot.internal',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    password: process.env.REDIS_PASSWORD,
    db: 0,
    keyPrefix: 'aic:staging:',
    ttl: 3600, // 1 hour
    maxRetriesPerRequest: 3,
    enableReadyCheck: true,
  },

  auth: {
    jwtSecret: process.env.JWT_SECRET!,
    jwtExpiresIn: '12h',
    jwtRefreshExpiresIn: '7d',
    bcryptRounds: 10,
    sessionSecret: process.env.SESSION_SECRET!,
    sessionMaxAge: 12 * 60 * 60 * 1000, // 12 hours
    oauth: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackUrl: 'https://staging.aic-copilot.com/auth/google/callback',
      },
      microsoft: {
        clientId: process.env.MICROSOFT_CLIENT_ID!,
        clientSecret: process.env.MICROSOFT_CLIENT_SECRET!,
        callbackUrl: 'https://staging.aic-copilot.com/auth/microsoft/callback',
      },
    },
  },

  storage: {
    provider: 's3',
    bucket: process.env.S3_BUCKET || 'aic-staging-uploads',
    region: process.env.AWS_REGION || 'us-east-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    publicUrl: process.env.CDN_URL || 'https://cdn-staging.aic-copilot.com',
    maxFileSize: 50 * 1024 * 1024, // 50MB
    allowedMimeTypes: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
      'text/plain',
    ],
  },

  email: {
    provider: 'sendgrid',
    apiKey: process.env.SENDGRID_API_KEY!,
    from: 'noreply@aic-copilot.com',
    replyTo: 'support@aic-copilot.com',
    templates: {
      welcome: process.env.SENDGRID_WELCOME_TEMPLATE_ID || 'welcome-template',
      resetPassword: process.env.SENDGRID_RESET_PASSWORD_TEMPLATE_ID || 'reset-password-template',
      invoice: process.env.SENDGRID_INVOICE_TEMPLATE_ID || 'invoice-template',
      notification: process.env.SENDGRID_NOTIFICATION_TEMPLATE_ID || 'notification-template',
    },
  },

  kafka: {
    brokers: process.env.KAFKA_BROKERS?.split(',') || ['staging-kafka.aic-copilot.internal:9092'],
    clientId: 'aic-staging-client',
    groupId: 'aic-staging-group',
    ssl: true,
    sasl: {
      mechanism: 'plain',
      username: process.env.KAFKA_USERNAME || '',
      password: process.env.KAFKA_PASSWORD || '',
    },
    connectionTimeout: 10000,
    requestTimeout: 30000,
  },

  monitoring: {
    sentry: {
      dsn: process.env.SENTRY_DSN!,
      environment: 'staging',
      tracesSampleRate: 0.5, // 50% sampling
      enabled: true,
    },
    datadog: {
      apiKey: process.env.DATADOG_API_KEY!,
      enabled: true,
      serviceName: 'aic-staging',
    },
    prometheus: {
      enabled: true,
      port: 9090,
      path: '/metrics',
    },
  },

  ai: {
    openai: {
      apiKey: process.env.OPENAI_API_KEY!,
      model: 'gpt-4-turbo-preview',
      temperature: 0.7,
      maxTokens: 2000,
    },
    anthropic: {
      apiKey: process.env.ANTHROPIC_API_KEY!,
      model: 'claude-3-opus-20240229',
    },
    vectorDb: {
      provider: 'pinecone',
      apiKey: process.env.PINECONE_API_KEY!,
      endpoint: process.env.PINECONE_ENDPOINT!,
      indexName: process.env.PINECONE_INDEX || 'aic-staging',
    },
  },

  featureFlags: {
    enableAnalytics: true,
    enableWorkflows: true,
    enableIntegrations: true,
    enableMobileApp: true,
    enableBetaFeatures: true, // Test beta features in staging
    maintenanceMode: false,
  },

  integrations: {
    stripe: {
      publicKey: process.env.STRIPE_PUBLIC_KEY!,
      secretKey: process.env.STRIPE_SECRET_KEY!,
      webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
      apiVersion: '2023-10-16',
    },
    slack: {
      clientId: process.env.SLACK_CLIENT_ID!,
      clientSecret: process.env.SLACK_CLIENT_SECRET!,
      signingSecret: process.env.SLACK_SIGNING_SECRET!,
    },
    salesforce: {
      clientId: process.env.SALESFORCE_CLIENT_ID!,
      clientSecret: process.env.SALESFORCE_CLIENT_SECRET!,
      loginUrl: 'https://test.salesforce.com',
    },
  },
};