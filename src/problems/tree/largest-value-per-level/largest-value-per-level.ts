import { BinaryTree } from 'data-structures/tree';

/**
 * [Problem 515] Find Largest Value in Each BinaryTree Row
 *
 * Given the rootNode of a binary tree, return an array of the largest value in each row of the tree (0-indexed).
 *
 */
export const largestValuePerLevel = (tree: BinaryTree): number[] => {
  const root = tree.root;

  // If the root is null, the tree is empty so we return an empty array.
  if (!root) return [];

  const values: number[] = [];

  return values;
};
