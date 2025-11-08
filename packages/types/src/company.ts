/**
 * Company/Tenant-related types
 */

import type { BaseEntity } from './common';

/**
 * Company size enum
 */
export enum CompanySize {
  SOLO = '1',
  SMALL = '2-10',
  MEDIUM = '11-50',
  LARGE = '51-200',
  ENTERPRISE = '200+',
}

/**
 * Company status enum
 */
export enum CompanyStatus {
  ACTIVE = 'active',
  TRIAL = 'trial',
  SUSPENDED = 'suspended',
  CANCELLED = 'cancelled',
}

/**
 * Industry enum
 */
export enum Industry {
  TECHNOLOGY = 'technology',
  HEALTHCARE = 'healthcare',
  FINANCE = 'finance',
  RETAIL = 'retail',
  MANUFACTURING = 'manufacturing',
  EDUCATION = 'education',
  REAL_ESTATE = 'real_estate',
  LEGAL = 'legal',
  MARKETING = 'marketing',
  CONSULTING = 'consulting',
  OTHER = 'other',
}

/**
 * Company entity
 */
export interface Company extends BaseEntity {
  name: string;
  slug: string;
  domain?: string;
  logo?: string;
  website?: string;
  description?: string;
  size: CompanySize;
  industry: Industry;
  status: CompanyStatus;
  address?: Address;
  settings: CompanySettings;
  metadata?: Record<string, unknown>;
}

/**
 * Address type
 */
export interface Address {
  street?: string;
  city?: string;
  state?: string;
  country: string;
  postalCode?: string;
}

/**
 * Company settings
 */
export interface CompanySettings {
  timezone: string;
  currency: string;
  dateFormat: string;
  timeFormat: '12h' | '24h';
  language: string;
  allowedDomains?: string[];
  ssoEnabled: boolean;
  twoFactorRequired: boolean;
  maxUsers?: number;
  features: FeatureFlags;
}

/**
 * Feature flags
 */
export interface FeatureFlags {
  aiChat: boolean;
  documentProcessing: boolean;
  workflowBuilder: boolean;
  analytics: boolean;
  integrations: boolean;
  apiAccess: boolean;
  customBranding: boolean;
  advancedReporting: boolean;
  [key: string]: boolean;
}

/**
 * Create company DTO
 */
export interface CreateCompanyDto {
  name: string;
  size: CompanySize;
  industry: Industry;
  website?: string;
  domain?: string;
}

/**
 * Update company DTO
 */
export interface UpdateCompanyDto {
  name?: string;
  logo?: string;
  website?: string;
  description?: string;
  size?: CompanySize;
  industry?: Industry;
  address?: Address;
  settings?: Partial<CompanySettings>;
}

/**
 * Company invitation
 */
export interface CompanyInvitation extends BaseEntity {
  companyId: string;
  email: string;
  role: string;
  token: string;
  expiresAt: Date;
  acceptedAt?: Date;
  invitedBy: string;
}