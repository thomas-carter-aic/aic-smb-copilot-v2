/**
 * Development Environment Configuration
 * 
 * This configuration is used for local development.
 * It includes relaxed security settings and verbose logging for easier debugging.
 */

import {
  AppConfig,
  Environment,
  LogLevel,
  NodeEnv,
} from '../types';

export const developmentConfig: AppConfig = {
  env: Environment.DEVELOPMENT,
  nodeEnv: NodeEnv.DEVELOPMENT,
  appName: 'AIC SMB Copilot',
  appVersion: '1.0.0',
  logLevel: LogLevel.DEBUG,
  isDevelopment: true,
  isProduction: false,
  isTest: false,

  api: {
    host: process.env.API_HOST || 'localhost',
    port: parseInt(process.env.API_PORT || '3000', 10),
    prefix: '/api',
    version: 'v1',
    corsOrigins: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
    rateLimitWindow: 15 * 60 * 1000, // 15 minutes
    rateLimitMax: 1000, // Relaxed for development
    timeout: 30000, // 30 seconds
    bodyLimit: '10mb',
  },

  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME || 'aic_dev',
    password: process.env.DB_PASSWORD || 'dev_password_123',
    database: process.env.DB_NAME || 'aic_development',
    ssl: false,
    poolMin: 2,
    poolMax: 10,
    connectionTimeout: 10000,
    synchronize: true, // Auto-sync schema in development
    logging: true,
  },

  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    password: process.env.REDIS_PASSWORD,
    db: 0,
    keyPrefix: 'aic:dev:',
    ttl: 3600, // 1 hour
    maxRetriesPerRequest: 3,
    enableReadyCheck: true,
  },

  auth: {
    jwtSecret: process.env.JWT_SECRET || 'dev-secret-key-change-in-production',
    jwtExpiresIn: '24h', // Extended for development
    jwtRefreshExpiresIn: '7d',
    bcryptRounds: 8, // Lower rounds for faster development
    sessionSecret: process.env.SESSION_SECRET || 'dev-session-secret',
    sessionMaxAge: 24 * 60 * 60 * 1000, // 24 hours
    oauth: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        callbackUrl: 'http://localhost:3000/auth/google/callback',
      },
      microsoft: {
        clientId: process.env.MICROSOFT_CLIENT_ID || '',
        clientSecret: process.env.MICROSOFT_CLIENT_SECRET || '',
        callbackUrl: 'http://localhost:3000/auth/microsoft/callback',
      },
    },
  },

  storage: {
    provider: 'local',
    bucket: 'aic-dev-uploads',
    region: 'us-east-1',
    endpoint: 'http://localhost:9000', // MinIO for local S3
    publicUrl: 'http://localhost:9000',
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
    ],
  },

  email: {
    provider: 'smtp',
    apiKey: process.env.SENDGRID_API_KEY || '',
    from: 'dev@aic-copilot.local',
    replyTo: 'support@aic-copilot.local',
    templates: {
      welcome: 'welcome-template',
      resetPassword: 'reset-password-template',
      invoice: 'invoice-template',
      notification: 'notification-template',
    },
  },

  kafka: {
    brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
    clientId: 'aic-dev-client',
    groupId: 'aic-dev-group',
    ssl: false,
    connectionTimeout: 10000,
    requestTimeout: 30000,
  },

  monitoring: {
    sentry: {
      dsn: process.env.SENTRY_DSN || '',
      environment: 'development',
      tracesSampleRate: 1.0, // 100% in development
      enabled: false, // Disabled by default in dev
    },
    datadog: {
      apiKey: process.env.DATADOG_API_KEY || '',
      enabled: false,
      serviceName: 'aic-dev',
    },
    prometheus: {
      enabled: true,
      port: 9090,
      path: '/metrics',
    },
  },

  ai: {
    openai: {
      apiKey: process.env.OPENAI_API_KEY || '',
      model: 'gpt-4-turbo-preview',
      temperature: 0.7,
      maxTokens: 2000,
    },
    anthropic: {
      apiKey: process.env.ANTHROPIC_API_KEY || '',
      model: 'claude-3-opus-20240229',
    },
    vectorDb: {
      provider: 'qdrant',
      apiKey: process.env.QDRANT_API_KEY || '',
      endpoint: process.env.QDRANT_ENDPOINT || 'http://localhost:6333',
      indexName: 'aic-dev-index',
    },
  },

  featureFlags: {
    enableAnalytics: true,
    enableWorkflows: true,
    enableIntegrations: true,
    enableMobileApp: true,
    enableBetaFeatures: true,
    maintenanceMode: false,
  },

  integrations: {
    stripe: {
      publicKey: process.env.STRIPE_PUBLIC_KEY || '',
      secretKey: process.env.STRIPE_SECRET_KEY || '',
      webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
      apiVersion: '2023-10-16',
    },
    slack: {
      clientId: process.env.SLACK_CLIENT_ID || '',
      clientSecret: process.env.SLACK_CLIENT_SECRET || '',
      signingSecret: process.env.SLACK_SIGNING_SECRET || '',
    },
    salesforce: {
      clientId: process.env.SALESFORCE_CLIENT_ID || '',
      clientSecret: process.env.SALESFORCE_CLIENT_SECRET || '',
      loginUrl: 'https://test.salesforce.com',
    },
  },
};