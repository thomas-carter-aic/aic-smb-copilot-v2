/**
 * Test Environment Configuration
 * 
 * This configuration is used for automated testing (unit, integration, e2e).
 * It uses in-memory databases and mock services where possible.
 */

import {
  AppConfig,
  Environment,
  LogLevel,
  NodeEnv,
} from '../types';

export const testConfig: AppConfig = {
  env: Environment.TEST,
  nodeEnv: NodeEnv.TEST,
  appName: 'AIC SMB Copilot',
  appVersion: '1.0.0-test',
  logLevel: LogLevel.ERROR, // Only errors in tests
  isDevelopment: false,
  isProduction: false,
  isTest: true,

  api: {
    host: 'localhost',
    port: parseInt(process.env.TEST_API_PORT || '3333', 10),
    prefix: '/api',
    version: 'v1',
    corsOrigins: ['http://localhost:3333'],
    rateLimitWindow: 15 * 60 * 1000,
    rateLimitMax: 10000, // No rate limiting in tests
    timeout: 5000, // Shorter timeout for tests
    bodyLimit: '10mb',
  },

  database: {
    host: process.env.TEST_DB_HOST || 'localhost',
    port: parseInt(process.env.TEST_DB_PORT || '5433', 10),
    username: 'test_user',
    password: 'test_password',
    database: process.env.TEST_DB_NAME || 'aic_test',
    ssl: false,
    poolMin: 1,
    poolMax: 5,
    connectionTimeout: 5000,
    synchronize: true, // Auto-sync for tests
    logging: false,
  },

  redis: {
    host: process.env.TEST_REDIS_HOST || 'localhost',
    port: parseInt(process.env.TEST_REDIS_PORT || '6380', 10),
    db: 1, // Use different DB for tests
    keyPrefix: 'aic:test:',
    ttl: 300, // 5 minutes
    maxRetriesPerRequest: 1,
    enableReadyCheck: false,
  },

  auth: {
    jwtSecret: 'test-jwt-secret-not-for-production',
    jwtExpiresIn: '1h',
    jwtRefreshExpiresIn: '7d',
    bcryptRounds: 4, // Minimal rounds for speed
    sessionSecret: 'test-session-secret',
    sessionMaxAge: 1 * 60 * 60 * 1000,
    oauth: {
      google: {
        clientId: 'test-google-client-id',
        clientSecret: 'test-google-client-secret',
        callbackUrl: 'http://localhost:3333/auth/google/callback',
      },
      microsoft: {
        clientId: 'test-microsoft-client-id',
        clientSecret: 'test-microsoft-client-secret',
        callbackUrl: 'http://localhost:3333/auth/microsoft/callback',
      },
    },
  },

  storage: {
    provider: 'local',
    bucket: 'test-uploads',
    region: 'us-east-1',
    endpoint: 'http://localhost:9001',
    publicUrl: 'http://localhost:9001',
    maxFileSize: 10 * 1024 * 1024, // 10MB for tests
    allowedMimeTypes: [
      'image/jpeg',
      'image/png',
      'application/pdf',
      'text/plain',
    ],
  },

  email: {
    provider: 'smtp',
    from: 'test@aic-copilot.local',
    replyTo: 'test@aic-copilot.local',
    templates: {
      welcome: 'test-welcome',
      resetPassword: 'test-reset',
      invoice: 'test-invoice',
      notification: 'test-notification',
    },
  },

  kafka: {
    brokers: ['localhost:9093'],
    clientId: 'aic-test-client',
    groupId: 'aic-test-group',
    ssl: false,
    connectionTimeout: 3000,
    requestTimeout: 5000,
  },

  monitoring: {
    sentry: {
      dsn: '',
      environment: 'test',
      tracesSampleRate: 0,
      enabled: false, // Disabled in tests
    },
    datadog: {
      apiKey: '',
      enabled: false,
      serviceName: 'aic-test',
    },
    prometheus: {
      enabled: false,
      port: 9091,
      path: '/metrics',
    },
  },

  ai: {
    openai: {
      apiKey: 'test-openai-key',
      model: 'gpt-3.5-turbo',
      temperature: 0.5,
      maxTokens: 500,
    },
    anthropic: {
      apiKey: 'test-anthropic-key',
      model: 'claude-3-sonnet-20240229',
    },
    vectorDb: {
      provider: 'qdrant',
      apiKey: 'test-vectordb-key',
      endpoint: 'http://localhost:6334',
      indexName: 'aic-test',
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
      publicKey: 'pk_test_mock',
      secretKey: 'sk_test_mock',
      webhookSecret: 'whsec_test_mock',
      apiVersion: '2023-10-16',
    },
    slack: {
      clientId: 'test-slack-client',
      clientSecret: 'test-slack-secret',
      signingSecret: 'test-slack-signing',
    },
    salesforce: {
      clientId: 'test-sf-client',
      clientSecret: 'test-sf-secret',
      loginUrl: 'https://test.salesforce.com',
    },
  },
};