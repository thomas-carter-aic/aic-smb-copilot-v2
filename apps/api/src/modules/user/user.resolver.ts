import { Query, Resolver } from '@nestjs/graphql';

@Resolver('User')
export class UserResolver {
  @Query('me')
  async me() {
    return { id: 'user-1', email: 'dev@local.test', roles: ['tenant_admin'] };
  }
}
