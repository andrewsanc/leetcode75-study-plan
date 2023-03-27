// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Solution #1 - Time(O(n + m)), Space(O(1))
// Time - Time complexity is N+M where N is # of nodes in l1 and M is # of nodes in l2.
// Space - Space complexity is constant(O(1)), since we are shifting pointers
function mergeTwoLists(l1, l2) {
  let dummy = new ListNode();
  let tail = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  if (l1 !== null) {
    tail.next = l1;
  } else if (l2 !== null) {
    tail.next = l2;
  }
  return dummy.next;
}
