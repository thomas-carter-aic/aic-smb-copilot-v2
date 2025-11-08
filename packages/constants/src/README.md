# @aic/constants

Shared constants for AIC SMB Copilot.

## Installation

```bash
pnpm add @aic/constants
```

## Usage

```typescript
import {
  API_ENDPOINTS,
  HTTP_STATUS,
  ERROR_CODES,
  RATE_LIMITS,
  EMAIL_REGEX,
  validate,
} from '@aic/constants';

// Using API endpoints
const loginUrl = API_ENDPOINTS.AUTH.LOGIN;
const userUrl = API_ENDPOINTS.USER.BY_ID('user-123');

// Using status codes
if (response.status === HTTP_STATUS.OK) {
  // Handle success
}

// Using error codes
throw new Error(ERROR_CODES.AUTH_ERRORS.INVALID_CREDENTIALS);

// Using limits
if (requestCount > RATE_LIMITS.API_REQUESTS_PER_MINUTE) {
  // Rate limit exceeded
}

// Using regex validation
if (validate.email(email)) {
  // Email is valid
}
```

## Available Constants

### API Endpoints
- `AUTH_ENDPOINTS` - Authentication routes
- `USER_ENDPOINTS` - User management routes
- `COMPANY_ENDPOINTS` - Company routes
- `SUBSCRIPTION_ENDPOINTS` - Billing routes
- `WORKFLOW_ENDPOINTS` - Workflow routes
- `DOCUMENT_ENDPOINTS` - Document routes
- `CONVERSATION_ENDPOINTS` - AI chat routes
- `INTEGRATION_ENDPOINTS` - Integration routes
- `ANALYTICS_ENDPOINTS` - Analytics routes
- `ADMIN_ENDPOINTS` - Admin routes
- `WEBHOOK_ENDPOINTS` - Webhook routes

### HTTP Status Codes
- `HTTP_STATUS` - All HTTP status codes
- `HTTP_STATUS_MESSAGES` - Human-readable messages
- Helper functions: `isSuccess()`, `isClientError()`, `isServerError()`, `isError()`

### Error Codes
- `AUTH_ERRORS` - Authentication errors (1xxx)
- `USER_ERRORS` - User errors (2xxx)
- `COMPANY_ERRORS` - Company errors (3xxx)
- `SUBSCRIPTION_ERRORS` - Subscription errors (4xxx)
- `WORKFLOW_ERRORS` - Workflow errors (5xxx)
- `DOCUMENT_ERRORS` - Document errors (6xxx)
- `INTEGRATION_ERRORS` - Integration errors (7xxx)
- `VALIDATION_ERRORS` - Validation errors (8xxx)
- `SYSTEM_ERRORS` - System errors (9xxx)
- `ERROR_MESSAGES` - Error code to message mapping

### Limits
- `RATE_LIMITS` - API rate limiting
- `FILE_SIZE_LIMITS` - Maximum file sizes
- `STORAGE_QUOTAS` - Storage per plan
- `AI_REQUEST_QUOTAS` - AI requests per plan
- `USER_LIMITS` - Users per plan
- `WORKFLOW_LIMITS` - Workflows per plan
- `INTEGRATION_LIMITS` - Integrations per plan
- `STRING_LIMITS` - String length constraints
- `PAGINATION_LIMITS` - Pagination settings
- `TIMEOUT_LIMITS` - Operation timeouts
- `RETRY_LIMITS` - Retry configuration
- `CACHE_TTL` - Cache time-to-live
- `SESSION_LIMITS` - Session settings
- `CONVERSATION_LIMITS` - Chat limits

### Regex Patterns
- `EMAIL_REGEX` - Email validation
- `PASSWORD_STRONG_REGEX` - Strong password
- `PASSWORD_MEDIUM_REGEX` - Medium password
- `URL_REGEX` - URL validation
- `SLUG_REGEX` - Slug validation
- `PHONE_REGEX` - Phone number
- `UUID_REGEX` - UUID v4
- `HEX_COLOR_REGEX` - Hex color
- `CREDIT_CARD_REGEX` - Credit card
- `IPV4_REGEX` - IPv4 address
- `DOMAIN_REGEX` - Domain name
- `USERNAME_REGEX` - Username
- `validate` - Helper validation functions

