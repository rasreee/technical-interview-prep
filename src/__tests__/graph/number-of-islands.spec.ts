import { Grid } from 'data-structures/graph';
import { TestDescription } from 'lib/testing';
import { Binary } from 'lib/types';
import { numberOfIslands } from 'problems/graph/number-of-islands';

type NumberOfIslandsTestCase = [TestDescription, Grid<Binary>, number];

const NumberOfIslandsTestCases: NumberOfIslandsTestCase[] = [
  [
    'single island',
    [
      [1, 1, 1, 1, 0],
      [1, 1, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    1,
  ],
  [
    'multiple islands',
    [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1],
    ],
    3,
  ],
];

/**
 * @group problems
 * @group graph
 * @group number-of-islands
 */
describe.skip('numberOfIslands', () => {
  test.each(NumberOfIslandsTestCases)('%s', (_, grid, expected) => {
    expect(numberOfIslands(grid)).toEqual(expected);
  });
});
