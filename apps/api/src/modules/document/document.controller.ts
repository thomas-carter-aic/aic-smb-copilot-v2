import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('documents')
export class DocumentController {
  @Get()
  async list(@Query('tenantId') tenantId: string, @Query('page') page?: number, @Query('limit') limit?: number) {
    return { nodes: [], totalCount: 0, page: page ?? 1, limit: limit ?? 20, tenantId };
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return { id, tenantId: 'tenant-1', uri: 's3://bucket/key', status: 'READY' };
  }

  @Post()
  async upload(@Body() dto: { tenantId: string; uri: string; metadata?: Record<string, any> }) {
    return { id: 'doc-1', tenantId: dto.tenantId, uri: dto.uri, status: 'PENDING' };
  }
}
