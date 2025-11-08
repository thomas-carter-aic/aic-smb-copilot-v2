/**
 * Authentication Validation Schemas
 * 
 * Validation schemas for authentication and authorization
 */

import { z } from 'zod';
import {
  emailSchema,
  passwordSchema,
  idSchema,
  phoneSchema,
} from './common.validators';

/**
 * Login Schema
 */
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;

/**
 * Register Schema
 */
export const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: z.string(),
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  companyName: z.string().min(1, 'Company name is required').max(100),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export type RegisterInput = z.infer<typeof registerSchema>;

/**
 * Forgot Password Schema
 */
export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;

/**
 * Reset Password Schema
 */
export const resetPasswordSchema = z.object({
  token: z.string().min(1, 'Token is required'),
  password: passwordSchema,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;

/**
 * Change Password Schema
 */
export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: passwordSchema,
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
}).refine((data) => data.currentPassword !== data.newPassword, {
  message: 'New password must be different from current password',
  path: ['newPassword'],
});

export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;

/**
 * Verify Email Schema
 */
export const verifyEmailSchema = z.object({
  token: z.string().min(1, 'Token is required'),
});

export type VerifyEmailInput = z.infer<typeof verifyEmailSchema>;

/**
 * Resend Verification Email Schema
 */
export const resendVerificationSchema = z.object({
  email: emailSchema,
});

export type ResendVerificationInput = z.infer<typeof resendVerificationSchema>;

/**
 * OAuth Login Schema
 */
export const oauthLoginSchema = z.object({
  provider: z.enum(['google', 'microsoft', 'github']),
  code: z.string().min(1, 'Authorization code is required'),
  state: z.string().optional(),
  redirectUri: z.string().url('Invalid redirect URI').optional(),
});

export type OAuthLoginInput = z.infer<typeof oauthLoginSchema>;

/**
 * OAuth Connect Schema
 */
export const oauthConnectSchema = z.object({
  provider: z.enum(['google', 'microsoft', 'slack', 'salesforce']),
  code: z.string().min(1, 'Authorization code is required'),
  redirectUri: z.string().url('Invalid redirect URI'),
});

export type OAuthConnectInput = z.infer<typeof oauthConnectSchema>;

/**
 * OAuth Disconnect Schema
 */
export const oauthDisconnectSchema = z.object({
  provider: z.enum(['google', 'microsoft', 'slack', 'salesforce']),
});

export type OAuthDisconnectInput = z.infer<typeof oauthDisconnectSchema>;

/**
 * Two-Factor Authentication Setup Schema
 */
export const setupTwoFactorSchema = z.object({
  method: z.enum(['authenticator', 'sms', 'email']),
  phone: phoneSchema.optional(),
});

export type SetupTwoFactorInput = z.infer<typeof setupTwoFactorSchema>;

/**
 * Two-Factor Authentication Verify Schema
 */
export const verifyTwoFactorSchema = z.object({
  code: z.string().length(6, 'Code must be 6 digits').regex(/^\d+$/, 'Code must contain only numbers'),
});

export type VerifyTwoFactorInput = z.infer<typeof verifyTwoFactorSchema>;

/**
 * Two-Factor Authentication Disable Schema
 */
export const disableTwoFactorSchema = z.object({
  password: z.string().min(1, 'Password is required'),
  code: z.string().length(6, 'Code must be 6 digits'),
});

export type DisableTwoFactorInput = z.infer<typeof disableTwoFactorSchema>;

/**
 * Session Schema
 */
export const sessionSchema = z.object({
  id: idSchema,
  userId: idSchema,
  token: z.string(),
  expiresAt: z.date(),
  ipAddress: z.string().ip().optional(),
  userAgent: z.string().optional(),
  lastActivity: z.date(),
});

export type Session = z.infer<typeof sessionSchema>;

/**
 * Refresh Token Schema
 */
export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1, 'Refresh token is required'),
});

export type RefreshTokenInput = z.infer<typeof refreshTokenSchema>;

/**
 * Logout Schema
 */
