# @aic/validation

> Type-safe Zod validation schemas for the AIC SMB Copilot Platform

## 📋 Overview

`@aic/validation` provides comprehensive, type-safe validation schemas using [Zod](https://zod.dev/) for all data structures in the AIC platform. These schemas ensure data integrity across API boundaries, database operations, and user inputs.

## ✨ Features

- 🔒 **Type-Safe**: Full TypeScript support with inferred types
- ✅ **Runtime Validation**: Catch errors at runtime before they cause problems
- 📝 **Descriptive Errors**: Clear, user-friendly error messages
- 🎯 **Composable**: Build complex schemas from simpler ones
- 🚀 **Performance**: Optimized validation with minimal overhead
- 📦 **Comprehensive**: Covers all major platform entities

## 📦 Installation

This package is part of the AIC monorepo.

```json
{
  "dependencies": {
    "@aic/validation": "workspace:*"
  }
}
```

## 🚀 Quick Start

```typescript
import { z, loginSchema, emailSchema } from '@aic/validation';

// Validate login data
const result = loginSchema.safeParse({
  email: 'user@example.com',
  password: 'password123',
});

if (result.success) {
  console.log('Valid:', result.data);
} else {
  console.error('Errors:', result.error.errors);
}

// Validate individual fields
const isValid = emailSchema.safeParse('user@example.com').success;

// Get TypeScript type from schema
type LoginInput = z.infer<typeof loginSchema>;
```

## 📚 Schema Categories

### 1. Common Schemas (`common.validators.ts`)

Reusable schemas for common data types.

```typescript
import {
  idSchema,              // UUID validation
  emailSchema,           // Email validation
  passwordSchema,        // Strong password validation
  phoneSchema,           // Phone number (US format)
  urlSchema,             // URL validation
  paginationSchema,      // Page and limit
  sortSchema,            // Sort field and order
  statusSchema,          // Common status enum
  amountSchema,          // Currency amounts
  percentageSchema,      // 0-100 percentage
  addressSchema,         // Physical address
  coordinatesSchema,     // Latitude/longitude
  dateRangeSchema,       // Start and end date
} from '@aic/validation';

// Example usage
const email = emailSchema.parse('user@example.com');
const pagination = paginationSchema.parse({ page: 1, limit: 10 });
```

### 2. Authentication Schemas (`auth.validators.ts`)

Schemas for authentication and authorization.

```typescript
import {
  loginSchema,           // User login
  registerSchema,        // User registration
  forgotPasswordSchema,  // Password reset request
  resetPasswordSchema,   // Password reset
  changePasswordSchema,  // Change password
  oauthLoginSchema,      // OAuth login
  setupTwoFactorSchema,  // 2FA setup
  verifyTwoFactorSchema, // 2FA verification
  createApiKeySchema,    // API key creation
  permissionSchema,      // Permission definition
  roleSchema,            // Role definition
} from '@aic/validation';

// Example: Validate registration
const data = {
  email: 'user@example.com',
  password: 'SecureP@ss123',
  confirmPassword: 'SecureP@ss123',
  firstName: 'John',
  lastName: 'Doe',
  companyName: 'Acme Inc',
  acceptTerms: true,
};

const result = registerSchema.safeParse(data);
if (!result.success) {
  console.error(result.error.flatten());
}
```

### 3. User Schemas (`user.validators.ts`)

Schemas for user management.

```typescript
import {
  userSchema,            // Complete user object
  createUserSchema,      // Create new user
  updateUserSchema,      // Update user
  updateProfileSchema,   // Update user profile
  updatePreferencesSchema, // Update preferences
  userSearchSchema,      // Search users
  userFilterSchema,      // Filter users
  userInvitationSchema,  // User invitation
  bulkUserOperationSchema, // Bulk operations
} from '@aic/validation';

// Example: Create user
const newUser = createUserSchema.parse({
  email: 'user@example.com',
  password: 'SecureP@ss123',
  firstName: 'John',
  lastName: 'Doe',
  role: 'member',
});
```

### 4. Billing Schemas (`billing.validators.ts`)

Schemas for billing, subscriptions, and payments.

```typescript
import {
  subscriptionPlanSchema, // Subscription plan
  createPlanSchema,       // Create plan
  subscriptionSchema,     // Subscription
  createSubscriptionSchema, // Create subscription
  cancelSubscriptionSchema, // Cancel subscription
  paymentMethodSchema,    // Payment method
  addPaymentMethodSchema, // Add payment method
  paymentSchema,          // Payment
  invoiceSchema,          // Invoice
  createInvoiceSchema,    // Create invoice
  couponSchema,           // Coupon/discount
  applyCouponSchema,      // Apply coupon
} from '@aic/validation';

// Example: Create subscription
const subscription = createSubscriptionSchema.parse({
  planId: '123e4567-e89b-12d3-a456-426614174000',
  quantity: 1,
  couponCode: 'SAVE20',
});
```

## 💡 Usage Examples

### Example 1: API Request Validation

```typescript
import { loginSchema } from '@aic/validation';
import type { LoginInput } from '@aic/validation';

async function login(req: Request): Promise<Response> {
  try {
    // Validate request body
    const body: LoginInput = loginSchema.parse(req.body);
    
    // Proceed with validated data
    const user = await authenticateUser(body.email, body.password);
    
    return Response.json({ user });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { errors: error.flatten() },
        { status: 400 }
      );
    }
    throw error;
  }
}
```

### Example 2: Form Validation (React)

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@aic/validation';
import type { RegisterInput } from '@aic/validation';

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterInput) => {
    // Data is already validated!
    await createAccount(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      
      <input type="password" {...register('password')} />
      {errors.password && <span>{errors.password.message}</span>}
      
      <button type="submit">Register</button>
    </form>
  );
}
```

### Example 3: NestJS DTO Validation

```typescript
import { createZodDto } from 'nestjs-zod';
import { createUserSchema } from '@aic/validation';

