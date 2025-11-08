/**
 * Configuration Types
 * Defines the structure for environment-specific configurations
 */

export enum Environment {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
  TEST = 'test',
}

export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
  VERBOSE = 'verbose',
}

export enum NodeEnv {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  TEST = 'test',
}

/**
 * Database Configuration
 */
export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  ssl: boolean;
  poolMin: number;
  poolMax: number;
  connectionTimeout: number;
  synchronize: boolean;
  logging: boolean;
}

/**
 * Redis Configuration
 */
export interface RedisConfig {
  host: string;
  port: number;
  password?: string;
  db: number;
  keyPrefix: string;
  ttl: number;
  maxRetriesPerRequest: number;
  enableReadyCheck: boolean;
}

/**
 * API Configuration
 */
export interface ApiConfig {
  host: string;
  port: number;
  prefix: string;
  version: string;
  corsOrigins: string[];
  rateLimitWindow: number;
  rateLimitMax: number;
  timeout: number;
  bodyLimit: string;
}

/**
 * Authentication Configuration
 */
export interface AuthConfig {
  jwtSecret: string;
  jwtExpiresIn: string;
  jwtRefreshExpiresIn: string;
  bcryptRounds: number;
  sessionSecret: string;
  sessionMaxAge: number;
  oauth: {
    google: {
      clientId: string;
      clientSecret: string;
      callbackUrl: string;
    };
    microsoft: {
      clientId: string;
      clientSecret: string;
      callbackUrl: string;
    };
  };
}

/**
 * Storage Configuration
 */
export interface StorageConfig {
  provider: 's3' | 'gcs' | 'azure' | 'local';
  bucket: string;
  region: string;
  accessKeyId?: string;
  secretAccessKey?: string;
  endpoint?: string;
  publicUrl?: string;
  maxFileSize: number;
  allowedMimeTypes: string[];
}

/**
 * Email Configuration
 */
export interface EmailConfig {
  provider: 'sendgrid' | 'ses' | 'smtp';
  apiKey?: string;
  from: string;
  replyTo: string;
  templates: {
    welcome: string;
    resetPassword: string;
    invoice: string;
    notification: string;
  };
}

/**
 * Kafka Configuration
 */
export interface KafkaConfig {
  brokers: string[];
  clientId: string;
  groupId: string;
  ssl: boolean;
  sasl?: {
    mechanism: string;
    username: string;
    password: string;
  };
  connectionTimeout: number;
  requestTimeout: number;
}

/**
 * Monitoring Configuration
 */
export interface MonitoringConfig {
  sentry: {
    dsn: string;
    environment: string;
    tracesSampleRate: number;
    enabled: boolean;
  };
  datadog: {
    apiKey: string;
    enabled: boolean;
    serviceName: string;
  };
  prometheus: {
    enabled: boolean;
    port: number;
    path: string;
  };
}

/**
 * AI/ML Configuration
 */
export interface AIConfig {
  openai: {
    apiKey: string;
    model: string;
    temperature: number;
    maxTokens: number;
  };
  anthropic: {
    apiKey: string;
    model: string;
  };
  vectorDb: {
    provider: 'pinecone' | 'weaviate' | 'qdrant';
    apiKey: string;
    endpoint: string;
    indexName: string;
  };
}

/**
 * Feature Flags Configuration
 */
export interface FeatureFlagsConfig {
  enableAnalytics: boolean;
  enableWorkflows: boolean;
  enableIntegrations: boolean;
  enableMobileApp: boolean;
  enableBetaFeatures: boolean;
  maintenanceMode: boolean;
}

/**
 * Third-Party Integrations Configuration
 */
export interface IntegrationsConfig {
  stripe: {
    publicKey: string;
    secretKey: string;
    webhookSecret: string;
    apiVersion: string;
  };
  slack: {
    clientId: string;
    clientSecret: string;
    signingSecret: string;
  };
  salesforce: {
    clientId: string;
    clientSecret: string;
    loginUrl: string;
  };
}

/**
 * Complete Application Configuration
 */
export interface AppConfig {
  env: Environment;
  nodeEnv: NodeEnv;
  appName: string;
  appVersion: string;
  logLevel: LogLevel;
  isDevelopment: boolean;
  isProduction: boolean;
  isTest: boolean;
  api: ApiConfig;
  database: DatabaseConfig;
  redis: RedisConfig;
  auth: AuthConfig;
  storage: StorageConfig;
  email: EmailConfig;
  kafka: KafkaConfig;
  monitoring: MonitoringConfig;
  ai: AIConfig;
  featureFlags: FeatureFlagsConfig;
  integrations: IntegrationsConfig;
}