import { LinkedList, ListNode } from 'data-structures/linked-list';
import { Nullable } from 'lib/types';

export function reverseLinkedList(list: LinkedList): Nullable<ListNode> {
  let curr: Nullable<ListNode> = list.head;
  let prev: Nullable<ListNode> = null;
  let next: Nullable<ListNode> = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
