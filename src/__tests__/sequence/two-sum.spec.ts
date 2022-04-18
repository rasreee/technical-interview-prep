import { twoSum } from 'problems/sequence/two-sum';

import { TwoSumTestCases } from '../__fixtures__/two-sum';

const makeMockTwoSum = () => {
  const mockTwoSum = jest.fn((nums: number[], target: number): number[] => {
    return twoSum(nums, target);
  });

  return mockTwoSum;
};

/**
 * @group problems
 * @group sequence
 * @group two-sum
 */
describe('problems/two-sum', () => {
  test.each(TwoSumTestCases)(`%s`, (_, nums, target, expected) => {
    const mockTwoSum = makeMockTwoSum();

    expect(() => mockTwoSum(nums, target)).not.toThrow();
    expect(twoSum(nums, target)).toEqual(expect.arrayContaining(expected));
  });
});
