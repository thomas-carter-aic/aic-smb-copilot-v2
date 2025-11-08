/**
 * @aic/config
 * 
 * Centralized configuration management for the AIC SMB Copilot Platform
 * 
 * This package provides type-safe, environment-specific configuration
 * for all applications and services in the monorepo.
 * 
 * @example
 * ```typescript
 * import { config } from '@aic/config';
 * 
 * // Access configuration values
 * const dbHost = config.database.host;
 * const apiPort = config.api.port;
 * 
 * // Check environment
 * if (config.isDevelopment) {
 *   console.log('Running in development mode');
 * }
 * 
 * // Access feature flags
 * if (config.featureFlags.enableAnalytics) {
 *   // Initialize analytics
 * }
 * ```
 * 
 * @example
 * ```typescript
 * import { loadConfig, Environment } from '@aic/config';
 * 
 * // Load specific environment config
 * const prodConfig = loadConfig(Environment.PRODUCTION);
 * ```
 */

// Export all types
export * from './types';

// Export environment configurations
export {
  config,
  loadConfig,
  getConfig,
  getCurrentEnvironment,
  validateEnvironmentVariables,
  printConfig,
  developmentConfig,
  stagingConfig,
  productionConfig,
  testConfig,
} from './config/environments';

// Re-export enums for convenience
export { Environment, LogLevel, NodeEnv } from './types';