### Events
- `SYSTEM_EVENTS` - System and application events
- `USER_EVENTS` - User lifecycle and auth events
- `COMPANY_EVENTS` - Company/tenant events
- `SUBSCRIPTION_EVENTS` - Subscription lifecycle
- `PAYMENT_EVENTS` - Payment and billing events
- `WORKFLOW_EVENTS` - Workflow execution events
- `DOCUMENT_EVENTS` - Document processing events
- `INTEGRATION_EVENTS` - Integration events
- `ANALYTICS_EVENTS` - Analytics tracking events
- `NOTIFICATION_EVENTS` - Notification delivery events
- `SECURITY_EVENTS` - Security and audit events
- `EVENT_CATEGORIES` - Event groupings
- `EVENT_SEVERITY` - Event severity levels

### Plans
- `PLAN_IDS` - Plan identifiers
- `PLAN_NAMES` - Display names
- `PLAN_DESCRIPTIONS` - Plan descriptions
- `MONTHLY_PRICES` - Monthly pricing
- `YEARLY_PRICES` - Yearly pricing
- `PLAN_USER_LIMITS` - User limits per plan
- `PLAN_STORAGE_LIMITS` - Storage limits per plan
- `PLAN_AI_REQUEST_LIMITS` - AI request quotas
- `PLAN_WORKFLOW_LIMITS` - Workflow limits
- `PLAN_INTEGRATION_LIMITS` - Integration limits
- `PLAN_FEATURES` - Feature flags per plan
- `PLAN_COMPARISON` - Feature comparison matrix
- `TRIAL_PERIOD_DAYS` - Trial periods
- Helper functions: `getPlanPrice()`, `getPlanFeature()`, `getYearlySavings()`

### Roles
- `ROLE_IDS` - Role identifiers
- `ROLE_NAMES` - Display names
- `ROLE_DESCRIPTIONS` - Role descriptions
- `PERMISSIONS` - All granular permissions
- `PERMISSION_GROUPS` - Grouped permissions
- `ROLE_PERMISSIONS` - Permissions by role
- `ROLE_HIERARCHY` - Role hierarchy levels
- `DEFAULT_ROLE` - Default role for new users
- `ROLE_COLORS` - UI colors per role
- `ROLES_CAN_MANAGE_ROLES` - Roles with user management
- Helper functions: `hasPermission()`, `canManageRole()`, `isHigherRole()`

## Examples

### Building API URLs

```typescript
import { API_ENDPOINTS } from '@aic/constants';

// Static endpoint
const loginUrl = API_ENDPOINTS.AUTH.LOGIN;
// "/api/v1/auth/login"

// Dynamic endpoint
const userId = '123';
const userUrl = API_ENDPOINTS.USER.BY_ID(userId);
// "/api/v1/users/123"

const workflowId = 'wf-456';
const executionId = 'exec-789';
const executionUrl = API_ENDPOINTS.WORKFLOW.EXECUTION_BY_ID(workflowId, executionId);
// "/api/v1/workflows/wf-456/executions/exec-789"
```

### Error Handling

```typescript
import { ERROR_CODES, ERROR_MESSAGES, HTTP_STATUS } from '@aic/constants';

// Throw standardized error
if (!user) {
  throw new HttpException(
    ERROR_MESSAGES[ERROR_CODES.USER_NOT_FOUND],
    HTTP_STATUS.NOT_FOUND,
    { code: ERROR_CODES.USER_NOT_FOUND }
  );
}

// Check error code
if (error.code === ERROR_CODES.AUTH_ERRORS.TOKEN_EXPIRED) {
  // Refresh token
}
```

### Validation

```typescript
import { validate, STRING_LIMITS, FILE_SIZE_LIMITS } from '@aic/constants';

// Email validation
if (!validate.email(email)) {
  throw new Error('Invalid email format');
}

// Password strength
if (!validate.passwordStrong(password)) {
  throw new Error('Password must be stronger');
}

// String length
if (name.length > STRING_LIMITS.NAME_MAX) {
  throw new Error(`Name must be less than ${STRING_LIMITS.NAME_MAX} characters`);
}

// File size
if (fileSize > FILE_SIZE_LIMITS.DOCUMENT) {
  throw new Error('File too large');
}
```

