import { Bounds } from 'lib/math';

export type Grid<T> = T[][];

export type PointString = `(${string},${string})`;

export type PointTuple = [number, number];

export const POINT_VALUE_NAMES = ['x', 'y'] as const;

export type PointObject = Record<typeof POINT_VALUE_NAMES[number], number>;

export type Point = PointTuple | PointObject | PointString;

export type Polygon = Point[];

export type Delta = {
  dx: number;
  dy: number;
};

export type Bounds2D = {
  x: Bounds;
  y: Bounds;
};
