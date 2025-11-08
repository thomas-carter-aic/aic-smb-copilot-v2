# Access Control & RBAC — aic-smb-copilot-v2

This document outlines the Role-Based Access Control (RBAC) model for `aic-smb-copilot-v2`.  
The platform serves multi-tenant users and supports granular access to features based on roles, contextual ownership, and optional feature flags.

---

## 🔐 Access Control Overview

Access in the system is based on three main mechanisms:

1. **Role-Based Access Control (RBAC)** - User assigned roles grant scoped permissions
2. **Tenant Isolation** - Users can only access data within their tenant
3. **Feature Flags & Plans** - Certain capabilities may depend on subscription tier

The API supports both **REST** and **GraphQL**, with access for both controlled using guards, decorators, and centralized policies.

---

## 👤 Roles

The following core roles are defined:

| Role         | Description                                      |
|--------------|--------------------------------------------------|
| `tenant_admin` | Full access to tenant including managing users and workflows |
| `developer`  | Build workflows, connect integrations            |
| `editor`     | Upload, edit or remove documents                 |
| `viewer`     | Read-only access                                 |
| `system`     | Special non-user actor for service-to-service access |

Roles can be extended or customized using metadata in the database.

---

## 📜 Permissions

Permissions are associated with specific scopes of action for different domains:

### Tenant Domain

| Permission            | Description                      |
|-----------------------|----------------------------------|
| `tenant:read`         | View tenant profile              |
| `tenant:update`       | Update tenant settings           |
| `tenant:users:manage` | Create, update, or remove users  |

### Document Domain

| Permission              | Description                      |
|-------------------------|----------------------------------|
| `document:read`         | Read documents                   |
| `document:write`        | Upload or update documents       |
| `document:delete`       | Remove indexed documents         |

### Workflow Domain

| Permission                  | Description                      |
|-----------------------------|----------------------------------|
| `workflow:create`           | Create workflows                 |
| `workflow:update`           | Update workflow metadata         |
| `workflow:delete`           | Archive workflows                |
| `workflow:run`              | Execute workflows                |
| `workflow:run:monitor`      | Observe workflow execution       |

---

## 🧐 Policy Evaluation

Permissions are evaluated using NestJS guards and centralized policy checks.

Example guard with `@Policy()` decorator:

```ts
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );
    const { user } = context.switchToHttp().getRequest();

    return requiredPermissions.every((perm) => user.permissions.includes(perm));
  }
}
````

Applied to a controller route:

```ts
@Post()
@Policy('workflow:create')
createWorkflow(@Body() input: WorkflowCreateInput, @Req() req) {
  return this.workflowService.create(input, req.user);
}
```

---

## 🧱 Data Model Alignment

Roles and permissions are part of the `User` and `Tenant` entity models.

```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  tenant    Tenant   @relation(fields: [tenantId], references: [id])
  roles     String[]
  // ...
}
```

Dynamic policies (like plan-based access) might also be computed at runtime based on `Tenant.plan`.

---

## 🔐 Feature Flag Support (Optional)

For enterprise or pro-plan features, tie flags into roles:

```json
// Stored in "tenant.features" field
{
  "beta_ai_insights": true,
  "workflow_metrics": false
}
```

Combined with RBAC, this allows:

1. Enabling features for select tenants
2. Restricting access based on subscription level

---

## ✅ Summary

* **RBAC-first** permissions enable flexible control
* NestJS guards enforce policy across REST/GraphQL
* Role and feature metadata managed per tenant
* Future-proof for SaaS upgrades or enterprise permissions

---

## 📘 Related Docs

* `API_GATEWAY_AND_AUTH_ARCH.md`
* `DATA_MODEL.md`
* `graphql/schema.graphql`
