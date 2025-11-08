# @aic/utils

> Comprehensive utility functions for the AIC SMB Copilot Platform

## 📋 Overview

`@aic/utils` is a collection of type-safe, production-ready utility functions organized into logical categories. These utilities are used across all services and applications in the AIC monorepo.

## ✨ Features

- 🔒 **Type-Safe**: Full TypeScript support with strict typing
- ⚡ **Performance**: Optimized for production use
- 📦 **Zero Dependencies**: No external dependencies (except TypeScript)
- 🧪 **Well-Tested**: Comprehensive test coverage
- 📝 **Well-Documented**: Complete JSDoc documentation
- 🎯 **Tree-Shakeable**: Import only what you need

## 📦 Installation

This package is part of the AIC monorepo.

```json
{
  "dependencies": {
    "@aic/utils": "workspace:*"
  }
}
```

## 🚀 Quick Start

```typescript
import {
  unique,
  groupBy,
  formatCurrency,
  addDays,
  deepClone,
} from '@aic/utils';

// Array utilities
const items = unique([1, 2, 2, 3, 3, 3]);
// => [1, 2, 3]

// Formatting
const price = formatCurrency(1234.56);
// => "$1,234.56"

// Date manipulation
const tomorrow = addDays(new Date(), 1);

// Object utilities
const copy = deepClone({ user: { name: 'John' } });
```

## 📚 Utility Categories

### 1. Array Utilities (`arrays.ts`)

Utilities for array manipulation and transformation.

```typescript
import {
  unique,
  uniqueBy,
  chunk,
  groupBy,
  sortBy,
  flatten,
  shuffle,
  sample,
  intersection,
  difference,
  partition,
  range,
  sum,
  average,
} from '@aic/utils';

// Remove duplicates
const uniqueItems = unique([1, 2, 2, 3]);

// Group by property
const grouped = groupBy(users, 'role');

// Chunk array
const chunks = chunk([1, 2, 3, 4, 5], 2);
// => [[1, 2], [3, 4], [5]]

// Generate range
const numbers = range(1, 5);
// => [1, 2, 3, 4]
```

### 2. Calculation Utilities (`calculations.ts`)

Mathematical and business calculations.

```typescript
import {
  roundTo,
  percentage,
  percentageChange,
  clamp,
  applyDiscount,
  calculateTax,
  profitMargin,
  loanPayment,
  mean,
  median,
  standardDeviation,
} from '@aic/utils';

// Round to decimal places
const rounded = roundTo(3.14159, 2);
// => 3.14

// Calculate percentage
const percent = percentage(25, 100);
// => 25

// Apply discount
const finalPrice = applyDiscount(100, 20);
// => 80

// Calculate tax
const total = calculateTax(100, 0.08);
// => 8
```

### 3. Date Utilities (`dates.ts`)

Comprehensive date manipulation and formatting.

```typescript
import {
  formatDate,
  formatTime,
  addDays,
  addMonths,
  diffInDays,
  isToday,
  isWeekend,
  startOfMonth,
  endOfMonth,
  getRelativeTime,
  getAge,
} from '@aic/utils';

// Format dates
const formatted = formatDate(new Date());
// => "2024-11-07"

// Add days
const nextWeek = addDays(new Date(), 7);

// Calculate difference
const days = diffInDays(date1, date2);

// Relative time
const relative = getRelativeTime(new Date());
// => "just now"

// Check if today
if (isToday(date)) {
  // ...
}
```

### 4. Format Utilities (`format.ts`)

String formatting and data presentation.

```typescript
import {
  formatCurrency,
  formatNumber,
  formatBytes,
  formatPhoneUS,
  capitalize,
  titleCase,
  camelCase,
  snakeCase,
  kebabCase,
  truncate,
  slugify,
  pluralize,
  ordinal,
} from '@aic/utils';

// Currency formatting
const price = formatCurrency(1234.56);
// => "$1,234.56"

// Bytes formatting
const size = formatBytes(1536);
// => "1.5 KB"

// Case conversion
const camel = camelCase('hello world');
// => "helloWorld"

// Truncate string
const short = truncate('Long text...', 10);
// => "Long te..."

// Pluralize
const word = pluralize('item', 5);
// => "items"
```

### 5. Object Utilities (`objects.ts`)

Object manipulation and transformation.

```typescript
import {
  deepClone,
  deepMerge,
  pick,
  omit,
  get,
  set,
  has,
  flatten,
  unflatten,
  mapValues,
  isEqual,
  isEmpty,
} from '@aic/utils';

// Deep clone
const copy = deepClone(original);

// Pick properties
const subset = pick(user, ['id', 'name', 'email']);

// Omit properties
const without = omit(user, ['password', 'token']);

// Nested access
const value = get(obj, 'user.address.city', 'N/A');

// Deep merge
const merged = deepMerge(defaults, custom);

// Check equality
if (isEqual(obj1, obj2)) {
  // Objects are deeply equal
}
```

### 6. Transformer Utilities (`transformers.ts`)

Data transformation and conversion.

```typescript
import {
  parseQueryString,
  toQueryString,
  csvToArray,
  arrayToCSV,
  rgbToHex,
  hexToRgb,
  toBase64,
  fromBase64,
  serialize,
  deserialize,
  celsiusToFahrenheit,
  kmToMiles,
} from '@aic/utils';

// Query strings
const params = parseQueryString('?foo=bar&baz=qux');
const query = toQueryString({ foo: 'bar' });

// CSV conversion
const data = csvToArray(csvString);
const csv = arrayToCSV(data);

// Base64
const encoded = toBase64('Hello World');
const decoded = fromBase64(encoded);

// Temperature conversion
const fahrenheit = celsiusToFahrenheit(25);
// => 77
```

