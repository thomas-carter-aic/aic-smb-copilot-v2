/**
 * Subscription plans and pricing constants
 */

/**
 * Plan IDs
 */
export const PLAN_IDS = {
  FREE: 'free',
  BASIC: 'basic',
  PRO: 'pro',
  ENTERPRISE: 'enterprise',
} as const;

/**
 * Plan names (display)
 */
export const PLAN_NAMES = {
  [PLAN_IDS.FREE]: 'Free',
  [PLAN_IDS.BASIC]: 'Basic',
  [PLAN_IDS.PRO]: 'Pro',
  [PLAN_IDS.ENTERPRISE]: 'Enterprise',
} as const;

/**
 * Plan descriptions
 */
export const PLAN_DESCRIPTIONS = {
  [PLAN_IDS.FREE]: 'Perfect for trying out AIC Copilot',
  [PLAN_IDS.BASIC]: 'For small teams getting started',
  [PLAN_IDS.PRO]: 'For growing businesses',
  [PLAN_IDS.ENTERPRISE]: 'For large organizations with advanced needs',
} as const;

/**
 * Monthly pricing (in cents)
 */
export const MONTHLY_PRICES = {
  [PLAN_IDS.FREE]: 0,
  [PLAN_IDS.BASIC]: 2900, // $29
  [PLAN_IDS.PRO]: 9900, // $99
  [PLAN_IDS.ENTERPRISE]: null, // Custom pricing
} as const;

/**
 * Yearly pricing (in cents) - ~20% discount
 */
export const YEARLY_PRICES = {
  [PLAN_IDS.FREE]: 0,
  [PLAN_IDS.BASIC]: 27900, // $279 (~$23.25/mo)
  [PLAN_IDS.PRO]: 94900, // $949 (~$79.08/mo)
  [PLAN_IDS.ENTERPRISE]: null, // Custom pricing
} as const;

/**
 * User limits per plan
 */
export const PLAN_USER_LIMITS = {
  [PLAN_IDS.FREE]: 1,
  [PLAN_IDS.BASIC]: 5,
  [PLAN_IDS.PRO]: 50,
  [PLAN_IDS.ENTERPRISE]: -1, // Unlimited
} as const;

/**
 * Storage limits per plan (in bytes)
 */
export const PLAN_STORAGE_LIMITS = {
  [PLAN_IDS.FREE]: 1 * 1024 * 1024 * 1024, // 1 GB
  [PLAN_IDS.BASIC]: 10 * 1024 * 1024 * 1024, // 10 GB
  [PLAN_IDS.PRO]: 100 * 1024 * 1024 * 1024, // 100 GB
  [PLAN_IDS.ENTERPRISE]: -1, // Unlimited
} as const;

/**
 * AI request limits per plan (per month)
 */
export const PLAN_AI_REQUEST_LIMITS = {
  [PLAN_IDS.FREE]: 100,
  [PLAN_IDS.BASIC]: 1000,
  [PLAN_IDS.PRO]: 10000,
  [PLAN_IDS.ENTERPRISE]: -1, // Unlimited
} as const;

/**
 * Workflow limits per plan
 */
export const PLAN_WORKFLOW_LIMITS = {
  [PLAN_IDS.FREE]: 5,
  [PLAN_IDS.BASIC]: 25,
  [PLAN_IDS.PRO]: -1, // Unlimited
  [PLAN_IDS.ENTERPRISE]: -1, // Unlimited
} as const;

/**
 * Integration limits per plan
 */
export const PLAN_INTEGRATION_LIMITS = {
  [PLAN_IDS.FREE]: 2,
  [PLAN_IDS.BASIC]: 5,
  [PLAN_IDS.PRO]: 15,
  [PLAN_IDS.ENTERPRISE]: -1, // Unlimited
} as const;

/**
 * API call limits per plan (per month)
 */
