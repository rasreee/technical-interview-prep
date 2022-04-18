import { addItem } from 'lib/array';

import { Point } from './graph.types';
import { isAdjacent } from './graph.utils';

export class Graph {
  nodes: Point[] = [];

  constructor(nodes: Point[] = []) {
    this.nodes = nodes;
  }

  add(point: Point) {
    this.nodes = addItem(this.nodes, point);
  }

  clone(): Graph {
    return new Graph([...this.nodes]);
  }

  isConnectedTo(point: Point): boolean {
    return this.nodes.some(graphNode => isAdjacent(graphNode, point));
  }
}
