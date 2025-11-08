/**
 * Notification and messaging-related types
 */

import type { BaseEntity } from './common';

/**
 * Notification type enum
 */
export enum NotificationType {
  // System notifications
  SYSTEM_ALERT = 'system_alert',
  SYSTEM_UPDATE = 'system_update',
  MAINTENANCE = 'maintenance',
  
  // User notifications
  WELCOME = 'welcome',
  EMAIL_VERIFIED = 'email_verified',
  PASSWORD_CHANGED = 'password_changed',
  ACCOUNT_LOCKED = 'account_locked',
  
  // Workflow notifications
  WORKFLOW_COMPLETED = 'workflow_completed',
  WORKFLOW_FAILED = 'workflow_failed',
  WORKFLOW_PAUSED = 'workflow_paused',
  
  // Document notifications
  DOCUMENT_PROCESSED = 'document_processed',
  DOCUMENT_PROCESSING_FAILED = 'document_processing_failed',
  DOCUMENT_SHARED = 'document_shared',
  
  // Subscription notifications
  TRIAL_STARTED = 'trial_started',
  TRIAL_ENDING = 'trial_ending',
  SUBSCRIPTION_CREATED = 'subscription_created',
  SUBSCRIPTION_UPDATED = 'subscription_updated',
  SUBSCRIPTION_CANCELLED = 'subscription_cancelled',
  PAYMENT_SUCCEEDED = 'payment_succeeded',
  PAYMENT_FAILED = 'payment_failed',
  INVOICE_UPCOMING = 'invoice_upcoming',
  
  // Team notifications
  USER_INVITED = 'user_invited',
  USER_JOINED = 'user_joined',
  USER_LEFT = 'user_left',
  ROLE_CHANGED = 'role_changed',
  
  // Integration notifications
  INTEGRATION_CONNECTED = 'integration_connected',
  INTEGRATION_DISCONNECTED = 'integration_disconnected',
  INTEGRATION_ERROR = 'integration_error',
  
  // Security notifications
  SUSPICIOUS_LOGIN = 'suspicious_login',
  NEW_DEVICE_LOGIN = 'new_device_login',
  PASSWORD_RESET_REQUESTED = 'password_reset_requested',
  
  // Custom notifications
  CUSTOM = 'custom',
}

/**
 * Notification channel enum
 */
export enum NotificationChannel {
  EMAIL = 'email',
  SMS = 'sms',
  PUSH = 'push',
  IN_APP = 'in_app',
  SLACK = 'slack',
  WEBHOOK = 'webhook',
}

/**
 * Notification priority enum
 */
export enum NotificationPriority {
  LOW = 'low',
  NORMAL = 'normal',
  HIGH = 'high',
  URGENT = 'urgent',
}

/**
 * Notification status enum
 */
export enum NotificationStatus {
  PENDING = 'pending',
  SENT = 'sent',
  DELIVERED = 'delivered',
  FAILED = 'failed',
  BOUNCED = 'bounced',
}

/**
 * Notification entity
 */
export interface Notification extends BaseEntity {
  companyId: string;
  userId?: string;
  type: NotificationType;
  channel: NotificationChannel;
  priority: NotificationPriority;
  status: NotificationStatus;
  
  // Content
  subject?: string;
  title: string;
  message: string;
  html?: string; // for email
  
  // Metadata
  data?: Record<string, unknown>;
  actionUrl?: string;
  actionText?: string;
  
  // Tracking
  sentAt?: Date;
  deliveredAt?: Date;
  readAt?: Date;
  clickedAt?: Date;
  
  // Grouping
  groupKey?: string;
  
  // Provider details
  providerId?: string; // SendGrid message ID, Twilio SID, etc.
  
  // Failure info
  failureReason?: string;
  retryCount: number;
  maxRetries: number;
  
  expiresAt?: Date;
}

/**
 * Email notification data
 */
export interface EmailNotification {
  to: string | string[];
  from?: string;
  replyTo?: string;
  cc?: string[];
  bcc?: string[];
  subject: string;
  text?: string;
  html?: string;
  templateId?: string;
  templateData?: Record<string, unknown>;
  attachments?: EmailAttachment[];
  headers?: Record<string, string>;
}

