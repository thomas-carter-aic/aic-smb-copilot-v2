/**
 * API request/response types
 */

import type { ApiError, ApiResponse, PaginatedResponse, PaginationParams } from './common';

/**
 * HTTP methods
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * Request context
 */
export interface RequestContext {
  userId?: string;
  companyId?: string;
  ipAddress?: string;
  userAgent?: string;
  requestId: string;
  timestamp: Date;
}

/**
 * Auth tokens
 */
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number; // seconds
  tokenType: 'Bearer';
}

/**
 * Login request
 */
export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * Login response
 */
export interface LoginResponse extends ApiResponse<{
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    companyId: string;
  };
  tokens: AuthTokens;
}> {}

/**
 * Register request
 */
export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  companyName: string;
  acceptedTerms: boolean;
}

/**
 * Refresh token request
 */
export interface RefreshTokenRequest {
  refreshToken: string;
}

/**
 * Change password request
 */
export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

/**
 * Forgot password request
 */
export interface ForgotPasswordRequest {
  email: string;
}

/**
 * Reset password request
 */
export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}

/**
 * List query parameters
 */
export interface ListQueryParams extends PaginationParams {
  search?: string;
  filter?: Record<string, unknown>;
  include?: string[];
}

/**
 * Bulk operation request
 */
export interface BulkOperationRequest<T = string> {
  ids: T[];
  operation: 'delete' | 'archive' | 'restore' | 'update';
  data?: Record<string, unknown>;
}

/**
 * Bulk operation response
 */
export interface BulkOperationResponse {
  success: boolean;
  successCount: number;
  failureCount: number;
  errors?: Array<{
    id: string;
    error: string;
  }>;
}

/**
 * Upload response
 */
export interface UploadResponse {
  id: string;
  url: string;
  key: string;
  filename: string;
  size: number;
  mimeType: string;
}

/**
 * Health check response
 */
export interface HealthCheckResponse {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  uptime: number;
  services: {
    database: ServiceHealth;
    redis: ServiceHealth;
    storage: ServiceHealth;
    [key: string]: ServiceHealth;
  };
}

/**
 * Service health
 */
export interface ServiceHealth {
  status: 'up' | 'down' | 'degraded';
  responseTime?: number;
  lastCheck: string;
  error?: string;
}

/**
 * Analytics request
 */
export interface AnalyticsRequest {
  startDate: Date;
  endDate: Date;
  metrics: string[];
  groupBy?: 'day' | 'week' | 'month';
  filters?: Record<string, unknown>;
}

/**
 * Analytics response
 */
export interface AnalyticsResponse {
  data: Array<{
    date: string;
    metrics: Record<string, number>;
  }>;
  summary: Record<string, number>;
  comparison?: {
    previousPeriod: Record<string, number>;
    percentChange: Record<string, number>;
  };
}

/**
 * Webhook payload
 */
export interface WebhookPayload<T = unknown> {
  event: string;
  timestamp: string;
  data: T;
  signature: string;
}

/**
 * API key
 */
export interface ApiKey {
  id: string;
  name: string;
  key: string; // masked, e.g., "sk_...xyz"
  fullKey?: string; // only returned on creation
  companyId: string;
  scopes: string[];
  expiresAt?: Date;
  lastUsedAt?: Date;
  isActive: boolean;
  createdAt: Date;
}

/**
 * API usage statistics
 */
export interface ApiUsageStats {
  period: {
    start: Date;
    end: Date;
  };
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  averageResponseTime: number;
  requestsByEndpoint: Record<string, number>;
  requestsByStatus: Record<number, number>;
}

/**
 * Export request
 */
export interface ExportRequest {
  format: 'csv' | 'json' | 'xlsx';
  filters?: Record<string, unknown>;
  fields?: string[];
  email?: string; // send to email when ready
}

/**
 * Export response
 */
export interface ExportResponse {
  id: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  url?: string;
  expiresAt?: Date;
}

/**
 * Search request
 */
export interface SearchRequest extends PaginationParams {
  query: string;
  type?: string[];
  filters?: Record<string, unknown>;
  fuzzy?: boolean;
}

/**
 * Search response
 */
export interface SearchResponse<T> extends PaginatedResponse<T> {
  query: string;
  took: number; // milliseconds
  facets?: Record<string, SearchFacet[]>;
}

/**
 * Search facet
 */
export interface SearchFacet {
  value: string;
  count: number;
}

// Re-export common types
export type { ApiError, ApiResponse, PaginatedResponse, PaginationParams };