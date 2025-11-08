import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('Document')
export class DocumentResolver {
  @Query('documents')
  async documents(@Args('tenantId') tenantId: string, @Args('page') page?: number, @Args('limit') limit?: number) {
    return { nodes: [], totalCount: 0, page: page ?? 1, limit: limit ?? 20 };
  }

  @Mutation('uploadDocument')
  async uploadDocument(@Args('input') input: { tenantId: string; fileUri: string; metadata?: any }) {
    return { id: 'doc-1', tenantId: input.tenantId, uri: input.fileUri, status: 'PENDING' };
  }

  @Mutation('deleteDocument')
  async deleteDocument(@Args('id') id: string) {
    return true;
  }
}
