import { Graph } from 'data-structures/graph';
import { createPoint, Grid, gridValue, toPointString } from 'data-structures/graph';
import { Binary } from 'lib/types';

/**
 * [Problem 200] Number of Islands
 *
 * Given an m x n 2D binary grid which represents a map of 1s (land) and
 * 0s (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are all
 * surrounded by water.
 *
 *
 * Constraints:
 *  - m == grid.length
 *  - n == grid[i].length
 *  - 1 <= m, n <= 300
 *  - grid[i][j] is 0 (water) or 1 (land)
 *
 * @param grid - 2D binary grid indicating existence of land or water at each coordinate
 */
export const numberOfIslands = (grid: Grid<Binary>): number => {
  const isWater = (value: Binary): boolean => {
    return value === 0;
  };

  const visited = new Set<string>([]);
  const islandsVisited: Graph[] = [];
  let currentIsland: Graph = new Graph();

  const height = grid.length;
  const width = grid[0].length;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const node = createPoint(x, y);

      visited.add(toPointString(node));

      const value = gridValue(grid, node);

      if (isWater(value) && currentIsland.nodes.length > 0) {
        islandsVisited.push(currentIsland.clone());
        currentIsland = new Graph();
      }

      if (currentIsland.isConnectedTo(node)) {
        currentIsland.add(node);
      } else {
        currentIsland = new Graph([node]);
      }
    }
  }

  return islandsVisited.length;
};
