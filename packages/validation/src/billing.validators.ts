/**
 * Billing Validation Schemas
 * 
 * Validation schemas for billing, subscriptions, and payments
 */

import { z } from 'zod';
import {
  idSchema,
  emailSchema,
  amountSchema,
  currencySchema,
  timestampSchema,
  addressSchema,
} from './common.validators';

/**
 * Plan Interval Schema
 */
export const planIntervalSchema = z.enum(['monthly', 'yearly', 'quarterly']);

export type PlanInterval = z.infer<typeof planIntervalSchema>;

/**
 * Subscription Status Schema
 */
export const subscriptionStatusSchema = z.enum([
  'active',
  'trialing',
  'past_due',
  'canceled',
  'unpaid',
  'incomplete',
  'incomplete_expired',
  'paused',
]);

export type SubscriptionStatus = z.infer<typeof subscriptionStatusSchema>;

/**
 * Payment Method Type Schema
 */
export const paymentMethodTypeSchema = z.enum([
  'card',
  'bank_account',
  'paypal',
  'apple_pay',
  'google_pay',
]);

export type PaymentMethodType = z.infer<typeof paymentMethodTypeSchema>;

/**
 * Payment Status Schema
 */
export const paymentStatusSchema = z.enum([
  'pending',
  'processing',
  'succeeded',
  'failed',
  'canceled',
  'refunded',
]);

export type PaymentStatus = z.infer<typeof paymentStatusSchema>;

/**
 * Invoice Status Schema
 */
export const invoiceStatusSchema = z.enum([
  'draft',
  'open',
  'paid',
  'void',
  'uncollectible',
]);

export type InvoiceStatus = z.infer<typeof invoiceStatusSchema>;

/**
 * Plan Feature Schema
 */
export const planFeatureSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  included: z.boolean(),
  limit: z.number().optional(),
});

export type PlanFeature = z.infer<typeof planFeatureSchema>;

/**
 * Subscription Plan Schema
 */
export const subscriptionPlanSchema = z.object({
  id: idSchema,
  name: z.string().min(1, 'Plan name is required'),
  description: z.string().optional(),
  price: amountSchema,
  currency: currencySchema,
  interval: planIntervalSchema,
  trialDays: z.number().int().min(0).max(90).optional(),
  features: z.array(planFeatureSchema),
  metadata: z.record(z.any()).optional(),
  isActive: z.boolean().default(true),
  ...timestampSchema.shape,
});

export type SubscriptionPlan = z.infer<typeof subscriptionPlanSchema>;

/**
 * Create Plan Schema
 */
export const createPlanSchema = z.object({
  name: z.string().min(1, 'Plan name is required').max(100),
  description: z.string().max(500).optional(),
  price: amountSchema,
  currency: currencySchema.default('USD'),
  interval: planIntervalSchema,
  trialDays: z.number().int().min(0).max(90).optional(),
  features: z.array(planFeatureSchema),
  metadata: z.record(z.any()).optional(),
});

export type CreatePlanInput = z.infer<typeof createPlanSchema>;

/**
 * Update Plan Schema
 */
export const updatePlanSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  description: z.string().max(500).optional(),
  price: amountSchema.optional(),
  features: z.array(planFeatureSchema).optional(),
  metadata: z.record(z.any()).optional(),
  isActive: z.boolean().optional(),
});

export type UpdatePlanInput = z.infer<typeof updatePlanSchema>;

/**
 * Subscription Schema
 */
export const subscriptionSchema = z.object({
  id: idSchema,
  companyId: idSchema,
  planId: idSchema,
  status: subscriptionStatusSchema,
  currentPeriodStart: z.date(),
  currentPeriodEnd: z.date(),
  cancelAtPeriodEnd: z.boolean().default(false),
  canceledAt: z.date().nullable(),
  trialStart: z.date().nullable(),
  trialEnd: z.date().nullable(),
  quantity: z.number().int().positive().default(1),
  metadata: z.record(z.any()).optional(),
  ...timestampSchema.shape,
});

export type Subscription = z.infer<typeof subscriptionSchema>;

/**
 * Create Subscription Schema
 */
export const createSubscriptionSchema = z.object({
  planId: idSchema,
  paymentMethodId: idSchema.optional(),
  couponCode: z.string().optional(),
  quantity: z.number().int().positive().default(1),
  trialDays: z.number().int().min(0).max(90).optional(),
  metadata: z.record(z.any()).optional(),
});

export type CreateSubscriptionInput = z.infer<typeof createSubscriptionSchema>;

/**
 * Update Subscription Schema
 */
export const updateSubscriptionSchema = z.object({
  planId: idSchema.optional(),
  quantity: z.number().int().positive().optional(),
  metadata: z.record(z.any()).optional(),
  prorationBehavior: z.enum(['create_prorations', 'none', 'always_invoice']).default('create_prorations'),
});

