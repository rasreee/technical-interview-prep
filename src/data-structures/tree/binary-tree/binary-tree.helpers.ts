import { BinaryTree } from './binary-tree';
import { BinaryTreeNode } from './binary-tree-node';

export function makeBinaryTree(): BinaryTree {
  const root = new BinaryTreeNode(0, 1);
  const tree = new BinaryTree(root);

  const nodeLeft = tree.add(3, 0);
  const nodeRight = tree.add(2, 0);

  /* Left */
  tree.add(5, nodeLeft);
  tree.add(3, nodeLeft);

  /* Right */
  tree.add(null, nodeRight);
  tree.add(9, nodeRight);

  return tree;
}
