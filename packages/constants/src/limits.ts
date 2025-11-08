/**
 * System limits and quotas
 */

/**
 * Rate limits (requests per time window)
 */
export const RATE_LIMITS = {
  // General API
  API_REQUESTS_PER_MINUTE: 60,
  API_REQUESTS_PER_HOUR: 1000,
  
  // Auth endpoints
  LOGIN_ATTEMPTS_PER_HOUR: 5,
  PASSWORD_RESET_PER_DAY: 3,
  
  // AI endpoints
  AI_REQUESTS_PER_MINUTE: 10,
  AI_REQUESTS_PER_HOUR: 100,
  
  // File uploads
  UPLOADS_PER_HOUR: 50,
  
  // Webhooks
  WEBHOOK_CALLS_PER_MINUTE: 30,
} as const;

/**
 * File size limits (in bytes)
 */
export const FILE_SIZE_LIMITS = {
  AVATAR: 5 * 1024 * 1024, // 5 MB
  DOCUMENT: 50 * 1024 * 1024, // 50 MB
  IMAGE: 10 * 1024 * 1024, // 10 MB
  VIDEO: 500 * 1024 * 1024, // 500 MB
  GENERAL: 100 * 1024 * 1024, // 100 MB
} as const;

/**
 * Storage quotas per plan (in bytes)
 */
export const STORAGE_QUOTAS = {
  FREE: 1 * 1024 * 1024 * 1024, // 1 GB
  BASIC: 10 * 1024 * 1024 * 1024, // 10 GB
  PRO: 100 * 1024 * 1024 * 1024, // 100 GB
  ENTERPRISE: -1, // Unlimited
} as const;

/**
 * AI request quotas per plan (per month)
 */
export const AI_REQUEST_QUOTAS = {
  FREE: 100,
  BASIC: 1000,
  PRO: 10000,
  ENTERPRISE: -1, // Unlimited
} as const;

/**
 * User limits per plan
 */
export const USER_LIMITS = {
  FREE: 1,
  BASIC: 5,
  PRO: 50,
  ENTERPRISE: -1, // Unlimited
} as const;

/**
 * Workflow limits per plan
 */
export const WORKFLOW_LIMITS = {
  FREE: 5,
  BASIC: 25,
  PRO: -1, // Unlimited
  ENTERPRISE: -1, // Unlimited
} as const;

/**
 * Integration limits per plan
 */
export const INTEGRATION_LIMITS = {
  FREE: 2,
  BASIC: 5,
  PRO: 15,
  ENTERPRISE: -1, // Unlimited
} as const;

/**
 * String length limits
 */
export const STRING_LIMITS = {
  NAME_MIN: 1,
  NAME_MAX: 100,
  EMAIL_MAX: 255,
  PASSWORD_MIN: 8,
  PASSWORD_MAX: 128,
  DESCRIPTION_MAX: 500,
  TEXT_MAX: 5000,
  URL_MAX: 2048,
  SLUG_MIN: 3,
  SLUG_MAX: 50,
  TAG_MIN: 2,
  TAG_MAX: 30,
  TAGS_MAX_COUNT: 20,
} as const;

/**
 * Pagination limits
 */
export const PAGINATION_LIMITS = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
  MIN_PAGE_SIZE: 1,
} as const;

/**
 * Timeout limits (in milliseconds)
 */
export const TIMEOUT_LIMITS = {
  API_REQUEST: 30000, // 30 seconds
  FILE_UPLOAD: 300000, // 5 minutes
  WORKFLOW_EXECUTION: 300000, // 5 minutes
  AI_REQUEST: 60000, // 1 minute
  DATABASE_QUERY: 10000, // 10 seconds
} as const;

/**
 * Retry limits
 */
export const RETRY_LIMITS = {
  MAX_RETRIES: 3,
  INITIAL_DELAY: 1000, // 1 second
  MAX_DELAY: 60000, // 1 minute
  BACKOFF_MULTIPLIER: 2,
} as const;

/**
 * Cache TTL (in seconds)
 */
export const CACHE_TTL = {
  SHORT: 60, // 1 minute
  MEDIUM: 300, // 5 minutes
  LONG: 3600, // 1 hour
  VERY_LONG: 86400, // 24 hours
} as const;

/**
 * Session limits
 */
export const SESSION_LIMITS = {
  MAX_SESSIONS_PER_USER: 5,
  SESSION_EXPIRY: 7 * 24 * 60 * 60, // 7 days (in seconds)
  REFRESH_TOKEN_EXPIRY: 30 * 24 * 60 * 60, // 30 days (in seconds)
  REMEMBER_ME_EXPIRY: 365 * 24 * 60 * 60, // 365 days (in seconds)
} as const;

/**
 * Conversation limits
 */
export const CONVERSATION_LIMITS = {
  MAX_MESSAGES: 100,
  MAX_MESSAGE_LENGTH: 4000,
  MAX_CONTEXT_DOCUMENTS: 5,
  MAX_HISTORY_MESSAGES: 20, // Messages to include in context
} as const;