/**
 * Analytics and metrics-related types
 */

import type { BaseEntity } from './common';

/**
 * Analytics event type enum
 */
export enum AnalyticsEventType {
  PAGE_VIEW = 'page_view',
  BUTTON_CLICK = 'button_click',
  FORM_SUBMIT = 'form_submit',
  API_CALL = 'api_call',
  ERROR = 'error',
  WORKFLOW_EXECUTED = 'workflow_executed',
  DOCUMENT_UPLOADED = 'document_uploaded',
  DOCUMENT_PROCESSED = 'document_processed',
  USER_SIGNED_UP = 'user_signed_up',
  USER_LOGGED_IN = 'user_logged_in',
  SUBSCRIPTION_CREATED = 'subscription_created',
  SUBSCRIPTION_UPDATED = 'subscription_updated',
  SUBSCRIPTION_CANCELLED = 'subscription_cancelled',
  INTEGRATION_CONNECTED = 'integration_connected',
  INTEGRATION_DISCONNECTED = 'integration_disconnected',
  AI_CHAT_MESSAGE = 'ai_chat_message',
  FEATURE_USED = 'feature_used',
  CUSTOM = 'custom',
}

/**
 * Analytics time period enum
 */
export enum AnalyticsTimePeriod {
  HOUR = 'hour',
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  QUARTER = 'quarter',
  YEAR = 'year',
  CUSTOM = 'custom',
}

/**
 * Analytics metric type enum
 */
export enum MetricType {
  COUNT = 'count',
  SUM = 'sum',
  AVERAGE = 'average',
  MIN = 'min',
  MAX = 'max',
  UNIQUE = 'unique',
  PERCENTAGE = 'percentage',
}

/**
 * Analytics event entity
 */
export interface AnalyticsEvent extends BaseEntity {
  companyId: string;
  userId?: string;
  eventType: AnalyticsEventType;
  eventName: string;
  properties?: Record<string, unknown>;
  metadata?: EventMetadata;
  sessionId?: string;
  timestamp: Date;
}

/**
 * Event metadata
 */
export interface EventMetadata {
  source?: string;
  userAgent?: string;
  ipAddress?: string;
  referrer?: string;
  url?: string;
  screen?: ScreenInfo;
  device?: DeviceInfo;
  location?: LocationInfo;
}

/**
 * Screen information
 */
export interface ScreenInfo {
  width: number;
  height: number;
  density?: number;
}

/**
 * Device information
 */
export interface DeviceInfo {
  type: 'desktop' | 'mobile' | 'tablet' | 'unknown';
  os?: string;
  osVersion?: string;
  browser?: string;
  browserVersion?: string;
}

/**
 * Location information
 */
