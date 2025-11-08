/**
 * Authentication and authorization-related types
 */

import type { BaseEntity } from './common';
import type { UserRole } from './user';

/**
 * Auth provider enum
 */
export enum AuthProvider {
  LOCAL = 'local',
  GOOGLE = 'google',
  GITHUB = 'github',
  MICROSOFT = 'microsoft',
  APPLE = 'apple',
  SAML = 'saml',
  OAUTH2 = 'oauth2',
}

/**
 * Token type enum
 */
export enum TokenType {
  ACCESS = 'access',
  REFRESH = 'refresh',
  RESET_PASSWORD = 'reset_password',
  VERIFY_EMAIL = 'verify_email',
  INVITATION = 'invitation',
  API_KEY = 'api_key',
}

/**
 * Permission enum
 */
export enum Permission {
  // User permissions
  USER_READ = 'user:read',
  USER_WRITE = 'user:write',
  USER_DELETE = 'user:delete',
  
  // Company permissions
  COMPANY_READ = 'company:read',
  COMPANY_WRITE = 'company:write',
  COMPANY_DELETE = 'company:delete',
  COMPANY_SETTINGS = 'company:settings',
  
  // Workflow permissions
  WORKFLOW_READ = 'workflow:read',
  WORKFLOW_WRITE = 'workflow:write',
  WORKFLOW_DELETE = 'workflow:delete',
  WORKFLOW_EXECUTE = 'workflow:execute',
  
  // Document permissions
  DOCUMENT_READ = 'document:read',
  DOCUMENT_WRITE = 'document:write',
  DOCUMENT_DELETE = 'document:delete',
  DOCUMENT_PROCESS = 'document:process',
  
  // Integration permissions
  INTEGRATION_READ = 'integration:read',
  INTEGRATION_WRITE = 'integration:write',
  INTEGRATION_DELETE = 'integration:delete',
  
  // Subscription permissions
  SUBSCRIPTION_READ = 'subscription:read',
  SUBSCRIPTION_WRITE = 'subscription:write',
  
  // Analytics permissions
  ANALYTICS_READ = 'analytics:read',
  ANALYTICS_EXPORT = 'analytics:export',
  
  // Admin permissions
  ADMIN_USERS = 'admin:users',
  ADMIN_COMPANIES = 'admin:companies',
  ADMIN_SYSTEM = 'admin:system',
}

/**
 * MFA type enum
 */
export enum MFAType {
  TOTP = 'totp',
  SMS = 'sms',
  EMAIL = 'email',
  BACKUP_CODES = 'backup_codes',
}

/**
 * MFA status enum
 */
export enum MFAStatus {
  DISABLED = 'disabled',
  ENABLED = 'enabled',
  REQUIRED = 'required',
}

/**
 * JWT payload
 */
export interface JwtPayload {
  sub: string; // user ID
  email: string;
  role: UserRole;
  companyId: string;
  permissions: Permission[];
  sessionId?: string;
  type: TokenType;
  iat: number; // issued at
  exp: number; // expiration
  iss?: string; // issuer
  aud?: string; // audience
}

/**
 * Auth tokens
 */
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number; // seconds
  tokenType: 'Bearer';
  scope?: string[];
}

/**
 * Login credentials
 */
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
  mfaCode?: string;
}

/**
 * OAuth credentials
 */
export interface OAuthCredentials {
  provider: AuthProvider;
  code: string;
  redirectUri: string;
  state?: string;
}

/**
 * SSO configuration
 */
export interface SSOConfig extends BaseEntity {
  companyId: string;
  provider: 'saml' | 'oidc';
  enabled: boolean;
  entityId: string;
  ssoUrl: string;
  certificate: string;
  signRequest: boolean;
  encryptAssertion: boolean;
  metadata?: Record<string, unknown>;
}

/**
 * SAML request
 */
export interface SAMLRequest {
  id: string;
  issueInstant: Date;
  destination: string;
  assertionConsumerServiceURL: string;
  issuer: string;
  nameIDFormat?: string;
}

/**
 * SAML response
 */
export interface SAMLResponse {
  id: string;
  issueInstant: Date;
  issuer: string;
  status: 'success' | 'error';
  assertion?: SAMLAssertion;
  error?: string;
}

/**
 * SAML assertion
 */
export interface SAMLAssertion {
  id: string;
  issueInstant: Date;
  subject: {
    nameID: string;
    format: string;
  };
  conditions: {
    notBefore: Date;
    notOnOrAfter: Date;
    audience: string;
  };
  attributes: Record<string, string>;
  signature?: string;
}

/**
 * MFA configuration
 */
export interface MFAConfig extends BaseEntity {
  userId: string;
  type: MFAType;
  status: MFAStatus;
  secret?: string; // encrypted
  backupCodes?: string[]; // encrypted
  phoneNumber?: string; // for SMS
  verifiedAt?: Date;
}

/**
 * MFA challenge
 */
export interface MFAChallenge {
  challengeId: string;
  type: MFAType;
  expiresAt: Date;
  verified: boolean;
}

/**
 * Password policy
 */
export interface PasswordPolicy {
  minLength: number;
  maxLength: number;
  requireUppercase: boolean;
  requireLowercase: boolean;
  requireNumbers: boolean;
  requireSpecialChars: boolean;
  preventReuse: number; // number of previous passwords to check
  expiryDays?: number; // password expiration
  maxAttempts: number; // before account lock
  lockoutDuration: number; // in minutes
}

