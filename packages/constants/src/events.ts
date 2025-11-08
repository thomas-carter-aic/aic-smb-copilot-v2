/**
 * Event names and event-related constants
 */

/**
 * System events
 */
export const SYSTEM_EVENTS = {
  // Application lifecycle
  APP_STARTED: 'app.started',
  APP_READY: 'app.ready',
  APP_SHUTDOWN: 'app.shutdown',
  APP_ERROR: 'app.error',
  
  // Health and monitoring
  HEALTH_CHECK_PASSED: 'system.health_check.passed',
  HEALTH_CHECK_FAILED: 'system.health_check.failed',
  SERVICE_DEGRADED: 'system.service.degraded',
  SERVICE_RECOVERED: 'system.service.recovered',
  
  // Database events
  DATABASE_CONNECTED: 'database.connected',
  DATABASE_DISCONNECTED: 'database.disconnected',
  DATABASE_ERROR: 'database.error',
  DATABASE_MIGRATION_STARTED: 'database.migration.started',
  DATABASE_MIGRATION_COMPLETED: 'database.migration.completed',
  DATABASE_MIGRATION_FAILED: 'database.migration.failed',
  
  // Cache events
  CACHE_CONNECTED: 'cache.connected',
  CACHE_DISCONNECTED: 'cache.disconnected',
  CACHE_ERROR: 'cache.error',
  CACHE_CLEARED: 'cache.cleared',
  
  // Queue events
  QUEUE_CONNECTED: 'queue.connected',
  QUEUE_DISCONNECTED: 'queue.disconnected',
  QUEUE_ERROR: 'queue.error',
} as const;

/**
 * User events
 */
export const USER_EVENTS = {
  // Registration and onboarding
  USER_REGISTERED: 'user.registered',
  USER_VERIFIED: 'user.verified',
  USER_ONBOARDED: 'user.onboarded',
  
  // Authentication
  USER_LOGGED_IN: 'user.logged_in',
  USER_LOGGED_OUT: 'user.logged_out',
  USER_LOGIN_FAILED: 'user.login_failed',
  USER_SESSION_CREATED: 'user.session.created',
  USER_SESSION_EXPIRED: 'user.session.expired',
  USER_SESSION_REVOKED: 'user.session.revoked',
  
  // Profile updates
  USER_PROFILE_UPDATED: 'user.profile.updated',
  USER_AVATAR_UPDATED: 'user.avatar.updated',
  USER_PASSWORD_CHANGED: 'user.password.changed',
  USER_EMAIL_CHANGED: 'user.email.changed',
  
  // Account status
  USER_ACTIVATED: 'user.activated',
  USER_DEACTIVATED: 'user.deactivated',
  USER_SUSPENDED: 'user.suspended',
  USER_DELETED: 'user.deleted',
  
  // Security
  USER_PASSWORD_RESET_REQUESTED: 'user.password_reset.requested',
  USER_PASSWORD_RESET_COMPLETED: 'user.password_reset.completed',
  USER_MFA_ENABLED: 'user.mfa.enabled',
  USER_MFA_DISABLED: 'user.mfa.disabled',
  USER_MFA_VERIFIED: 'user.mfa.verified',
  
  // Roles and permissions
  USER_ROLE_CHANGED: 'user.role.changed',
  USER_PERMISSIONS_UPDATED: 'user.permissions.updated',
  
  // Preferences
  USER_PREFERENCES_UPDATED: 'user.preferences.updated',
  USER_NOTIFICATIONS_UPDATED: 'user.notifications.updated',
} as const;

/**
 * Company events
 */