### Rate Limiting

```typescript
import { RATE_LIMITS } from '@aic/constants';

// Set up rate limiter
const limiter = new RateLimiter({
  points: RATE_LIMITS.API_REQUESTS_PER_MINUTE,
  duration: 60,
});

// Check subscription quota
const quota = AI_REQUEST_QUOTAS[subscription.plan];
if (usage.aiRequests >= quota && quota !== -1) {
  throw new Error('AI request quota exceeded');
}
```

### Event Tracking

```typescript
import { EVENTS, EVENT_CATEGORIES } from '@aic/constants';

// Track user event
await analyticsService.track({
  event: EVENTS.USER_LOGGED_IN,
  userId: user.id,
  properties: {
    method: 'email',
    timestamp: new Date(),
  },
});

// Track workflow event
await analyticsService.track({
  event: EVENTS.WORKFLOW_EXECUTION_COMPLETED,
  userId: user.id,
  properties: {
    workflowId: workflow.id,
    duration: 1234,
  },
});

// Check event category
const category = getEventCategory(EVENTS.PAYMENT_SUCCEEDED);
// Returns: 'payment'
```

### Plan Management

```typescript
import {
  PLAN_IDS,
  PLAN_FEATURES,
  getPlanPrice,
  getYearlySavings,
  canUpgradeTo,
} from '@aic/constants';

// Get plan pricing
const monthlyPrice = getPlanPrice(PLAN_IDS.PRO, 'monthly');
// Returns: 9900 ($99.00)

const yearlyPrice = getPlanPrice(PLAN_IDS.PRO, 'yearly');
// Returns: 94900 ($949.00)

// Calculate savings
const savings = getYearlySavings(PLAN_IDS.PRO);
// Returns: 23900 ($239.00)

// Check feature availability
const hasAnalytics = PLAN_FEATURES[PLAN_IDS.BASIC].analytics;
// Returns: true

const hasSSO = PLAN_FEATURES[PLAN_IDS.BASIC].ssoSaml;
// Returns: false

// Check upgrade path
if (canUpgradeTo(currentPlan, PLAN_IDS.PRO)) {
  // Show upgrade option
}
```

### Role-Based Access Control

```typescript
import {
  ROLE_IDS,
  PERMISSIONS,
  hasPermission,
  canManageRole,
  isHigherRole,
} from '@aic/constants';

// Check permission
if (hasPermission(user.role, PERMISSIONS.WORKFLOW_DELETE)) {
  // Allow deletion
}

// Check multiple permissions
if (hasAllPermissions(user.role, [
  PERMISSIONS.USER_WRITE,
  PERMISSIONS.USER_DELETE,
])) {
  // Allow user management
}

// Check if user can manage another user's role
if (canManageRole(currentUser.role, targetUser.role)) {
  // Allow role change
}

// Check role hierarchy
if (isHigherRole(ROLE_IDS.ADMIN, ROLE_IDS.MEMBER)) {
  // Admin has higher privileges than Member
}

// Get available roles user can assign
const assignableRoles = getAvailableRoles(user.role);
```

## Best Practices

1. **Always use constants instead of magic strings/numbers**
   ```typescript
   // Bad
   if (status === 401) { }
   
   // Good
   if (status === HTTP_STATUS.UNAUTHORIZED) { }
   ```

2. **Use error codes for consistent error handling**
   ```typescript
   // Bad
   throw new Error('User not found');
   
   // Good
   throw new HttpException(
     ERROR_MESSAGES[ERROR_CODES.USER_NOT_FOUND],
     HTTP_STATUS.NOT_FOUND,
     { code: ERROR_CODES.USER_NOT_FOUND }
   );
   ```

3. **Validate user input with regex helpers**
   ```typescript
   import { validate } from '@aic/constants';
   
   if (!validate.email(email)) {
     return { error: 'Invalid email' };
   }
   ```

4. **Use limits for consistent quotas**
   ```typescript
   import { FILE_SIZE_LIMITS } from '@aic/constants';
   
   const maxSize = FILE_SIZE_LIMITS.DOCUMENT;
   ```

## Development

```bash
# Build
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