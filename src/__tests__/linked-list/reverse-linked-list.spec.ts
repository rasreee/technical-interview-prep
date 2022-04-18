import { LinkedList } from 'data-structures/linked-list';
import { linkedListValues } from 'data-structures/linked-list/linked-list.helpers';
import { reverseLinkedList } from 'problems/linked-list/reverse-linked-list';

/**
 * @group problems
 * @group linked-list
 * @group reverse-linked-list
 */
describe('problems/reverse-linked-list', () => {
  it('should reverse the list of 5', () => {
    const data = [1, 2, 3, 4, 5];
    const expected = [5, 4, 3, 2, 1];

    const list = LinkedList.fromData(data);

    expect(linkedListValues(reverseLinkedList(list))).toEqual(expected);
  });
});
