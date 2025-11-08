/**
 * Document and AI processing-related types
 */

import type { BaseEntity } from './common';

/**
 * Document status enum
 */
export enum DocumentStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  ARCHIVED = 'archived',
}

/**
 * Document type enum
 */
export enum DocumentType {
  TEXT = 'text',
  PDF = 'pdf',
  WORD = 'word',
  EXCEL = 'excel',
  IMAGE = 'image',
  OTHER = 'other',
}

/**
 * AI model enum
 */
export enum AIModel {
  GPT_4 = 'gpt-4',
  GPT_4_TURBO = 'gpt-4-turbo',
  GPT_3_5_TURBO = 'gpt-3.5-turbo',
  CLAUDE_3_OPUS = 'claude-3-opus',
  CLAUDE_3_SONNET = 'claude-3-sonnet',
}

/**
 * Document entity
 */
export interface Document extends BaseEntity {
  companyId: string;
  userId: string;
  name: string;
  type: DocumentType;
  size: number; // in bytes
  mimeType: string;
  status: DocumentStatus;
  storageKey: string;
  url?: string;
  thumbnailUrl?: string;
  content?: string; // extracted text content
  metadata: DocumentMetadata;
  tags?: string[];
  aiAnalysis?: AIAnalysis;
  processingStartedAt?: Date;
  processingCompletedAt?: Date;
}

/**
 * Document metadata
 */
export interface DocumentMetadata {
  pageCount?: number;
  wordCount?: number;
  language?: string;
  author?: string;
  title?: string;
  subject?: string;
  keywords?: string[];
  customFields?: Record<string, unknown>;
}

/**
 * AI analysis result
 */
export interface AIAnalysis {
  summary?: string;
  entities?: NamedEntity[];
  topics?: string[];
  sentiment?: SentimentAnalysis;
  keyPhrases?: string[];
  language?: string;
  classification?: DocumentClassification;
  customAnalysis?: Record<string, unknown>;
}

/**
 * Named entity
 */
export interface NamedEntity {
  text: string;
  type: 'PERSON' | 'ORGANIZATION' | 'LOCATION' | 'DATE' | 'MONEY' | 'OTHER';
  confidence: number;
}

/**
 * Sentiment analysis
 */
export interface SentimentAnalysis {
  overall: 'positive' | 'negative' | 'neutral' | 'mixed';
  score: number; // -1 to 1
  confidence: number;
}

/**
 * Document classification
 */
export interface DocumentClassification {
  category: string;
  confidence: number;
  subCategories?: string[];
}

/**
 * AI conversation
 */
export interface Conversation extends BaseEntity {
  companyId: string;
  userId: string;
  title?: string;
  documentIds?: string[];
  messages: Message[];
  model: AIModel;
  settings: ConversationSettings;
  metadata?: Record<string, unknown>;
}

/**
 * Message in conversation
 */
export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  tokens?: number;
  metadata?: Record<string, unknown>;
}

/**
 * Conversation settings
 */
export interface ConversationSettings {
  temperature: number;
  maxTokens: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
  systemPrompt?: string;
}

/**
 * Create document DTO
 */
export interface CreateDocumentDto {
  companyId: string;
  userId: string;
  name: string;
  type: DocumentType;
  file: File | Buffer;
  tags?: string[];
  metadata?: Partial<DocumentMetadata>;
}

/**
 * Update document DTO
 */
export interface UpdateDocumentDto {
  name?: string;
  tags?: string[];
  metadata?: Partial<DocumentMetadata>;
}

/**
 * Process document DTO
 */
export interface ProcessDocumentDto {
  documentId: string;
  operations: ProcessingOperation[];
  options?: ProcessingOptions;
}

/**
 * Processing operation
 */
export type ProcessingOperation =
  | 'extract_text'
  | 'summarize'
  | 'analyze_sentiment'
  | 'extract_entities'
  | 'classify'
  | 'translate';

/**
 * Processing options
 */
export interface ProcessingOptions {
  model?: AIModel;
  language?: string;
  customPrompt?: string;
  includeMetadata?: boolean;
}

/**
 * Chat request DTO
 */
export interface ChatRequestDto {
  conversationId?: string;
  message: string;
  documentIds?: string[];
  model?: AIModel;
  settings?: Partial<ConversationSettings>;
}

/**
 * Chat response DTO
 */
export interface ChatResponseDto {
  conversationId: string;
  message: Message;
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}