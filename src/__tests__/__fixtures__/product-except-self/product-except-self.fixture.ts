import { readJSONArray } from 'lib/file';
import { TestDescription } from 'lib/testing';
import path from 'path';

export type ProductOfArrayExceptSelfTestCase = [TestDescription, number[], number[]];

const basicCase: ProductOfArrayExceptSelfTestCase = ['basic case', [1, 2, 3, 4], [24, 12, 8, 6]];

const numsWithNegatives: ProductOfArrayExceptSelfTestCase = ['nums with negatives', [-1, 1, 0, -3, 3], [0, 0, 9, 0, 0]];

const hugeArray: ProductOfArrayExceptSelfTestCase = [
  'huge array w/ 5000 items',
  ...readJSONArray<[number[], number[]]>(path.resolve(__dirname, 'hugeArray.json')),
];

export const ProductOfArrayExceptSelfTestCases: ProductOfArrayExceptSelfTestCase[] = [basicCase, numsWithNegatives, hugeArray];
