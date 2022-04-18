import { TFunction } from 'lib/function';
import { Dict } from 'lib/object';
import { NullOrUndefined } from 'lib/types';

export const assertType = {
  array<T>(value: any): value is Array<T> {
    return Array.isArray(value);
  },
  undefined(value: any): value is undefined {
    return typeof value === 'undefined' || value === undefined;
  },
  function<Fn extends TFunction<any[]>>(value: any): value is Fn {
    return typeof value === 'function';
  },
  null(value: any): value is null {
    return value === null;
  },
  nullOrUndefined<T>(value: T | NullOrUndefined): value is Exclude<T | NullOrUndefined, T> {
    return assertType.null(value) || assertType.undefined(value);
  },
  number(value: any): value is number {
    return typeof value === 'number';
  },
  object(value: any): value is Dict {
    const type = typeof value;
    return value != null && (type === 'object' || type === 'function') && !assertType.array(value);
  },
  string(value: any): value is string {
    return Object.prototype.toString.call(value) === '[object String]';
  },
};

export const assertNodeEnv = {
  production(): boolean {
    return process.env.NODE_ENV === 'production';
  },
  development(): boolean {
    return process.env.NODE_ENV === 'development';
  },
  test(): boolean {
    return process.env.NODE_ENV === 'test';
  },
};

export const assertMisc = {
  emptyArray(value: any) {
    return assertType.array(value) && value.length === 0;
  },
  emptyObject(value: any): boolean {
    return assertType.object(value) && Object.keys(value).length === 0;
  },
  emptyString(value: any): boolean {
    return assertType.string(value) && value === '';
  },
  empty(value: any): boolean {
    if (assertType.array(value)) return assertMisc.emptyArray(value);
    if (assertType.object(value)) return assertMisc.emptyObject(value);
    if (value == null || value === '') return true;
    return false;
  },
  negative(value: any): boolean {
    return assertType.number(value) && value < 0;
  },
  defined(value: any): typeof value extends undefined ? false : true {
    return typeof value !== 'undefined' && value !== undefined;
  },
};
