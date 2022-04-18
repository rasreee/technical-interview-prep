import { is } from 'lib/is';
import { Maybe } from 'lib/types';

export const arrayToString = <T>(array: readonly T[]): string => {
  return ['[', array.map(item => `${item}`).join(', '), ']'].join('');
};

export const fromSet = <T>(set: Set<T>): Array<T> => {
  const array: Array<T> = [];

  for (const item of set) {
    array.push(item);
  }

  return array;
};

export const uniques = <T>(array: Array<T>): Array<T> => {
  return fromSet(new Set(array));
};

export const findEquals = <T = any>(array: Array<T>, targetItem: T): Maybe<T> => {
  return array.find(item => item === targetItem);
};

export const sortNumbers = (array: number[], ascending = false): number[] => {
  return array.sort((a, b) => {
    let result = a - b;
    const multiplier = ascending ? 1 : -1;
    result *= multiplier;
    return result;
  });
};

export function assertValidArrayIndex<T>(array: T[], index: number): void {
  if (index < 0 || index >= array.length) {
    throw new Error(`index out of bounds: ${index}`);
  }
}

export const itemAt = <T>(array: Array<T>, index: number): T => {
  assertValidArrayIndex(array, index);

  const found = array[index];

  return found;
};

export function addItem<T>(array: T[], item: T): T[] {
  return [...array, item];
}

export function lastItem<T>(array: T[]): T | undefined {
  const length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

export const cloneArray = <T>(array: T[]): T[] => {
  return [...array];
};

export const exclude = <T>(array: readonly T[], valueOrArrayToExclude: T | readonly T[]): T[] => {
  if (is.array(valueOrArrayToExclude)) {
    return array.filter(value => !valueOrArrayToExclude.includes(value));
  }

  return array.filter(value => value !== valueOrArrayToExclude);
};

export const arrayUtils = {
  toString: arrayToString,
  fromSet,
  uniques,
  findEquals,
  sortNumbers,
  itemAt,
  addItem,
  lastItem,
  clone: cloneArray,
  exclude,
  containEquals: (a: any, b: any): boolean => is.array(a) && is.array(b) && a.length === b.length && a.every(valueA => b.includes(valueA)),
} as const;
