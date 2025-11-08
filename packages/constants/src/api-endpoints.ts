/**
 * API endpoint constants
 */

export const API_VERSION = 'v1';
export const API_PREFIX = `/api/${API_VERSION}`;

/**
 * Auth endpoints
 */
export const AUTH_ENDPOINTS = {
  LOGIN: `${API_PREFIX}/auth/login`,
  REGISTER: `${API_PREFIX}/auth/register`,
  LOGOUT: `${API_PREFIX}/auth/logout`,
  REFRESH: `${API_PREFIX}/auth/refresh`,
  FORGOT_PASSWORD: `${API_PREFIX}/auth/forgot-password`,
  RESET_PASSWORD: `${API_PREFIX}/auth/reset-password`,
  VERIFY_EMAIL: `${API_PREFIX}/auth/verify-email`,
  CHANGE_PASSWORD: `${API_PREFIX}/auth/change-password`,
  ME: `${API_PREFIX}/auth/me`,
} as const;

/**
 * User endpoints
 */
export const USER_ENDPOINTS = {
  BASE: `${API_PREFIX}/users`,
  BY_ID: (id: string) => `${API_PREFIX}/users/${id}`,
  PREFERENCES: (id: string) => `${API_PREFIX}/users/${id}/preferences`,
  SESSIONS: (id: string) => `${API_PREFIX}/users/${id}/sessions`,
} as const;

/**
 * Company endpoints
 */
export const COMPANY_ENDPOINTS = {
  BASE: `${API_PREFIX}/companies`,
  BY_ID: (id: string) => `${API_PREFIX}/companies/${id}`,
  SETTINGS: (id: string) => `${API_PREFIX}/companies/${id}/settings`,
  MEMBERS: (id: string) => `${API_PREFIX}/companies/${id}/members`,
  INVITATIONS: (id: string) => `${API_PREFIX}/companies/${id}/invitations`,
} as const;

/**
 * Subscription endpoints
 */
export const SUBSCRIPTION_ENDPOINTS = {
  BASE: `${API_PREFIX}/subscriptions`,
  BY_ID: (id: string) => `${API_PREFIX}/subscriptions/${id}`,
  PLANS: `${API_PREFIX}/subscriptions/plans`,
  USAGE: (id: string) => `${API_PREFIX}/subscriptions/${id}/usage`,
  INVOICES: (id: string) => `${API_PREFIX}/subscriptions/${id}/invoices`,
  PAYMENT_METHODS: (id: string) => `${API_PREFIX}/subscriptions/${id}/payment-methods`,
  PREVIEW_CHANGE: (id: string) => `${API_PREFIX}/subscriptions/${id}/preview-change`,
  CANCEL: (id: string) => `${API_PREFIX}/subscriptions/${id}/cancel`,
} as const;

/**
 * Workflow endpoints
 */
export const WORKFLOW_ENDPOINTS = {
  BASE: `${API_PREFIX}/workflows`,
  BY_ID: (id: string) => `${API_PREFIX}/workflows/${id}`,
  EXECUTE: (id: string) => `${API_PREFIX}/workflows/${id}/execute`,
  EXECUTIONS: (id: string) => `${API_PREFIX}/workflows/${id}/executions`,
  EXECUTION_BY_ID: (workflowId: string, executionId: string) =>
    `${API_PREFIX}/workflows/${workflowId}/executions/${executionId}`,
  PAUSE: (id: string) => `${API_PREFIX}/workflows/${id}/pause`,
  RESUME: (id: string) => `${API_PREFIX}/workflows/${id}/resume`,
} as const;

/**
 * Document endpoints
 */
export const DOCUMENT_ENDPOINTS = {
  BASE: `${API_PREFIX}/documents`,
  BY_ID: (id: string) => `${API_PREFIX}/documents/${id}`,
  UPLOAD: `${API_PREFIX}/documents/upload`,
  PROCESS: (id: string) => `${API_PREFIX}/documents/${id}/process`,
  DOWNLOAD: (id: string) => `${API_PREFIX}/documents/${id}/download`,
  ANALYSIS: (id: string) => `${API_PREFIX}/documents/${id}/analysis`,
} as const;

/**
 * Conversation endpoints
 */
export const CONVERSATION_ENDPOINTS = {
  BASE: `${API_PREFIX}/conversations`,
  BY_ID: (id: string) => `${API_PREFIX}/conversations/${id}`,
  MESSAGES: (id: string) => `${API_PREFIX}/conversations/${id}/messages`,
  CHAT: `${API_PREFIX}/conversations/chat`,
} as const;

/**
 * Integration endpoints
 */
export const INTEGRATION_ENDPOINTS = {
  BASE: `${API_PREFIX}/integrations`,
  BY_ID: (id: string) => `${API_PREFIX}/integrations/${id}`,
  PROVIDERS: `${API_PREFIX}/integrations/providers`,
  CONNECT: (provider: string) => `${API_PREFIX}/integrations/${provider}/connect`,
  CALLBACK: (provider: string) => `${API_PREFIX}/integrations/${provider}/callback`,
  DISCONNECT: (id: string) => `${API_PREFIX}/integrations/${id}/disconnect`,
  SYNC: (id: string) => `${API_PREFIX}/integrations/${id}/sync`,
  WEBHOOK: (id: string) => `${API_PREFIX}/integrations/${id}/webhook`,
} as const;

/**
 * Analytics endpoints
 */
export const ANALYTICS_ENDPOINTS = {
  BASE: `${API_PREFIX}/analytics`,
  OVERVIEW: `${API_PREFIX}/analytics/overview`,
  USAGE: `${API_PREFIX}/analytics/usage`,
  WORKFLOWS: `${API_PREFIX}/analytics/workflows`,
  DOCUMENTS: `${API_PREFIX}/analytics/documents`,
  USERS: `${API_PREFIX}/analytics/users`,
  EXPORT: `${API_PREFIX}/analytics/export`,
} as const;

/**
 * Admin endpoints
 */
export const ADMIN_ENDPOINTS = {
  BASE: `${API_PREFIX}/admin`,
  USERS: `${API_PREFIX}/admin/users`,
  COMPANIES: `${API_PREFIX}/admin/companies`,
  SUBSCRIPTIONS: `${API_PREFIX}/admin/subscriptions`,
  SYSTEM: `${API_PREFIX}/admin/system`,
  HEALTH: `${API_PREFIX}/admin/health`,
  METRICS: `${API_PREFIX}/admin/metrics`,
} as const;

/**
 * Webhook endpoints
 */
export const WEBHOOK_ENDPOINTS = {
  STRIPE: `${API_PREFIX}/webhooks/stripe`,
  SLACK: `${API_PREFIX}/webhooks/slack`,
  GOOGLE: `${API_PREFIX}/webhooks/google`,
  MICROSOFT: `${API_PREFIX}/webhooks/microsoft`,
} as const;