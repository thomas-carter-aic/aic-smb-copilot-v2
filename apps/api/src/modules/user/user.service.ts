import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async me() {
    return { id: 'user-1', email: 'dev@local.test', roles: ['tenant_admin'] };
  }
}
