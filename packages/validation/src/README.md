# @aic/validation/src

Source code directory for the validation package.

## Structure

- **common.validators.ts** - Common/shared validation schemas (email, phone, pagination, etc.)
- **auth.validators.ts** - Authentication and authorization schemas
- **user.validators.ts** - User management schemas
- **billing.validators.ts** - Billing, subscriptions, and payment schemas
- **index.ts** - Main exports file

## Usage

All validators are re-exported through the main `index.ts` file and can be imported directly from `@aic/validation`.

```typescript
import { loginSchema, emailSchema } from '@aic/validation';
```

## Guidelines

- All schemas should use Zod for validation
- All schemas should export both the schema and the TypeScript type
- Use descriptive error messages
- Compose schemas when possible (use .extend(), .pick(), .omit())
- Document complex validation logic