export const COMPANY_EVENTS = {
  // Lifecycle
  COMPANY_CREATED: 'company.created',
  COMPANY_UPDATED: 'company.updated',
  COMPANY_DELETED: 'company.deleted',
  COMPANY_ARCHIVED: 'company.archived',
  COMPANY_RESTORED: 'company.restored',
  
  // Settings
  COMPANY_SETTINGS_UPDATED: 'company.settings.updated',
  COMPANY_BRANDING_UPDATED: 'company.branding.updated',
  COMPANY_DOMAIN_VERIFIED: 'company.domain.verified',
  
  // Team management
  COMPANY_MEMBER_INVITED: 'company.member.invited',
  COMPANY_MEMBER_JOINED: 'company.member.joined',
  COMPANY_MEMBER_REMOVED: 'company.member.removed',
  COMPANY_MEMBER_ROLE_CHANGED: 'company.member.role_changed',
  
  // Features
  COMPANY_FEATURE_ENABLED: 'company.feature.enabled',
  COMPANY_FEATURE_DISABLED: 'company.feature.disabled',
  
  // SSO
  COMPANY_SSO_CONFIGURED: 'company.sso.configured',
  COMPANY_SSO_ENABLED: 'company.sso.enabled',
  COMPANY_SSO_DISABLED: 'company.sso.disabled',
} as const;

/**
 * Subscription events
 */
export const SUBSCRIPTION_EVENTS = {
  // Lifecycle
  SUBSCRIPTION_CREATED: 'subscription.created',
  SUBSCRIPTION_UPDATED: 'subscription.updated',
  SUBSCRIPTION_CANCELLED: 'subscription.cancelled',
  SUBSCRIPTION_REACTIVATED: 'subscription.reactivated',
  SUBSCRIPTION_EXPIRED: 'subscription.expired',
  
  // Trial
  SUBSCRIPTION_TRIAL_STARTED: 'subscription.trial.started',
  SUBSCRIPTION_TRIAL_ENDING: 'subscription.trial.ending',
  SUBSCRIPTION_TRIAL_ENDED: 'subscription.trial.ended',
  SUBSCRIPTION_TRIAL_CONVERTED: 'subscription.trial.converted',
  
  // Plan changes
  SUBSCRIPTION_PLAN_UPGRADED: 'subscription.plan.upgraded',
  SUBSCRIPTION_PLAN_DOWNGRADED: 'subscription.plan.downgraded',
  SUBSCRIPTION_PLAN_CHANGED: 'subscription.plan.changed',
  
  // Billing cycle
  SUBSCRIPTION_RENEWED: 'subscription.renewed',
  SUBSCRIPTION_RENEWAL_FAILED: 'subscription.renewal.failed',
  
  // Status changes
  SUBSCRIPTION_PAUSED: 'subscription.paused',
  SUBSCRIPTION_RESUMED: 'subscription.resumed',
  SUBSCRIPTION_PAST_DUE: 'subscription.past_due',
} as const;

/**
 * Payment events
 */
export const PAYMENT_EVENTS = {
  // Payment processing
  PAYMENT_INITIATED: 'payment.initiated',
  PAYMENT_PROCESSING: 'payment.processing',
  PAYMENT_SUCCEEDED: 'payment.succeeded',
  PAYMENT_FAILED: 'payment.failed',
  PAYMENT_CANCELLED: 'payment.cancelled',
  
  // Refunds
  PAYMENT_REFUND_INITIATED: 'payment.refund.initiated',
  PAYMENT_REFUNDED: 'payment.refunded',
  PAYMENT_REFUND_FAILED: 'payment.refund.failed',
  PAYMENT_PARTIALLY_REFUNDED: 'payment.partially_refunded',
  
  // Payment methods
  PAYMENT_METHOD_ADDED: 'payment_method.added',
  PAYMENT_METHOD_UPDATED: 'payment_method.updated',
  PAYMENT_METHOD_REMOVED: 'payment_method.removed',
  PAYMENT_METHOD_EXPIRED: 'payment_method.expired',
  PAYMENT_METHOD_SET_DEFAULT: 'payment_method.set_default',
  
  // Invoices
  INVOICE_CREATED: 'invoice.created',
  INVOICE_SENT: 'invoice.sent',
  INVOICE_PAID: 'invoice.paid',
  INVOICE_PAYMENT_FAILED: 'invoice.payment_failed',
  INVOICE_VOIDED: 'invoice.voided',
  INVOICE_UPCOMING: 'invoice.upcoming',
  
  // Disputes
  PAYMENT_DISPUTE_CREATED: 'payment.dispute.created',
  PAYMENT_DISPUTE_UPDATED: 'payment.dispute.updated',
  PAYMENT_DISPUTE_CLOSED: 'payment.dispute.closed',
} as const;

