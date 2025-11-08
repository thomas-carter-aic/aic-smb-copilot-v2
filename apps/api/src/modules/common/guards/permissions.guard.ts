import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { POLICY_KEY } from '../decorators/policy.decorator';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const required = this.reflector.getAllAndOverride<string[]>(POLICY_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!required || required.length === 0) return true;

    const req = context.switchToHttp().getRequest();
    const user = (req && req.user) || (context.getArgByIndex(2)?.req?.user); // GraphQL
    if (!user) return false;

    const userPerms: string[] = user.permissions || user.roles || [];
    return required.every((p) => userPerms.includes(p));
  }
}