/**
 * Email attachment
 */
export interface EmailAttachment {
  filename: string;
  content?: Buffer | string;
  path?: string; // file path or URL
  contentType?: string;
  encoding?: string;
}

/**
 * SMS notification data
 */
export interface SMSNotification {
  to: string;
  from?: string;
  message: string;
  mediaUrls?: string[]; // MMS
}

/**
 * Push notification data
 */
export interface PushNotification {
  tokens: string[]; // FCM tokens
  title: string;
  body: string;
  icon?: string;
  image?: string;
  badge?: number;
  sound?: string;
  data?: Record<string, unknown>;
  action?: {
    type: string;
    url?: string;
  };
  ttl?: number; // time to live in seconds
}

/**
 * In-app notification data
 */
export interface InAppNotification {
  userId: string;
  title: string;
  message: string;
  icon?: string;
  actionUrl?: string;
  actionText?: string;
  priority: NotificationPriority;
  persistent?: boolean; // doesn't auto-dismiss
}

/**
 * Slack notification data
 */
export interface SlackNotification {
  channel?: string;
  text: string;
  blocks?: SlackBlock[];
  attachments?: SlackAttachment[];
  threadTs?: string; // for threading
}

/**
 * Slack block (simplified)
 */
export interface SlackBlock {
  type: string;
  text?: {
    type: 'plain_text' | 'mrkdwn';
    text: string;
  };
  elements?: unknown[];
  accessory?: unknown;
}

/**
 * Slack attachment
 */
export interface SlackAttachment {
  color?: string;
  title?: string;
  text?: string;
  fields?: Array<{
    title: string;
    value: string;
    short?: boolean;
  }>;
  footer?: string;
  ts?: number;
}

/**
 * Webhook notification data
 */
export interface WebhookNotification {
  url: string;
  method: 'GET' | 'POST' | 'PUT';
  headers?: Record<string, string>;
  body: Record<string, unknown>;
  secret?: string; // for signature
}

/**
 * Notification template
 */
export interface NotificationTemplate extends BaseEntity {
  name: string;
  type: NotificationType;
  channel: NotificationChannel;
  
  // Template content
  subject?: string;
  title?: string;
  message: string;
  html?: string;
  
  // Variables
  variables: string[]; // e.g., ['userName', 'workflowName']
  
  // Configuration
  isActive: boolean;
  locale?: string;
  
  // Provider template ID (e.g., SendGrid template ID)
  providerId?: string;
  
  metadata?: Record<string, unknown>;
}

/**
 * Notification preference
 */
export interface NotificationPreference extends BaseEntity {
  userId: string;
  
  // Channel preferences
  channels: {
    email: boolean;
    sms: boolean;
    push: boolean;
    inApp: boolean;
    slack: boolean;
  };
  
  // Type preferences (which notification types to receive)
  types: {
    [key in NotificationType]?: boolean;
  };
  
  // Timing preferences
  quietHours?: {
    enabled: boolean;
    start: string; // HH:mm format
    end: string; // HH:mm format
    timezone: string;
  };
  
  // Digest preferences
  digest?: {
    enabled: boolean;
    frequency: 'daily' | 'weekly';
    time: string; // HH:mm format
    dayOfWeek?: number; // 0-6 for weekly
  };
}

/**
 * Notification batch (for bulk sending)
 */
export interface NotificationBatch extends BaseEntity {
  companyId?: string;
  type: NotificationType;
  channel: NotificationChannel;
  
  // Recipients
  userIds?: string[];
  filters?: NotificationFilter[];
  
  // Content
  template?: string;
  templateData?: Record<string, unknown>;
  
  // Status
  status: 'pending' | 'processing' | 'completed' | 'failed';
  totalRecipients: number;
  sentCount: number;
  failedCount: number;
  
  // Scheduling
  scheduledFor?: Date;
  startedAt?: Date;
  completedAt?: Date;
  
  errors?: Array<{
    userId: string;
    error: string;
  }>;
}

/**
 * Notification filter
 */
