/**
 * Authentication configuration
 */

import { env } from './env';

export interface AuthConfig {
  jwt: {
    secret: string;
    expiresIn: string;
    refreshExpiresIn: string;
    issuer: string;
    audience: string;
  };
  encryption: {
    key: string;
    algorithm: string;
  };
  session: {
    maxSessions: number;
    expiryDays: number;
    rememberMeDays: number;
  };
  password: {
    minLength: number;
    maxLength: number;
    requireUppercase: boolean;
    requireLowercase: boolean;
    requireNumbers: boolean;
    requireSpecialChars: boolean;
    preventReuse: number;
    maxAttempts: number;
    lockoutDuration: number; // minutes
  };
  oauth: {
    google?: {
      clientId: string;
      clientSecret: string;
    };
    github?: {
      clientId: string;
      clientSecret: string;
    };
    microsoft?: {
      clientId: string;
      clientSecret: string;
    };
  };
}

/**
 * Get authentication configuration
 */
export const getAuthConfig = (): AuthConfig => {
  const config = env();

  return {
    jwt: {
      secret: config.JWT_SECRET,
      expiresIn: config.JWT_EXPIRATION,
      refreshExpiresIn: config.JWT_REFRESH_EXPIRATION,
      issuer: 'aic-copilot',
      audience: 'aic-copilot-api',
    },
    encryption: {
      key: config.ENCRYPTION_KEY,
      algorithm: 'aes-256-gcm',
    },
    session: {
      maxSessions: 5,
      expiryDays: 7,
      rememberMeDays: 365,
    },
    password: {
      minLength: 8,
      maxLength: 128,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialChars: true,
      preventReuse: 5,
      maxAttempts: 5,
      lockoutDuration: 30,
    },
    oauth: {
      // Add OAuth configs as needed
    },
  };
};

/**
 * Singleton instance
 */
let authConfigInstance: AuthConfig | null = null;

/**
 * Get auth config (singleton)
 */
export const authConfig = (): AuthConfig => {
  if (!authConfigInstance) {
    authConfigInstance = getAuthConfig();
  }
  return authConfigInstance;
};