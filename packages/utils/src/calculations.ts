/**
 * Calculation Utility Functions
 * 
 * Mathematical and business calculation utilities
 */

/**
 * Round a number to specified decimal places
 * @param value - The number to round
 * @param decimals - Number of decimal places (default: 2)
 * @returns Rounded number
 */
export function roundTo(value: number, decimals: number = 2): number {
  const multiplier = Math.pow(10, decimals);
  return Math.round(value * multiplier) / multiplier;
}

/**
 * Calculate percentage
 * @param value - The value
 * @param total - The total
 * @param decimals - Number of decimal places (default: 2)
 * @returns Percentage value
 */
export function percentage(
  value: number,
  total: number,
  decimals: number = 2
): number {
  if (total === 0) return 0;
  return roundTo((value / total) * 100, decimals);
}

/**
 * Calculate percentage change between two values
 * @param oldValue - The original value
 * @param newValue - The new value
 * @param decimals - Number of decimal places (default: 2)
 * @returns Percentage change
 */
export function percentageChange(
  oldValue: number,
  newValue: number,
  decimals: number = 2
): number {
  if (oldValue === 0) return newValue === 0 ? 0 : 100;
  return roundTo(((newValue - oldValue) / Math.abs(oldValue)) * 100, decimals);
}

/**
 * Clamp a number between min and max values
 * @param value - The value to clamp
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Clamped value
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Check if a number is within a range (inclusive)
 * @param value - The value to check
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns True if value is in range
 */
export function inRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

/**
 * Linear interpolation between two values
 * @param start - Start value
 * @param end - End value
 * @param t - Interpolation factor (0-1)
 * @returns Interpolated value
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * clamp(t, 0, 1);
}

/**
 * Calculate compound interest
 * @param principal - Initial principal
 * @param rate - Interest rate (as decimal, e.g., 0.05 for 5%)
 * @param time - Time period
 * @param frequency - Compounding frequency per year (default: 12)
 * @returns Final amount
 */
export function compoundInterest(
  principal: number,
  rate: number,
  time: number,
  frequency: number = 12
): number {
  return principal * Math.pow(1 + rate / frequency, frequency * time);
}

/**
 * Calculate simple interest
 * @param principal - Initial principal
 * @param rate - Interest rate (as decimal)
 * @param time - Time period
 * @returns Interest amount
 */
export function simpleInterest(
  principal: number,
  rate: number,
  time: number
): number {
  return principal * rate * time;
}

/**
 * Calculate discount amount
 * @param price - Original price
 * @param discountPercent - Discount percentage (e.g., 20 for 20%)
 * @returns Discount amount
 */
export function discountAmount(price: number, discountPercent: number): number {
  return (price * discountPercent) / 100;
}

/**
 * Calculate final price after discount
 * @param price - Original price
 * @param discountPercent - Discount percentage
 * @returns Final price
 */
export function applyDiscount(price: number, discountPercent: number): number {
  return price - discountAmount(price, discountPercent);
}

/**
 * Calculate tax amount
 * @param amount - Base amount
 * @param taxRate - Tax rate (as decimal, e.g., 0.08 for 8%)
 * @returns Tax amount
 */
export function calculateTax(amount: number, taxRate: number): number {
  return amount * taxRate;
}

/**
 * Calculate total with tax
 * @param amount - Base amount
 * @param taxRate - Tax rate (as decimal)
 * @returns Total amount including tax
 */
export function addTax(amount: number, taxRate: number): number {
  return amount + calculateTax(amount, taxRate);
}

/**
 * Calculate markup price
 * @param cost - Cost price
 * @param markupPercent - Markup percentage (e.g., 30 for 30%)
 * @returns Selling price
 */
export function applyMarkup(cost: number, markupPercent: number): number {
  return cost * (1 + markupPercent / 100);
}

/**
 * Calculate profit margin percentage
 * @param revenue - Revenue/selling price
 * @param cost - Cost price
 * @returns Profit margin percentage
 */
export function profitMargin(revenue: number, cost: number): number {
  if (revenue === 0) return 0;
  return percentage(revenue - cost, revenue);
}

/**
 * Calculate ROI (Return on Investment)
 * @param gain - Gain from investment
 * @param cost - Cost of investment
 * @returns ROI percentage
 */
export function roi(gain: number, cost: number): number {
  if (cost === 0) return 0;
  return percentage(gain - cost, cost);
}

/**
 * Calculate monthly payment for a loan
 * @param principal - Loan amount
 * @param annualRate - Annual interest rate (as decimal)
 * @param months - Number of months
 * @returns Monthly payment amount
 */
export function loanPayment(
  principal: number,
  annualRate: number,
  months: number
): number {
  if (annualRate === 0) return principal / months;
  
  const monthlyRate = annualRate / 12;
  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  );
}

/**
 * Calculate average (mean) of an array of numbers
 * @param values - Array of numbers
 * @returns Average value
 */
export function mean(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, val) => sum + val, 0) / values.length;
}

/**
 * Calculate median of an array of numbers
 * @param values - Array of numbers
 * @returns Median value
 */
export function median(values: number[]): number {
  if (values.length === 0) return 0;
  
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  return sorted[mid];
}

/**
 * Calculate standard deviation
 * @param values - Array of numbers
 * @returns Standard deviation
 */
export function standardDeviation(values: number[]): number {
  if (values.length === 0) return 0;
  
  const avg = mean(values);
  const squareDiffs = values.map((value) => Math.pow(value - avg, 2));
  const avgSquareDiff = mean(squareDiffs);
  
  return Math.sqrt(avgSquareDiff);
}

/**
 * Calculate variance
 * @param values - Array of numbers
 * @returns Variance
 */
export function variance(values: number[]): number {
  if (values.length === 0) return 0;
  
  const avg = mean(values);
  const squareDiffs = values.map((value) => Math.pow(value - avg, 2));
  
  return mean(squareDiffs);
}

/**
 * Calculate Greatest Common Divisor (GCD)
 * @param a - First number
 * @param b - Second number
 * @returns GCD
 */
export function gcd(a: number, b: number): number {
  a = Math.abs(Math.floor(a));
  b = Math.abs(Math.floor(b));
  
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/**
 * Calculate Least Common Multiple (LCM)
 * @param a - First number
 * @param b - Second number
 * @returns LCM
 */
export function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

/**
 * Convert degrees to radians
 * @param degrees - Angle in degrees
 * @returns Angle in radians
 */
export function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

/**
 * Convert radians to degrees
 * @param radians - Angle in radians
 * @returns Angle in degrees
 */
export function toDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}

/**
 * Check if a number is even
 * @param num - Number to check
 * @returns True if even
 */
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

/**
 * Check if a number is odd
 * @param num - Number to check
 * @returns True if odd
 */
export function isOdd(num: number): boolean {
  return num % 2 !== 0;
}

/**
 * Check if a number is prime
 * @param num - Number to check
 * @returns True if prime
 */
export function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

/**
 * Generate a random number within a range
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (inclusive)
 * @returns Random number
 */
export function randomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a random float within a range
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Random float
 */
export function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}