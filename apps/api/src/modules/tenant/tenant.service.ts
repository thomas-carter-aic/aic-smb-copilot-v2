import { Injectable } from '@nestjs/common';

@Injectable()
export class TenantService {
  async list(page = 1, limit = 20) {
    // TODO: query DB
    return { nodes: [], totalCount: 0, page, limit };
  }

  async get(id: string) {
    // TODO: query DB
    return null;
  }

  async create(input: { name: string; slug?: string; plan?: string }) {
    // TODO: insert DB
    return { id: 'tenant-1', name: input.name, status: 'ACTIVE', plan: input.plan || 'FREE' };
  }
}
