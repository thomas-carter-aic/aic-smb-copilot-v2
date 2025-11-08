/**
 * Format Utility Functions
 * 
 * String formatting and data presentation utilities
 */

/**
 * Format a number as currency
 * @param amount - Amount to format
 * @param currency - Currency code (default: 'USD')
 * @param locale - Locale for formatting (default: 'en-US')
 * @returns Formatted currency string
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Format a number with thousands separators
 * @param num - Number to format
 * @param decimals - Number of decimal places
 * @param locale - Locale for formatting (default: 'en-US')
 * @returns Formatted number string
 */
export function formatNumber(
  num: number,
  decimals: number = 0,
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
}

/**
 * Format a number as percentage
 * @param value - Value to format (e.g., 0.85 for 85%)
 * @param decimals - Number of decimal places (default: 0)
 * @returns Formatted percentage string
 */
export function formatPercentage(value: number, decimals: number = 0): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Format bytes to human-readable size
 * @param bytes - Number of bytes
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted size string (e.g., "1.5 MB")
 */
export function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
}

/**
 * Format a phone number (US format)
 * @param phone - Phone number string
 * @returns Formatted phone number
 */
export function formatPhoneUS(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  
  return phone;
}

/**
 * Format a credit card number
 * @param cardNumber - Card number string
 * @returns Formatted card number (e.g., "**** **** **** 1234")
 */
export function formatCreditCard(cardNumber: string): string {
  const cleaned = cardNumber.replace(/\s/g, '');
  const lastFour = cleaned.slice(-4);
  return `**** **** **** ${lastFour}`;
}

/**
 * Mask email address
 * @param email - Email address
 * @returns Masked email (e.g., "j***@example.com")
 */
export function maskEmail(email: string): string {
  const [local, domain] = email.split('@');
  if (!local || !domain) return email;
  
  const maskedLocal = local[0] + '*'.repeat(Math.max(local.length - 1, 3));
  return `${maskedLocal}@${domain}`;
}

/**
 * Capitalize first letter of a string
 * @param str - String to capitalize
 * @returns Capitalized string
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Convert string to title case
 * @param str - String to convert
 * @returns Title case string
 */
export function titleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ');
}

/**
 * Convert string to camelCase
 * @param str - String to convert
 * @returns camelCase string
 */
export function camelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

/**
 * Convert string to PascalCase
 * @param str - String to convert
 * @returns PascalCase string
 */
export function pascalCase(str: string): string {
  const camel = camelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

/**
 * Convert string to snake_case
 * @param str - String to convert
 * @returns snake_case string
 */
export function snakeCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '')
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

/**
 * Convert string to kebab-case
 * @param str - String to convert
 * @returns kebab-case string
 */
export function kebabCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Truncate string to specified length
 * @param str - String to truncate
 * @param length - Maximum length
 * @param suffix - Suffix to add (default: '...')
 * @returns Truncated string
 */
export function truncate(str: string, length: number, suffix: string = '...'): string {
  if (str.length <= length) return str;
  return str.slice(0, length - suffix.length) + suffix;
}

/**
 * Truncate string to word boundary
 * @param str - String to truncate
 * @param length - Approximate maximum length
 * @param suffix - Suffix to add (default: '...')
 * @returns Truncated string
 */
export function truncateWords(str: string, length: number, suffix: string = '...'): string {
  if (str.length <= length) return str;
  
  const truncated = str.slice(0, length);
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastSpace > 0) {
    return truncated.slice(0, lastSpace) + suffix;
  }
  
  return truncated + suffix;
}

/**
 * Pad string to specified length
 * @param str - String to pad
 * @param length - Target length
 * @param char - Character to pad with (default: ' ')
 * @param position - Pad position ('start' or 'end')
 * @returns Padded string
 */
export function pad(
  str: string,
  length: number,
  char: string = ' ',
  position: 'start' | 'end' = 'end'
): string {
  const padLength = Math.max(0, length - str.length);
  const padding = char.repeat(padLength);
  
  return position === 'start' ? padding + str : str + padding;
}

/**
 * Pluralize a word based on count
 * @param word - Singular word
 * @param count - Count to check
 * @param plural - Optional plural form (default: word + 's')
 * @returns Singular or plural word
 */
export function pluralize(word: string, count: number, plural?: string): string {
  if (count === 1) return word;
  return plural || word + 's';
}

/**
 * Format duration in milliseconds to human-readable string
 * @param ms - Duration in milliseconds
 * @returns Formatted duration string
 */
export function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    return `${days}d ${hours % 24}h`;
  } else if (hours > 0) {
    return `${hours}h ${minutes % 60}m`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds % 60}s`;
  } else {
    return `${seconds}s`;
  }
}

/**
 * Strip HTML tags from a string
 * @param html - HTML string
 * @returns Plain text string
 */
export function stripHTML(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

/**
 * Escape HTML special characters
 * @param str - String to escape
 * @returns Escaped string
 */
export function escapeHTML(str: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  
  return str.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * Unescape HTML special characters
 * @param str - String to unescape
 * @returns Unescaped string
 */
export function unescapeHTML(str: string): string {
  const map: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
  };
  
  return str.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, (entity) => map[entity]);
}

/**
 * Generate initials from a name
 * @param name - Full name
 * @param maxLength - Maximum number of initials (default: 2)
 * @returns Initials string
 */
export function getInitials(name: string, maxLength: number = 2): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0].toUpperCase())
    .slice(0, maxLength)
    .join('');
}

/**
 * Convert newlines to <br> tags
 * @param str - String with newlines
 * @returns String with <br> tags
 */
export function nl2br(str: string): string {
  return str.replace(/\n/g, '<br>');
}

/**
 * Convert <br> tags to newlines
 * @param str - String with <br> tags
 * @returns String with newlines
 */
export function br2nl(str: string): string {
  return str.replace(/<br\s*\/?>/gi, '\n');
}

/**
 * Format a list with proper grammar
 * @param items - Array of items
 * @param conjunction - Conjunction to use ('and' or 'or')
 * @returns Formatted list string
 */
export function formatList(items: string[], conjunction: 'and' | 'or' = 'and'): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  if (items.length === 2) return items.join(` ${conjunction} `);
  
  const allButLast = items.slice(0, -1).join(', ');
  const last = items[items.length - 1];
  
  return `${allButLast}, ${conjunction} ${last}`;
}

/**
 * Generate a slug from a string
 * @param str - String to slugify
 * @returns URL-friendly slug
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Highlight search terms in text
 * @param text - Text to highlight
 * @param search - Search term
 * @param highlightClass - CSS class for highlighting (default: 'highlight')
 * @returns HTML string with highlights
 */
export function highlightText(
  text: string,
  search: string,
  highlightClass: string = 'highlight'
): string {
  if (!search) return text;
  
  const regex = new RegExp(`(${search})`, 'gi');
  return text.replace(regex, `<span class="${highlightClass}">$1</span>`);
}

/**
 * Add ordinal suffix to a number (1st, 2nd, 3rd, etc.)
 * @param num - Number
 * @returns Number with ordinal suffix
 */
export function ordinal(num: number): string {
  const j = num % 10;
  const k = num % 100;
  
  if (j === 1 && k !== 11) return `${num}st`;
  if (j === 2 && k !== 12) return `${num}nd`;
  if (j === 3 && k !== 13) return `${num}rd`;
  
  return `${num}th`;
}