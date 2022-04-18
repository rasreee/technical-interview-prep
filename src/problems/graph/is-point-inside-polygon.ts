import { doesPointRespectBounds, getBounds2D, Point, Polygon, toPointString } from 'data-structures/graph';
import { arrayToString } from 'lib/array';
import { logger } from 'lib/logger';

/**
 * ----------------------------------------------------------------------------------
 *
 * * [DCP 796] Is Point Inside Polygon
 *
 *   This problem was asked by Nvidia.
 *
 * ----------------------------------------------------------------------------------
 *
 * You are given a list of N points (x1, y1), (x2, y2), ..., (xN, yN)
 * representing a polygon. You can assume these points are given in order; that
 * is, you can construct the polygon by connecting point 1 to point 2, point 2
 * to point 3, and so on, finally looping around to connect point N to point 1.
 *
 * Determine if a new point p lies inside this polygon. (If p is on the boundary
 * of the polygon, you should return False).
 *
 */
export const isPointInsidePolygon = (point: Point, polygon: Polygon): boolean => {
  logger.info(`point = ${toPointString(point)}`, '\n\n', `polygon = ${arrayToString(polygon)}`);

  const bounds = getBounds2D(polygon);

  return doesPointRespectBounds(point, bounds);
};
