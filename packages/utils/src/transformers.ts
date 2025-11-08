/**
 * Transformer Utility Functions
 * 
 * Data transformation and conversion utilities
 */

/**
 * Convert query string to object
 * @param queryString - Query string (with or without '?')
 * @returns Object with query parameters
 */
export function parseQueryString(queryString: string): Record<string, string> {
  const params = new URLSearchParams(queryString.replace(/^\?/, ''));
  const result: Record<string, string> = {};
  
  params.forEach((value, key) => {
    result[key] = value;
  });
  
  return result;
}

/**
 * Convert object to query string
 * @param params - Object with parameters
 * @returns Query string
 */
export function toQueryString(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      searchParams.append(key, String(value));
    }
  });
  
  return searchParams.toString();
}

/**
 * Convert CSV string to array of objects
 * @param csv - CSV string
 * @param delimiter - Column delimiter (default: ',')
 * @returns Array of objects
 */
export function csvToArray(csv: string, delimiter: string = ','): Record<string, string>[] {
  const lines = csv.trim().split('\n');
  if (lines.length === 0) return [];
  
  const headers = lines[0].split(delimiter).map((h) => h.trim());
  const data: Record<string, string>[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(delimiter).map((v) => v.trim());
    const row: Record<string, string> = {};
    
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    
    data.push(row);
  }
  
  return data;
}

/**
 * Convert array of objects to CSV string
 * @param data - Array of objects
 * @param headers - Optional headers (default: keys from first object)
 * @param delimiter - Column delimiter (default: ',')
 * @returns CSV string
 */
export function arrayToCSV(
  data: Record<string, any>[],
  headers?: string[],
  delimiter: string = ','
): string {
  if (data.length === 0) return '';
  
  const keys = headers || Object.keys(data[0]);
  const rows: string[] = [keys.join(delimiter)];
  
  data.forEach((item) => {
    const values = keys.map((key) => {
      const value = item[key];
      const str = value === null || value === undefined ? '' : String(value);
      // Escape values containing delimiter or quotes
      return str.includes(delimiter) || str.includes('"') ? `"${str.replace(/"/g, '""')}"` : str;
    });
    rows.push(values.join(delimiter));
  });
  
  return rows.join('\n');
}

/**
 * Convert RGB to HEX color
 * @param r - Red (0-255)
 * @param g - Green (0-255)
 * @param b - Blue (0-255)
 * @returns HEX color string
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const hex = Math.max(0, Math.min(255, n)).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Convert HEX to RGB color
 * @param hex - HEX color string
 * @returns RGB object
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Convert object to FormData
 * @param obj - Object to convert
 * @returns FormData instance
 */
export function toFormData(obj: Record<string, any>): FormData {
  const formData = new FormData();
  
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      if (value instanceof File || value instanceof Blob) {
        formData.append(key, value);
      } else if (Array.isArray(value)) {
        value.forEach((item) => formData.append(`${key}[]`, item));
      } else {
        formData.append(key, String(value));
      }
    }
  });
  
  return formData;
}

/**
 * Convert snake_case to camelCase
 * @param str - String in snake_case
 * @returns String in camelCase
 */
export function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Convert camelCase to snake_case
 * @param str - String in camelCase
 * @returns String in snake_case
 */
