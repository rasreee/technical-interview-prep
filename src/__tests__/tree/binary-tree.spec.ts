import { makeBinaryTree } from 'data-structures/tree';

/**
 * @group data-structures
 * @group binary-tree
 */
describe.skip('binary-tree', () => {
  test('initializing with binary tree data', () => {
    const tree = makeBinaryTree();
    expect(tree.root?.value).toEqual(1);

    expect(tree.root?.getLeft()?.value).toEqual(3);
    expect(tree.root?.getLeft()?.getLeft()?.value).toEqual(5);
    expect(tree.root?.getLeft()?.getRight()?.value).toEqual(3);

    expect(tree.root?.getRight()?.value).toEqual(2);
    expect(tree.root?.getRight()?.getLeft()?.value).toEqual(null);
    expect(tree.root?.getRight()?.getRight()?.value).toEqual(9);
  });
});
