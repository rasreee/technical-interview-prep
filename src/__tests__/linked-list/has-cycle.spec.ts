import { makeListNode } from 'data-structures/linked-list';
import { TestDescription } from 'lib/testing';
import { hasCycle } from 'problems/linked-list/has-cycle';

type HasCycleTestCase = [TestDescription, number[], number, boolean];

const HasCycleTestCases: HasCycleTestCase[] = [
  ['has cycle, tail connects to the 1st node (0-indexed)', [3, 2, 0, -4], 1, true],
  // ['has cycle, tail connects to the 0th node', [1, 2], 0, true],
  // ['no cycle', [1], -1, false],
  // ['empty list', [], -1, false],
  // ['no cycle', [1, 2], -1, false],
  // ['', [-21, 10, 17, 8, 4, 26, 5, 35, 33, -7, -16, 27, -12, 6, 29, -12, 5, 9, 20, 14, 14, 2, 13, -24, 21, 23, -21, 5], -1, false],
];

/**
 * @group problems
 * @group linked-list
 * @group has-cycle
 */
describe('hasCycle', () => {
  test.each(HasCycleTestCases)(`%s:\n\n\t head = %s, pos = %d`, (_, data, pos, expected) => {
    const head = makeListNode(data, pos);

    expect(hasCycle(head)).toEqual(expected);
  });
});
