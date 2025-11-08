import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('Tenant')
export class TenantResolver {
  @Query('tenant')
  async tenant(@Args('id') id: string) {
    return { id, name: 'Example, Inc.', status: 'ACTIVE', plan: { name: 'Free', tier: 'FREE' } };
  }

  @Query('tenants')
  async tenants(@Args('page') page?: number, @Args('limit') limit?: number) {
    return { nodes: [], totalCount: 0, page: page ?? 1, limit: limit ?? 20 };
  }

  @Mutation('createTenant')
  async createTenant(@Args('input') input: { name: string; slug?: string; plan?: string }) {
    return { id: 'tenant-1', name: input.name, status: 'ACTIVE', plan: { name: input.plan ?? 'Free', tier: input.plan ?? 'FREE' } };
  }
}
