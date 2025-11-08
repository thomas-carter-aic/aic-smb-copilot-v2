/**
 * User Validation Schemas
 * 
 * Validation schemas for user management
 */

import { z } from 'zod';
import {
  emailSchema,
  phoneSchema,
  idSchema,
  urlSchema,
  statusSchema,
  addressSchema,
  socialLinksSchema,
  timestampSchema,
  softDeleteSchema,
} from './common.validators';

/**
 * User Status Schema
 */
export const userStatusSchema = z.enum([
  'active',
  'inactive',
  'pending',
  'suspended',
  'banned',
]);

export type UserStatus = z.infer<typeof userStatusSchema>;

/**
 * User Role Schema
 */
export const userRoleSchema = z.enum([
  'super_admin',
  'admin',
  'manager',
  'member',
  'guest',
]);

export type UserRole = z.infer<typeof userRoleSchema>;

/**
 * User Preferences Schema
 */
export const userPreferencesSchema = z.object({
  language: z.enum(['en', 'es', 'fr', 'de']).default('en'),
  timezone: z.string().default('UTC'),
  dateFormat: z.enum(['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD']).default('MM/DD/YYYY'),
  timeFormat: z.enum(['12h', '24h']).default('12h'),
  currency: z.enum(['USD', 'EUR', 'GBP']).default('USD'),
  notifications: z.object({
    email: z.boolean().default(true),
    push: z.boolean().default(true),
    sms: z.boolean().default(false),
    marketing: z.boolean().default(false),
  }),
  theme: z.enum(['light', 'dark', 'auto']).default('light'),
});

export type UserPreferences = z.infer<typeof userPreferencesSchema>;

/**
 * Base User Schema
 */
export const baseUserSchema = z.object({
  email: emailSchema,
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  phone: phoneSchema.optional(),
  avatar: urlSchema.optional(),
  bio: z.string().max(500).optional(),
  title: z.string().max(100).optional(),
  department: z.string().max(100).optional(),
});

/**
 * User Schema
 */
export const userSchema = baseUserSchema.extend({
  id: idSchema,
  role: userRoleSchema,
  status: userStatusSchema,
  companyId: idSchema,
  emailVerified: z.boolean().default(false),
  phoneVerified: z.boolean().default(false),
  twoFactorEnabled: z.boolean().default(false),
  lastLoginAt: z.date().nullable(),
  preferences: userPreferencesSchema,
  address: addressSchema.optional(),
  socialLinks: socialLinksSchema.optional(),
  ...timestampSchema.shape,
  ...softDeleteSchema.shape,
});

export type User = z.infer<typeof userSchema>;

/**
 * Create User Schema
 */
