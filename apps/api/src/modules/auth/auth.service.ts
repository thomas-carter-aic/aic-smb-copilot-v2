import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUserByPassword(email: string, password: string) {
    // TODO: validate user with DB (Prisma). This is a stub:
    if (email && password) {
      return { id: 'user-1', email, roles: ['viewer'] };
    }
    return null;
  }

  async login(email: string, password?: string, magicLink?: boolean) {
    // TODO: issue JWT using RS256; include roles/tenantId
    return {
      accessToken: 'stub-access-token',
      refreshToken: 'stub-refresh-token',
      user: { id: 'user-1', email, roles: ['viewer'] },
    };
  }

  async refresh(refreshToken: string) {
    // TODO: validate refresh token, rotate, return new pair
    return {
      accessToken: 'stub-access-token-2',
      refreshToken: 'stub-refresh-token-2',
    };
  }
}
