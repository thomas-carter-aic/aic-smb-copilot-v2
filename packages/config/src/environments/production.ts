/**
 * Production Environment Configuration
 * 
 * This configuration is used for the production environment.
 * It includes strict security settings, optimized performance, and comprehensive monitoring.
 */

import {
  AppConfig,
  Environment,
  LogLevel,
  NodeEnv,
} from '../types';

export const productionConfig: AppConfig = {
  env: Environment.PRODUCTION,
  nodeEnv: NodeEnv.PRODUCTION,
  appName: 'AIC SMB Copilot',
  appVersion: process.env.APP_VERSION || '1.0.0',
  logLevel: (process.env.LOG_LEVEL as LogLevel) || LogLevel.WARN,
  isDevelopment: false,
  isProduction: true,
  isTest: false,

  api: {
    host: process.env.API_HOST || '0.0.0.0',
    port: parseInt(process.env.API_PORT || '3000', 10),
    prefix: '/api',
    version: 'v1',
    corsOrigins: process.env.CORS_ORIGINS?.split(',') || [
      'https://app.aic-copilot.com',
      'https://admin.aic-copilot.com',
    ],
    rateLimitWindow: 15 * 60 * 1000, // 15 minutes
    rateLimitMax: 100, // Strict rate limiting
    timeout: 30000, // 30 seconds
    bodyLimit: '5mb', // Reduced for production
  },

  database: {
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    ssl: true,
    poolMin: 10,
    poolMax: 50,
    connectionTimeout: 10000,
    synchronize: false, // NEVER auto-sync in production
    logging: false,
  },

  redis: {
    host: process.env.REDIS_HOST!,
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    password: process.env.REDIS_PASSWORD!,
    db: 0,
    keyPrefix: 'aic:prod:',
    ttl: 3600, // 1 hour
    maxRetriesPerRequest: 3,
    enableReadyCheck: true,
  },

  auth: {
    jwtSecret: process.env.JWT_SECRET!,
    jwtExpiresIn: '1h', // Shorter expiry for security
    jwtRefreshExpiresIn: '7d',
    bcryptRounds: 12, // Higher security
    sessionSecret: process.env.SESSION_SECRET!,
    sessionMaxAge: 1 * 60 * 60 * 1000, // 1 hour
    oauth: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackUrl: 'https://app.aic-copilot.com/auth/google/callback',
      },
      microsoft: {
        clientId: process.env.MICROSOFT_CLIENT_ID!,
        clientSecret: process.env.MICROSOFT_CLIENT_SECRET!,
        callbackUrl: 'https://app.aic-copilot.com/auth/microsoft/callback',
      },
    },
  },

  storage: {
    provider: 's3',
    bucket: process.env.S3_BUCKET!,
    region: process.env.AWS_REGION || 'us-east-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    publicUrl: process.env.CDN_URL!,
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
    from: process.env.EMAIL_FROM || 'noreply@aic-copilot.com',
    replyTo: process.env.EMAIL_REPLY_TO || 'support@aic-copilot.com',
    templates: {
      welcome: process.env.SENDGRID_WELCOME_TEMPLATE_ID!,
      resetPassword: process.env.SENDGRID_RESET_PASSWORD_TEMPLATE_ID!,
      invoice: process.env.SENDGRID_INVOICE_TEMPLATE_ID!,
      notification: process.env.SENDGRID_NOTIFICATION_TEMPLATE_ID!,
    },
  },

  kafka: {
    brokers: process.env.KAFKA_BROKERS!.split(','),
    clientId: 'aic-prod-client',
    groupId: 'aic-prod-group',
    ssl: true,
    sasl: {
      mechanism: 'scram-sha-512',
      username: process.env.KAFKA_USERNAME!,
      password: process.env.KAFKA_PASSWORD!,
    },
    connectionTimeout: 10000,
    requestTimeout: 30000,
  },

  monitoring: {
    sentry: {
      dsn: process.env.SENTRY_DSN!,
      environment: 'production',
      tracesSampleRate: 0.1, // 10% sampling for performance
      enabled: true,
    },
    datadog: {
      apiKey: process.env.DATADOG_API_KEY!,
      enabled: true,
      serviceName: 'aic-production',
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
      model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
      temperature: 0.7,
      maxTokens: 2000,
    },
    anthropic: {
      apiKey: process.env.ANTHROPIC_API_KEY!,
      model: process.env.ANTHROPIC_MODEL || 'claude-3-opus-20240229',
    },
    vectorDb: {
      provider: 'pinecone',
      apiKey: process.env.PINECONE_API_KEY!,
      endpoint: process.env.PINECONE_ENDPOINT!,
      indexName: process.env.PINECONE_INDEX!,
    },
  },

  featureFlags: {
    enableAnalytics: process.env.ENABLE_ANALYTICS !== 'false',
    enableWorkflows: process.env.ENABLE_WORKFLOWS !== 'false',
    enableIntegrations: process.env.ENABLE_INTEGRATIONS !== 'false',
    enableMobileApp: process.env.ENABLE_MOBILE_APP !== 'false',
    enableBetaFeatures: process.env.ENABLE_BETA_FEATURES === 'true',
    maintenanceMode: process.env.MAINTENANCE_MODE === 'true',
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
      loginUrl: process.env.SALESFORCE_LOGIN_URL || 'https://login.salesforce.com',
    },
  },
};