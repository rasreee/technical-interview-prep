export type TFunction<Args extends any[], Return = any> = (...args: Args) => Return;

export interface BasePredicate {
  (...args: any[]): boolean;
}
