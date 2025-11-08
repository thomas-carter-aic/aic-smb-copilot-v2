/**
 * Cache configuration
 */

export interface CacheConfig {
  ttl: {
    short: number;
    medium: number;
    long: number;
    veryLong: number;
  };
  keyPatterns: {
    user: string;
    company: string;
    session: string;
    workflow: string;
    document: string;
  };
}

/**
 * Get cache configuration
 */
export const getCacheConfig = (): CacheConfig => {
  return {
    ttl: {
      short: 60, // 1 minute
      medium: 300, // 5 minutes
      long: 3600, // 1 hour
      veryLong: 86400, // 24 hours
    },
    keyPatterns: {
      user: 'user:{id}',
      company: 'company:{id}',
      session: 'session:{token}',
      workflow: 'workflow:{id}',
      document: 'document:{id}',
    },
  };
};

/**
 * Singleton instance
 */
let cacheConfigInstance: CacheConfig | null = null;

/**
 * Get cache config (singleton)
 */
export const cacheConfig = (): CacheConfig => {
  if (!cacheConfigInstance) {
    cacheConfigInstance = getCacheConfig();
  }
  return cacheConfigInstance;
};

/**
 * Helper to build cache key
 */
export const buildCacheKey = (pattern: string, params: Record<string, string>): string => {
  let key = pattern;
  for (const [param, value] of Object.entries(params)) {
    key = key.replace(`{${param}}`, value);
  }
  return key;
};