/**
 * Workflow events
 */
export const WORKFLOW_EVENTS = {
  // Lifecycle
  WORKFLOW_CREATED: 'workflow.created',
  WORKFLOW_UPDATED: 'workflow.updated',
  WORKFLOW_DELETED: 'workflow.deleted',
  WORKFLOW_PUBLISHED: 'workflow.published',
  WORKFLOW_UNPUBLISHED: 'workflow.unpublished',
  
  // Status
  WORKFLOW_ACTIVATED: 'workflow.activated',
  WORKFLOW_DEACTIVATED: 'workflow.deactivated',
  WORKFLOW_PAUSED: 'workflow.paused',
  WORKFLOW_RESUMED: 'workflow.resumed',
  
  // Execution
  WORKFLOW_EXECUTION_STARTED: 'workflow.execution.started',
  WORKFLOW_EXECUTION_COMPLETED: 'workflow.execution.completed',
  WORKFLOW_EXECUTION_FAILED: 'workflow.execution.failed',
  WORKFLOW_EXECUTION_CANCELLED: 'workflow.execution.cancelled',
  WORKFLOW_EXECUTION_TIMEOUT: 'workflow.execution.timeout',
  WORKFLOW_EXECUTION_RETRY: 'workflow.execution.retry',
  
  // Triggers
  WORKFLOW_TRIGGER_FIRED: 'workflow.trigger.fired',
  WORKFLOW_TRIGGER_UPDATED: 'workflow.trigger.updated',
  
  // Nodes
  WORKFLOW_NODE_EXECUTED: 'workflow.node.executed',
  WORKFLOW_NODE_FAILED: 'workflow.node.failed',
  WORKFLOW_NODE_SKIPPED: 'workflow.node.skipped',
} as const;

/**
 * Document events
 */
export const DOCUMENT_EVENTS = {
  // Upload
  DOCUMENT_UPLOADED: 'document.uploaded',
  DOCUMENT_UPLOAD_FAILED: 'document.upload.failed',
  
  // Processing
  DOCUMENT_PROCESSING_STARTED: 'document.processing.started',
  DOCUMENT_PROCESSING_COMPLETED: 'document.processing.completed',
  DOCUMENT_PROCESSING_FAILED: 'document.processing.failed',
  
  // AI Analysis
  DOCUMENT_ANALYSIS_STARTED: 'document.analysis.started',
  DOCUMENT_ANALYSIS_COMPLETED: 'document.analysis.completed',
  DOCUMENT_ANALYSIS_FAILED: 'document.analysis.failed',
  
  // Management
  DOCUMENT_UPDATED: 'document.updated',
  DOCUMENT_DELETED: 'document.deleted',
  DOCUMENT_ARCHIVED: 'document.archived',
  DOCUMENT_RESTORED: 'document.restored',
  
  // Sharing
  DOCUMENT_SHARED: 'document.shared',
  DOCUMENT_SHARE_REVOKED: 'document.share.revoked',
  DOCUMENT_DOWNLOADED: 'document.downloaded',
  
  // Conversations
  CONVERSATION_STARTED: 'conversation.started',
  CONVERSATION_MESSAGE_SENT: 'conversation.message.sent',
  CONVERSATION_ENDED: 'conversation.ended',
} as const;

/**
 * Integration events
 */
