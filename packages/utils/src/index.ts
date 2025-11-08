/**
 * @aic/utils
 * 
 * Comprehensive utility library for the AIC SMB Copilot Platform
 * 
 * This package provides a wide range of utility functions for:
 * - Array manipulation
 * - Date formatting and manipulation
 * - Object operations
 * - String processing
 * - Validation
 * - Number formatting
 * - Async operations
 * 
 * @example
 * ```typescript
 * import { chunk, formatDate, deepClone } from '@aic/utils';
 * 
 * // Array utilities
 * const chunks = chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 * 
 * // Date utilities
 * const formatted = formatDate(new Date(), 'YYYY-MM-DD'); // '2024-11-07'
 * 
 * // Object utilities
 * const cloned = deepClone({ a: 1, b: { c: 2 } });
 * ```
 */

// Array utilities
export * from './arrays';

// Calculation utilities
export * from './calculations';

// Date utilities
export * from './dates';

// Format utilities
export * from './formats';

// Object utilities
export * from './objects';

// String utilities
export * from './strings';

// Transformer utilities
export * from './transformers';

// Validation utilities
export * from './validation';

// Number utilities
export * from './numbers';

// Async utilities
export * from './async';


