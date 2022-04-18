import { TFunction } from './function.types';

export function runIf<Args extends any[], Return>(
  predicate: boolean,
  fn: TFunction<Args, Return>,
  ...args: Args
): false | ReturnType<TFunction<Args, Return>> {
  return predicate && fn(...args);
}