export const INTEGRATION_EVENTS = {
  // Connection
  INTEGRATION_CONNECTED: 'integration.connected',
  INTEGRATION_DISCONNECTED: 'integration.disconnected',
  INTEGRATION_RECONNECTED: 'integration.reconnected',
  INTEGRATION_CONNECTION_FAILED: 'integration.connection.failed',
  
  // OAuth flow
  INTEGRATION_OAUTH_STARTED: 'integration.oauth.started',
  INTEGRATION_OAUTH_COMPLETED: 'integration.oauth.completed',
  INTEGRATION_OAUTH_FAILED: 'integration.oauth.failed',
  
  // Sync
  INTEGRATION_SYNC_STARTED: 'integration.sync.started',
  INTEGRATION_SYNC_COMPLETED: 'integration.sync.completed',
  INTEGRATION_SYNC_FAILED: 'integration.sync.failed',
  
  // Webhooks
  INTEGRATION_WEBHOOK_RECEIVED: 'integration.webhook.received',
  INTEGRATION_WEBHOOK_PROCESSED: 'integration.webhook.processed',
  INTEGRATION_WEBHOOK_FAILED: 'integration.webhook.failed',
  
  // Settings
  INTEGRATION_SETTINGS_UPDATED: 'integration.settings.updated',
  INTEGRATION_ENABLED: 'integration.enabled',
  INTEGRATION_DISABLED: 'integration.disabled',
  
  // Errors
  INTEGRATION_ERROR: 'integration.error',
  INTEGRATION_RATE_LIMITED: 'integration.rate_limited',
  INTEGRATION_TOKEN_EXPIRED: 'integration.token.expired',
  INTEGRATION_TOKEN_REFRESHED: 'integration.token.refreshed',
} as const;

/**
 * Analytics events
 */
export const ANALYTICS_EVENTS = {
  // Page tracking
  PAGE_VIEWED: 'analytics.page.viewed',
  PAGE_EXITED: 'analytics.page.exited',
  
  // User actions
  BUTTON_CLICKED: 'analytics.button.clicked',
  FORM_SUBMITTED: 'analytics.form.submitted',
  FORM_ABANDONED: 'analytics.form.abandoned',
  
  // Feature usage
  FEATURE_USED: 'analytics.feature.used',
  FEATURE_DISCOVERED: 'analytics.feature.discovered',
  
  // Reports
  REPORT_GENERATED: 'analytics.report.generated',
  REPORT_EXPORTED: 'analytics.report.exported',
  REPORT_SCHEDULED: 'analytics.report.scheduled',
  
  // Funnels
  FUNNEL_ENTERED: 'analytics.funnel.entered',
  FUNNEL_STEP_COMPLETED: 'analytics.funnel.step_completed',
  FUNNEL_COMPLETED: 'analytics.funnel.completed',
  FUNNEL_ABANDONED: 'analytics.funnel.abandoned',
  
  // A/B Testing
  AB_TEST_STARTED: 'analytics.ab_test.started',
  AB_TEST_VARIANT_ASSIGNED: 'analytics.ab_test.variant_assigned',
  AB_TEST_COMPLETED: 'analytics.ab_test.completed',
} as const;

/**
 * Notification events
 */
export const NOTIFICATION_EVENTS = {
  // Sending
  NOTIFICATION_SENT: 'notification.sent',
  NOTIFICATION_DELIVERED: 'notification.delivered',
  NOTIFICATION_FAILED: 'notification.failed',
  NOTIFICATION_BOUNCED: 'notification.bounced',
  
  // Engagement
  NOTIFICATION_OPENED: 'notification.opened',
  NOTIFICATION_CLICKED: 'notification.clicked',
  NOTIFICATION_DISMISSED: 'notification.dismissed',
  
  // Email specific
  EMAIL_SENT: 'email.sent',
  EMAIL_DELIVERED: 'email.delivered',
  EMAIL_OPENED: 'email.opened',
  EMAIL_CLICKED: 'email.clicked',
  EMAIL_BOUNCED: 'email.bounced',
  EMAIL_SPAM_REPORTED: 'email.spam_reported',
  EMAIL_UNSUBSCRIBED: 'email.unsubscribed',
  
  // SMS specific
  SMS_SENT: 'sms.sent',
  SMS_DELIVERED: 'sms.delivered',
  SMS_FAILED: 'sms.failed',
  
  // Push specific
  PUSH_SENT: 'push.sent',
  PUSH_DELIVERED: 'push.delivered',
  PUSH_OPENED: 'push.opened',
  PUSH_FAILED: 'push.failed',
  
  // Campaigns
  CAMPAIGN_STARTED: 'campaign.started',
  CAMPAIGN_COMPLETED: 'campaign.completed',
  CAMPAIGN_PAUSED: 'campaign.paused',
  CAMPAIGN_CANCELLED: 'campaign.cancelled',
} as const;

