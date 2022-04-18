import { shortestTransformationSequence } from 'problems/sequence/shortest-transformation-sequence';

const fixtures: Array<[string, string, string[], ReturnType<typeof shortestTransformationSequence>]> = [
  ['dog', 'cat', ['dot', 'dop', 'dat', 'cat'], ['dog', 'dot', 'dat', 'cat']],
  ['dog', 'cat', ['dot', 'tod', 'dat', 'dar'], null],
];

/**
 * @group problems
 * @group shortest-transformation-sequence
 */
describe('shortest-transformation-sequence', () => {
  test.each(fixtures)('start = %s, end = %s, dictionary = %s', (start, end, dictionary, expected) => {
    expect(shortestTransformationSequence(start, end, dictionary)).toEqual(expected);
  });
});
