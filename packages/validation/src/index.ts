/**
 * @aic/validation
 * 
 * Zod validation schemas for the AIC SMB Copilot Platform
 * 
 * This package provides type-safe validation schemas using Zod
 * for all data structures in the platform.
 */

// Re-export Zod for convenience
export { z } from 'zod';

// Common validators
export * from './common.validators';

// Auth validators
export * from './auth.validators';

// User validators
export * from './user.validators';

// Billing validators
export * from './billing.validators';