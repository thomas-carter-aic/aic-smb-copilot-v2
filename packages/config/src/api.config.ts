/**
 * API configuration
 */

import { env } from './env';

export interface ApiConfig {
  version: string;
  prefix: string;
  timeout: number;
  rateLimit: {
    enabled: boolean;
    windowMs: number;
    maxRequests: number;
  };
  pagination: {
    defaultLimit: number;
    maxLimit: number;
  };
  ai: {
    openai?: {
      apiKey: string;
      model: string;
      maxTokens: number;
      temperature: number;
    };
    anthropic?: {
      apiKey: string;
      model: string;
    };
  };
  integrations: {
    stripe?: {
      secretKey: string;
      publicKey: string;
      webhookSecret: string;
    };
    sendgrid?: {
      apiKey: string;
    };
    twilio?: {
      accountSid: string;
      authToken: string;
      phoneNumber: string;
    };
  };
}

/**
 * Get API configuration
 */
export const getApiConfig = (): ApiConfig => {
  const config = env();

  return {
    version: 'v1',
    prefix: '/api/v1',
    timeout: 30000, // 30 seconds
    rateLimit: {
      enabled: true,
      windowMs: 60 * 1000, // 1 minute
      maxRequests: config.RATE_LIMIT_REQUESTS_PER_MINUTE,
    },
    pagination: {
      defaultLimit: 20,
      maxLimit: 100,
    },
    ai: {
      openai: config.OPENAI_API_KEY
        ? {
            apiKey: config.OPENAI_API_KEY,
            model: config.OPENAI_MODEL,
            maxTokens: config.OPENAI_MAX_TOKENS,
            temperature: config.OPENAI_TEMPERATURE,
          }
        : undefined,
      anthropic: config.ANTHROPIC_API_KEY
        ? {
            apiKey: config.ANTHROPIC_API_KEY,
            model: config.ANTHROPIC_MODEL,
          }
        : undefined,
    },
    integrations: {
      stripe:
        config.STRIPE_SECRET_KEY && config.STRIPE_PUBLIC_KEY
          ? {
              secretKey: config.STRIPE_SECRET_KEY,
              publicKey: config.STRIPE_PUBLIC_KEY,
              webhookSecret: config.STRIPE_WEBHOOK_SECRET || '',
            }
          : undefined,
      sendgrid: config.SENDGRID_API_KEY
        ? {
            apiKey: config.SENDGRID_API_KEY,
          }
        : undefined,
      twilio:
        config.TWILIO_ACCOUNT_SID && config.TWILIO_AUTH_TOKEN
          ? {
              accountSid: config.TWILIO_ACCOUNT_SID,
              authToken: config.TWILIO_AUTH_TOKEN,
              phoneNumber: config.TWILIO_PHONE_NUMBER || '',
            }
          : undefined,
    },
  };
};

/**
 * Singleton instance
 */
let apiConfigInstance: ApiConfig | null = null;

/**
 * Get API config (singleton)
 */
export const apiConfig = (): ApiConfig => {
  if (!apiConfigInstance) {
    apiConfigInstance = getApiConfig();
  }
  return apiConfigInstance;
};