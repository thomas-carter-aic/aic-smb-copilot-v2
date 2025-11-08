import { SetMetadata } from '@nestjs/common';
export const POLICY_KEY = 'permissions';
export const Policy = (...permissions: string[]) => SetMetadata(POLICY_KEY, permissions);
