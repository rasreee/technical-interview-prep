import { assertValidArrayIndex } from 'lib/array';
import { isEven } from 'lib/math';
import { Maybe } from 'lib/types';

import { BinaryTreeChildren, BinaryTreeSide } from './binary-tree.types';

export class BinaryTreeNode {
  parentId: number;

  id: number;
  value: Maybe<number>;
  children: BinaryTreeChildren;

  constructor(id: number, value: Maybe<number>, parentId = -1) {
    this.parentId = parentId;
    this.id = id;
    this.value = value;
    this.children = [null, null];
  }

  getChild(index: number) {
    assertValidArrayIndex(this.children, index);
    return this.children[index];
  }

  addChild(id: number, value: Maybe<number>, parentId: number) {
    const node = new BinaryTreeNode(id, value, parentId);
    const index = isEven(id) ? BinaryTreeSide.Left : BinaryTreeSide.Left;

    assertValidArrayIndex(this.children, index);
    this.children[index] = node;
  }

  getLeft(): BinaryTreeChildren[number] {
    return this.getChild(BinaryTreeSide.Left);
  }

  getRight(): BinaryTreeChildren[number] {
    return this.getChild(BinaryTreeSide.Right);
  }
}