export const PLAN_API_CALL_LIMITS = {
  [PLAN_IDS.FREE]: 1000,
  [PLAN_IDS.BASIC]: 10000,
  [PLAN_IDS.PRO]: 100000,
  [PLAN_IDS.ENTERPRISE]: -1, // Unlimited
} as const;

/**
 * Feature flags per plan
 */
export const PLAN_FEATURES = {
  [PLAN_IDS.FREE]: {
    // Core features
    aiChat: true,
    documentProcessing: true,
    workflowBuilder: false,
    analytics: false,
    integrations: true,
    apiAccess: false,
    
    // Advanced features
    customBranding: false,
    advancedReporting: false,
    prioritySupport: false,
    ssoSaml: false,
    auditLogs: false,
    customRoles: false,
    multiLanguage: false,
    whiteLabel: false,
    dedicatedSupport: false,
    slaCoverage: false,
    
    // Limits
    maxUsers: 1,
    maxStorage: '1 GB',
    maxAiRequests: 100,
    maxWorkflows: 5,
    maxIntegrations: 2,
    maxApiCalls: 1000,
  },
  [PLAN_IDS.BASIC]: {
    // Core features
    aiChat: true,
    documentProcessing: true,
    workflowBuilder: true,
    analytics: true,
    integrations: true,
    apiAccess: true,
    
    // Advanced features
    customBranding: false,
    advancedReporting: false,
    prioritySupport: false,
    ssoSaml: false,
    auditLogs: false,
    customRoles: false,
    multiLanguage: true,
    whiteLabel: false,
    dedicatedSupport: false,
    slaCoverage: false,
    
    // Limits
    maxUsers: 5,
    maxStorage: '10 GB',
    maxAiRequests: 1000,
    maxWorkflows: 25,
    maxIntegrations: 5,
    maxApiCalls: 10000,
  },
  [PLAN_IDS.PRO]: {
    // Core features
    aiChat: true,
    documentProcessing: true,
    workflowBuilder: true,
    analytics: true,
    integrations: true,
    apiAccess: true,
    
    // Advanced features
    customBranding: true,
    advancedReporting: true,
    prioritySupport: true,
    ssoSaml: true,
    auditLogs: true,
    customRoles: true,
    multiLanguage: true,
    whiteLabel: false,
    dedicatedSupport: false,
    slaCoverage: false,
    
    // Limits
    maxUsers: 50,
    maxStorage: '100 GB',
    maxAiRequests: 10000,
    maxWorkflows: 'Unlimited',
    maxIntegrations: 15,
    maxApiCalls: 100000,
  },
  [PLAN_IDS.ENTERPRISE]: {
    // Core features
    aiChat: true,
    documentProcessing: true,
    workflowBuilder: true,
    analytics: true,
    integrations: true,
    apiAccess: true,
    
    // Advanced features
    customBranding: true,
    advancedReporting: true,
    prioritySupport: true,
    ssoSaml: true,
    auditLogs: true,
    customRoles: true,
    multiLanguage: true,
    whiteLabel: true,
    dedicatedSupport: true,
    slaCoverage: true,
    
    // Limits
    maxUsers: 'Unlimited',
    maxStorage: 'Unlimited',
    maxAiRequests: 'Unlimited',
    maxWorkflows: 'Unlimited',
    maxIntegrations: 'Unlimited',
    maxApiCalls: 'Unlimited',
  },
} as const;

/**
 * Trial period (in days)
 */
export const TRIAL_PERIOD_DAYS = {
  [PLAN_IDS.FREE]: 0, // No trial for free plan
  [PLAN_IDS.BASIC]: 14,
  [PLAN_IDS.PRO]: 14,
  [PLAN_IDS.ENTERPRISE]: 30,
} as const;

/**
 * Plan comparison matrix (for pricing page)
 */
