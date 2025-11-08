/**
 * Integration and third-party service types
 */

import type { BaseEntity } from './common';

/**
 * Integration provider enum
 */
export enum IntegrationProvider {
  SLACK = 'slack',
  GOOGLE_WORKSPACE = 'google_workspace',
  MICROSOFT_365 = 'microsoft_365',
  SALESFORCE = 'salesforce',
  HUBSPOT = 'hubspot',
  QUICKBOOKS = 'quickbooks',
  STRIPE = 'stripe',
  GITHUB = 'github',
  JIRA = 'jira',
  ASANA = 'asana',
  TRELLO = 'trello',
  DROPBOX = 'dropbox',
  CUSTOM = 'custom',
}

/**
 * Integration status enum
 */
export enum IntegrationStatus {
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected',
  ERROR = 'error',
  PENDING = 'pending',
}

/**
 * OAuth flow status
 */
export enum OAuthFlowStatus {
  INITIATED = 'initiated',
  AUTHORIZED = 'authorized',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

/**
 * Integration entity
 */
export interface Integration extends BaseEntity {
  companyId: string;
  provider: IntegrationProvider;
  name: string;
  status: IntegrationStatus;
  config: IntegrationConfig;
  credentials: IntegrationCredentials;
  metadata?: IntegrationMetadata;
  lastSyncedAt?: Date;
  lastErrorAt?: Date;
  lastError?: string;
}

/**
 * Integration config
 */
export interface IntegrationConfig {
  webhookUrl?: string;
  syncFrequency?: number; // in minutes
  autoSync?: boolean;
  syncOptions?: Record<string, unknown>;
  customSettings?: Record<string, unknown>;
}

/**
 * Integration credentials (encrypted)
 */
export interface IntegrationCredentials {
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: Date;
  scope?: string[];
  apiKey?: string;
  apiSecret?: string;
  webhookSecret?: string;
  customCredentials?: Record<string, unknown>;
}

/**
 * Integration metadata
 */
export interface IntegrationMetadata {
  accountId?: string;
  accountName?: string;
  workspaceId?: string;
  workspaceName?: string;
  userId?: string;
  userName?: string;
  features?: string[];
  limits?: Record<string, number>;
}

/**
 * OAuth state
 */
export interface OAuthState extends BaseEntity {
  companyId: string;
  userId: string;
  provider: IntegrationProvider;
  state: string;
  status: OAuthFlowStatus;
  redirectUri: string;
  scope?: string[];
  expiresAt: Date;
}

/**
 * Webhook event
 */
export interface WebhookEvent extends BaseEntity {
  integrationId: string;
  provider: IntegrationProvider;
  eventType: string;
  payload: Record<string, unknown>;
  signature?: string;
  verified: boolean;
  processed: boolean;
  processedAt?: Date;
  error?: string;
}

/**
 * Integration sync job
 */
export interface IntegrationSyncJob extends BaseEntity {
  integrationId: string;
  type: 'full' | 'incremental';
  status: 'pending' | 'running' | 'completed' | 'failed';
  startedAt?: Date;
  completedAt?: Date;
  recordsSynced: number;
  errors?: string[];
  metadata?: Record<string, unknown>;
}

/**
 * Third-party API request
 */
export interface ThirdPartyApiRequest {
  provider: IntegrationProvider;
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string>;
}

/**
 * Third-party API response
 */
export interface ThirdPartyApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  statusCode: number;
  headers?: Record<string, string>;
  rateLimit?: RateLimitInfo;
}

/**
 * Rate limit information
 */
export interface RateLimitInfo {
  limit: number;
  remaining: number;
  reset: Date;
}

/**
 * Create integration DTO
 */
export interface CreateIntegrationDto {
  companyId: string;
  provider: IntegrationProvider;
  name?: string;
  config?: Partial<IntegrationConfig>;
}

/**
 * Update integration DTO
 */
export interface UpdateIntegrationDto {
  name?: string;
  status?: IntegrationStatus;
  config?: Partial<IntegrationConfig>;
}

/**
 * Slack-specific types
 */
export interface SlackIntegrationMetadata extends IntegrationMetadata {
  teamId: string;
  teamName: string;
  botUserId: string;
  channels?: SlackChannel[];
}

export interface SlackChannel {
  id: string;
  name: string;
  isPrivate: boolean;
}

/**
 * Google Workspace-specific types
 */
export interface GoogleWorkspaceMetadata extends IntegrationMetadata {
  domain: string;
  adminEmail: string;
  services: ('gmail' | 'calendar' | 'drive' | 'docs' | 'sheets')[];
}

/**
 * Microsoft 365-specific types
 */
export interface Microsoft365Metadata extends IntegrationMetadata {
  tenantId: string;
  tenantName: string;
  services: ('outlook' | 'calendar' | 'onedrive' | 'teams')[];
}