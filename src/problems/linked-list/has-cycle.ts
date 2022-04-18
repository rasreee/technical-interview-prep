/**
 * ----------------------------------------------------------------------------------
 *
 * * [141] Linked List Cycle
 *
 * ----------------------------------------------------------------------------------
 *
 * Given head, the head of a linked list, determine if the linked list has a
 * cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can
 * be reached again by continuously following the next pointer. Internally, pos
 * is used to denote the index of the node that tail's next pointer is connected
 * to. Note that pos is not passed as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * ----------------------------------------------------------------------------------
 *
 * Constraints:
 *   1) The number of the nodes in the list is in the range [0, 10^4].
 *   2) -10^5 <= Node.val <= 10^5
 *   3) pos is -1 or a valid index in the linked-list.
 *
 *
 */

import { ListNode, LNode } from 'data-structures/linked-list';

export function hasCycle(head: ListNode | null): boolean {
  if (head === null) return false;

  let pos = -1;
  const seen = new Set<number>([]);

  let curr = LNode.init(head);
  while (curr?.next) {
    if (seen.has(curr.id)) {
      pos = curr.id;
      break;
    }

    seen.add(curr.id);
    curr = curr.next;
  }

  return pos >= 0;
}
