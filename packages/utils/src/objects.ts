/**
 * Object Utility Functions
 * 
 * Utilities for object manipulation and transformation
 */

/**
 * Deep clone an object
 * @param obj - Object to clone
 * @returns Cloned object
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;
  
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }
  
  if (obj instanceof Array) {
    return obj.map((item) => deepClone(item)) as T;
  }
  
  if (obj instanceof Object) {
    const cloned = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }
  
  return obj;
}

/**
 * Deep merge multiple objects
 * @param objects - Objects to merge
 * @returns Merged object
 */
export function deepMerge<T extends Record<string, any>>(...objects: Partial<T>[]): T {
  const result = {} as T;
  
  for (const obj of objects) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        
        if (value && typeof value === 'object' && !Array.isArray(value)) {
          result[key] = deepMerge(result[key] || {}, value);
        } else {
          result[key] = value as T[Extract<keyof T, string>];
        }
      }
    }
  }
  
  return result;
}

/**
 * Pick specific properties from an object
 * @param obj - Source object
 * @param keys - Keys to pick
 * @returns New object with picked properties
 */
export function pick<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  
  return result;
}

/**
 * Omit specific properties from an object
 * @param obj - Source object
 * @param keys - Keys to omit
 * @returns New object without omitted properties
 */
export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  
  keys.forEach((key) => {
    delete result[key];
  });
  
  return result as Omit<T, K>;
}

/**
 * Get nested property value using dot notation
 * @param obj - Source object
 * @param path - Property path (e.g., 'user.address.city')
 * @param defaultValue - Default value if path doesn't exist
 * @returns Property value or default
 */
export function get<T = any>(
  obj: any,
  path: string,
  defaultValue?: T
): T | undefined {
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result === null || result === undefined) {
      return defaultValue;
    }
    result = result[key];
  }
  
  return result === undefined ? defaultValue : result;
}

/**
 * Set nested property value using dot notation
 * @param obj - Target object
 * @param path - Property path
 * @param value - Value to set
 * @returns Modified object
 */
export function set<T extends Record<string, any>>(
  obj: T,
  path: string,
  value: any
): T {
  const keys = path.split('.');
  const lastKey = keys.pop();
  
  if (!lastKey) return obj;
  
  let current = obj;
  
  for (const key of keys) {
    if (!(key in current) || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  
  current[lastKey] = value;
  return obj;
}

/**
 * Check if an object has a nested property
 * @param obj - Object to check
 * @param path - Property path
 * @returns True if property exists
 */
export function has(obj: any, path: string): boolean {
  const keys = path.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (current === null || current === undefined || !(key in current)) {
      return false;
    }
    current = current[key];
  }
  
  return true;
}

/**
 * Remove undefined values from an object
 * @param obj - Object to clean
 * @returns Object without undefined values
 */
export function compact<T extends Record<string, any>>(obj: T): Partial<T> {
  const result = {} as Partial<T>;
  
  for (const key in obj) {
    if (obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }
  
  return result;
}

/**
 * Remove null and undefined values from an object
 * @param obj - Object to clean
 * @returns Object without null/undefined values
 */
export function cleanObject<T extends Record<string, any>>(obj: T): Partial<T> {
  const result = {} as Partial<T>;
  
  for (const key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }
  
  return result;
}

/**
 * Flatten a nested object
 * @param obj - Object to flatten
 * @param prefix - Key prefix for flattened keys
 * @returns Flattened object
 */
export function flatten(
  obj: Record<string, any>,
  prefix: string = ''
): Record<string, any> {
  const result: Record<string, any> = {};
  
  for (const key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    
    if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      Object.assign(result, flatten(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  }
  
  return result;
}

/**
 * Unflatten a flattened object
 * @param obj - Flattened object
 * @returns Nested object
 */
export function unflatten(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  
  for (const key in obj) {
    set(result, key, obj[key]);
  }
  
  return result;
}

/**
 * Invert object keys and values
 * @param obj - Object to invert
 * @returns Inverted object
 */
export function invert(obj: Record<string, string | number>): Record<string, string> {
  const result: Record<string, string> = {};
  
  for (const key in obj) {
    result[String(obj[key])] = key;
  }
  
  return result;
}

/**
 * Map object values
 * @param obj - Source object
 * @param fn - Mapping function
 * @returns New object with mapped values
 */
export function mapValues<T extends Record<string, any>, R>(
  obj: T,
  fn: (value: T[keyof T], key: keyof T) => R
): Record<keyof T, R> {
  const result = {} as Record<keyof T, R>;
  
  for (const key in obj) {
    result[key] = fn(obj[key], key);
  }
  
  return result;
}

/**
 * Map object keys
 * @param obj - Source object
 * @param fn - Mapping function
 * @returns New object with mapped keys
 */
export function mapKeys<T extends Record<string, any>>(
  obj: T,
  fn: (key: keyof T, value: T[keyof T]) => string
): Record<string, T[keyof T]> {
  const result: Record<string, T[keyof T]> = {};
  
  for (const key in obj) {
    const newKey = fn(key, obj[key]);
    result[newKey] = obj[key];
  }
  
  return result;
}

/**
 * Check if two objects are deeply equal
 * @param obj1 - First object
 * @param obj2 - Second object
 * @returns True if objects are equal
 */
export function isEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true;
  
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object'
  ) {
    return false;
  }
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!isEqual(obj1[key], obj2[key])) return false;
  }
  
  return true;
}

