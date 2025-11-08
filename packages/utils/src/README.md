# @aic/utils/src

Source code directory for the utils package.

## Structure

- **arrays.ts** - Array manipulation and transformation utilities
- **calculations.ts** - Mathematical and business calculation functions
- **dates.ts** - Date manipulation and formatting utilities
- **format.ts** - String formatting and data presentation utilities
- **objects.ts** - Object manipulation and transformation utilities
- **transformers.ts** - Data transformation and conversion utilities
- **validation.ts** - Validation helper functions
- **index.ts** - Main exports file

## Usage

All utilities are re-exported through the main `index.ts` file and can be imported directly from `@aic/utils`.

```typescript
import { unique, groupBy, formatCurrency } from '@aic/utils';
```

## Guidelines

- All functions should be pure (no side effects)
- All functions should be well-documented with JSDoc comments
- All functions should include TypeScript types
- All functions should be tested