export const PLAN_COMPARISON = [
  {
    category: 'Core Features',
    features: [
      {
        name: 'AI Chat Assistant',
        free: true,
        basic: true,
        pro: true,
        enterprise: true,
      },
      {
        name: 'Document Processing',
        free: true,
        basic: true,
        pro: true,
        enterprise: true,
      },
      {
        name: 'Workflow Builder',
        free: false,
        basic: true,
        pro: true,
        enterprise: true,
      },
      {
        name: 'Analytics Dashboard',
        free: false,
        basic: true,
        pro: true,
        enterprise: true,
      },
      {
        name: 'Third-party Integrations',
        free: true,
        basic: true,
        pro: true,
        enterprise: true,
      },
      {
        name: 'API Access',
        free: false,
        basic: true,
        pro: true,
        enterprise: true,
      },
    ],
  },
  {
    category: 'Limits',
    features: [
      {
        name: 'Team Members',
        free: '1 user',
        basic: '5 users',
        pro: '50 users',
        enterprise: 'Unlimited',
      },
      {
        name: 'Storage',
        free: '1 GB',
        basic: '10 GB',
        pro: '100 GB',
        enterprise: 'Unlimited',
      },
      {
        name: 'AI Requests/month',
        free: '100',
        basic: '1,000',
        pro: '10,000',
        enterprise: 'Unlimited',
      },
      {
        name: 'Active Workflows',
        free: '5',
        basic: '25',
        pro: 'Unlimited',
        enterprise: 'Unlimited',
      },
      {
        name: 'Integrations',
        free: '2',
        basic: '5',
        pro: '15',
        enterprise: 'Unlimited',
      },
    ],
  },
  {
    category: 'Advanced Features',
    features: [
      {
        name: 'Custom Branding',
        free: false,
        basic: false,
        pro: true,
        enterprise: true,
      },
      {
        name: 'Advanced Reporting',
        free: false,
        basic: false,
        pro: true,
        enterprise: true,
      },
      {
        name: 'Priority Support',
        free: false,
        basic: false,
        pro: true,
        enterprise: true,
      },
      {
        name: 'SSO / SAML',
        free: false,
        basic: false,
        pro: true,
        enterprise: true,
      },
      {
        name: 'Audit Logs',
        free: false,
        basic: false,
        pro: true,
        enterprise: true,
      },
      {
        name: 'Custom Roles',
        free: false,
        basic: false,
        pro: true,
        enterprise: true,
      },
      {
        name: 'White Label',
        free: false,
        basic: false,
        pro: false,
        enterprise: true,
      },
      {
        name: 'Dedicated Support',
        free: false,
        basic: false,
        pro: false,
        enterprise: true,
      },
      {
        name: 'SLA Coverage',
        free: false,
        basic: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
] as const;

/**
 * Plan upgrade paths (which plans can upgrade to which)
 */
export const PLAN_UPGRADE_PATHS = {
  [PLAN_IDS.FREE]: [PLAN_IDS.BASIC, PLAN_IDS.PRO, PLAN_IDS.ENTERPRISE],
  [PLAN_IDS.BASIC]: [PLAN_IDS.PRO, PLAN_IDS.ENTERPRISE],
  [PLAN_IDS.PRO]: [PLAN_IDS.ENTERPRISE],
  [PLAN_IDS.ENTERPRISE]: [],
} as const;

/**
 * Plan downgrade paths (which plans can downgrade to which)
 */
export const PLAN_DOWNGRADE_PATHS = {
  [PLAN_IDS.FREE]: [],
  [PLAN_IDS.BASIC]: [PLAN_IDS.FREE],
  [PLAN_IDS.PRO]: [PLAN_IDS.BASIC, PLAN_IDS.FREE],
  [PLAN_IDS.ENTERPRISE]: [PLAN_IDS.PRO, PLAN_IDS.BASIC, PLAN_IDS.FREE],
} as const;

/**
 * Stripe price IDs (set these in your environment)
 */
export const STRIPE_PRICE_IDS = {
  [PLAN_IDS.FREE]: {
    monthly: null,
    yearly: null,
  },
  [PLAN_IDS.BASIC]: {
    monthly: process.env.STRIPE_PRICE_ID_BASIC_MONTHLY || 'price_basic_monthly',
    yearly: process.env.STRIPE_PRICE_ID_BASIC_YEARLY || 'price_basic_yearly',
  },
  [PLAN_IDS.PRO]: {
    monthly: process.env.STRIPE_PRICE_ID_PRO_MONTHLY || 'price_pro_monthly',
    yearly: process.env.STRIPE_PRICE_ID_PRO_YEARLY || 'price_pro_yearly',
  },
  [PLAN_IDS.ENTERPRISE]: {
    monthly: null, // Contact sales
    yearly: null, // Contact sales
  },
} as const;

/**
 * Add-ons pricing (in cents per month)
 */
export const ADDON_PRICES = {
  EXTRA_USER: 500, // $5 per additional user
  EXTRA_STORAGE_GB: 100, // $1 per GB
  EXTRA_AI_REQUESTS_100: 1000, // $10 per 100 requests
  PRIORITY_SUPPORT: 4900, // $49 per month
  DEDICATED_ACCOUNT_MANAGER: 49900, // $499 per month
} as const;

/**
 * Discount codes (for promotional pricing)
 */
export const PROMOTIONAL_DISCOUNTS = {
  LAUNCH50: {
    code: 'LAUNCH50',
    type: 'percentage' as const,
    value: 50,
    duration: 'repeating' as const,
    durationInMonths: 3,
    validUntil: '2025-12-31',
  },
  ANNUAL20: {
    code: 'ANNUAL20',
    type: 'percentage' as const,
    value: 20,
    duration: 'once' as const,
    appliesTo: ['yearly'],
  },
  STARTUP100: {
    code: 'STARTUP100',
    type: 'fixed_amount' as const,
    value: 10000, // $100
    duration: 'once' as const,
    validUntil: '2025-12-31',
  },
} as const;

/**
 * Helper functions
 */
export const getPlanPrice = (
  planId: string,
  billingCycle: 'monthly' | 'yearly'
): number | null => {
  const prices = billingCycle === 'monthly' ? MONTHLY_PRICES : YEARLY_PRICES;
  return prices[planId as keyof typeof prices] ?? null;
};

export const getPlanFeature = (planId: string, featureName: string): boolean | string => {
  const plan = PLAN_FEATURES[planId as keyof typeof PLAN_FEATURES];
  return plan?.[featureName as keyof typeof plan] ?? false;
};

export const canUpgradeTo = (currentPlan: string, targetPlan: string): boolean => {
  const upgradePaths = PLAN_UPGRADE_PATHS[currentPlan as keyof typeof PLAN_UPGRADE_PATHS];
  return upgradePaths?.includes(targetPlan as any) ?? false;
};

export const canDowngradeTo = (currentPlan: string, targetPlan: string): boolean => {
  const downgradePaths = PLAN_DOWNGRADE_PATHS[currentPlan as keyof typeof PLAN_DOWNGRADE_PATHS];
  return downgradePaths?.includes(targetPlan as any) ?? false;
};

export const getYearlySavings = (planId: string): number => {
  const monthly = MONTHLY_PRICES[planId as keyof typeof MONTHLY_PRICES];
  const yearly = YEARLY_PRICES[planId as keyof typeof YEARLY_PRICES];
  
  if (monthly === null || yearly === null || monthly === 0) return 0;
  
  const monthlyTotal = monthly * 12;
  return monthlyTotal - yearly;
};

export const getYearlySavingsPercentage = (planId: string): number => {
  const monthly = MONTHLY_PRICES[planId as keyof typeof MONTHLY_PRICES];
  const yearly = YEARLY_PRICES[planId as keyof typeof YEARLY_PRICES];
  
  if (monthly === null || yearly === null || monthly === 0) return 0;
  
  const monthlyTotal = monthly * 12;
  const savings = monthlyTotal - yearly;
  return Math.round((savings / monthlyTotal) * 100);
};