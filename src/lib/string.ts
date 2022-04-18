import { arrayUtils } from 'lib/array';
import { is } from 'lib/is';

export const asString = (value: readonly any[] | null | undefined | number | string): string => {
  if (is.array(value)) {
    return arrayUtils.toString(value);
  }

  if (!is.string(value)) return `${value}`;

  return value;
};