export interface NotificationFilter {
  field: 'role' | 'status' | 'plan' | 'tag' | 'custom';
  operator: 'equals' | 'not_equals' | 'in' | 'not_in';
  value: unknown;
}

/**
 * Email campaign
 */
export interface EmailCampaign extends BaseEntity {
  companyId: string;
  name: string;
  subject: string;
  
  // Content
  templateId?: string;
  html?: string;
  text?: string;
  
  // Recipients
  segmentId?: string;
  recipients: string[]; // email addresses
  
  // Scheduling
  status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'cancelled';
  scheduledFor?: Date;
  sentAt?: Date;
  
  // Tracking
  totalSent: number;
  totalDelivered: number;
  totalOpened: number;
  totalClicked: number;
  totalBounced: number;
  totalUnsubscribed: number;
  
  // A/B testing
  abTest?: {
    enabled: boolean;
    variants: Array<{
      id: string;
      subject: string;
      percentage: number;
    }>;
    winnerCriteria: 'open_rate' | 'click_rate';
  };
}

/**
 * Email tracking event
 */
export interface EmailTrackingEvent extends BaseEntity {
  notificationId: string;
  campaignId?: string;
  email: string;
  type: 'delivered' | 'opened' | 'clicked' | 'bounced' | 'spam' | 'unsubscribed';
  timestamp: Date;
  
  // Additional data
  linkUrl?: string; // for click events
  bounceType?: 'hard' | 'soft'; // for bounce events
  userAgent?: string;
  ipAddress?: string;
  location?: {
    country?: string;
    city?: string;
  };
}

/**
 * Notification queue item
 */
export interface NotificationQueueItem {
  id: string;
  notification: Notification | EmailNotification | SMSNotification | PushNotification;
  priority: NotificationPriority;
  attempts: number;
  maxAttempts: number;
  nextRetryAt?: Date;
  addedAt: Date;
}

/**
 * Notification statistics
 */
export interface NotificationStats {
  period: {
    start: Date;
    end: Date;
  };
  byChannel: Record<NotificationChannel, {
    sent: number;
    delivered: number;
    failed: number;
    deliveryRate: number;
  }>;
  byType: Record<NotificationType, {
    sent: number;
    opened?: number; // for email
    clicked?: number; // for email
  }>;
  total: {
    sent: number;
    delivered: number;
    failed: number;
    deliveryRate: number;
  };
}

/**
 * Send notification DTO
 */
export interface SendNotificationDto {
  userId?: string;
  companyId?: string;
  type: NotificationType;
  channel: NotificationChannel;
  priority?: NotificationPriority;
  
  // Content
  title: string;
  message: string;
  subject?: string;
  html?: string;
  
  // Additional data
  data?: Record<string, unknown>;
  actionUrl?: string;
  actionText?: string;
  
  // Options
  sendAt?: Date; // schedule for later
  expiresAt?: Date;
  templateId?: string;
  templateData?: Record<string, unknown>;
}

/**
 * Send bulk notification DTO
 */
export interface SendBulkNotificationDto {
  userIds?: string[];
  filters?: NotificationFilter[];
  type: NotificationType;
  channel: NotificationChannel;
  templateId: string;
  templateData?: Record<string, unknown>;
  scheduledFor?: Date;
}

/**
 * Send email DTO
 */
export interface SendEmailDto {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  templateId?: string;
  templateData?: Record<string, unknown>;
  from?: string;
  replyTo?: string;
  attachments?: EmailAttachment[];
}

/**
 * Send SMS DTO
 */
export interface SendSMSDto {
  to: string;
  message: string;
  from?: string;
}

/**
 * Send push notification DTO
 */
export interface SendPushDto {
  userId?: string;
  tokens?: string[];
  title: string;
  body: string;
  data?: Record<string, unknown>;
  actionUrl?: string;
}

/**
 * Update notification preferences DTO
 */
export interface UpdateNotificationPreferencesDto {
  channels?: {
    email?: boolean;
    sms?: boolean;
    push?: boolean;
    inApp?: boolean;
  };
  types?: {
    [key in NotificationType]?: boolean;
  };
  quietHours?: {
    enabled: boolean;
    start: string;
    end: string;
  };
}