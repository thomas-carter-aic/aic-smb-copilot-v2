# @aic/config

> Centralized, type-safe configuration management for the AIC SMB Copilot Platform

## 📋 Overview

`@aic/config` is a shared configuration package that provides environment-specific settings for all applications and services in the AIC monorepo. It offers type-safe access to configuration values with built-in validation and support for multiple deployment environments.

## ✨ Features

- 🔒 **Type-Safe**: Full TypeScript support with strict typing
- 🌍 **Multi-Environment**: Support for development, staging, production, and test environments
- ✅ **Validation**: Built-in environment variable validation
- 📦 **Zero Dependencies**: No external dependencies for the core package
- 🎯 **Centralized**: Single source of truth for all configuration
- 🚀 **Easy to Use**: Simple API for accessing configuration values
- 🔧 **Flexible**: Support for environment variable overrides
- 📝 **Well Documented**: Comprehensive documentation and examples

## 📦 Installation

This package is part of the AIC monorepo and doesn't need separate installation if you're working within the monorepo.

For usage in a service or app within the monorepo:

```json
{
  "dependencies": {
    "@aic/config": "workspace:*"
  }
}
```

## 🚀 Quick Start

### Basic Usage

```typescript
import { config } from '@aic/config';

// Access configuration values
const dbHost = config.database.host;
const apiPort = config.api.port;
const jwtSecret = config.auth.jwtSecret;

// Check current environment
if (config.isDevelopment) {
  console.log('Running in development mode');
  console.log('Database:', config.database.database);
}

// Access feature flags
if (config.featureFlags.enableAnalytics) {
  // Initialize analytics service
}

// Use integration configs
const stripeKey = config.integrations.stripe.secretKey;
```

### Load Specific Environment

```typescript
import { loadConfig, Environment } from '@aic/config';

// Load production config explicitly
const prodConfig = loadConfig(Environment.PRODUCTION);

// Load staging config
const stagingConfig = loadConfig(Environment.STAGING);
```

### Environment Validation

```typescript
import { config, validateEnvironmentVariables } from '@aic/config';

// Validate required environment variables on startup
try {
  validateEnvironmentVariables(config);
  console.log('✅ All required environment variables are set');
} catch (error) {
  console.error('❌ Configuration error:', error.message);
  process.exit(1);
}
```

### Print Configuration (Debug)

```typescript
import { printConfig, config } from '@aic/config';

// Print sanitized configuration (safe for logging)
printConfig(config);
```

## 🌍 Environments

### Development

Used for local development with relaxed security settings and verbose logging.

```bash
NODE_ENV=development
```

**Characteristics:**
- Auto-sync database schema
- Verbose logging (DEBUG level)
- Relaxed rate limiting
- Local storage (MinIO)
- Mock email service
- All feature flags enabled

### Staging

Pre-production environment that mimics production settings.

```bash
NODE_ENV=staging
```

**Characteristics:**
- Production-like settings
- SSL enabled
- Real external services
- Moderate rate limiting
- 50% Sentry sampling
- Beta features enabled

### Production

Production environment with strict security and optimized performance.

```bash
NODE_ENV=production
```

**Characteristics:**
- Strict security settings
- SSL required
- Low error sampling (10%)
- Strict rate limiting
- No schema auto-sync
- WARN level logging

### Test

Automated testing environment with in-memory databases and mocks.

```bash
NODE_ENV=test
```

**Characteristics:**
- In-memory/test databases
- Mock external services
- Fast execution
- Minimal logging (ERROR only)
- No rate limiting

## 📚 Configuration Structure

### API Configuration

```typescript
interface ApiConfig {
  host: string;              // API host (e.g., 'localhost', '0.0.0.0')
  port: number;              // API port (e.g., 3000)
  prefix: string;            // API route prefix (e.g., '/api')
  version: string;           // API version (e.g., 'v1')
  corsOrigins: string[];     // Allowed CORS origins
  rateLimitWindow: number;   // Rate limit window in ms
  rateLimitMax: number;      // Max requests per window
  timeout: number;           // Request timeout in ms
  bodyLimit: string;         // Max request body size
}
```

### Database Configuration

```typescript
interface DatabaseConfig {
  host: string;              // Database host
  port: number;              // Database port (default: 5432)
  username: string;          // Database username
  password: string;          // Database password
  database: string;          // Database name
  ssl: boolean;              // Enable SSL
  poolMin: number;           // Minimum pool connections
  poolMax: number;           // Maximum pool connections
  connectionTimeout: number; // Connection timeout in ms
  synchronize: boolean;      // Auto-sync schema (dev only!)
  logging: boolean;          // Enable query logging
}
```

