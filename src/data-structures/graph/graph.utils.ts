import invariant from 'lib/invariant';
import { is } from 'lib/is';
import { createBounds, distance, doesValueRespectBounds } from 'lib/math';
import { isDict, objectKeys } from 'lib/object';
import zipObject from 'lodash.zipobject';

import { Bounds2D, Delta, Grid, Point, POINT_VALUE_NAMES, PointObject, PointString, PointTuple, Polygon } from './graph.types';

/**
 * Grid
 */
export function gridValue<T>(grid: Grid<T>, point: Point): T {
  const { x, y } = toPointObject(point);

  return grid[y][x];
}

/**
 * Polygon
 */
export const createPolygon = (points: readonly Point[]): Polygon => {
  return [...points];
};

/**
 * Point
 */
export const createPoint = (x: number, y: number): PointObject => {
  return { x, y };
};

export const isPointObject = (o: any): o is PointObject => {
  if (!isDict(o)) return false;

  const keys = objectKeys(o);

  return keys.every(key => POINT_VALUE_NAMES.includes(key as any) && is.number(o[key]));
};

export const isPointString = (o: any): o is PointString => {
  if (!is.string(o)) return false;

  if (!['(', ',', ')'].every(value => o.includes(value))) return false;

  const values = o.replace('(', '').replace(')', '').split(',').map(parseFloat);

  return values.length === 2 && values.every(value => is.number(value));
};

export const isPointTuple2D = (o: any): o is PointTuple => {
  return is.array(o) && o.length === 2 && o.every(is.number);
};

export const toPointTuple2D = (point: Point): PointTuple => {
  if (isPointString(point)) {
    const values = point
      .replace('(', '')
      .replace(')', '')
      .split(',')
      .map(value => parseFloat(value));

    invariant(isPointTuple2D(values));

    return values;
  }

  if (isPointObject(point)) {
    return [point.x, point.y];
  }

  return point;
};

export const toPointObject = (point: Point): PointObject => {
  if (isPointObject(point)) return point;

  if (isPointString(point)) {
    const values = toPointTuple2D(point);

    return zipObject(POINT_VALUE_NAMES, values) as PointObject;
  }

  return zipObject(POINT_VALUE_NAMES, point) as PointObject;
};

export const toPointString = (point: Point): PointString => {
  const { x, y } = toPointObject(point);

  return `(${x},${y})`;
};

/**
 * Misc.
 */
export const doesPointRespectBounds = (point: Point, bounds2D: Bounds2D): boolean => {
  const pointObject = toPointObject(point);

  return POINT_VALUE_NAMES.every(key => doesValueRespectBounds(pointObject[key], bounds2D[key]));
};

export const isAdjacent = (pointA: Point, pointB: Point): boolean => {
  const { dx, dy } = getDelta(pointA, pointB);

  return (dx === 0 && dy === 1) || (dx === 1 && dy === 0);
};

export const getDelta = (pointA: Point, pointB: Point): Delta => {
  const pointObjectA = toPointObject(pointA);
  const pointObjectB = toPointObject(pointB);

  const dx = distance(pointObjectA.x, pointObjectB.x);
  const dy = distance(pointObjectA.y, pointObjectB.y);

  return { dx, dy };
};

export const getBounds2D = (points: Point[]): Bounds2D => {
  const xRange = createBounds();
  const yRange = createBounds();

  points.forEach(point => {
    const { x, y } = toPointObject(point);
    if (x < xRange.min) {
      xRange.min = x;
    }
    if (x > xRange.max) {
      xRange.max = x;
    }
    if (y < yRange.min) {
      yRange.min = y;
    }
    if (y > yRange.max) {
      yRange.max = y;
    }
  });

  return { x: xRange, y: yRange };
};
