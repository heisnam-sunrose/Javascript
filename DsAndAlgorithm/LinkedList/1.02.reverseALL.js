/* 1. Reverse a LL by reversing the data using stack 
  ------------------------------------------------
  TC -> O(2N)
  SC -> O(N)
*/

const reverseLLStack = () => {
  // move the LLnodes data to stack
  // pop stacks data out and store them to the same LL
};

/* 2. Reverse a LL by reversing Link
  --------------------------------
  TC -> O(N)
  SC -> O(1)
*/

const reverseLLLinkReversal = (head) => {
  let prev = null;
  let currentNode = head;
  let front;

  while (currentNode) {
    front = currentNode.next;
    currentNode.next = previous;
    prev = currentNode;
    currentNode = front;
  }
  return prev;
};

/* 3. Reverse a DDL by recursion
  ------------------------------------------------
  TC -> O(N)
  SC -> O(N)
*/

const reverseLLRecursion = (head) => {
  // base condition
  if (head === null || head.next === null) {
    return head;
  }

  let newHead = reverseLLRecursion(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;

  return newHead;
};