### Authentication Configuration

```typescript
interface AuthConfig {
  jwtSecret: string;         // JWT signing secret
  jwtExpiresIn: string;      // JWT expiry (e.g., '1h', '24h')
  jwtRefreshExpiresIn: string; // Refresh token expiry
  bcryptRounds: number;      // Password hashing rounds
  sessionSecret: string;     // Session secret
  sessionMaxAge: number;     // Session max age in ms
  oauth: {
    google: OAuthConfig;
    microsoft: OAuthConfig;
  };
}
```

### Feature Flags

```typescript
interface FeatureFlagsConfig {
  enableAnalytics: boolean;      // Analytics service
  enableWorkflows: boolean;      // Workflow engine
  enableIntegrations: boolean;   // Third-party integrations
  enableMobileApp: boolean;      // Mobile app features
  enableBetaFeatures: boolean;   // Beta/experimental features
  maintenanceMode: boolean;      // Maintenance mode flag
}
```

## 🔒 Environment Variables

### Required in Production

```bash
# Database
DB_HOST=your-db-host
DB_PORT=5432
DB_USERNAME=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name

# Redis
REDIS_HOST=your-redis-host
REDIS_PORT=6379
REDIS_PASSWORD=your-redis-password

# Auth
JWT_SECRET=your-jwt-secret-min-32-chars
SESSION_SECRET=your-session-secret

# Storage
S3_BUCKET=your-s3-bucket
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
CDN_URL=https://cdn.example.com

# Email
SENDGRID_API_KEY=your-sendgrid-key
SENDGRID_WELCOME_TEMPLATE_ID=template-id
SENDGRID_RESET_PASSWORD_TEMPLATE_ID=template-id
SENDGRID_INVOICE_TEMPLATE_ID=template-id
SENDGRID_NOTIFICATION_TEMPLATE_ID=template-id

# Kafka
KAFKA_BROKERS=broker1:9092,broker2:9092
KAFKA_USERNAME=your-kafka-user
KAFKA_PASSWORD=your-kafka-password

# Monitoring
SENTRY_DSN=your-sentry-dsn
DATADOG_API_KEY=your-datadog-key

# AI Services
OPENAI_API_KEY=your-openai-key
ANTHROPIC_API_KEY=your-anthropic-key
PINECONE_API_KEY=your-pinecone-key
PINECONE_ENDPOINT=your-pinecone-endpoint
PINECONE_INDEX=your-index-name

# Integrations
STRIPE_PUBLIC_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

SLACK_CLIENT_ID=your-slack-client-id
SLACK_CLIENT_SECRET=your-slack-client-secret
SLACK_SIGNING_SECRET=your-slack-signing-secret

# OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

MICROSOFT_CLIENT_ID=your-microsoft-client-id
MICROSOFT_CLIENT_SECRET=your-microsoft-client-secret
```

### Optional Variables

```bash
# API
API_HOST=0.0.0.0
API_PORT=3000
CORS_ORIGINS=https://app.example.com,https://admin.example.com

# Logging
LOG_LEVEL=info  # error, warn, info, debug, verbose

# Feature Flags
ENABLE_ANALYTICS=true
ENABLE_WORKFLOWS=true
ENABLE_INTEGRATIONS=true
ENABLE_MOBILE_APP=true
ENABLE_BETA_FEATURES=false
MAINTENANCE_MODE=false

# App Info
APP_VERSION=1.0.0
```

## 💡 Usage Examples

### NestJS Service

```typescript
import { Injectable } from '@nestjs/common';
import { config } from '@aic/config';

@Injectable()
export class DatabaseService {
  constructor() {
    const dbConfig = config.database;
    // Use dbConfig to initialize database connection
  }
}
```

### Next.js Application

```typescript
// app/api/config/route.ts
import { config } from '@aic/config';

export async function GET() {
  return Response.json({
    environment: config.env,
    version: config.appVersion,
    features: config.featureFlags,
  });
}
```

### Express Middleware

```typescript
import express from 'express';
import { config } from '@aic/config';

const app = express();

app.use((req, res, next) => {
  if (config.featureFlags.maintenanceMode) {
    return res.status(503).json({
      error: 'Service temporarily unavailable',
    });
  }
  next();
});

app.listen(config.api.port);
```

### Prisma Configuration

```typescript
// prisma/client.ts
import { PrismaClient } from '@prisma/client';
import { config } from '@aic/config';

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `postgresql://${config.database.username}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.database}`,
    },
  },
  log: config.database.logging ? ['query', 'error', 'warn'] : ['error'],
});
```

## 🔧 Advanced Usage

### Custom Environment Loading

```typescript
import { getConfig, Environment } from '@aic/config';

