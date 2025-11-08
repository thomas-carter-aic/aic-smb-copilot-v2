import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentService {
  async list(tenantId: string, page = 1, limit = 20) {
    // TODO: query DB
    return { nodes: [], totalCount: 0, page, limit };
  }
  async get(id: string) {
    // TODO: query DB
    return null;
  }
  async upload(input: { tenantId: string; uri: string; metadata?: Record<string, any> }) {
    // TODO: persist + enqueue ingestion job
    return { id: 'doc-1', tenantId: input.tenantId, uri: input.uri, status: 'PENDING' };
  }
}
