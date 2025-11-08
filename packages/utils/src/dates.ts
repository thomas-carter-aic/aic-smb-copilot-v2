/**
 * Date Utilities
 * Date formatting, manipulation, and comparison functions
 */

/**
 * Format a date to ISO string
 * @param date - Date to format
 * @returns ISO formatted string
 * 
 * @example
 * formatISO(new Date('2024-01-15')) // '2024-01-15T00:00:00.000Z'
 */
export function formatISO(date: Date): string {
  return date.toISOString();
}

/**
 * Format a date to a readable string
 * @param date - Date to format
 * @param format - Format string (default: 'YYYY-MM-DD')
 * @returns Formatted date string
 * 
 * @example
 * formatDate(new Date('2024-01-15')) // '2024-01-15'
 * formatDate(new Date('2024-01-15'), 'MM/DD/YYYY') // '01/15/2024'
 */
export function formatDate(
  date: Date,
  format: string = 'YYYY-MM-DD'
): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * Parse a date string
 * @param dateString - Date string to parse
 * @returns Date object or null if invalid
 * 
 * @example
 * parseDate('2024-01-15') // Date object
 * parseDate('invalid') // null
 */
export function parseDate(dateString: string): Date | null {
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
}

/**
 * Check if a date is valid
 * @param date - Date to check
 * @returns True if date is valid
 * 
 * @example
 * isValidDate(new Date()) // true
 * isValidDate(new Date('invalid')) // false
 */
export function isValidDate(date: Date): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}

/**
 * Add days to a date
 * @param date - Starting date
 * @param days - Number of days to add (can be negative)
 * @returns New date
 * 
 * @example
 * addDays(new Date('2024-01-15'), 5) // 2024-01-20
 * addDays(new Date('2024-01-15'), -5) // 2024-01-10
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Add hours to a date
 * @param date - Starting date
 * @param hours - Number of hours to add
 * @returns New date
 */
export function addHours(date: Date, hours: number): Date {
  const result = new Date(date);
  result.setHours(result.getHours() + hours);
  return result;
}

/**
 * Add minutes to a date
 * @param date - Starting date
 * @param minutes - Number of minutes to add
 * @returns New date
 */
export function addMinutes(date: Date, minutes: number): Date {
  const result = new Date(date);
  result.setMinutes(result.getMinutes() + minutes);
  return result;
}

/**
 * Get the difference between two dates in days
 * @param date1 - First date
 * @param date2 - Second date
 * @returns Difference in days
 * 
 * @example
 * diffInDays(new Date('2024-01-20'), new Date('2024-01-15')) // 5
 */
export function diffInDays(date1: Date, date2: Date): number {
  const diffTime = Math.abs(date1.getTime() - date2.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Get the difference between two dates in hours
 * @param date1 - First date
 * @param date2 - Second date
 * @returns Difference in hours
 */
export function diffInHours(date1: Date, date2: Date): number {
  const diffTime = Math.abs(date1.getTime() - date2.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60));
}

/**
 * Get the difference between two dates in minutes
 * @param date1 - First date
 * @param date2 - Second date
 * @returns Difference in minutes
 */
export function diffInMinutes(date1: Date, date2: Date): number {
  const diffTime = Math.abs(date1.getTime() - date2.getTime());
  return Math.floor(diffTime / (1000 * 60));
}

/**
 * Check if a date is in the past
 * @param date - Date to check
 * @returns True if date is in the past
 */
export function isPast(date: Date): boolean {
  return date.getTime() < Date.now();
}

/**
 * Check if a date is in the future
 * @param date - Date to check
 * @returns True if date is in the future
 */
export function isFuture(date: Date): boolean {
  return date.getTime() > Date.now();
}

/**
 * Check if a date is today
 * @param date - Date to check
 * @returns True if date is today
 */
export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

/**
 * Get the start of day for a date
 * @param date - Date to process
 * @returns Date at 00:00:00
 * 
 * @example
 * startOfDay(new Date('2024-01-15 14:30:00')) // 2024-01-15 00:00:00
 */
export function startOfDay(date: Date): Date {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * Get the end of day for a date
 * @param date - Date to process
 * @returns Date at 23:59:59.999
 * 
 * @example
 * endOfDay(new Date('2024-01-15 14:30:00')) // 2024-01-15 23:59:59.999
 */
export function endOfDay(date: Date): Date {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
}

/**
 * Get the start of month for a date
 * @param date - Date to process
 * @returns Date at first day of month
 */
export function startOfMonth(date: Date): Date {
  const result = new Date(date);
  result.setDate(1);
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * Get the end of month for a date
 * @param date - Date to process
 * @returns Date at last day of month
 */
export function endOfMonth(date: Date): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + 1, 0);
  result.setHours(23, 59, 59, 999);
  return result;
}

/**
 * Check if two dates are on the same day
 * @param date1 - First date
 * @param date2 - Second date
 * @returns True if same day
 */
export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

/**
 * Format a date as relative time (e.g., "2 hours ago")
 * @param date - Date to format
 * @returns Relative time string
 * 
 * @example
 * formatRelative(new Date(Date.now() - 3600000)) // "1 hour ago"
 */
export function formatRelative(date: Date): string {
  const now = Date.now();
  const diffMs = now - date.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSecs < 60) {
    return 'just now';
  } else if (diffMins < 60) {
    return `${diffMins} ${diffMins === 1 ? 'minute' : 'minutes'} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
  } else if (diffDays < 7) {
    return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
  } else {
    return formatDate(date, 'MM/DD/YYYY');
  }
}

/**
 * Get timestamp in seconds
 * @param date - Date to convert (default: now)
 * @returns Unix timestamp in seconds
 * 
 * @example
 * getTimestamp() // 1705334400
 */
export function getTimestamp(date: Date = new Date()): number {
  return Math.floor(date.getTime() / 1000);
}

/**
 * Create date from timestamp
 * @param timestamp - Unix timestamp in seconds
 * @returns Date object
 */
export function fromTimestamp(timestamp: number): Date {
  return new Date(timestamp * 1000);
}