export interface LocationInfo {
  country?: string;
  region?: string;
  city?: string;
  timezone?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

/**
 * Analytics metric
 */
export interface Metric {
  name: string;
  value: number;
  type: MetricType;
  unit?: string;
  timestamp: Date;
  dimensions?: Record<string, string>;
}

/**
 * Analytics dashboard widget
 */
export interface DashboardWidget {
  id: string;
  type: WidgetType;
  title: string;
  description?: string;
  config: WidgetConfig;
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

/**
 * Widget type enum
 */
export enum WidgetType {
  LINE_CHART = 'line_chart',
  BAR_CHART = 'bar_chart',
  PIE_CHART = 'pie_chart',
  TABLE = 'table',
  COUNTER = 'counter',
  GAUGE = 'gauge',
  FUNNEL = 'funnel',
  HEATMAP = 'heatmap',
}

/**
 * Widget configuration
 */
export interface WidgetConfig {
  metrics: string[];
  dimensions?: string[];
  filters?: AnalyticsFilter[];
  timePeriod?: AnalyticsTimePeriod;
  customPeriod?: {
    start: Date;
    end: Date;
  };
  aggregation?: MetricType;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  refreshInterval?: number; // in seconds
}

/**
 * Analytics filter
 */
export interface AnalyticsFilter {
  field: string;
  operator: 'equals' | 'not_equals' | 'in' | 'not_in' | 'greater_than' | 'less_than' | 'contains';
  value: unknown;
}

/**
 * Analytics report
 */
export interface AnalyticsReport extends BaseEntity {
  companyId: string;
  name: string;
  description?: string;
  type: ReportType;
  config: ReportConfig;
  schedule?: ReportSchedule;
  recipients?: string[];
  lastRunAt?: Date;
  nextRunAt?: Date;
}

/**
 * Report type enum
 */
export enum ReportType {
  USAGE = 'usage',
  PERFORMANCE = 'performance',
  USER_ACTIVITY = 'user_activity',
  WORKFLOW_ANALYTICS = 'workflow_analytics',
  DOCUMENT_ANALYTICS = 'document_analytics',
  REVENUE = 'revenue',
  CUSTOM = 'custom',
}

/**
 * Report configuration
 */
export interface ReportConfig {
  metrics: string[];
  dimensions?: string[];
  filters?: AnalyticsFilter[];
  timePeriod: AnalyticsTimePeriod;
  format: 'pdf' | 'csv' | 'xlsx' | 'json';
  includeCharts?: boolean;
  includeRawData?: boolean;
}

/**
 * Report schedule
 */
export interface ReportSchedule {
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly';
  dayOfWeek?: number; // 0-6 (Sunday-Saturday)
  dayOfMonth?: number; // 1-31
  time: string; // HH:mm format
  timezone: string;
}

/**
 * Funnel analysis
 */
export interface Funnel {
  id: string;
  name: string;
  steps: FunnelStep[];
  conversionRate: number;
  totalEntered: number;
  totalCompleted: number;
}

/**
 * Funnel step
 */
export interface FunnelStep {
  id: string;
  name: string;
  eventType: AnalyticsEventType;
  filters?: AnalyticsFilter[];
  users: number;
  conversionRate: number;
  dropoffRate: number;
  averageTime?: number; // seconds to next step
}

/**
 * Cohort analysis
 */
export interface Cohort {
  id: string;
  name: string;
  definition: CohortDefinition;
  size: number;
  createdAt: Date;
}

/**
 * Cohort definition
 */
export interface CohortDefinition {
  type: 'user_property' | 'behavior' | 'custom';
  filters: AnalyticsFilter[];
  dateRange?: {
    start: Date;
    end: Date;
  };
}

/**
 * Retention analysis
 */
export interface RetentionData {
  cohortDate: Date;
  cohortSize: number;
  periods: RetentionPeriod[];
}

/**
 * Retention period
 */
export interface RetentionPeriod {
  period: number; // days/weeks/months since cohort creation
  retained: number;
  retentionRate: number;
}

/**
 * A/B test result
 */
export interface ABTestResult {
  testId: string;
  testName: string;
  variants: ABTestVariant[];
  startDate: Date;
  endDate?: Date;
  status: 'draft' | 'running' | 'completed' | 'paused';
  winner?: string; // variant ID
}

/**
 * A/B test variant
 */
export interface ABTestVariant {
  id: string;
  name: string;
  allocation: number; // percentage 0-100
  metrics: {
    conversions: number;
    conversionRate: number;
    participants: number;
    confidence?: number; // statistical confidence 0-1
  };
}

/**
 * User journey
 */
export interface UserJourney {
  userId: string;
  sessionId: string;
  events: AnalyticsEvent[];
  startedAt: Date;
  endedAt?: Date;
  duration?: number; // in seconds
  steps: number;
  converted: boolean;
}

/**
 * Track event DTO
 */
export interface TrackEventDto {
  eventType: AnalyticsEventType;
  eventName: string;
  properties?: Record<string, unknown>;
  userId?: string;
  sessionId?: string;
  timestamp?: Date;
}

/**
 * Query analytics DTO
 */
export interface QueryAnalyticsDto {
  metrics: string[];
  dimensions?: string[];
  filters?: AnalyticsFilter[];
  timePeriod?: AnalyticsTimePeriod;
  startDate?: Date;
  endDate?: Date;
  groupBy?: string;
  limit?: number;
  offset?: number;
}

/**
 * Analytics query result
 */
export interface AnalyticsQueryResult {
  data: Array<Record<string, unknown>>;
  totals?: Record<string, number>;
  metadata: {
    query: QueryAnalyticsDto;
    executionTime: number;
    recordCount: number;
  };
}

/**
 * Real-time stats
 */
export interface RealTimeStats {
  activeUsers: number;
  activeWorkflows: number;
  requestsPerMinute: number;
  averageResponseTime: number;
  errorRate: number;
  timestamp: Date;
}

/**
 * Usage summary
 */
export interface UsageSummary {
  period: {
    start: Date;
    end: Date;
  };
  users: {
    total: number;
    active: number;
    new: number;
  };
  workflows: {
    total: number;
    executed: number;
    succeeded: number;
    failed: number;
  };
  documents: {
    total: number;
    uploaded: number;
    processed: number;
  };
  aiRequests: {
    total: number;
    chat: number;
    analysis: number;
  };
  storage: {
    used: number; // bytes
    quota: number; // bytes
    percentage: number;
  };
}