import { makeBinaryTree } from 'data-structures/tree';
import { largestValuePerLevel } from 'problems/tree/largest-value-per-level';

/**
 * @group largestValuePerTreeLevel
 */
describe.skip('largestValuePerTreeLevel', () => {
  test('example 1', () => {
    const expected: number[] = [1, 3, 9];

    const tree = makeBinaryTree();

    const result = largestValuePerLevel(tree);

    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
