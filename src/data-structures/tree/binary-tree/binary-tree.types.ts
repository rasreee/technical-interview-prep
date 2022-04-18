import { Nullable } from 'lib/types';

import { BinaryTreeNode } from './binary-tree-node';

export type BinaryTreeChildren = [Nullable<BinaryTreeNode>, Nullable<BinaryTreeNode>];

export enum BinaryTreeSide {
  Left,
  Right,
}
