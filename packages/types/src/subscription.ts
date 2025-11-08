/**
 * Subscription and billing-related types
 */

import type { BaseEntity } from './common';

/**
 * Subscription plan enum
 */
export enum SubscriptionPlan {
  FREE = 'free',
  BASIC = 'basic',
  PRO = 'pro',
  ENTERPRISE = 'enterprise',
}

/**
 * Subscription status enum
 */
export enum SubscriptionStatus {
  ACTIVE = 'active',
  TRIAL = 'trial',
  PAST_DUE = 'past_due',
  CANCELLED = 'cancelled',
  EXPIRED = 'expired',
}

/**
 * Billing cycle enum
 */
export enum BillingCycle {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

/**
 * Payment status enum
 */
export enum PaymentStatus {
  PENDING = 'pending',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
  REFUNDED = 'refunded',
}

/**
 * Subscription entity
 */
export interface Subscription extends BaseEntity {
  companyId: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  billingCycle: BillingCycle;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  trialEndsAt?: Date;
  cancelledAt?: Date;
  cancelAtPeriodEnd: boolean;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Plan features and limits
 */
export interface PlanLimits {
  plan: SubscriptionPlan;
  features: {
    users: number | 'unlimited';
    aiRequests: number | 'unlimited';
    storage: number; // in GB
    workflows: number | 'unlimited';
    integrations: number | 'unlimited';
    apiCalls: number | 'unlimited';
  };
  prices: {
    monthly: number; // in cents
    yearly: number; // in cents
  };
}

/**
 * Usage tracking
 */
export interface Usage {
  companyId: string;
  period: {
    start: Date;
    end: Date;
  };
  metrics: {
    aiRequests: number;
    storageUsed: number; // in bytes
    apiCalls: number;
    workflowExecutions: number;
  };
}

/**
 * Payment method
 */
export interface PaymentMethod {
  id: string;
  companyId: string;
  type: 'card' | 'bank_account';
  last4: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
  isDefault: boolean;
  stripePaymentMethodId: string;
}

/**
 * Invoice
 */
export interface Invoice extends BaseEntity {
  companyId: string;
  subscriptionId: string;
  amount: number; // in cents
  currency: string;
  status: PaymentStatus;
  dueDate: Date;
  paidAt?: Date;
  invoiceNumber: string;
  invoiceUrl?: string;
  stripeInvoiceId?: string;
  items: InvoiceItem[];
}

/**
 * Invoice item
 */
export interface InvoiceItem {
  description: string;
  quantity: number;
  unitAmount: number; // in cents
  amount: number; // in cents
}

/**
 * Subscription change preview
 */
export interface SubscriptionChangePreview {
  currentPlan: SubscriptionPlan;
  newPlan: SubscriptionPlan;
  proratedAmount: number; // in cents
  immediateCharge: number; // in cents
  nextBillingDate: Date;
  nextBillingAmount: number; // in cents
}

/**
 * Create subscription DTO
 */
export interface CreateSubscriptionDto {
  companyId: string;
  plan: SubscriptionPlan;
  billingCycle: BillingCycle;
  paymentMethodId: string;
}

/**
 * Update subscription DTO
 */
export interface UpdateSubscriptionDto {
  plan?: SubscriptionPlan;
  billingCycle?: BillingCycle;
  cancelAtPeriodEnd?: boolean;
}