/**
 * Common Validation Schemas
 * 
 * Shared validation schemas used across multiple modules
 */

import { z } from 'zod';

/**
 * ID Schema - UUID v4
 */
export const idSchema = z.string().uuid('Invalid ID format');

/**
 * Email Schema
 */
export const emailSchema = z
  .string()
  .email('Invalid email address')
  .toLowerCase()
  .trim();

/**
 * Password Schema
 * Minimum 8 characters, at least one uppercase, one lowercase, one number, and one special character
 */
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/\d/, 'Password must contain at least one number')
  .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character');

/**
 * Phone Number Schema (US format)
 */
export const phoneSchema = z
  .string()
  .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Invalid phone number');

/**
 * URL Schema
 */
export const urlSchema = z.string().url('Invalid URL');

/**
 * Date String Schema (ISO 8601)
 */
export const dateStringSchema = z.string().datetime('Invalid date format');

/**
 * Pagination Schema
 */
export const paginationSchema = z.object({
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(10),
});

/**
 * Sort Schema
 */
export const sortSchema = z.object({
  field: z.string(),
  order: z.enum(['asc', 'desc']).default('asc'),
});

/**
 * Search Schema
 */
export const searchSchema = z.object({
  query: z.string().min(1).max(100),
  filters: z.record(z.any()).optional(),
});

/**
 * Status Schema
 */
export const statusSchema = z.enum([
  'active',
  'inactive',
  'pending',
  'suspended',
  'deleted',
]);

/**
 * Slug Schema
 */
export const slugSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format')
  .min(1)
  .max(100);

/**
 * Color Schema (HEX)
 */
export const colorSchema = z
  .string()
  .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Invalid color format');

/**
 * Currency Code Schema
 */
export const currencySchema = z.enum(['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD']);

/**
 * Amount Schema (positive number with max 2 decimal places)
 */
export const amountSchema = z
  .number()
  .positive('Amount must be positive')
  .multipleOf(0.01, 'Amount can have at most 2 decimal places');

/**
 * Percentage Schema (0-100)
 */
export const percentageSchema = z
  .number()
  .min(0, 'Percentage must be at least 0')
  .max(100, 'Percentage must be at most 100');

/**
 * Timezone Schema
 */
export const timezoneSchema = z.string().min(1);

/**
 * Language Code Schema
 */
export const languageSchema = z.enum(['en', 'es', 'fr', 'de', 'it', 'pt', 'ja', 'zh']);

/**
 * File Upload Schema
 */
export const fileSchema = z.object({
  name: z.string(),
  size: z.number().max(50 * 1024 * 1024, 'File size must be less than 50MB'),
  type: z.string(),
  url: urlSchema.optional(),
});

/**
 * Address Schema
 */
export const addressSchema = z.object({
  street: z.string().min(1, 'Street address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(2).max(2).optional(),
  postalCode: z.string().min(1, 'Postal code is required'),
  country: z.string().min(2).max(2),
});

/**
 * Coordinates Schema
 */
export const coordinatesSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});

/**
 * Image Schema
 */
export const imageSchema = z.object({
  url: urlSchema,
  alt: z.string().optional(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
});

/**
 * Social Links Schema
 */
export const socialLinksSchema = z.object({
  twitter: urlSchema.optional(),
  linkedin: urlSchema.optional(),
  facebook: urlSchema.optional(),
  instagram: urlSchema.optional(),
  github: urlSchema.optional(),
  website: urlSchema.optional(),
});

/**
 * Tags Schema
 */
export const tagsSchema = z.array(z.string()).max(10, 'Maximum 10 tags allowed');

/**
 * Metadata Schema
 */
export const metadataSchema = z.record(z.string(), z.any());

/**
 * IP Address Schema
 */
export const ipAddressSchema = z.string().ip();

/**
 * User Agent Schema
 */
export const userAgentSchema = z.string().min(1);

/**
 * Timestamp Schema
 */
export const timestampSchema = z.object({
  createdAt: z.date(),
  updatedAt: z.date(),
});

/**
 * Soft Delete Schema
 */
export const softDeleteSchema = z.object({
  deletedAt: z.date().nullable(),
  isDeleted: z.boolean().default(false),
});

/**
 * Name Schema
 */
export const nameSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  middleName: z.string().max(50).optional(),
});

/**
 * Contact Schema
 */
export const contactSchema = z.object({
  email: emailSchema,
  phone: phoneSchema.optional(),
  alternateEmail: emailSchema.optional(),
  alternatePhone: phoneSchema.optional(),
});

/**
 * Range Schema
 */
export const rangeSchema = z.object({
  min: z.number(),
  max: z.number(),
}).refine((data) => data.min <= data.max, {
  message: 'Min must be less than or equal to max',
  path: ['min'],
});

/**
 * Date Range Schema
 */
export const dateRangeSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
}).refine((data) => data.startDate <= data.endDate, {
  message: 'Start date must be before end date',
  path: ['startDate'],
});

/**
 * Validation Result Type Helper
 */
export type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: z.ZodError };

/**
 * Safe Parse Helper
 */
export function safeParse<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): ValidationResult<T> {
  const result = schema.safeParse(data);
  
  if (result.success) {
    return { success: true, data: result.data };
  }
  
  return { success: false, errors: result.error };
}

/**
 * Validate and Throw Helper
 */
export function validateOrThrow<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): T {
  return schema.parse(data);
}