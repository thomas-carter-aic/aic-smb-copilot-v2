/**
 * Validation Helper Functions
 * 
 * Common validation utilities for data validation
 */

/**
 * Check if a string is a valid email
 * @param email - Email string to validate
 * @returns True if valid email
 */
export function isEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Check if a string is a valid URL
 * @param url - URL string to validate
 * @returns True if valid URL
 */
export function isUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if a string is a valid UUID (v4)
 * @param uuid - UUID string to validate
 * @returns True if valid UUID
 */
export function isUUID(uuid: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

/**
 * Check if a string is a valid phone number (US format)
 * @param phone - Phone number string
 * @returns True if valid phone number
 */
export function isPhoneUS(phone: string): boolean {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Check if a string is a valid credit card number (Luhn algorithm)
 * @param cardNumber - Credit card number
 * @returns True if valid card number
 */
export function isCreditCard(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\s/g, '');
  
  if (!/^\d{13,19}$/.test(cleaned)) return false;
  
  let sum = 0;
  let isEven = false;
  
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}

/**
 * Check if a string is a valid IP address (v4)
 * @param ip - IP address string
 * @returns True if valid IP
 */
export function isIPv4(ip: string): boolean {
  const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
  
  if (!ipRegex.test(ip)) return false;
  
  return ip.split('.').every((part) => {
    const num = parseInt(part, 10);
    return num >= 0 && num <= 255;
  });
}

/**
 * Check if a string is a valid IP address (v6)
 * @param ip - IP address string
 * @returns True if valid IPv6
 */
export function isIPv6(ip: string): boolean {
  const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
  return ipv6Regex.test(ip);
}

/**
 * Check if a string is a valid hex color
 * @param color - Color string
 * @returns True if valid hex color
 */
export function isHexColor(color: string): boolean {
  const hexRegex = /^#?([0-9A-F]{3}){1,2}$/i;
  return hexRegex.test(color);
}

/**
 * Check if a string is a valid ISO date
 * @param date - Date string
 * @returns True if valid ISO date
 */
export function isISODate(date: string): boolean {
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d{3})?(Z|[+-]\d{2}:\d{2})?)?$/;
  
  if (!isoDateRegex.test(date)) return false;
  
  const parsedDate = new Date(date);
  return !isNaN(parsedDate.getTime());
}

/**
 * Check if a string contains only letters
 * @param str - String to check
 * @returns True if only letters
 */
export function isAlpha(str: string): boolean {
  return /^[A-Za-z]+$/.test(str);
}

/**
 * Check if a string contains only numbers
 * @param str - String to check
 * @returns True if only numbers
 */
export function isNumeric(str: string): boolean {
  return /^\d+$/.test(str);
}

/**
 * Check if a string contains only alphanumeric characters
 * @param str - String to check
 * @returns True if alphanumeric
 */
export function isAlphanumeric(str: string): boolean {
  return /^[A-Za-z0-9]+$/.test(str);
}

/**
 * Check if a string is lowercase
 * @param str - String to check
 * @returns True if lowercase
 */
export function isLowerCase(str: string): boolean {
  return str === str.toLowerCase() && str !== str.toUpperCase();
}

/**
 * Check if a string is uppercase
 * @param str - String to check
 * @returns True if uppercase
 */
export function isUpperCase(str: string): boolean {
  return str === str.toUpperCase() && str !== str.toLowerCase();
}

/**
 * Check if a string is a valid JSON
 * @param str - String to check
 * @returns True if valid JSON
 */
export function isJSON(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if a string is a valid base64
 * @param str - String to check
 * @returns True if valid base64
 */
export function isBase64(str: string): boolean {
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
  
  if (!base64Regex.test(str)) return false;
  if (str.length % 4 !== 0) return false;
  
  return true;
}

/**
 * Check if a password meets strength requirements
 * @param password - Password to check
 * @param minLength - Minimum length (default: 8)
 * @returns Object with strength info
 */
export function checkPasswordStrength(
  password: string,
  minLength: number = 8
): {
  isValid: boolean;
  score: number;
  feedback: string[];
} {
  const feedback: string[] = [];
  let score = 0;
  
  // Length check
  if (password.length < minLength) {
    feedback.push(`Password must be at least ${minLength} characters`);
  } else {
    score += 1;
  }
  
  // Uppercase check
  if (!/[A-Z]/.test(password)) {
    feedback.push('Add uppercase letters');
  } else {
    score += 1;
  }
  
  // Lowercase check
  if (!/[a-z]/.test(password)) {
    feedback.push('Add lowercase letters');
  } else {
    score += 1;
  }
  
  // Number check
  if (!/\d/.test(password)) {
    feedback.push('Add numbers');
  } else {
    score += 1;
  }
  
  // Special character check
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    feedback.push('Add special characters');
  } else {
    score += 1;
  }
  
  return {
    isValid: score >= 4,
    score,
    feedback,
  };
}

