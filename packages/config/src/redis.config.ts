/**
 * Redis configuration
 */

import { env } from './env';

export interface RedisConfig {
  url: string;
  ttl: number;
  maxRetries: number;
  retryStrategy: (times: number) => number | void;
  keyPrefix: string;
}

/**
 * Get Redis configuration
 */
export const getRedisConfig = (): RedisConfig => {
  const config = env();

  return {
    url: config.REDIS_URL,
    ttl: config.REDIS_TTL,
    maxRetries: config.REDIS_MAX_RETRIES,
    retryStrategy: (times: number) => {
      if (times > config.REDIS_MAX_RETRIES) {
        return undefined; // Stop retrying
      }
      return Math.min(times * 50, 2000); // Exponential backoff
    },
    keyPrefix: 'aic:',
  };
};

/**
 * Singleton instance
 */
let redisConfigInstance: RedisConfig | null = null;

/**
 * Get Redis config (singleton)
 */
export const redisConfig = (): RedisConfig => {
  if (!redisConfigInstance) {
    redisConfigInstance = getRedisConfig();
  }
  return redisConfigInstance;
};