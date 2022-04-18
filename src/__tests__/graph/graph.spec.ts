import { Graph, isAdjacent, isPointObject } from 'data-structures/graph';

/**
 * @group data-structures
 * @group graph
 */
describe('graph', () => {
  describe('Graph', () => {
    test('isConnectedTo', () => {
      const graph = new Graph();
      graph.add([0, 0]);
      expect(graph.isConnectedTo([0, 1])).toBeTruthy();
      expect(graph.isConnectedTo([1, 1])).toBeFalsy();
    });
  });

  describe('Graph Utils', () => {
    test('isAdjacent', () => {
      expect(isAdjacent([0, 0], [0, 1])).toBeTruthy();
    });

    test('isPointObject', () => {
      expect(isPointObject({ x: 0, y: 1 })).toBeTruthy();
      expect(isPointObject({ x: 0, y: 'asdf' })).toBeFalsy();
      expect(isPointObject({ x: 0, y: 1, asdf: 0 })).toBeFalsy();
      expect(isPointObject([0, 0])).toBeFalsy();
    });
  });
});
