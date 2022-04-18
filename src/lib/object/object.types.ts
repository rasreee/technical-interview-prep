export type Entry<T> = [Key<T>, Value<T>];

export type Dict<T = any> = Record<string, T>;
export type ReadonlyRecord<K extends keyof any, T> = Readonly<Record<K, T>>;
export type Merge<T, P> = P & Omit<T, keyof P>;

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type Key<T extends Dict> = keyof T;
export type Value<T extends Dict> = T[Key<T>];

export type Entries<T extends Dict> = Entry<T>[];
