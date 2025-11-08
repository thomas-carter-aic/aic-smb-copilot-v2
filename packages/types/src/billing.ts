/**
 * Billing and payment-related types
 */

import type { BaseEntity } from './common';
import type { SubscriptionPlan, BillingCycle } from './subscription';

/**
 * Payment method type enum
 */
export enum PaymentMethodType {
  CARD = 'card',
  BANK_ACCOUNT = 'bank_account',
  PAYPAL = 'paypal',
  APPLE_PAY = 'apple_pay',
  GOOGLE_PAY = 'google_pay',
}

/**
 * Payment status enum
 */
export enum PaymentStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded',
  PARTIALLY_REFUNDED = 'partially_refunded',
}

/**
 * Invoice status enum
 */
export enum InvoiceStatus {
  DRAFT = 'draft',
  OPEN = 'open',
  PAID = 'paid',
  VOID = 'void',
  UNCOLLECTIBLE = 'uncollectible',
}

/**
 * Refund reason enum
 */
export enum RefundReason {
  DUPLICATE = 'duplicate',
  FRAUDULENT = 'fraudulent',
  REQUESTED_BY_CUSTOMER = 'requested_by_customer',
  SERVICE_NOT_DELIVERED = 'service_not_delivered',
  BILLING_ERROR = 'billing_error',
  OTHER = 'other',
}

/**
 * Tax ID type enum
 */
export enum TaxIDType {
  EU_VAT = 'eu_vat',
  US_EIN = 'us_ein',
  GB_VAT = 'gb_vat',
  CA_GST = 'ca_gst',
  AU_ABN = 'au_abn',
  IN_GST = 'in_gst',
  OTHER = 'other',
}

/**
 * Currency enum (ISO 4217)
 */
export enum Currency {
  USD = 'usd',
  EUR = 'eur',
  GBP = 'gbp',
  CAD = 'cad',
  AUD = 'aud',
  JPY = 'jpy',
  CNY = 'cny',
  INR = 'inr',
}

/**
 * Payment method entity
 */
export interface PaymentMethod extends BaseEntity {
  companyId: string;
  type: PaymentMethodType;
  isDefault: boolean;
  
  // Card details (if type is CARD)
  card?: {
    brand: string;
    last4: string;
    expiryMonth: number;
    expiryYear: number;
    fingerprint?: string;
  };
  
  // Bank account details (if type is BANK_ACCOUNT)
  bankAccount?: {
    bankName: string;
    accountType: 'checking' | 'savings';
    last4: string;
    routingNumber?: string;
  };
  
  // Billing details
  billingDetails: BillingDetails;
  
  // Provider details
  stripePaymentMethodId?: string;
  stripeCustomerId?: string;
  
  metadata?: Record<string, unknown>;
}

/**
 * Billing details
 */
export interface BillingDetails {
  name?: string;
  email?: string;
  phone?: string;
  address?: {
    line1: string;
    line2?: string;
    city: string;
    state?: string;
    postalCode: string;
    country: string;
  };
}

/**
 * Payment entity
 */
export interface Payment extends BaseEntity {
  companyId: string;
  invoiceId?: string;
  subscriptionId?: string;
  paymentMethodId: string;
  amount: number; // in cents
  currency: Currency;
  status: PaymentStatus;
  description?: string;
  
  // Payment processor details
  stripePaymentIntentId?: string;
  stripeChargeId?: string;
  
  // Failure information
  failureCode?: string;
  failureMessage?: string;
  
  // Processing information
  processingStartedAt?: Date;
  processedAt?: Date;
  
  // Refund information
  refundedAmount?: number; // in cents
  refunds?: Refund[];
  
  metadata?: Record<string, unknown>;
}

/**
 * Refund entity
 */
export interface Refund extends BaseEntity {
  paymentId: string;
  amount: number; // in cents
  currency: Currency;
  reason: RefundReason;
  reasonDetails?: string;
  status: PaymentStatus;
  
  // Stripe details
  stripeRefundId?: string;
  
  metadata?: Record<string, unknown>;
}

/**
 * Invoice entity
 */
export interface Invoice extends BaseEntity {
  companyId: string;
  subscriptionId?: string;
  invoiceNumber: string;
  status: InvoiceStatus;
  
  // Amounts (all in cents)
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  amountPaid: number;
  amountDue: number;
  
  currency: Currency;
  
  // Line items
  items: InvoiceItem[];
  
  // Dates
  dueDate: Date;
  paidAt?: Date;
  voidedAt?: Date;
  
  // Payment
  paymentId?: string;
  paymentMethodId?: string;
  
  // PDF
  invoiceUrl?: string;
  invoicePdf?: string;
  
  // Stripe details
  stripeInvoiceId?: string;
  
  // Customer details
  customerDetails: {
    name: string;
    email: string;
    address?: BillingDetails['address'];
    taxIds?: TaxID[];
  };
  
  // Notes
  memo?: string;
  footer?: string;
  
  metadata?: Record<string, unknown>;
}

/**
 * Invoice item
 */
export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitAmount: number; // in cents
  amount: number; // in cents (quantity * unitAmount)
  taxAmount?: number; // in cents
  discountAmount?: number; // in cents
  period?: {
    start: Date;
    end: Date;
  };
  metadata?: Record<string, unknown>;
}

/**
 * Tax ID entity
 */
export interface TaxID extends BaseEntity {
  companyId: string;
  type: TaxIDType;
  value: string;
  verified: boolean;
  verifiedAt?: Date;
  
  // Stripe details
  stripeTaxIdId?: string;
  
  metadata?: Record<string, unknown>;
}