export type UpdateSubscriptionInput = z.infer<typeof updateSubscriptionSchema>;

/**
 * Cancel Subscription Schema
 */
export const cancelSubscriptionSchema = z.object({
  immediately: z.boolean().default(false),
  reason: z.string().max(500).optional(),
});

export type CancelSubscriptionInput = z.infer<typeof cancelSubscriptionSchema>;

/**
 * Pause Subscription Schema
 */
export const pauseSubscriptionSchema = z.object({
  resumeAt: z.date().optional(),
});

export type PauseSubscriptionInput = z.infer<typeof pauseSubscriptionSchema>;

/**
 * Resume Subscription Schema
 */
export const resumeSubscriptionSchema = z.object({
  prorationBehavior: z.enum(['create_prorations', 'none', 'always_invoice']).default('create_prorations'),
});

export type ResumeSubscriptionInput = z.infer<typeof resumeSubscriptionSchema>;

/**
 * Payment Method Schema
 */
export const paymentMethodSchema = z.object({
  id: idSchema,
  type: paymentMethodTypeSchema,
  isDefault: z.boolean().default(false),
  last4: z.string().length(4).optional(),
  brand: z.string().optional(),
  expiryMonth: z.number().int().min(1).max(12).optional(),
  expiryYear: z.number().int().min(new Date().getFullYear()).optional(),
  billingDetails: z.object({
    name: z.string().optional(),
    email: emailSchema.optional(),
    phone: z.string().optional(),
    address: addressSchema.optional(),
  }).optional(),
  ...timestampSchema.shape,
});

export type PaymentMethod = z.infer<typeof paymentMethodSchema>;

/**
 * Add Payment Method Schema
 */
export const addPaymentMethodSchema = z.object({
  type: paymentMethodTypeSchema,
  token: z.string().min(1, 'Payment method token is required'),
  setAsDefault: z.boolean().default(false),
  billingDetails: z.object({
    name: z.string().min(1, 'Name is required'),
    email: emailSchema,
    phone: z.string().optional(),
    address: addressSchema,
  }),
});

export type AddPaymentMethodInput = z.infer<typeof addPaymentMethodSchema>;

/**
 * Update Payment Method Schema
 */
export const updatePaymentMethodSchema = z.object({
  expiryMonth: z.number().int().min(1).max(12).optional(),
  expiryYear: z.number().int().min(new Date().getFullYear()).optional(),
  billingDetails: z.object({
    name: z.string().optional(),
    email: emailSchema.optional(),
    phone: z.string().optional(),
    address: addressSchema.optional(),
  }).optional(),
});

export type UpdatePaymentMethodInput = z.infer<typeof updatePaymentMethodSchema>;

/**
 * Set Default Payment Method Schema
 */
export const setDefaultPaymentMethodSchema = z.object({
  paymentMethodId: idSchema,
});

export type SetDefaultPaymentMethodInput = z.infer<typeof setDefaultPaymentMethodSchema>;

/**
 * Delete Payment Method Schema
 */
export const deletePaymentMethodSchema = z.object({
  paymentMethodId: idSchema,
});

export type DeletePaymentMethodInput = z.infer<typeof deletePaymentMethodSchema>;

/**
 * Payment Schema
 */
export const paymentSchema = z.object({
  id: idSchema,
  companyId: idSchema,
  subscriptionId: idSchema.optional(),
  invoiceId: idSchema.optional(),
  amount: amountSchema,
  currency: currencySchema,
  status: paymentStatusSchema,
  paymentMethodId: idSchema,
  description: z.string().optional(),
  metadata: z.record(z.any()).optional(),
  failureCode: z.string().optional(),
  failureMessage: z.string().optional(),
  ...timestampSchema.shape,
});

export type Payment = z.infer<typeof paymentSchema>;

/**
 * Create Payment Intent Schema
 */
export const createPaymentIntentSchema = z.object({
  amount: amountSchema,
  currency: currencySchema.default('USD'),
  paymentMethodId: idSchema.optional(),
  description: z.string().max(500).optional(),
  metadata: z.record(z.any()).optional(),
});

export type CreatePaymentIntentInput = z.infer<typeof createPaymentIntentSchema>;

/**
 * Invoice Line Item Schema
 */
export const invoiceLineItemSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().int().positive().default(1),
  unitAmount: amountSchema,
  amount: amountSchema,
  metadata: z.record(z.any()).optional(),
});

export type InvoiceLineItem = z.infer<typeof invoiceLineItemSchema>;

/**
 * Invoice Schema
 */
