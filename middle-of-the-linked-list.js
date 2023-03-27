// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// Solution #1 - Time(O(2n)), Space(O(1))
function middleNodeBrute(head) {
  let listLength = 0;
  let curr = head;
  while (curr !== null) {
    curr = curr.next;
    listLength++;
  }
  let stop =
    listLength % 2 == 0 ? listLength / 2 + 1 : Math.ceil(listLength / 2);

  i = 0;
  let middle = null;
  curr = head;
  while (i !== stop) {
    middle = curr;
    curr = curr.next;
    i++;
  }
  return middle;
}

// Solution #2 - Time(O(2n)), Space(O(1))
function middleNodeOptimal(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}
