import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('workflows')
export class WorkflowController {
  @Get()
  async list(@Query('page') page?: number, @Query('limit') limit?: number) {
    return { nodes: [], totalCount: 0, page: page ?? 1, limit: limit ?? 20 };
  }
  @Get(':id')
  async get(@Param('id') id: string) {
    return { id, name: 'Example Workflow', status: 'ACTIVE', steps: [] };
  }
  @Post()
  async create(@Body() dto: { name: string; steps: any[] }) {
    return { id: 'wf-1', name: dto.name, status: 'ACTIVE', steps: dto.steps };
  }
  @Post(':id/runs')
  async run(@Param('id') id: string, @Body() body: { input?: Record<string, any> }) {
    return { id: 'run-1', workflowId: id, status: 'QUEUED', input: body?.input ?? {} };
  }
}