### 7. Validation Utilities (`validation.ts`)

Data validation helpers.

```typescript
import {
  isEmail,
  isUrl,
  isUUID,
  isPhoneUS,
  isCreditCard,
  isIPv4,
  isHexColor,
  isJSON,
  checkPasswordStrength,
  isEmpty,
  isNil,
  isFunction,
  isArray,
  isDate,
} from '@aic/utils';

// Email validation
if (isEmail('user@example.com')) {
  // Valid email
}

// URL validation
if (isUrl('https://example.com')) {
  // Valid URL
}

// Password strength
const strength = checkPasswordStrength('MyP@ssw0rd');
// => { isValid: true, score: 5, feedback: [] }

// Type checks
if (isArray(value)) {
  // value is an array
}
```

## 💡 Usage Examples

### Example 1: Data Transformation Pipeline

```typescript
import {
  unique,
  groupBy,
  sortBy,
  formatCurrency,
  percentage,
} from '@aic/utils';

// Process sales data
const sales = [
  { region: 'US', amount: 1000 },
  { region: 'EU', amount: 1500 },
  { region: 'US', amount: 2000 },
];

// Group by region
const byRegion = groupBy(sales, 'region');

// Calculate totals
const totals = Object.entries(byRegion).map(([region, items]) => ({
  region,
  total: sum(items.map(i => i.amount)),
}));

// Sort by total
const sorted = sortBy(totals, 'total', 'desc');

// Format for display
const formatted = sorted.map(item => ({
  region: item.region,
  total: formatCurrency(item.total),
}));
```

### Example 2: Date Range Filter

```typescript
import { 
  addDays,
  startOfDay,
  endOfDay,
  isBetween,
  formatDate,
} from '@aic/utils';

// Get last 7 days
const today = new Date();
const weekAgo = addDays(today, -7);

// Filter items in date range
const recentItems = items.filter(item => 
  isBetween(
    item.createdAt,
    startOfDay(weekAgo),
    endOfDay(today)
  )
);
```

### Example 3: Form Validation

```typescript
import {
  isEmail,
  isPhoneUS,
  checkPasswordStrength,
  isEmpty,
  isLength,
} from '@aic/utils';

function validateForm(data: FormData) {
  const errors: string[] = [];

  if (isEmpty(data.name)) {
    errors.push('Name is required');
  }

  if (!isEmail(data.email)) {
    errors.push('Invalid email address');
  }

  if (!isPhoneUS(data.phone)) {
    errors.push('Invalid phone number');
  }

  const pwdStrength = checkPasswordStrength(data.password);
  if (!pwdStrength.isValid) {
    errors.push(...pwdStrength.feedback);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
```

### Example 4: API Response Transformation

```typescript
import {
  camelCaseKeys,
  pick,
  formatCurrency,
  formatDate,
  getRelativeTime,
} from '@aic/utils';

// Transform API response
function transformUser(apiUser: any) {
  // Convert snake_case to camelCase
  const user = camelCaseKeys(apiUser);

  // Pick only needed fields
  const safe = pick(user, [
    'id',
    'name',
    'email',
    'createdAt',
  ]);

  // Format values
  return {
    ...safe,
    createdAt: formatDate(new Date(safe.createdAt)),
    memberSince: getRelativeTime(new Date(safe.createdAt)),
  };
}
```

## 🎯 Best Practices

1. **Import Only What You Need**: Tree-shaking works best with named imports
   ```typescript
   // Good
   import { unique, groupBy } from '@aic/utils';
   
   // Avoid
   import * as utils from '@aic/utils';
   ```

2. **Use TypeScript**: Leverage type safety for better developer experience
   ```typescript
   import { pick } from '@aic/utils';
   
   const user = { id: 1, name: 'John', age: 30 };
   const subset = pick(user, ['id', 'name']); // Type-safe!
   ```

3. **Compose Utilities**: Combine multiple utilities for complex operations
   ```typescript
   import { unique, sortBy, take } from '@aic/utils';
   
   const top5 = take(sortBy(unique(items), 'score', 'desc'), 5);
   ```

4. **Handle Edge Cases**: Always consider null/undefined values
   ```typescript
   import { get } from '@aic/utils';
   
   // Provide defaults for safety
   const city = get(user, 'address.city', 'Unknown');
   ```

## 🧪 Testing

All utilities are thoroughly tested. To run tests:

```bash
# From root
npm test @aic/utils

# From package directory
cd packages/utils
npm test
```

## 📖 API Reference

See individual utility files for complete API documentation:

- [Array Utilities](./src/arrays.ts)
- [Calculation Utilities](./src/calculations.ts)
- [Date Utilities](./src/dates.ts)
- [Format Utilities](./src/format.ts)
- [Object Utilities](./src/objects.ts)
- [Transformer Utilities](./src/transformers.ts)
- [Validation Utilities](./src/validation.ts)

## 🤝 Contributing

When adding new utilities:

1. Choose the appropriate category file
2. Add JSDoc documentation
3. Include TypeScript types
4. Add tests
5. Update this README
6. Follow existing code style

## 📝 License

Private - AIC SMB Copilot Platform

---

**Version:** 1.0.0  
**Last Updated:** November 2024