/**
 * User-related types
 */

import type { BaseEntity } from './common';

/**
 * User role enum
 */
export enum UserRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  MANAGER = 'manager',
  MEMBER = 'member',
  GUEST = 'guest',
}

/**
 * User status enum
 */
export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
  PENDING_VERIFICATION = 'pending_verification',
}

/**
 * User entity
 */
export interface User extends BaseEntity {
  email: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  avatar?: string;
  role: UserRole;
  status: UserStatus;
  companyId: string;
  emailVerified: boolean;
  phoneNumber?: string;
  phoneVerified: boolean;
  timezone?: string;
  locale?: string;
  lastLoginAt?: Date;
  metadata?: Record<string, unknown>;
}

/**
 * User profile (public-facing)
 */
export interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  avatar?: string;
  role: UserRole;
}

/**
 * Create user DTO
 */
export interface CreateUserDto {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role?: UserRole;
  companyId: string;
}

/**
 * Update user DTO
 */
export interface UpdateUserDto {
  firstName?: string;
  lastName?: string;
  displayName?: string;
  avatar?: string;
  phoneNumber?: string;
  timezone?: string;
  locale?: string;
  metadata?: Record<string, unknown>;
}

/**
 * User preferences
 */
export interface UserPreferences {
  userId: string;
  theme: 'light' | 'dark' | 'system';
  emailNotifications: boolean;
  pushNotifications: boolean;
  smsNotifications: boolean;
  language: string;
  dateFormat: string;
  timeFormat: '12h' | '24h';
}

/**
 * User session
 */
export interface UserSession {
  id: string;
  userId: string;
  token: string;
  refreshToken: string;
  expiresAt: Date;
  ipAddress?: string;
  userAgent?: string;
  isActive: boolean;
}

/**
 * Password reset request
 */
export interface PasswordResetRequest {
  email: string;
  token: string;
  expiresAt: Date;
  used: boolean;
}