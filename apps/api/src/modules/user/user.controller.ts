import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  @Get('me')
  async me() {
    return { id: 'user-1', email: 'dev@local.test', roles: ['tenant_admin'] };
  }
}