export const createUserSchema = baseUserSchema.extend({
  password: z.string().min(8, 'Password must be at least 8 characters'),
  role: userRoleSchema.default('member'),
  companyId: idSchema.optional(),
  sendInvitation: z.boolean().default(true),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

/**
 * Update User Schema
 */
export const updateUserSchema = baseUserSchema
  .partial()
  .extend({
    role: userRoleSchema.optional(),
    status: userStatusSchema.optional(),
    preferences: userPreferencesSchema.partial().optional(),
    address: addressSchema.optional(),
    socialLinks: socialLinksSchema.optional(),
  });

export type UpdateUserInput = z.infer<typeof updateUserSchema>;

/**
 * Update Profile Schema
 */
export const updateProfileSchema = z.object({
  firstName: z.string().min(1).max(50).optional(),
  lastName: z.string().min(1).max(50).optional(),
  phone: phoneSchema.optional(),
  bio: z.string().max(500).optional(),
  title: z.string().max(100).optional(),
  department: z.string().max(100).optional(),
  address: addressSchema.optional(),
  socialLinks: socialLinksSchema.optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;

/**
 * Update Preferences Schema
 */
export const updatePreferencesSchema = userPreferencesSchema.partial();

export type UpdatePreferencesInput = z.infer<typeof updatePreferencesSchema>;

/**
 * Upload Avatar Schema
 */
export const uploadAvatarSchema = z.object({
  file: z.instanceof(File).refine(
    (file) => file.size <= 5 * 1024 * 1024,
    'File size must be less than 5MB'
  ).refine(
    (file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type),
    'File must be an image (JPEG, PNG, or WebP)'
  ),
});

export type UploadAvatarInput = z.infer<typeof uploadAvatarSchema>;

/**
 * Delete User Schema
 */
export const deleteUserSchema = z.object({
  id: idSchema,
  permanent: z.boolean().default(false),
});

export type DeleteUserInput = z.infer<typeof deleteUserSchema>;

/**
 * Restore User Schema
 */
export const restoreUserSchema = z.object({
  id: idSchema,
});

export type RestoreUserInput = z.infer<typeof restoreUserSchema>;

/**
 * Suspend User Schema
 */
export const suspendUserSchema = z.object({
  id: idSchema,
  reason: z.string().min(1, 'Reason is required').max(500),
  duration: z.number().positive().optional(), // in days
});

export type SuspendUserInput = z.infer<typeof suspendUserSchema>;

/**
 * Ban User Schema
 */
export const banUserSchema = z.object({
  id: idSchema,
  reason: z.string().min(1, 'Reason is required').max(500),
  permanent: z.boolean().default(false),
});

export type BanUserInput = z.infer<typeof banUserSchema>;

/**
 * Unban User Schema
 */
export const unbanUserSchema = z.object({
  id: idSchema,
});

export type UnbanUserInput = z.infer<typeof unbanUserSchema>;

/**
 * User Invitation Schema
 */
export const userInvitationSchema = z.object({
  email: emailSchema,
  role: userRoleSchema,
  companyId: idSchema.optional(),
  message: z.string().max(500).optional(),
  expiresAt: z.date().optional(),
});

export type UserInvitation = z.infer<typeof userInvitationSchema>;

/**
 * Accept Invitation Schema
 */
export const acceptInvitationSchema = z.object({
  token: z.string().min(1, 'Token is required'),
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export type AcceptInvitationInput = z.infer<typeof acceptInvitationSchema>;

/**
 * User Activity Schema
 */
export const userActivitySchema = z.object({
  id: idSchema,
  userId: idSchema,
  action: z.string(),
  resource: z.string().optional(),
  metadata: z.record(z.any()).optional(),
  ipAddress: z.string().ip().optional(),
  userAgent: z.string().optional(),
  createdAt: z.date(),
});

export type UserActivity = z.infer<typeof userActivitySchema>;

/**
 * User Session Schema
 */
export const userSessionSchema = z.object({
  id: idSchema,
  userId: idSchema,
  token: z.string(),
  device: z.string().optional(),
  browser: z.string().optional(),
  os: z.string().optional(),
  ipAddress: z.string().ip().optional(),
  location: z.string().optional(),
  lastActivity: z.date(),
  expiresAt: z.date(),
  createdAt: z.date(),
});

export type UserSession = z.infer<typeof userSessionSchema>;

/**
 * Revoke Session Schema
 */
export const revokeSessionSchema = z.object({
  sessionId: idSchema,
});

export type RevokeSessionInput = z.infer<typeof revokeSessionSchema>;

/**
 * User Search Schema
 */
export const userSearchSchema = z.object({
  query: z.string().optional(),
  role: userRoleSchema.optional(),
  status: userStatusSchema.optional(),
  companyId: idSchema.optional(),
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(10),
  sortBy: z.enum(['createdAt', 'firstName', 'lastName', 'email', 'lastLoginAt']).default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
});

export type UserSearchInput = z.infer<typeof userSearchSchema>;

/**
 * User Filter Schema
 */
export const userFilterSchema = z.object({
  role: z.array(userRoleSchema).optional(),
  status: z.array(userStatusSchema).optional(),
  companyId: z.array(idSchema).optional(),
  emailVerified: z.boolean().optional(),
  twoFactorEnabled: z.boolean().optional(),
  createdAfter: z.date().optional(),
  createdBefore: z.date().optional(),
  lastLoginAfter: z.date().optional(),
  lastLoginBefore: z.date().optional(),
});

export type UserFilter = z.infer<typeof userFilterSchema>;

/**
 * Bulk User Operation Schema
 */
export const bulkUserOperationSchema = z.object({
  userIds: z.array(idSchema).min(1, 'At least one user ID is required').max(100, 'Maximum 100 users allowed'),
  action: z.enum(['activate', 'deactivate', 'suspend', 'delete', 'assign_role']),
  params: z.record(z.any()).optional(),
});

export type BulkUserOperationInput = z.infer<typeof bulkUserOperationSchema>;

/**
 * User Export Schema
 */
export const userExportSchema = z.object({
  format: z.enum(['csv', 'xlsx', 'json']),
  filters: userFilterSchema.optional(),
  fields: z.array(z.string()).optional(),
});

export type UserExportInput = z.infer<typeof userExportSchema>;

/**
 * User Import Schema
 */
export const userImportSchema = z.object({
  file: z.instanceof(File).refine(
    (file) => ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(file.type),
    'File must be CSV or Excel'
  ),
  skipDuplicates: z.boolean().default(true),
  sendInvitations: z.boolean().default(true),
});

export type UserImportInput = z.infer<typeof userImportSchema>;

/**
 * User Notification Settings Schema
 */
export const userNotificationSettingsSchema = z.object({
  email: z.object({
    enabled: z.boolean().default(true),
    frequency: z.enum(['realtime', 'daily', 'weekly']).default('realtime'),
    categories: z.object({
      security: z.boolean().default(true),
      updates: z.boolean().default(true),
      marketing: z.boolean().default(false),
      billing: z.boolean().default(true),
      workflows: z.boolean().default(true),
    }),
  }),
  push: z.object({
    enabled: z.boolean().default(true),
    categories: z.object({
      security: z.boolean().default(true),
      updates: z.boolean().default(true),
      workflows: z.boolean().default(true),
    }),
  }),
  sms: z.object({
    enabled: z.boolean().default(false),
    phone: phoneSchema.optional(),
    categories: z.object({
      security: z.boolean().default(true),
      critical: z.boolean().default(true),
    }),
  }),
});

export type UserNotificationSettings = z.infer<typeof userNotificationSettingsSchema>;