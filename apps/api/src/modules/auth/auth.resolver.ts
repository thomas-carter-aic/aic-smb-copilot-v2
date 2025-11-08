import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('Auth')
export class AuthResolver {
  @Mutation('login')
  async login(
    @Args('input') input: { email: string; password?: string; magicLink?: boolean },
  ) {
    // delegate to AuthService (inject via constructor if you prefer DI here)
    return {
      accessToken: 'stub-access-token',
      refreshToken: 'stub-refresh-token',
      user: { id: 'user-1', email: input.email, roles: ['viewer'] },
    };
  }

  @Mutation('logout')
  async logout(): Promise<boolean> {
    return true;
  }
}
