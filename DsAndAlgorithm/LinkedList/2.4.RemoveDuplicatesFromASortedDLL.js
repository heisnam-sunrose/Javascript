/*
  Remove duplicates from a sorted Doubly Linked List.
  Sorted => the duplicates are in contiguous locations.

  TC => O(N)
  SC => O(1)
*/

const removeDuplicates = (head) => {
  let currentNode = head;
  let nextNode;

  while (currentNode) {
    nextNode = currentNode.next;

    while (nextNode && nextNode.data === currentNode.data) {
      let temp = nextNode;
      nextNode = nextNode.next;

      // delete duplicates
      temp.next = null;
      temp.prev = null;
      temp = null;
    }

    // connect current node to next node
    currentNode.next = nextNode;
    if (nextNode) nextNode.prev = currentNode;

    currentNode = nextNode;
  }

  return head;
};