/**
 * Session entity
 */
export interface Session extends BaseEntity {
  userId: string;
  token: string; // hashed
  refreshToken: string; // hashed
  expiresAt: Date;
  refreshExpiresAt: Date;
  ipAddress?: string;
  userAgent?: string;
  location?: {
    country?: string;
    city?: string;
  };
  isActive: boolean;
  lastActivityAt: Date;
}

/**
 * Login attempt
 */
export interface LoginAttempt extends BaseEntity {
  email: string;
  ipAddress: string;
  userAgent?: string;
  success: boolean;
  failureReason?: string;
  mfaUsed: boolean;
  timestamp: Date;
}

/**
 * API key entity
 */
export interface APIKey extends BaseEntity {
  companyId: string;
  userId: string;
  name: string;
  key: string; // hashed
  prefix: string; // visible prefix for identification
  permissions: Permission[];
  scopes: string[];
  expiresAt?: Date;
  lastUsedAt?: Date;
  usageCount: number;
  isActive: boolean;
  rateLimit?: number;
}

/**
 * Role definition
 */
export interface Role {
  name: UserRole;
  displayName: string;
  description: string;
  permissions: Permission[];
  isDefault: boolean;
  isCustom: boolean;
}

/**
 * Permission check
 */
export interface PermissionCheck {
  permission: Permission;
  resource?: string;
  action?: string;
}

/**
 * Access control list (ACL)
 */
export interface ACL {
  resourceType: string;
  resourceId: string;
  permissions: Array<{
    userId?: string;
    role?: UserRole;
    permissions: Permission[];
  }>;
}

/**
 * Audit log entry
 */
export interface AuditLog extends BaseEntity {
  companyId: string;
  userId: string;
  action: AuditAction;
  resourceType: string;
  resourceId: string;
  changes?: AuditChange[];
  ipAddress?: string;
  userAgent?: string;
  metadata?: Record<string, unknown>;
  timestamp: Date;
}

/**
 * Audit action enum
 */
export enum AuditAction {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  LOGIN = 'login',
  LOGOUT = 'logout',
  LOGIN_FAILED = 'login_failed',
  PASSWORD_CHANGED = 'password_changed',
  PASSWORD_RESET = 'password_reset',
  MFA_ENABLED = 'mfa_enabled',
  MFA_DISABLED = 'mfa_disabled',
  PERMISSION_GRANTED = 'permission_granted',
  PERMISSION_REVOKED = 'permission_revoked',
  EXPORT = 'export',
  IMPORT = 'import',
}

/**
 * Audit change
 */
export interface AuditChange {
  field: string;
  oldValue?: unknown;
  newValue?: unknown;
}

/**
 * Security event
 */
export interface SecurityEvent extends BaseEntity {
  type: SecurityEventType;
  severity: 'low' | 'medium' | 'high' | 'critical';
  userId?: string;
  companyId?: string;
  ipAddress?: string;
  description: string;
  details?: Record<string, unknown>;
  resolved: boolean;
  resolvedAt?: Date;
  resolvedBy?: string;
}

/**
 * Security event type enum
 */
export enum SecurityEventType {
  SUSPICIOUS_LOGIN = 'suspicious_login',
  MULTIPLE_FAILED_LOGINS = 'multiple_failed_logins',
  ACCOUNT_LOCKED = 'account_locked',
  PASSWORD_BREACH = 'password_breach',
  UNAUTHORIZED_ACCESS = 'unauthorized_access',
  DATA_EXPORT = 'data_export',
  PERMISSION_ESCALATION = 'permission_escalation',
  API_KEY_COMPROMISED = 'api_key_compromised',
  SUSPICIOUS_ACTIVITY = 'suspicious_activity',
}

/**
 * Register DTO
 */
export interface RegisterDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  companyName?: string;
  acceptedTerms: boolean;
  marketingConsent?: boolean;
  invitationToken?: string;
}

/**
 * Login DTO
 */
export interface LoginDto {
  email: string;
  password: string;
  rememberMe?: boolean;
  mfaCode?: string;
}

/**
 * Verify email DTO
 */
export interface VerifyEmailDto {
  token: string;
  email: string;
}

/**
 * Forgot password DTO
 */
export interface ForgotPasswordDto {
  email: string;
}

/**
 * Reset password DTO
 */
export interface ResetPasswordDto {
  token: string;
  newPassword: string;
}

/**
 * Change password DTO
 */
export interface ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

/**
 * Enable MFA DTO
 */
export interface EnableMFADto {
  type: MFAType;
  phoneNumber?: string; // for SMS
  verificationCode: string;
}

/**
 * Verify MFA DTO
 */
export interface VerifyMFADto {
  challengeId: string;
  code: string;
}

/**
 * Create API key DTO
 */
export interface CreateAPIKeyDto {
  name: string;
  permissions: Permission[];
  scopes?: string[];
  expiresAt?: Date;
}

/**
 * Auth context (for request context)
 */
export interface AuthContext {
  user: {
    id: string;
    email: string;
    role: UserRole;
    companyId: string;
  };
  session: {
    id: string;
    expiresAt: Date;
  };
  permissions: Permission[];
  ipAddress?: string;
  userAgent?: string;
}