/**
 * Check if a value is within a range
 * @param value - Value to check
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns True if in range
 */
export function inRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

/**
 * Check if a string matches a pattern
 * @param str - String to check
 * @param pattern - RegExp pattern or string
 * @returns True if matches
 */
export function matches(str: string, pattern: string | RegExp): boolean {
  const regex = typeof pattern === 'string' ? new RegExp(pattern) : pattern;
  return regex.test(str);
}

/**
 * Check if a value is null or undefined
 * @param value - Value to check
 * @returns True if null or undefined
 */
export function isNil(value: any): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * Check if a value is empty (null, undefined, empty string, empty array, empty object)
 * @param value - Value to check
 * @returns True if empty
 */
export function isEmpty(value: any): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

/**
 * Check if a value is a plain object
 * @param value - Value to check
 * @returns True if plain object
 */
export function isPlainObject(value: any): boolean {
  if (typeof value !== 'object' || value === null) return false;
  if (Object.prototype.toString.call(value) !== '[object Object]') return false;
  
  const proto = Object.getPrototypeOf(value);
  if (proto === null) return true;
  
  const constructor = proto.constructor;
  return (
    typeof constructor === 'function' &&
    constructor instanceof constructor &&
    Function.prototype.toString.call(constructor) ===
      Function.prototype.toString.call(Object)
  );
}

/**
 * Check if a value is a function
 * @param value - Value to check
 * @returns True if function
 */
export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

/**
 * Check if a value is a string
 * @param value - Value to check
 * @returns True if string
 */
export function isString(value: any): value is string {
  return typeof value === 'string';
}

/**
 * Check if a value is a number
 * @param value - Value to check
 * @returns True if number
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * Check if a value is a boolean
 * @param value - Value to check
 * @returns True if boolean
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Check if a value is an array
 * @param value - Value to check
 * @returns True if array
 */
export function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

/**
 * Check if a value is a Date object
 * @param value - Value to check
 * @returns True if Date
 */
export function isDate(value: any): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}

/**
 * Check if a value is a valid date string or Date
 * @param value - Value to check
 * @returns True if valid date
 */
export function isValidDate(value: any): boolean {
  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }
  
  if (typeof value === 'string') {
    const date = new Date(value);
    return !isNaN(date.getTime());
  }
  
  return false;
}

/**
 * Validate if string length is within bounds
 * @param str - String to validate
 * @param min - Minimum length
 * @param max - Maximum length
 * @returns True if valid length
 */
export function isLength(str: string, min: number, max?: number): boolean {
  const length = str.length;
  
  if (length < min) return false;
  if (max !== undefined && length > max) return false;
  
  return true;
}

/**
 * Check if a string contains only whitespace
 * @param str - String to check
 * @returns True if only whitespace
 */
export function isWhitespace(str: string): boolean {
  return /^\s*$/.test(str);
}

/**
 * Check if an object has a specific property
 * @param obj - Object to check
 * @param key - Property key
 * @returns True if has property
 */
export function hasProperty<T extends object>(obj: T, key: string | symbol): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * Check if a value is a valid enum value
 * @param value - Value to check
 * @param enumObj - Enum object
 * @returns True if valid enum value
 */
export function isEnumValue<T extends object>(value: any, enumObj: T): boolean {
  return Object.values(enumObj).includes(value);
}

/**
 * Check if two values are strictly equal
 * @param value1 - First value
 * @param value2 - Second value
 * @returns True if equal
 */
export function isEqual(value1: any, value2: any): boolean {
  return value1 === value2;
}

/**
 * Check if a string is a valid slug
 * @param str - String to check
 * @returns True if valid slug
 */
export function isSlug(str: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(str);
}

/**
 * Check if a string is a valid username
 * @param username - Username to check
 * @param minLength - Minimum length (default: 3)
 * @param maxLength - Maximum length (default: 20)
 * @returns True if valid username
 */
export function isUsername(
  username: string,
  minLength: number = 3,
  maxLength: number = 20
): boolean {
  if (username.length < minLength || username.length > maxLength) return false;
  return /^[a-zA-Z0-9_-]+$/.test(username);
}