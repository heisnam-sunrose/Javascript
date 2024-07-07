// Remove Nth Node from the end of the LinkedList

/* Naive solution
TC => O(N) + On(N - nth position)
Sc => O(1)
*/

const deleteNode = (head, N) => {
  // get LL length

  let currentNode = head;
  let count = 0;
  while (currentNode) {
    currentNode = currentNode.next;
    count++;
  }

  if (count === N) {
    // delete head

    let temp = head;
    head = head.next;
    temp.next = null;
    temp = null;

    return head;
  }

  // Previous node position, before the node to be deleted
  let prevNodeCount = count - N;

  // delete other node
  currentNode = head;
  while (currentNode) {
    prevNodeCount--;
    if (prevNodeCount === 0) break;
    currentNode = currentNode.next;
  }

  let deleteNode = currentNode.next;
  currentNode.next = deleteNode.next;
  deleteNode.next = null;
  deleteNode = null;

  return head;
};

/*
  Optimized Solution
  TC => O(n + (LEN - n))) => O(N)
  SC => O(1)
*/

const removeNode = (head, N) => {
  let fast = head;
  let slow = head;
  /* 
   1. Move fast by N steps 
   This will ensure when fast reaches the tail node,
   Slow will be stopped at previous node to delete. 
 */
  for (let i = 0; i < N; i++) fast = fast.next;

  // 2. N === length of the node
  if (fast === null) {
    temp = head;
    head = head.next;
    // delete head
    temp.next = null;
    temp = null;

    return head;
  }

  /*
    3. Move fast to the tail
    Now slow is pointing to the previous node to be deleted 
  */
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  let nodeToDelete = slow.Next;
  slow.next = nodeToDelete.next;

  // delete the Nth node
  nodeToDelete.next = null;
  nodeToDelete = null;

  return head;
};
