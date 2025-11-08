import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';

@Controller('tenants')
export class TenantController {
  @Get()
  async list(@Query('page') page?: number, @Query('limit') limit?: number) {
    return { nodes: [], totalCount: 0, page: page ?? 1, limit: limit ?? 20 };
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return { id, name: 'Example, Inc.', status: 'ACTIVE', plan: 'FREE' };
  }

  @Post()
  async create(@Body() dto: { name: string; slug?: string; plan?: string }) {
    return { id: 'tenant-1', name: dto.name, plan: dto.plan ?? 'FREE', status: 'ACTIVE' };
  }
}