// Create DTO from Zod schema
export class CreateUserDto extends createZodDto(createUserSchema) {}

// Use in controller
@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // Data is validated automatically
    return this.usersService.create(createUserDto);
  }
}
```

### Example 4: Database Validation

```typescript
import { userSchema } from '@aic/validation';

async function saveUser(data: unknown) {
  // Validate before saving
  const validatedUser = userSchema.parse(data);
  
  // Save to database
  await db.users.create({ data: validatedUser });
}
```

### Example 5: Safe Parse with Error Handling

```typescript
import { safeParse } from '@aic/validation';
import { createSubscriptionSchema } from '@aic/validation';

function processSubscription(data: unknown) {
  const result = safeParse(createSubscriptionSchema, data);
  
  if (!result.success) {
    // Handle validation errors
    console.error('Validation failed:', result.errors.flatten());
    return { error: 'Invalid subscription data' };
  }
  
  // Use validated data
  return createSubscription(result.data);
}
```

### Example 6: Partial Updates

```typescript
import { updateUserSchema } from '@aic/validation';

// All fields optional for partial updates
const updates = updateUserSchema.parse({
  firstName: 'Jane', // Only update firstName
});

await db.users.update({
  where: { id: userId },
  data: updates,
});
```

### Example 7: Custom Validation

```typescript
import { z } from '@aic/validation';

const customSchema = z.object({
  email: emailSchema,
  age: z.number().min(18, 'Must be at least 18'),
}).refine(
  (data) => data.email.includes(data.age.toString()),
  'Age must be in email'  // Custom validation
);
```

## 🎯 Best Practices

### 1. Use Type Inference

```typescript
import { z, loginSchema } from '@aic/validation';

// Extract TypeScript type from schema
type LoginInput = z.infer<typeof loginSchema>;

