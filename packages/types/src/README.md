# @aic/types

Shared TypeScript types and interfaces for AIC SMB Copilot.

## Installation

```bash
pnpm add @aic/types
```

## Usage

```typescript
import type {
  User,
  Company,
  Subscription,
  Workflow,
  Document,
  Integration,
} from '@aic/types';

// Use types in your code
const user: User = {
  id: '123',
  email: 'user@example.com',
  firstName: 'John',
  lastName: 'Doe',
  role: UserRole.ADMIN,
  status: UserStatus.ACTIVE,
  // ... other fields
};
```

## Available Types

### Common Types
- `BaseEntity` - Base interface with id, timestamps
- `PaginationParams` - Query parameters for pagination
- `PaginatedResponse` - Wrapper for paginated data
- `ApiError` - Standard error response
- `ApiResponse` - Standard success response
- `Status` - Common status enum

### User Types
- `User` - User entity
- `UserProfile` - Public user profile
- `UserRole` - User role enum
- `UserStatus` - User status enum
- `UserPreferences` - User preferences
- `CreateUserDto`, `UpdateUserDto` - DTOs

### Company Types
- `Company` - Company/tenant entity
- `CompanySettings` - Company configuration
- `FeatureFlags` - Feature flag configuration
- `CompanySize`, `CompanyStatus`, `Industry` - Enums
- `CreateCompanyDto`, `UpdateCompanyDto` - DTOs

### Subscription Types
- `Subscription` - Subscription entity
- `SubscriptionPlan`, `SubscriptionStatus` - Enums
- `PlanLimits` - Plan features and limits
- `Usage` - Usage tracking
- `Invoice` - Invoice entity
- `PaymentMethod` - Payment method

### Workflow Types
- `Workflow` - Workflow entity
- `WorkflowExecution` - Execution record
- `WorkflowNode`, `WorkflowEdge` - Graph components
- `WorkflowTrigger` - Trigger configuration
- `WorkflowStatus`, `WorkflowExecutionStatus` - Enums

### Document Types
- `Document` - Document entity
- `AIAnalysis` - AI analysis results
- `Conversation` - AI chat conversation
- `Message` - Chat message
- `DocumentStatus`, `DocumentType`, `AIModel` - Enums

### Integration Types
- `Integration` - Integration entity
- `IntegrationProvider`, `IntegrationStatus` - Enums
- `WebhookEvent` - Webhook event
- `IntegrationSyncJob` - Sync job
- `OAuthState` - OAuth flow state

### API Types
- `LoginRequest`, `LoginResponse` - Auth types
- `AuthTokens` - JWT tokens
- `ListQueryParams` - Query parameters
- `BulkOperationRequest` - Bulk operations
- `HealthCheckResponse` - Health check
- `AnalyticsRequest`, `AnalyticsResponse` - Analytics

### Analytics Types
- `AnalyticsEvent` - Event tracking
- `Metric`, `MetricType` - Metrics and measurements
- `DashboardWidget` - Dashboard components
- `AnalyticsReport` - Report definitions
- `Funnel`, `Cohort`, `RetentionData` - Advanced analytics
- `ABTestResult` - A/B testing
- `UsageSummary` - Usage statistics

### Auth Types
- `AuthProvider`, `TokenType` - Auth enums
- `Permission` - Permission system
- `JwtPayload` - JWT token structure
- `MFAConfig`, `MFAType` - Multi-factor auth
- `Session` - User sessions
- `APIKey` - API key management
- `AuditLog` - Audit logging
- `SecurityEvent` - Security monitoring

### Billing Types
- `PaymentMethod` - Payment methods
- `Payment`, `Refund` - Payment transactions
- `Invoice`, `InvoiceItem` - Invoicing
- `Discount`, `CreditNote` - Billing adjustments
- `PaymentIntent` - Checkout flows
- `UsageRecord` - Metered billing
- `AccountBalance` - Balance tracking

### Notification Types
- `Notification` - Notification entity
- `NotificationType`, `NotificationChannel` - Notification enums
- `EmailNotification`, `SMSNotification` - Channel-specific types
- `PushNotification`, `SlackNotification` - Push & Slack
- `NotificationTemplate` - Templates
- `NotificationPreference` - User preferences
- `EmailCampaign` - Marketing campaigns
- `NotificationStats` - Analytics

## Type Organization

```
src/
├── common.ts          # Common types used everywhere
├── user.ts            # User-related types
├── company.ts         # Company/tenant types
├── subscription.ts    # Billing and subscriptions
├── workflow.ts        # Workflow and automation
├── document.ts        # Documents and AI
├── integration.ts     # Third-party integrations
├── api.ts             # API request/response
├── analytics.ts       # Analytics and metrics
├── auth.ts            # Authentication and authorization
├── billing.ts         # Payments and invoicing
├── notification.ts    # Notifications and messaging
└── index.ts           # Main exports
```

## Examples

### Using enums

```typescript
import { UserRole, UserStatus } from '@aic/types';

function checkUserAccess(role: UserRole): boolean {
  return role === UserRole.ADMIN || role === UserRole.MANAGER;
}

const isActive = user.status === UserStatus.ACTIVE;
```

### Type-safe API responses

```typescript
import type { ApiResponse, PaginatedResponse, User } from '@aic/types';

async function getUsers(): Promise<PaginatedResponse<User>> {
  const response = await fetch('/api/users');
  return response.json();
}
```

### Working with DTOs

```typescript
import type { CreateUserDto, UpdateUserDto } from '@aic/types';

const createData: CreateUserDto = {
  email: 'new@example.com',
  firstName: 'Jane',
  lastName: 'Smith',
  password: 'secure123',
  companyId: 'company-123',
};

const updateData: UpdateUserDto = {
  firstName: 'Jane',
  displayName: 'Jane Smith',
};
```

## Best Practices

1. **Import as type when possible**
   ```typescript
   import type { User } from '@aic/types';
   ```

2. **Use enums for constants**
   ```typescript
   import { UserRole } from '@aic/types';
   if (user.role === UserRole.ADMIN) { }
   ```

3. **Extend types when needed**
   ```typescript
   import type { User } from '@aic/types';
   
   interface ExtendedUser extends User {
     customField: string;
   }
   ```

4. **Use utility types**
   ```typescript
   import type { UpdateUserDto } from '@aic/types';
   
   // Partial makes all fields optional
   const partialUpdate: Partial<UpdateUserDto> = {
     firstName: 'John'
   };
   ```

## Development

```bash
# Build the package
pnpm build

# Watch mode
pnpm dev

# Type checking
pnpm type-check

# Linting
pnpm lint
```

## License

MIT