/**
 * Discount/Coupon entity
 */
export interface Discount extends BaseEntity {
  code: string;
  name: string;
  description?: string;
  
  // Discount type
  type: 'percentage' | 'fixed_amount';
  value: number; // percentage (0-100) or amount in cents
  currency?: Currency; // required if type is fixed_amount
  
  // Application
  appliesTo: 'subscription' | 'invoice' | 'all';
  plans?: SubscriptionPlan[]; // specific plans this applies to
  
  // Usage limits
  maxRedemptions?: number;
  redemptionsCount: number;
  maxRedemptionsPerCustomer?: number;
  
  // Duration
  duration: 'once' | 'forever' | 'repeating';
  durationInMonths?: number; // if duration is repeating
  
  // Validity
  validFrom?: Date;
  validUntil?: Date;
  isActive: boolean;
  
  // Stripe details
  stripeCouponId?: string;
  
  metadata?: Record<string, unknown>;
}

/**
 * Credit note entity
 */
export interface CreditNote extends BaseEntity {
  companyId: string;
  invoiceId: string;
  creditNoteNumber: string;
  
  // Amounts (in cents)
  subtotal: number;
  tax: number;
  total: number;
  
  currency: Currency;
  
  // Items
  items: InvoiceItem[];
  
  // Reason
  reason: 'duplicate' | 'fraudulent' | 'order_change' | 'product_unsatisfactory';
  reasonDetails?: string;
  
  // Status
  status: 'open' | 'void';
  voidedAt?: Date;
  
  // PDF
  creditNotePdf?: string;
  
  // Stripe details
  stripeCreditNoteId?: string;
  
  metadata?: Record<string, unknown>;
}

/**
 * Billing address entity
 */
export interface BillingAddress extends BaseEntity {
  companyId: string;
  isDefault: boolean;
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
  phone?: string;
}

/**
 * Payment intent (for checkout flows)
 */
export interface PaymentIntent {
  id: string;
  companyId: string;
  amount: number; // in cents
  currency: Currency;
  status: 'requires_payment_method' | 'requires_confirmation' | 'requires_action' | 'processing' | 'succeeded' | 'canceled';
  clientSecret: string;
  
  // Metadata
  description?: string;
  subscriptionId?: string;
  invoiceId?: string;
  
  // Stripe details
  stripePaymentIntentId: string;
  
  metadata?: Record<string, unknown>;
  createdAt: Date;
}

/**
 * Billing cycle details
 */
export interface BillingCycleDetails {
  cycle: BillingCycle;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  nextBillingDate: Date;
  daysUntilDue: number;
}

/**
 * Price tier (for volume pricing)
 */
export interface PriceTier {
  upTo: number | 'inf'; // quantity threshold
  unitAmount: number; // in cents
  flatAmount?: number; // in cents
}

/**
 * Metered usage record
 */
export interface UsageRecord extends BaseEntity {
  subscriptionId: string;
  companyId: string;
  metricName: string;
  quantity: number;
  timestamp: Date;
  action: 'increment' | 'set';
  idempotencyKey?: string;
}

/**
 * Balance transaction
 */
export interface BalanceTransaction extends BaseEntity {
  companyId: string;
  type: 'payment' | 'refund' | 'adjustment' | 'credit';
  amount: number; // in cents (positive = credit, negative = debit)
  currency: Currency;
  description: string;
  relatedId?: string; // paymentId, refundId, etc.
  balanceAfter: number; // in cents
}

/**
 * Account balance
 */
export interface AccountBalance {
  companyId: string;
  available: number; // in cents
  pending: number; // in cents
  currency: Currency;
  updatedAt: Date;
}

/**
 * Webhook event (for payment processor)
 */
export interface BillingWebhookEvent extends BaseEntity {
  type: string;
  provider: 'stripe' | 'paypal';
  payload: Record<string, unknown>;
  verified: boolean;
  processed: boolean;
  processedAt?: Date;
  error?: string;
}

/**
 * Add payment method DTO
 */
export interface AddPaymentMethodDto {
  companyId: string;
  stripePaymentMethodId: string;
  setAsDefault?: boolean;
}

/**
 * Create payment intent DTO
 */
export interface CreatePaymentIntentDto {
  amount: number; // in cents
  currency: Currency;
  paymentMethodId?: string;
  description?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Process payment DTO
 */
export interface ProcessPaymentDto {
  paymentMethodId: string;
  amount: number; // in cents
  currency: Currency;
  description?: string;
  invoiceId?: string;
  subscriptionId?: string;
}

/**
 * Create refund DTO
 */
export interface CreateRefundDto {
  paymentId: string;
  amount?: number; // in cents, full refund if not specified
  reason: RefundReason;
  reasonDetails?: string;
}

/**
 * Apply discount DTO
 */
export interface ApplyDiscountDto {
  code: string;
  subscriptionId?: string;
  invoiceId?: string;
}

/**
 * Generate invoice DTO
 */
export interface GenerateInvoiceDto {
  companyId: string;
  subscriptionId?: string;
  items: Array<{
    description: string;
    quantity: number;
    unitAmount: number; // in cents
  }>;
  dueDate?: Date;
  memo?: string;
}

/**
 * Billing portal session
 */
export interface BillingPortalSession {
  id: string;
  url: string;
  returnUrl: string;
  expiresAt: Date;
}

/**
 * Checkout session (for new subscriptions)
 */
export interface CheckoutSession {
  id: string;
  url: string;
  successUrl: string;
  cancelUrl: string;
  expiresAt: Date;
  paymentStatus: 'paid' | 'unpaid' | 'no_payment_required';
}