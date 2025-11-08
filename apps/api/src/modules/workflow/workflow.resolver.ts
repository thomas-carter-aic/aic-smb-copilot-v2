import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

@Resolver('Workflow')
export class WorkflowResolver {
  @Query('workflows')
  async workflows(@Args('tenantId') _tenantId?: string, @Args('page') page?: number, @Args('limit') limit?: number) {
    return { nodes: [], totalCount: 0, page: page ?? 1, limit: limit ?? 20 };
  }

  @Query('workflow')
  async workflow(@Args('id') id: string) {
    return { id, name: 'Example Workflow', status: 'ACTIVE', steps: [] };
  }

  @Mutation('createWorkflow')
  async createWorkflow(@Args('input') input: { name: string; steps: any[] }) {
    return { id: 'wf-1', name: input.name, status: 'ACTIVE', steps: input.steps };
  }

  @Mutation('runWorkflow')
  async runWorkflow(@Args('id') id: string, @Args('input') input?: { input?: Record<string, any> }) {
    return { id: 'run-1', workflowId: id, status: 'QUEUED', input: input?.input ?? {} };
  }

  // Subscription placeholder; wire with a PubSub in real impl.
  @Subscription('workflowRunStatus', {
    resolve: (payload) => payload,
  })
  workflowRunStatus() {
    // return pubSub.asyncIterator('workflowRunStatus')
    return null as any;
  }
}
