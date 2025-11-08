# API Gateway & Authentication Architecture — aic-smb-copilot-v2

This document details how API traffic is routed, authenticated, and authorized in `aic-smb-copilot-v2`.  
Built using **NestJS**, the platform supports both REST and GraphQL access patterns in a unified, scalable architecture.

---

## 🔐 Authentication Flow Overview

The platform uses **JWT (JSON Web Token)**–based authentication for securing all API endpoints.

- Tokens are signed using RSA asymmetric keys
- Access tokens include user identity and roles
- Refresh tokens are stored client-side and exchanged via `/auth/refresh`

Components involved:

| Component         | Responsibility                           |
|-------------------|-------------------------------------------|
| API Gateway       | HTTP entrypoint for all client traffic    |
| Auth Service      | Login, token issuance, refresh flows      |
| Guard / Middleware| Route-level auth validation               |
| Token Store       | Rotation, blacklisting (in Redis/KV store)|

---

## 🧭 API Structure (NestJS)

### Overview of Modules

```

apps/api/src/
├── main.ts
├── app.module.ts
├── modules/
│   ├── auth/
│   ├── user/
│   ├── tenant/
│   ├── document/
│   ├── workflow/
│   └── common/

````

Each module contains:

- `controller.ts` — REST routes
- `resolver.ts` — GraphQL API
- `service.ts` — Business logic
- `schema.ts` — Input/output DTOs
- `model.ts` — Entity classes

---

## 🛠️ Guards & Middleware

NestJS `Guards` and `Interceptors` are used to secure and monitor requests.

Example:

```ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    // Implement RBAC logic here
    return user.roles.includes('admin');
  }
}
````

Registered globally in `main.ts` or per route controller.

---

## 🔄 Authentication Endpoints

| Method | Path            | Description              | Authenticated |
| ------ | --------------- | ------------------------ | ------------- |
| POST   | `/auth/login`   | Login via email/password | ❌             |
| POST   | `/auth/refresh` | Issue a new access token | ❌             |
| POST   | `/auth/logout`  | Invalidate refresh token | ✅ (refresh)   |

Login payload example:

```json
{
  "email": "someone@example.com",
  "password": "••••••••"
}
```

Response:

```json
{
  "accessToken": "eyJhbGciOiJSUzI1NiIsInR5...",
  "refreshToken": "def5020038b4afd35...",
  "user": {
    "id": "uuid-123",
    "email": "someone@example.com",
    "roles": ["user"]
  }
}
```

---

## 🧠 Authorization (RBAC)

Once authenticated, **authorization** is handled via a combination of:

1. **Role-Based Access Control (RBAC)**
2. **Tenant ownership checks**
3. **Custom permission policies defined per resource**

See the companion doc:
[`ACCESS_CONTROL_AND_RBAC.md`](./ACCESS_CONTROL_AND_RBAC.md)

---

## 📘 Integration with Web and Workers

### Web App (Next.js)

* Auth tokens stored in secure HTTP-only cookies
* SSR pages fetch user and permissions from `/auth/me`
* GraphQL requests are sent via `ApolloClient` with `Authorization: Bearer <token>`

### Workers (Python)

* Authenticated via service-level API keys or OAuth clients
* Workflows triggered via REST `/workflows/:id/run` (async)

---

## 🔒 Token Validation

* Tokens signed with `RS256`

* Public key made available at:

  ```
  GET /.well-known/jwks.json
  ```

* Allows for validation by mobile clients, 3rd-party integrations, etc.

---

## ✅ Security Recommendations

* Enforce short-lived access tokens (15m)
* Hash and rotate refresh tokens, store in database or Redis with TTL
* Enable CORS with strict origin whitelist
* Enable HTTPS-only in production
* Rate limit login attempts

---

## 🧩 Related Files

* `apps/api/src/app.module.ts`
* `docs/DATA_MODEL.md`
* `docs/ACCESS_CONTROL_AND_RBAC.md`
* `apps/workers/python/` — Service authentication for workers
