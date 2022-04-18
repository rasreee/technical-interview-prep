import { BasePredicate } from 'lib/function';

const TYPE_NAMES = ['array', 'undefined', 'nullOrUndefined', 'function', 'null', 'number', 'object', 'string'] as const;

export type TypeName = typeof TYPE_NAMES[number];

const NODE_ENV_NAMES = ['production', 'development', 'test'] as const;
export type NodeEnvName = typeof NODE_ENV_NAMES[number];

const MISC_NAMES = ['emptyArray', 'emptyObject', 'emptyString', 'empty', 'defined', 'negative'] as const;

export type EmptyTypeName = typeof MISC_NAMES[number];

export type IsKey = TypeName | NodeEnvName | EmptyTypeName;

export interface TypePredicate<Type> extends BasePredicate {
  <V = any>(value: V): V extends Type ? true : false;
}

export interface SimplePredicate extends BasePredicate {
  <V = any>(value: V): boolean;
}

export interface EnvPredicate extends BasePredicate {
  (): boolean;
}

export type IsPredicate = TypePredicate<any> | SimplePredicate | EnvPredicate;

export type Assertions = Record<IsKey, IsPredicate>;