export function camelToSnake(str: string): string {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

/**
 * Convert temperature from Celsius to Fahrenheit
 * @param celsius - Temperature in Celsius
 * @returns Temperature in Fahrenheit
 */
export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

/**
 * Convert temperature from Fahrenheit to Celsius
 * @param fahrenheit - Temperature in Fahrenheit
 * @returns Temperature in Celsius
 */
export function fahrenheitToCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

/**
 * Convert kilometers to miles
 * @param km - Distance in kilometers
 * @returns Distance in miles
 */
export function kmToMiles(km: number): number {
  return km * 0.621371;
}

/**
 * Convert miles to kilometers
 * @param miles - Distance in miles
 * @returns Distance in kilometers
 */
export function milesToKm(miles: number): number {
  return miles * 1.60934;
}

/**
 * Convert pounds to kilograms
 * @param lbs - Weight in pounds
 * @returns Weight in kilograms
 */
export function lbsToKg(lbs: number): number {
  return lbs * 0.453592;
}

/**
 * Convert kilograms to pounds
 * @param kg - Weight in kilograms
 * @returns Weight in pounds
 */
export function kgToLbs(kg: number): number {
  return kg * 2.20462;
}

/**
 * Encode string to Base64
 * @param str - String to encode
 * @returns Base64 encoded string
 */
export function toBase64(str: string): string {
  if (typeof btoa !== 'undefined') {
    return btoa(str);
  }
  return Buffer.from(str).toString('base64');
}

/**
 * Decode Base64 string
 * @param base64 - Base64 encoded string
 * @returns Decoded string
 */
export function fromBase64(base64: string): string {
  if (typeof atob !== 'undefined') {
    return atob(base64);
  }
  return Buffer.from(base64, 'base64').toString();
}

/**
 * Convert Buffer to Base64
 * @param buffer - Buffer to convert
 * @returns Base64 string
 */
export function bufferToBase64(buffer: Buffer | ArrayBuffer): string {
  if (buffer instanceof ArrayBuffer) {
    const bytes = new Uint8Array(buffer);
    return Buffer.from(bytes).toString('base64');
  }
  return buffer.toString('base64');
}

/**
 * Convert Base64 to Buffer
 * @param base64 - Base64 string
 * @returns Buffer
 */
export function base64ToBuffer(base64: string): Buffer {
  return Buffer.from(base64, 'base64');
}

/**
 * Serialize JavaScript value to JSON string
 * @param value - Value to serialize
 * @param pretty - Pretty print (default: false)
 * @returns JSON string
 */
export function serialize(value: any, pretty: boolean = false): string {
  return JSON.stringify(value, null, pretty ? 2 : 0);
}

/**
 * Deserialize JSON string to JavaScript value
 * @param json - JSON string
 * @returns Parsed value
 */
export function deserialize<T = any>(json: string): T {
  return JSON.parse(json);
}

/**
 * Convert string to boolean
 * @param str - String to convert
 * @returns Boolean value
 */
export function stringToBoolean(str: string): boolean {
  const truthy = ['true', '1', 'yes', 'y', 'on'];
  return truthy.includes(str.toLowerCase());
}

/**
 * Convert boolean to string
 * @param bool - Boolean value
 * @param format - Output format ('yes/no', 'on/off', 'true/false')
 * @returns String representation
 */
export function booleanToString(
  bool: boolean,
  format: 'yes/no' | 'on/off' | 'true/false' = 'true/false'
): string {
  const formats = {
    'yes/no': bool ? 'yes' : 'no',
    'on/off': bool ? 'on' : 'off',
    'true/false': bool ? 'true' : 'false',
  };
  
  return formats[format];
}

/**
 * Convert array to object using a key
 * @param array - Array to convert
 * @param key - Key to use for object keys
 * @returns Object with array items as values
 */
export function arrayToObject<T extends Record<string, any>>(
  array: T[],
  key: keyof T
): Record<string, T> {
  const result: Record<string, T> = {};
  
  array.forEach((item) => {
    result[String(item[key])] = item;
  });
  
  return result;
}

/**
 * Convert Map to object
 * @param map - Map to convert
 * @returns Plain object
 */
export function mapToObject<T>(map: Map<string, T>): Record<string, T> {
  const result: Record<string, T> = {};
  
  map.forEach((value, key) => {
    result[key] = value;
  });
  
  return result;
}

/**
 * Convert object to Map
 * @param obj - Object to convert
 * @returns Map
 */
export function objectToMap<T>(obj: Record<string, T>): Map<string, T> {
  return new Map(Object.entries(obj));
}

/**
 * Convert Set to array
 * @param set - Set to convert
 * @returns Array
 */
export function setToArray<T>(set: Set<T>): T[] {
  return Array.from(set);
}

/**
 * Convert array to Set
 * @param array - Array to convert
 * @returns Set
 */
export function arrayToSet<T>(array: T[]): Set<T> {
  return new Set(array);
}

/**
 * Normalize URL (ensure it starts with protocol)
 * @param url - URL to normalize
 * @param protocol - Protocol to use (default: 'https')
 * @returns Normalized URL
 */
export function normalizeUrl(url: string, protocol: string = 'https'): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  return `${protocol}://${url}`;
}

/**
 * Parse user agent string
 * @param userAgent - User agent string
 * @returns Parsed user agent info
 */
export function parseUserAgent(userAgent: string): {
  browser: string;
  version: string;
  os: string;
  device: string;
} {
  // Simple parser - in production, use a library like ua-parser-js
  const result = {
    browser: 'Unknown',
    version: '0',
    os: 'Unknown',
    device: 'desktop',
  };
  
  // Browser detection
  if (userAgent.includes('Chrome')) result.browser = 'Chrome';
  else if (userAgent.includes('Firefox')) result.browser = 'Firefox';
  else if (userAgent.includes('Safari')) result.browser = 'Safari';
  else if (userAgent.includes('Edge')) result.browser = 'Edge';
  
  // OS detection
  if (userAgent.includes('Windows')) result.os = 'Windows';
  else if (userAgent.includes('Mac')) result.os = 'macOS';
  else if (userAgent.includes('Linux')) result.os = 'Linux';
  else if (userAgent.includes('Android')) result.os = 'Android';
  else if (userAgent.includes('iOS')) result.os = 'iOS';
  
  // Device detection
  if (userAgent.includes('Mobile')) result.device = 'mobile';
  else if (userAgent.includes('Tablet')) result.device = 'tablet';
  
  return result;
}