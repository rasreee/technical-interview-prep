import { is } from 'lib/is';

import { Dict, Entries, Entry, Key, Value } from './object.types';

export { default as merge } from 'lodash.merge';

export const objectKeys = <T extends Dict>(obj: T): Key<T>[] => Object.keys(obj) as unknown as (keyof T)[];
export const objectValues = <T extends Dict>(obj: T): Value<T>[] => Object.values(obj) as unknown as T[keyof T][];

export const objectEntries = <T extends Dict>(obj: T): Entries<T> => Object.entries(obj) as unknown as Entry<T>[];

export const emptyObject = <T extends Dict>(): T => ({} as T);

export const fromEntries = <T extends Dict>(entries: Entry<T>[]) =>
  entries.reduce<T>((carry, [key, value]) => {
    carry[key] = value;
    return carry;
  }, emptyObject<T>()) as T;

/** Get value from a deeply nested object using a string path.
 * Memorizes the value.
 * @param obj - the object
 */
export function objectValue<O extends Dict>(obj: O, key: keyof O): Value<O> {
  return obj[key];
}

export const isObject = (o: any): o is object => {
  return typeof o === 'object';
};

export const isDict = (o: any): o is Dict => {
  return isObject(o) && is.string(objectKeys(o)[0]);
};
