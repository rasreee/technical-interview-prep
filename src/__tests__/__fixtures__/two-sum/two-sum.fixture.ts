import { readJSONArray } from 'lib/file';
import { TestDescription } from 'lib/testing';
import path from 'path';

export type TwoSumTestCase = [TestDescription, number[], number, number[]];

const nonSortedNums: TwoSumTestCase = ['non-sorted nums', [3, 2, 4], 6, [1, 2]];

const numsWithDuplicates: TwoSumTestCase = ['nums with duplicates', [3, 3], 6, [0, 1]];

const sortedNums: TwoSumTestCase = ['sorted nums', [2, 7, 11, 15], 9, [0, 1]];

const tenThousandNumsArray = readJSONArray<number[]>(path.resolve(__dirname, 'ten-thousand-nums.json'));

const tenThousandNums: TwoSumTestCase = ['10,000 nums', tenThousandNumsArray, 19999, [9998, 9999]];

export const TwoSumTestCases = [nonSortedNums, numsWithDuplicates, sortedNums, tenThousandNums];
