import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkflowService {
  async list(page = 1, limit = 20) {
    return { nodes: [], totalCount: 0, page, limit };
  }
  async get(id: string) {
    return null;
  }
  async create(input: { name: string; steps: any[] }) {
    return { id: 'wf-1', name: input.name, status: 'ACTIVE', steps: input.steps };
  }
  async run(id: string, input?: Record<string, any>) {
    return { id: 'run-1', workflowId: id, status: 'QUEUED', input };
  }
}