function handleLogin(data: LoginInput) {
  // TypeScript knows all the fields!
}
```

### 2. Compose Schemas

```typescript
import { z, baseUserSchema, timestampSchema } from '@aic/validation';

const myUserSchema = baseUserSchema.extend({
  ...timestampSchema.shape,
  customField: z.string(),
});
```

### 3. Handle Errors Gracefully

```typescript
import { z } from '@aic/validation';

try {
  const data = schema.parse(input);
} catch (error) {
  if (error instanceof z.ZodError) {
    // Flatten for easier consumption
    const errors = error.flatten();
    console.error(errors.fieldErrors);
  }
}
```

### 4. Use Safe Parse for User Input

```typescript
// Don't throw on invalid user input
const result = schema.safeParse(userInput);

if (result.success) {
  // Use result.data
} else {
  // Show error.errors to user
}
```

### 5. Validate Early

```typescript
// Validate at API boundaries
app.post('/users', (req, res) => {
  const validation = createUserSchema.safeParse(req.body);
  
  if (!validation.success) {
    return res.status(400).json(validation.error);
  }
  
  // Continue with validated data
});
```

## 🔧 Advanced Usage

### Custom Error Messages

```typescript
import { z } from '@aic/validation';

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});
```

### Conditional Validation

```typescript
import { z } from '@aic/validation';

const schema = z.object({
  type: z.enum(['individual', 'company']),
  companyName: z.string().optional(),
}).refine(
  (data) => data.type !== 'company' || data.companyName,
  {
    message: 'Company name is required for company accounts',
    path: ['companyName'],
  }
);
```

### Transform Data

```typescript
import { z } from '@aic/validation';

const schema = z.object({
  email: z.string().email().transform(s => s.toLowerCase()),
  age: z.string().transform(s => parseInt(s, 10)),
});
```

### Union Types

```typescript
import { z } from '@aic/validation';

const paymentSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('card'), cardNumber: z.string() }),
  z.object({ type: z.literal('bank'), accountNumber: z.string() }),
]);
```

## 📖 API Reference

### Validation Helpers

```typescript
// Safe parse (doesn't throw)
safeParse<T>(schema: ZodSchema<T>, data: unknown): ValidationResult<T>

// Parse and throw on error
validateOrThrow<T>(schema: ZodSchema<T>, data: unknown): T
```

### Common Schemas

See [common.validators.ts](./src/common.validators.ts) for all common schemas.

### Auth Schemas

See [auth.validators.ts](./src/auth.validators.ts) for all auth schemas.

### User Schemas

See [user.validators.ts](./src/user.validators.ts) for all user schemas.

### Billing Schemas

See [billing.validators.ts](./src/billing.validators.ts) for all billing schemas.

## 🧪 Testing

```typescript
import { describe, it, expect } from 'vitest';
import { emailSchema } from '@aic/validation';

describe('emailSchema', () => {
  it('should validate valid emails', () => {
    expect(emailSchema.safeParse('user@example.com').success).toBe(true);
  });

  it('should reject invalid emails', () => {
    expect(emailSchema.safeParse('invalid-email').success).toBe(false);
  });
});
```

## 🤝 Contributing

When adding new schemas:

1. Choose the appropriate category file
2. Export both the schema and the TypeScript type
3. Add JSDoc documentation
4. Include descriptive error messages
5. Update this README
6. Add tests

Example:

```typescript
/**
 * User Profile Schema
 */
export const userProfileSchema = z.object({
  bio: z.string().max(500, 'Bio must be 500 characters or less'),
  avatar: urlSchema.optional(),
});

export type UserProfile = z.infer<typeof userProfileSchema>;
```

## 📝 License

Private - AIC SMB Copilot Platform

## 🔗 Related Packages

- [@aic/types](../types) - TypeScript type definitions
- [@aic/utils](../utils) - Utility functions
- [@aic/config](../config) - Configuration management

---

**Version:** 1.0.0  
**Last Updated:** November 2024  
**Powered by**: [Zod](https://zod.dev/)