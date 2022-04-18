import { is } from 'lib/is';
import { isDict } from 'lib/object';
import { Nullable } from 'lib/types';

import { LinkedList } from './linked-list';
import { ListNode } from './list-node';

export const linkedListValues = (listOrHead: Nullable<LinkedList | ListNode>): number[] => {
  const result: number[] = [];

  if (!listOrHead) return result;

  let curr: Nullable<ListNode> = toListNode(listOrHead);
  while (curr) {
    result.push(curr.val);

    curr = curr.next;
  }

  return result;
};

export const isListNode = (o: any): o is ListNode => {
  return isDict(o) && is.number(o.val) && (is.null(o.next) || isListNode(o.next));
};

export const isLinkedList = (o: any): o is LinkedList => {
  return isDict(o) && isListNode(o.head);
};

export const toListNode = (listOrHead: LinkedList | ListNode): ListNode => {
  if (isLinkedList(listOrHead)) return listOrHead.head;

  return listOrHead;
};

export function listNodeFromData(data: number[]): ListNode | null {
  if (data.length === 0) return null;

  const head = new ListNode(data[0]);

  let curr = head;
  let index = 1;
  while (index < data.length) {
    const node = new ListNode(data[index]);
    curr.next = node;
    curr = node;
    index += 1;
  }

  return head;
}

export function makeListNode(data: number[], pos: number): ListNode | null {
  if (data.length === 0) {
    return null;
  }

  const head = new ListNode(data[0]);

  let curr: ListNode | null = head;
  let i = 1;

  while (i < data.length) {
    const node = new ListNode(data[i], null, i);

    curr.next = node;
    curr = curr.next;
    i += 1;
  }

  if (pos === -1) return head;

  const tail = curr;
  curr = head;
  i = 0;
  let other: ListNode | null = null;
  while (curr?.next && i < pos) {
    curr = curr.next;
    i += 1;
  }
  other = curr;
  tail.next = other;

  return head;
}
