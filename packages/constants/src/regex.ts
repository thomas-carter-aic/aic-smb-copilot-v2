/**
 * Common regex patterns
 */

/**
 * Email validation regex (RFC 5322 compliant)
 */
export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

/**
 * Password strength regex (minimum requirements)
 * - At least 8 characters
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one number
 * - At least one special character
 */
export const PASSWORD_STRONG_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

/**
 * Password medium strength regex
 * - At least 8 characters
 * - At least one letter
 * - At least one number
 */
export const PASSWORD_MEDIUM_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

/**
 * URL validation regex
 */
export const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

/**
 * Slug regex (lowercase letters, numbers, hyphens)
 */
export const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Phone number regex (international format)
 */
export const PHONE_REGEX = /^\+?[1-9]\d{1,14}$/;

/**
 * UUID v4 regex
 */
export const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * Hex color regex
 */
export const HEX_COLOR_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

/**
 * Credit card number regex (basic)
 */
export const CREDIT_CARD_REGEX = /^\d{13,19}$/;

/**
 * IP address regex (IPv4)
 */
export const IPV4_REGEX = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

/**
 * Domain name regex
 */
export const DOMAIN_REGEX = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i;

/**
 * Username regex (alphanumeric with underscores and hyphens)
 */
export const USERNAME_REGEX = /^[a-zA-Z0-9_-]{3,20}$/;

/**
 * Alphanumeric only
 */
export const ALPHANUMERIC_REGEX = /^[a-zA-Z0-9]+$/;

/**
 * Numbers only
 */
export const NUMERIC_REGEX = /^[0-9]+$/;

/**
 * Letters only
 */
export const ALPHA_REGEX = /^[a-zA-Z]+$/;

/**
 * API key format (example: sk_live_...)
 */
export const API_KEY_REGEX = /^(sk|pk)_(test|live)_[a-zA-Z0-9]{24,}$/;

/**
 * JWT token format
 */
export const JWT_REGEX = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/;

/**
 * ISO 8601 date format
 */
export const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/;

/**
 * Markdown image syntax
 */
export const MARKDOWN_IMAGE_REGEX = /!\[([^\]]*)\]\(([^)]+)\)/g;

/**
 * Markdown link syntax
 */
export const MARKDOWN_LINK_REGEX = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * HTML tags (for sanitization)
 */
export const HTML_TAG_REGEX = /<\/?[^>]+(>|$)/g;

/**
 * Mentions (@username)
 */
export const MENTION_REGEX = /@([a-zA-Z0-9_-]+)/g;

/**
 * Hashtags (#tag)
 */
export const HASHTAG_REGEX = /#([a-zA-Z0-9_-]+)/g;

/**
 * Validation helper functions
 */
export const validate = {
  email: (value: string): boolean => EMAIL_REGEX.test(value),
  password: (value: string): boolean => PASSWORD_MEDIUM_REGEX.test(value),
  passwordStrong: (value: string): boolean => PASSWORD_STRONG_REGEX.test(value),
  url: (value: string): boolean => URL_REGEX.test(value),
  slug: (value: string): boolean => SLUG_REGEX.test(value),
  phone: (value: string): boolean => PHONE_REGEX.test(value),
  uuid: (value: string): boolean => UUID_REGEX.test(value),
  hexColor: (value: string): boolean => HEX_COLOR_REGEX.test(value),
  creditCard: (value: string): boolean => CREDIT_CARD_REGEX.test(value),
  ipv4: (value: string): boolean => IPV4_REGEX.test(value),
  domain: (value: string): boolean => DOMAIN_REGEX.test(value),
  username: (value: string): boolean => USERNAME_REGEX.test(value),
  alphanumeric: (value: string): boolean => ALPHANUMERIC_REGEX.test(value),
  numeric: (value: string): boolean => NUMERIC_REGEX.test(value),
  alpha: (value: string): boolean => ALPHA_REGEX.test(value),
  apiKey: (value: string): boolean => API_KEY_REGEX.test(value),
  jwt: (value: string): boolean => JWT_REGEX.test(value),
  isoDate: (value: string): boolean => ISO_DATE_REGEX.test(value),
};