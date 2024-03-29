/*

Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

Example

    For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
    solution(l, k) = [1, 2, 4, 5];
    For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
    solution(l, k) = [1, 2, 3, 4, 5, 6, 7].


    */

function solution(l, k) {
  // Base Case: When are we moving on to a next value?
  while (l && l.value === k) {
    l = l.next;
  }
  // Then set your pointer to iterate through the list.
  let curr = l;
  while (curr) {
    // How are we removing the value when it equals the target value?
    while (curr.next && curr.next.value === k) {
      curr.next = curr.next.next;
    }
    // What happens when this does not happen?
    curr = curr.next;
  }
  return l;
}
