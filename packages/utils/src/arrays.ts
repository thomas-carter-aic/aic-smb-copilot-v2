/**
 * Array Utility Functions
 * 
 * Collection of type-safe array manipulation utilities
 */

/**
 * Remove duplicate values from an array
 * @param array - The array to deduplicate
 * @returns Array with unique values
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Remove duplicate objects based on a key
 * @param array - The array of objects
 * @param key - The key to check for uniqueness
 * @returns Array with unique objects
 */
export function uniqueBy<T extends Record<string, any>>(
  array: T[],
  key: keyof T
): T[] {
  const seen = new Set();
  return array.filter((item) => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
}

/**
 * Chunk an array into smaller arrays of specified size
 * @param array - The array to chunk
 * @param size - The size of each chunk
 * @returns Array of chunked arrays
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (size <= 0) throw new Error('Chunk size must be greater than 0');
  
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * Group array elements by a key
 * @param array - The array to group
 * @param key - The key to group by
 * @returns Object with grouped arrays
 */
export function groupBy<T extends Record<string, any>>(
  array: T[],
  key: keyof T
): Record<string, T[]> {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

/**
 * Create a map from an array using a key
 * @param array - The array to convert
 * @param key - The key to use as map key
 * @returns Map object
 */
export function keyBy<T extends Record<string, any>>(
  array: T[],
  key: keyof T
): Map<string | number, T> {
  return new Map(array.map((item) => [item[key], item]));
}

/**
 * Sort array of objects by a key
 * @param array - The array to sort
 * @param key - The key to sort by
 * @param order - Sort order (asc or desc)
 * @returns Sorted array
 */
export function sortBy<T extends Record<string, any>>(
  array: T[],
  key: keyof T,
  order: 'asc' | 'desc' = 'asc'
): T[] {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });
}

/**
 * Flatten a nested array
 * @param array - The nested array to flatten
 * @param depth - Maximum depth to flatten (default: Infinity)
 * @returns Flattened array
 */
export function flatten<T>(array: any[], depth: number = Infinity): T[] {
  if (depth === 0) return array;
  
  return array.reduce((result, item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item, depth - 1));
    } else {
      result.push(item);
    }
    return result;
  }, []);
}

/**
 * Shuffle array elements randomly
 * @param array - The array to shuffle
 * @returns Shuffled array (new array)
 */
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get a random element from an array
 * @param array - The array to sample from
 * @returns Random element
 */
export function sample<T>(array: T[]): T | undefined {
  if (array.length === 0) return undefined;
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Get multiple random elements from an array
 * @param array - The array to sample from
 * @param count - Number of elements to sample
 * @returns Array of random elements
 */
export function sampleSize<T>(array: T[], count: number): T[] {
  if (count <= 0) return [];
  if (count >= array.length) return shuffle(array);
  
  const shuffled = shuffle(array);
  return shuffled.slice(0, count);
}

/**
 * Find the intersection of multiple arrays
 * @param arrays - Arrays to intersect
 * @returns Array with common elements
 */
export function intersection<T>(...arrays: T[][]): T[] {
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return arrays[0];
  
  const [first, ...rest] = arrays;
  return first.filter((item) => rest.every((arr) => arr.includes(item)));
}

/**
 * Find the difference between two arrays
 * @param array - The main array
 * @param values - Values to exclude
 * @returns Array with excluded elements
 */
export function difference<T>(array: T[], values: T[]): T[] {
  const valueSet = new Set(values);
  return array.filter((item) => !valueSet.has(item));
}

/**
 * Check if two arrays are equal
 * @param array1 - First array
 * @param array2 - Second array
 * @returns True if arrays are equal
 */
export function isEqual<T>(array1: T[], array2: T[]): boolean {
  if (array1.length !== array2.length) return false;
  return array1.every((item, index) => item === array2[index]);
}

/**
 * Remove falsy values from an array
 * @param array - The array to compact
 * @returns Array without falsy values
 */
export function compact<T>(array: (T | null | undefined | false | 0 | '')[]): T[] {
  return array.filter(Boolean) as T[];
}

/**
 * Take first n elements from an array
 * @param array - The array
 * @param n - Number of elements to take
 * @returns Array with first n elements
 */
export function take<T>(array: T[], n: number): T[] {
  if (n <= 0) return [];
  return array.slice(0, n);
}

/**
 * Take last n elements from an array
 * @param array - The array
 * @param n - Number of elements to take
 * @returns Array with last n elements
 */
export function takeLast<T>(array: T[], n: number): T[] {
  if (n <= 0) return [];
  return array.slice(-n);
}

/**
 * Partition array into two groups based on predicate
 * @param array - The array to partition
 * @param predicate - Function to test each element
 * @returns Tuple of [truthy, falsy] arrays
 */
export function partition<T>(
  array: T[],
  predicate: (item: T) => boolean
): [T[], T[]] {
  const truthy: T[] = [];
  const falsy: T[] = [];
  
  array.forEach((item) => {
    if (predicate(item)) {
      truthy.push(item);
    } else {
      falsy.push(item);
    }
  });
  
  return [truthy, falsy];
}

/**
 * Create an array of numbers in a range
 * @param start - Start of range (inclusive)
 * @param end - End of range (exclusive)
 * @param step - Step between numbers
 * @returns Array of numbers
 */
export function range(start: number, end: number, step: number = 1): number[] {
  if (step === 0) throw new Error('Step cannot be zero');
  
  const result: number[] = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }
  return result;
}

/**
 * Sum all numbers in an array
 * @param array - Array of numbers
 * @returns Sum of all numbers
 */
export function sum(array: number[]): number {
  return array.reduce((total, num) => total + num, 0);
}

/**
 * Calculate average of numbers in an array
 * @param array - Array of numbers
 * @returns Average value
 */
export function average(array: number[]): number {
  if (array.length === 0) return 0;
  return sum(array) / array.length;
}

/**
 * Find minimum value in an array
 * @param array - Array of numbers
 * @returns Minimum value
 */
export function min(array: number[]): number | undefined {
  if (array.length === 0) return undefined;
  return Math.min(...array);
}

/**
 * Find maximum value in an array
 * @param array - Array of numbers
 * @returns Maximum value
 */
export function max(array: number[]): number | undefined {
  if (array.length === 0) return undefined;
  return Math.max(...array);
}