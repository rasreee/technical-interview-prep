import { createPolygon } from 'data-structures/graph';
import { isPointInsidePolygon } from 'problems/graph/is-point-inside-polygon';

/**
 * @group problems
 * @group graph
 * @group polygon
 */
describe('isPointInsidePolygon', () => {
  test('basic example', () => {
    const polygon = createPolygon([
      [0, 0],
      [3, 0],
      [3, 3],
      [0, 3],
    ]);

    expect(isPointInsidePolygon([2.5, 0.25], polygon)).toBeTruthy();
    expect(isPointInsidePolygon([-1, -1], polygon)).toBeFalsy();
    expect(isPointInsidePolygon([0, 0], polygon)).toBeFalsy();
  });
});