function loadConfigBasedOnRegion(region: string) {
  const baseConfig = getConfig(Environment.PRODUCTION);
  
  // Override specific values based on region
  return {
    ...baseConfig,
    database: {
      ...baseConfig.database,
      host: `db-${region}.example.com`,
    },
  };
}
```

### Configuration Merging

```typescript
import { config } from '@aic/config';

const customConfig = {
  ...config,
  api: {
    ...config.api,
    timeout: 60000, // Override timeout
  },
};
```

## 🎯 Best Practices

1. **Never hardcode secrets**: Always use environment variables
2. **Validate on startup**: Call `validateEnvironmentVariables()` in your main file
3. **Use feature flags**: Control features via configuration instead of code changes
4. **Environment-specific settings**: Use appropriate settings for each environment
5. **Keep it DRY**: Import from `@aic/config` instead of duplicating configuration
6. **Type safety**: Leverage TypeScript types for compile-time safety
7. **Sanitize logs**: Never log sensitive values (use `printConfig()` for safe logging)

## 🚨 Security Considerations

- **Secrets Management**: Never commit `.env` files with real secrets
- **JWT Secrets**: Use strong, random strings (minimum 32 characters)
- **Database Passwords**: Use strong passwords and rotate regularly
- **API Keys**: Restrict permissions and rotate periodically
- **SSL/TLS**: Always enable SSL in production and staging
- **Rate Limiting**: Configure appropriate limits for production

## 🧪 Testing

```typescript
import { loadConfig, Environment } from '@aic/config';

describe('Configuration', () => {
  it('should load test config', () => {
    const testConfig = loadConfig(Environment.TEST);
    expect(testConfig.isTest).toBe(true);
    expect(testConfig.database.synchronize).toBe(true);
  });

  it('should have correct production settings', () => {
    const prodConfig = loadConfig(Environment.PRODUCTION);
    expect(prodConfig.isProduction).toBe(true);
    expect(prodConfig.database.ssl).toBe(true);
    expect(prodConfig.database.synchronize).toBe(false);
  });
});
```

## 📖 API Reference

### Functions

#### `config`
Default export of the current environment's configuration.

```typescript
import { config } from '@aic/config';
```

#### `loadConfig(environment?: Environment): AppConfig`
Load configuration for a specific environment.

```typescript
const config = loadConfig(Environment.PRODUCTION);
```

#### `getConfig(environment: Environment): AppConfig`
Get configuration for a specific environment (alias for loadConfig).

```typescript
const devConfig = getConfig(Environment.DEVELOPMENT);
```

#### `getCurrentEnvironment(): Environment`
Get the current environment based on NODE_ENV.

```typescript
const env = getCurrentEnvironment(); // 'development' | 'staging' | 'production' | 'test'
```

#### `validateEnvironmentVariables(config: AppConfig): void`
Validate that all required environment variables are set. Throws an error if validation fails.

```typescript
validateEnvironmentVariables(config);
```

#### `printConfig(config: AppConfig): void`
Print a sanitized version of the configuration (safe for logging).

```typescript
printConfig(config);
```

### Types

All TypeScript interfaces are exported and available for import:

```typescript
import type {
  AppConfig,
  ApiConfig,
  DatabaseConfig,
  RedisConfig,
  AuthConfig,
  StorageConfig,
  EmailConfig,
  KafkaConfig,
  MonitoringConfig,
  AIConfig,
  FeatureFlagsConfig,
  IntegrationsConfig,
} from '@aic/config';
```

### Enums

```typescript
import { Environment, LogLevel, NodeEnv } from '@aic/config';

Environment.DEVELOPMENT
Environment.STAGING
Environment.PRODUCTION
Environment.TEST

LogLevel.ERROR
LogLevel.WARN
LogLevel.INFO
LogLevel.DEBUG
LogLevel.VERBOSE

NodeEnv.DEVELOPMENT
NodeEnv.PRODUCTION
NodeEnv.TEST
```

## 🤝 Contributing

When adding new configuration options:

1. Add the type definition in `src/types/index.ts`
2. Add the default values in all environment files
3. Update this README with documentation
4. Add validation in `validateEnvironmentVariables()` if required

## 📝 License

Private - AIC SMB Copilot Platform

## 🔗 Related Packages

- `@aic/types` - Shared TypeScript types
- `@aic/constants` - Shared constants
- `@aic/utils` - Shared utility functions
- `@aic/logger` - Centralized logging

---

**Version:** 1.0.0  
**Last Updated:** November 2024