export const logoutSchema = z.object({
  everywhere: z.boolean().optional().default(false),
});

export type LogoutInput = z.infer<typeof logoutSchema>;

/**
 * API Key Create Schema
 */
export const createApiKeySchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  description: z.string().max(500).optional(),
  expiresAt: z.date().optional(),
  scopes: z.array(z.string()).min(1, 'At least one scope is required'),
});

export type CreateApiKeyInput = z.infer<typeof createApiKeySchema>;

/**
 * API Key Update Schema
 */
export const updateApiKeySchema = z.object({
  name: z.string().min(1).max(100).optional(),
  description: z.string().max(500).optional(),
  scopes: z.array(z.string()).min(1).optional(),
});

export type UpdateApiKeyInput = z.infer<typeof updateApiKeySchema>;

/**
 * API Key Revoke Schema
 */
export const revokeApiKeySchema = z.object({
  id: idSchema,
});

export type RevokeApiKeyInput = z.infer<typeof revokeApiKeySchema>;

/**
 * Permission Schema
 */
export const permissionSchema = z.object({
  resource: z.string(),
  action: z.enum(['create', 'read', 'update', 'delete', 'manage']),
  conditions: z.record(z.any()).optional(),
});

export type Permission = z.infer<typeof permissionSchema>;

/**
 * Role Schema
 */
export const roleSchema = z.object({
  id: idSchema,
  name: z.string(),
  description: z.string().optional(),
  permissions: z.array(permissionSchema),
  isSystem: z.boolean().default(false),
});

export type Role = z.infer<typeof roleSchema>;

/**
 * Assign Role Schema
 */
export const assignRoleSchema = z.object({
  userId: idSchema,
  roleId: idSchema,
});

export type AssignRoleInput = z.infer<typeof assignRoleSchema>;

/**
 * Remove Role Schema
 */
export const removeRoleSchema = z.object({
  userId: idSchema,
  roleId: idSchema,
});

export type RemoveRoleInput = z.infer<typeof removeRoleSchema>;

/**
 * JWT Payload Schema
 */
export const jwtPayloadSchema = z.object({
  sub: idSchema, // subject (user ID)
  email: emailSchema,
  role: z.string(),
  iat: z.number(), // issued at
  exp: z.number(), // expiration
  jti: z.string().optional(), // JWT ID
});

export type JWTPayload = z.infer<typeof jwtPayloadSchema>;

/**
 * Password Policy Schema
 */
export const passwordPolicySchema = z.object({
  minLength: z.number().min(8).max(128),
  requireUppercase: z.boolean(),
  requireLowercase: z.boolean(),
  requireNumbers: z.boolean(),
  requireSpecialChars: z.boolean(),
  preventReuse: z.number().min(0).max(24),
  expiryDays: z.number().min(0).max(365).optional(),
});

export type PasswordPolicy = z.infer<typeof passwordPolicySchema>;

/**
 * Account Lockout Schema
 */
export const accountLockoutSchema = z.object({
  maxAttempts: z.number().min(1).max(10),
  lockoutDuration: z.number().min(1), // in minutes
  resetOnSuccess: z.boolean(),
});

export type AccountLockout = z.infer<typeof accountLockoutSchema>;

/**
 * Security Question Schema
 */
export const securityQuestionSchema = z.object({
  question: z.string().min(1, 'Question is required'),
  answer: z.string().min(1, 'Answer is required'),
});

export type SecurityQuestion = z.infer<typeof securityQuestionSchema>;

/**
 * Set Security Questions Schema
 */
export const setSecurityQuestionsSchema = z.object({
  questions: z.array(securityQuestionSchema).min(3, 'At least 3 security questions required').max(5),
});

export type SetSecurityQuestionsInput = z.infer<typeof setSecurityQuestionsSchema>;

/**
 * Verify Security Answer Schema
 */
export const verifySecurityAnswerSchema = z.object({
  questionId: idSchema,
  answer: z.string().min(1, 'Answer is required'),
});

export type VerifySecurityAnswerInput = z.infer<typeof verifySecurityAnswerSchema>;