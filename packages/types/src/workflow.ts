/**
 * Workflow and automation-related types
 */

import type { BaseEntity } from './common';

/**
 * Workflow status enum
 */
export enum WorkflowStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  PAUSED = 'paused',
  ARCHIVED = 'archived',
}

/**
 * Workflow execution status enum
 */
export enum WorkflowExecutionStatus {
  PENDING = 'pending',
  RUNNING = 'running',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  TIMEOUT = 'timeout',
}

/**
 * Workflow trigger type enum
 */
export enum WorkflowTriggerType {
  MANUAL = 'manual',
  SCHEDULE = 'schedule',
  WEBHOOK = 'webhook',
  EVENT = 'event',
  API = 'api',
}

/**
 * Workflow node type enum
 */
export enum WorkflowNodeType {
  TRIGGER = 'trigger',
  ACTION = 'action',
  CONDITION = 'condition',
  LOOP = 'loop',
  DELAY = 'delay',
  BRANCH = 'branch',
}

/**
 * Workflow entity
 */
export interface Workflow extends BaseEntity {
  companyId: string;
  name: string;
  description?: string;
  status: WorkflowStatus;
  trigger: WorkflowTrigger;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  variables?: Record<string, unknown>;
  settings: WorkflowSettings;
  version: number;
  tags?: string[];
  lastExecutedAt?: Date;
  executionCount: number;
}

/**
 * Workflow trigger
 */
export interface WorkflowTrigger {
  id: string;
  type: WorkflowTriggerType;
  config: WorkflowTriggerConfig;
}

/**
 * Workflow trigger config (union type based on trigger type)
 */
export type WorkflowTriggerConfig =
  | ScheduleTriggerConfig
  | WebhookTriggerConfig
  | EventTriggerConfig;

/**
 * Schedule trigger config
 */
export interface ScheduleTriggerConfig {
  cron: string;
  timezone: string;
}

/**
 * Webhook trigger config
 */
export interface WebhookTriggerConfig {
  url: string;
  secret: string;
  method: 'GET' | 'POST';
}

/**
 * Event trigger config
 */
export interface EventTriggerConfig {
  eventType: string;
  filters?: Record<string, unknown>;
}

/**
 * Workflow node
 */
export interface WorkflowNode {
  id: string;
  type: WorkflowNodeType;
  name: string;
  config: WorkflowNodeConfig;
  position: { x: number; y: number };
}

/**
 * Workflow node config
 */
export interface WorkflowNodeConfig {
  actionType?: string;
  parameters?: Record<string, unknown>;
  conditions?: WorkflowCondition[];
  timeout?: number;
  retries?: number;
}

/**
 * Workflow condition
 */
export interface WorkflowCondition {
  field: string;
  operator: 'equals' | 'not_equals' | 'contains' | 'greater_than' | 'less_than';
  value: unknown;
}

/**
 * Workflow edge (connection between nodes)
 */
export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  condition?: WorkflowCondition;
}

/**
 * Workflow settings
 */
export interface WorkflowSettings {
  timeout: number; // in seconds
  maxRetries: number;
  retryDelay: number; // in seconds
  errorHandling: 'stop' | 'continue' | 'retry';
  notifications: {
    onSuccess: boolean;
    onFailure: boolean;
    emails?: string[];
  };
}

/**
 * Workflow execution
 */
export interface WorkflowExecution extends BaseEntity {
  workflowId: string;
  companyId: string;
  status: WorkflowExecutionStatus;
  startedAt: Date;
  completedAt?: Date;
  duration?: number; // in milliseconds
  input?: Record<string, unknown>;
  output?: Record<string, unknown>;
  error?: string;
  logs: WorkflowExecutionLog[];
  temporalWorkflowId?: string;
  temporalRunId?: string;
}

/**
 * Workflow execution log
 */
export interface WorkflowExecutionLog {
  timestamp: Date;
  nodeId: string;
  level: 'info' | 'warn' | 'error';
  message: string;
  data?: Record<string, unknown>;
}

/**
 * Create workflow DTO
 */
export interface CreateWorkflowDto {
  companyId: string;
  name: string;
  description?: string;
  trigger: WorkflowTrigger;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  settings?: Partial<WorkflowSettings>;
}

/**
 * Update workflow DTO
 */
export interface UpdateWorkflowDto {
  name?: string;
  description?: string;
  status?: WorkflowStatus;
  trigger?: WorkflowTrigger;
  nodes?: WorkflowNode[];
  edges?: WorkflowEdge[];
  settings?: Partial<WorkflowSettings>;
  tags?: string[];
}

/**
 * Execute workflow DTO
 */
export interface ExecuteWorkflowDto {
  workflowId: string;
  input?: Record<string, unknown>;
  context?: Record<string, unknown>;
}