import { Maybe } from 'lib/types';

import { BinaryTreeNode } from './binary-tree-node';

export class BinaryTree {
  count: number;
  root: Maybe<BinaryTreeNode>;

  constructor(root: BinaryTreeNode) {
    this.root = root;
    this.count = 1;
  }

  traverse(callback: (node: BinaryTreeNode) => void) {
    // We'll define a walk function that we can call recursively on every node
    // in the tree.
    function walk(node: Maybe<BinaryTreeNode>) {
      if (!node) return;

      // First call the callback on the node.
      callback(node);
      // Then recursively call the walk function on all of its children.
      node?.children.forEach(walk);
    }

    // Now kick the traversal process off.
    walk(this.root);
  }

  add(value: Maybe<number>, parentId: number): number {
    const newId = this.count + 1;

    // Otherwise traverse the entire tree and find a node with a matching value
    // and add the new node to its children.
    this.traverse((node: BinaryTreeNode) => {
      if (node.id === parentId) {
        node.addChild(newId, value, parentId);
      }
    });

    this.count = newId;
    return newId;
  }
}
