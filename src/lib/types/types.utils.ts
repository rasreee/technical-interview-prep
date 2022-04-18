export function isTrue<T extends boolean>(value: T): T {
  return value;
}

export function isFalse<T extends boolean>(value: T): T extends true ? false : true {
  return !value as T extends true ? false : true;
}

export function negateBoolean<T extends boolean>(value: T): T extends true ? false : true {
  return isFalse(value);
}