/**
 * Security events
 */
export const SECURITY_EVENTS = {
  // Authentication
  LOGIN_SUCCESSFUL: 'security.login.successful',
  LOGIN_FAILED: 'security.login.failed',
  LOGIN_SUSPICIOUS: 'security.login.suspicious',
  LOGOUT: 'security.logout',
  
  // Account security
  ACCOUNT_LOCKED: 'security.account.locked',
  ACCOUNT_UNLOCKED: 'security.account.unlocked',
  PASSWORD_BREACH_DETECTED: 'security.password.breach_detected',
  
  // Access control
  UNAUTHORIZED_ACCESS_ATTEMPT: 'security.unauthorized_access.attempt',
  PERMISSION_DENIED: 'security.permission.denied',
  PERMISSION_ESCALATION_ATTEMPT: 'security.permission.escalation_attempt',
  
  // API security
  API_KEY_CREATED: 'security.api_key.created',
  API_KEY_REVOKED: 'security.api_key.revoked',
  API_KEY_COMPROMISED: 'security.api_key.compromised',
  API_RATE_LIMIT_EXCEEDED: 'security.api.rate_limit_exceeded',
  
  // Data security
  DATA_EXPORTED: 'security.data.exported',
  DATA_DELETED: 'security.data.deleted',
  SENSITIVE_DATA_ACCESSED: 'security.sensitive_data.accessed',
  
  // Audit
  AUDIT_LOG_CREATED: 'security.audit_log.created',
  AUDIT_LOG_EXPORTED: 'security.audit_log.exported',
} as const;

/**
 * All events combined
 */
export const EVENTS = {
  ...SYSTEM_EVENTS,
  ...USER_EVENTS,
  ...COMPANY_EVENTS,
  ...SUBSCRIPTION_EVENTS,
  ...PAYMENT_EVENTS,
  ...WORKFLOW_EVENTS,
  ...DOCUMENT_EVENTS,
  ...INTEGRATION_EVENTS,
  ...ANALYTICS_EVENTS,
  ...NOTIFICATION_EVENTS,
  ...SECURITY_EVENTS,
} as const;

/**
 * Event categories for filtering/grouping
 */
export const EVENT_CATEGORIES = {
  SYSTEM: 'system',
  USER: 'user',
  COMPANY: 'company',
  SUBSCRIPTION: 'subscription',
  PAYMENT: 'payment',
  WORKFLOW: 'workflow',
  DOCUMENT: 'document',
  INTEGRATION: 'integration',
  ANALYTICS: 'analytics',
  NOTIFICATION: 'notification',
  SECURITY: 'security',
} as const;

/**
 * Event severity levels
 */
export const EVENT_SEVERITY = {
  DEBUG: 'debug',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  CRITICAL: 'critical',
} as const;

/**
 * Helper to get event category from event name
 */
export const getEventCategory = (eventName: string): string => {
  const prefix = eventName.split('.')[0];
  return prefix || EVENT_CATEGORIES.SYSTEM;
};

/**
 * Helper to check if event is a user event
 */
export const isUserEvent = (eventName: string): boolean => {
  return eventName.startsWith('user.');
};

/**
 * Helper to check if event is a security event
 */
export const isSecurityEvent = (eventName: string): boolean => {
  return eventName.startsWith('security.');
};

/**
 * Helper to check if event is a payment event
 */
export const isPaymentEvent = (eventName: string): boolean => {
  return eventName.startsWith('payment.') || eventName.startsWith('invoice.');
};