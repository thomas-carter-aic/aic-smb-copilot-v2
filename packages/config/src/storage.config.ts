/**
 * Storage configuration (S3/MinIO)
 */

import { env, isProduction } from './env';

export interface StorageConfig {
  provider: 's3' | 'minio';
  s3?: {
    region: string;
    bucket: string;
    accessKeyId: string;
    secretAccessKey: string;
  };
  minio?: {
    endpoint: string;
    port: number;
    accessKey: string;
    secretKey: string;
    bucket: string;
    useSSL: boolean;
  };
  publicUrl?: string;
  uploadLimits: {
    maxFileSize: number;
    allowedMimeTypes: string[];
  };
}

/**
 * Get storage configuration
 */
export const getStorageConfig = (): StorageConfig => {
  const config = env();

  // Use S3 in production, MinIO in development
  const provider = isProduction() ? 's3' : 'minio';

  return {
    provider,
    s3:
      provider === 's3' && config.AWS_S3_ACCESS_KEY_ID && config.AWS_S3_SECRET_ACCESS_KEY
        ? {
            region: config.AWS_S3_REGION,
            bucket: config.AWS_S3_BUCKET || 'aic-copilot-documents',
            accessKeyId: config.AWS_S3_ACCESS_KEY_ID,
            secretAccessKey: config.AWS_S3_SECRET_ACCESS_KEY,
          }
        : undefined,
    minio:
      provider === 'minio'
        ? {
            endpoint: config.MINIO_ENDPOINT || 'localhost',
            port: config.MINIO_PORT || 9000,
            accessKey: config.MINIO_ACCESS_KEY || 'minioadmin',
            secretKey: config.MINIO_SECRET_KEY || 'minioadmin',
            bucket: config.MINIO_BUCKET || 'aic-copilot-local',
            useSSL: config.MINIO_USE_SSL || false,
          }
        : undefined,
    uploadLimits: {
      maxFileSize: 100 * 1024 * 1024, // 100 MB
      allowedMimeTypes: [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/plain',
        'text/csv',
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
      ],
    },
  };
};

/**
 * Singleton instance
 */
let storageConfigInstance: StorageConfig | null = null;

/**
 * Get storage config (singleton)
 */
export const storageConfig = (): StorageConfig => {
  if (!storageConfigInstance) {
    storageConfigInstance = getStorageConfig();
  }
  return storageConfigInstance;
};