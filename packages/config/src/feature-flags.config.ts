/**
 * Feature flags configuration
 */

import { env } from './env';

export interface FeatureFlags {
  // Core features
  aiChat: boolean;
  documentProcessing: boolean;
  workflowBuilder: boolean;
  analytics: boolean;

  // Additional features (can be controlled via env or database)
  mobileApp: boolean;
  apiAccess: boolean;
  customBranding: boolean;
  advancedReporting: boolean;
  ssoSaml: boolean;
  auditLogs: boolean;
  whiteLabel: boolean;

  // Experimental features
  experimentalAiModels: boolean;
  experimentalWorkflowNodes: boolean;
  betaFeatures: boolean;

  // Integration features
  slackIntegration: boolean;
  googleWorkspaceIntegration: boolean;
  microsoft365Integration: boolean;

  // Performance features
  cachingEnabled: boolean;
  compressionEnabled: boolean;
  cdnEnabled: boolean;

  // Security features
  mfaRequired: boolean;
  ipWhitelisting: boolean;
  advancedThreatProtection: boolean;
}

/**
 * Get feature flags configuration
 */
export const getFeatureFlags = (): FeatureFlags => {
  const config = env();

  return {
    // Core features (from env)
    aiChat: config.FEATURE_AI_CHAT,
    documentProcessing: config.FEATURE_DOCUMENT_PROCESSING,
    workflowBuilder: config.FEATURE_WORKFLOW_BUILDER,
    analytics: config.FEATURE_ANALYTICS,

    // Additional features (defaults)
    mobileApp: true,
    apiAccess: true,
    customBranding: false,
    advancedReporting: false,
    ssoSaml: false,
    auditLogs: true,
    whiteLabel: false,

    // Experimental features
    experimentalAiModels: config.DEBUG,
    experimentalWorkflowNodes: config.DEBUG,
    betaFeatures: config.DEBUG,

    // Integration features
    slackIntegration: true,
    googleWorkspaceIntegration: true,
    microsoft365Integration: true,

    // Performance features
    cachingEnabled: true,
    compressionEnabled: true,
    cdnEnabled: config.NODE_ENV === 'production',

    // Security features
    mfaRequired: false,
    ipWhitelisting: false,
    advancedThreatProtection: config.NODE_ENV === 'production',
  };
};

/**
 * Singleton instance
 */
let featureFlagsInstance: FeatureFlags | null = null;

/**
 * Get feature flags (singleton)
 */
export const featureFlags = (): FeatureFlags => {
  if (!featureFlagsInstance) {
    featureFlagsInstance = getFeatureFlags();
  }
  return featureFlagsInstance;
};

/**
 * Check if feature is enabled
 */
export const isFeatureEnabled = (feature: keyof FeatureFlags): boolean => {
  const flags = featureFlags();
  return flags[feature];
};

/**
 * Get all enabled features
 */
export const getEnabledFeatures = (): Array<keyof FeatureFlags> => {
  const flags = featureFlags();
  return (Object.keys(flags) as Array<keyof FeatureFlags>).filter((key) => flags[key]);
};

/**
 * Get all disabled features
 */
export const getDisabledFeatures = (): Array<keyof FeatureFlags> => {
  const flags = featureFlags();
  return (Object.keys(flags) as Array<keyof FeatureFlags>).filter((key) => !flags[key]);
};