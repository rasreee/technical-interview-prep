import { is } from 'lib/is';
import { logger } from 'lib/logger';

import { Bounds } from './math.types';

export function power(a: number, b: number): number {
  return a ** b;
}

export function round(value: number, customFractionDigits?: number): number {
  const isCustomFractionDigitsNegative = is.negative(customFractionDigits);
  if (is.number(customFractionDigits) && isCustomFractionDigitsNegative) {
    logger.warn('Passed negative number to round() function. Rounding to nearest integer instead.');
  }

  const shouldUseDefaultFractionDigits = !is.number(customFractionDigits) || isCustomFractionDigitsNegative;
  const fractionDigits = shouldUseDefaultFractionDigits ? 0 : customFractionDigits;

  const fixedNumber = value.toFixed(fractionDigits);
  const fixedValue = fixedNumber.valueOf();

  return parseFloat(fixedValue);
}

export const isEven = (value: number): boolean => {
  return value % 2 === 0;
};

export const distance = (a: number, b: number): number => {
  return Math.abs(a - b);
};

export const createBounds = (min = 0, max = 0): Bounds => {
  return { min, max };
};

export const doesValueRespectBounds = (value: number, bounds: Bounds): boolean => {
  return value > bounds.min && value < bounds.max;
};
