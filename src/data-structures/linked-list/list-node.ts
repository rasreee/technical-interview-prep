import { Nullable } from 'lib/types';

export class ListNode {
  constructor(public readonly val = 0, public next: Nullable<ListNode> = null, public readonly id = 0) {}
}

export class LNode {
  constructor(public readonly val: number, public next: LNode | null = null, public readonly id = 0) {}

  static init(node: ListNode, id = 0): LNode {
    const newNode = new LNode(node.val, null, id);

    if (node.next) {
      newNode.next = LNode.init(node.next, id + 1);
    }

    return newNode;
  }
}