/**
 * Check if an object is empty
 * @param obj - Object to check
 * @returns True if object is empty
 */
export function isEmpty(obj: any): boolean {
  if (obj === null || obj === undefined) return true;
  if (Array.isArray(obj) || typeof obj === 'string') return obj.length === 0;
  if (typeof obj === 'object') return Object.keys(obj).length === 0;
  return false;
}

/**
 * Get the difference between two objects
 * @param obj1 - Original object
 * @param obj2 - New object
 * @returns Object with differences
 */
export function diff(
  obj1: Record<string, any>,
  obj2: Record<string, any>
): Record<string, any> {
  const result: Record<string, any> = {};
  
  for (const key in obj2) {
    if (!isEqual(obj1[key], obj2[key])) {
      result[key] = obj2[key];
    }
  }
  
  return result;
}

/**
 * Create an object from key-value pairs
 * @param pairs - Array of [key, value] pairs
 * @returns Object
 */
export function fromPairs<T = any>(pairs: [string, T][]): Record<string, T> {
  const result: Record<string, T> = {};
  
  for (const [key, value] of pairs) {
    result[key] = value;
  }
  
  return result;
}

/**
 * Convert object to array of key-value pairs
 * @param obj - Object to convert
 * @returns Array of [key, value] pairs
 */
export function toPairs<T>(obj: Record<string, T>): [string, T][] {
  return Object.entries(obj);
}

/**
 * Get all keys from object (including nested)
 * @param obj - Object to get keys from
 * @param prefix - Key prefix
 * @returns Array of all keys
 */
export function getAllKeys(obj: Record<string, any>, prefix: string = ''): string[] {
  const keys: string[] = [];
  
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    keys.push(fullKey);
    
    if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      keys.push(...getAllKeys(obj[key], fullKey));
    }
  }
  
  return keys;
}

/**
 * Get all values from object (including nested)
 * @param obj - Object to get values from
 * @returns Array of all values
 */
export function getAllValues(obj: Record<string, any>): any[] {
  const values: any[] = [];
  
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      values.push(...getAllValues(obj[key]));
    } else {
      values.push(obj[key]);
    }
  }
  
  return values;
}

/**
 * Freeze object deeply (make immutable)
 * @param obj - Object to freeze
 * @returns Frozen object
 */
export function deepFreeze<T>(obj: T): Readonly<T> {
  Object.freeze(obj);
  
  if (obj && typeof obj === 'object') {
    Object.getOwnPropertyNames(obj).forEach((prop) => {
      const value = (obj as any)[prop];
      if (value && typeof value === 'object') {
        deepFreeze(value);
      }
    });
  }
  
  return obj;
}

/**
 * Convert object keys to camelCase
 * @param obj - Object to convert
 * @returns Object with camelCase keys
 */
export function camelCaseKeys<T extends Record<string, any>>(obj: T): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => camelCaseKeys(item));
  }
  
  if (obj && typeof obj === 'object') {
    const result: any = {};
    
    for (const key in obj) {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
      result[camelKey] = camelCaseKeys(obj[key]);
    }
    
    return result;
  }
  
  return obj;
}

/**
 * Convert object keys to snake_case
 * @param obj - Object to convert
 * @returns Object with snake_case keys
 */
export function snakeCaseKeys<T extends Record<string, any>>(obj: T): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => snakeCaseKeys(item));
  }
  
  if (obj && typeof obj === 'object') {
    const result: any = {};
    
    for (const key in obj) {
      const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      result[snakeKey] = snakeCaseKeys(obj[key]);
    }
    
    return result;
  }
  
  return obj;
}