export const invoiceSchema = z.object({
  id: idSchema,
  companyId: idSchema,
  subscriptionId: idSchema.optional(),
  number: z.string(),
  status: invoiceStatusSchema,
  currency: currencySchema,
  subtotal: amountSchema,
  tax: amountSchema.optional(),
  discount: amountSchema.optional(),
  total: amountSchema,
  amountDue: amountSchema,
  amountPaid: amountSchema.default(0),
  dueDate: z.date().optional(),
  paidAt: z.date().nullable(),
  voidedAt: z.date().nullable(),
  lineItems: z.array(invoiceLineItemSchema),
  metadata: z.record(z.any()).optional(),
  ...timestampSchema.shape,
});

export type Invoice = z.infer<typeof invoiceSchema>;

/**
 * Create Invoice Schema
 */
export const createInvoiceSchema = z.object({
  companyId: idSchema,
  dueDate: z.date().optional(),
  lineItems: z.array(invoiceLineItemSchema).min(1, 'At least one line item is required'),
  tax: amountSchema.optional(),
  discount: amountSchema.optional(),
  metadata: z.record(z.any()).optional(),
});

export type CreateInvoiceInput = z.infer<typeof createInvoiceSchema>;

/**
 * Pay Invoice Schema
 */
export const payInvoiceSchema = z.object({
  invoiceId: idSchema,
  paymentMethodId: idSchema,
});

export type PayInvoiceInput = z.infer<typeof payInvoiceSchema>;

/**
 * Void Invoice Schema
 */
export const voidInvoiceSchema = z.object({
  invoiceId: idSchema,
  reason: z.string().max(500).optional(),
});

export type VoidInvoiceInput = z.infer<typeof voidInvoiceSchema>;

/**
 * Coupon Schema
 */
export const couponSchema = z.object({
  id: idSchema,
  code: z.string().min(1).max(50),
  type: z.enum(['percentage', 'fixed_amount']),
  value: z.number().positive(),
  currency: currencySchema.optional(),
  duration: z.enum(['once', 'repeating', 'forever']),
  durationInMonths: z.number().int().positive().optional(),
  maxRedemptions: z.number().int().positive().optional(),
  redemptionsCount: z.number().int().min(0).default(0),
  validFrom: z.date().optional(),
  validUntil: z.date().optional(),
  isActive: z.boolean().default(true),
  metadata: z.record(z.any()).optional(),
  ...timestampSchema.shape,
});

export type Coupon = z.infer<typeof couponSchema>;

/**
 * Create Coupon Schema
 */
export const createCouponSchema = z.object({
  code: z.string().min(1, 'Code is required').max(50),
  type: z.enum(['percentage', 'fixed_amount']),
  value: z.number().positive(),
  currency: currencySchema.optional(),
  duration: z.enum(['once', 'repeating', 'forever']),
  durationInMonths: z.number().int().positive().optional(),
  maxRedemptions: z.number().int().positive().optional(),
  validFrom: z.date().optional(),
  validUntil: z.date().optional(),
  metadata: z.record(z.any()).optional(),
});

export type CreateCouponInput = z.infer<typeof createCouponSchema>;

/**
 * Apply Coupon Schema
 */
export const applyCouponSchema = z.object({
  code: z.string().min(1, 'Coupon code is required'),
});

export type ApplyCouponInput = z.infer<typeof applyCouponSchema>;

/**
 * Usage Record Schema
 */
export const usageRecordSchema = z.object({
  id: idSchema,
  subscriptionId: idSchema,
  quantity: z.number().int().positive(),
  timestamp: z.date(),
  metadata: z.record(z.any()).optional(),
});

export type UsageRecord = z.infer<typeof usageRecordSchema>;

/**
 * Create Usage Record Schema
 */
export const createUsageRecordSchema = z.object({
  quantity: z.number().int().positive(),
  timestamp: z.date().default(() => new Date()),
  action: z.enum(['increment', 'set']).default('increment'),
  metadata: z.record(z.any()).optional(),
});

export type CreateUsageRecordInput = z.infer<typeof createUsageRecordSchema>;

/**
 * Billing Portal Session Schema
 */
export const billingPortalSessionSchema = z.object({
  returnUrl: z.string().url('Invalid return URL'),
});

export type BillingPortalSessionInput = z.infer<typeof billingPortalSessionSchema>;

/**
 * Tax Rate Schema
 */
export const taxRateSchema = z.object({
  id: idSchema,
  displayName: z.string(),
  percentage: z.number().min(0).max(100),
  inclusive: z.boolean().default(false),
  jurisdiction: z.string().optional(),
  isActive: z.boolean().default(true),
  ...timestampSchema.shape,
});

export type TaxRate = z.infer<typeof taxRateSchema>;

/**
 * Refund Schema
 */
export const refundSchema = z.object({
  paymentId: idSchema,
  amount: amountSchema.optional(),
  reason: z.enum(['duplicate', 'fraudulent', 'requested_by_customer', 'other']),
  notes: z.string().max(500).optional(),
});

export type RefundInput = z.infer<typeof refundSchema>;