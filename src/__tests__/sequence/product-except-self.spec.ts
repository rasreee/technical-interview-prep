import { productExceptSelf } from 'problems/sequence/product-except-self';

import { ProductOfArrayExceptSelfTestCases } from '../__fixtures__/product-except-self';

/**
 * @group problems
 * @group sequence
 * @group product-except-self
 */
describe('problems/product-except-self', () => {
  test.each(ProductOfArrayExceptSelfTestCases)(`%s`, (_, nums, expected) => {
    expect(productExceptSelf(nums)).toEqual(expect.arrayContaining(expected));
  });
});
