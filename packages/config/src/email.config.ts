/**
 * Email service configuration
 */

import { env } from './env';

export interface EmailConfig {
  provider: 'sendgrid' | 'ses' | 'smtp';
  from: {
    email: string;
    name: string;
  };
  sendgrid?: {
    apiKey: string;
  };
  ses?: {
    region: string;
    accessKeyId: string;
    secretAccessKey: string;
  };
  templates: {
    welcome: string;
    passwordReset: string;
    emailVerification: string;
    invitation: string;
  };
}

/**
 * Get email configuration
 */
export const getEmailConfig = (): EmailConfig => {
  const config = env();

  // Determine provider
  let provider: 'sendgrid' | 'ses' | 'smtp' = 'smtp';
  if (config.SENDGRID_API_KEY) {
    provider = 'sendgrid';
  } else if (config.AWS_SES_ACCESS_KEY_ID) {
    provider = 'ses';
  }

  return {
    provider,
    from: {
      email: config.SENDGRID_FROM_EMAIL || 'noreply@aic-copilot.com',
      name: config.SENDGRID_FROM_NAME || 'AIC Copilot',
    },
    sendgrid: config.SENDGRID_API_KEY
      ? {
          apiKey: config.SENDGRID_API_KEY,
        }
      : undefined,
    ses:
      config.AWS_SES_ACCESS_KEY_ID && config.AWS_SES_SECRET_ACCESS_KEY
        ? {
            region: config.AWS_SES_REGION || 'us-east-1',
            accessKeyId: config.AWS_SES_ACCESS_KEY_ID,
            secretAccessKey: config.AWS_SES_SECRET_ACCESS_KEY,
          }
        : undefined,
    templates: {
      welcome: 'd-welcome123',
      passwordReset: 'd-reset123',
      emailVerification: 'd-verify123',
      invitation: 'd-invite123',
    },
  };
};

/**
 * Singleton instance
 */
let emailConfigInstance: EmailConfig | null = null;

/**
 * Get email config (singleton)
 */
export const emailConfig = (): EmailConfig => {
  if (!emailConfigInstance) {
    emailConfigInstance = getEmailConfig();
  }
  return emailConfigInstance;
};