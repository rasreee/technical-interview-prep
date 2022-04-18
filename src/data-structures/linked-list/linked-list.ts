import { ListNode } from './list-node';

export class LinkedList {
  constructor(public readonly head: ListNode) {}

  static fromData(data: number[]): LinkedList {
    const head = new ListNode(data[0]);

    let curr = head;
    let index = 1;
    while (index < data.length) {
      const node = new ListNode(data[index]);
      curr.next = node;
      curr = node;
      index += 1;
    }

    return new LinkedList(head);
  }
}
