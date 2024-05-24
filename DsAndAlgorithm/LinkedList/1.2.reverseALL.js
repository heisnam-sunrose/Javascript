console.clear();
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const convertArrayToLL = (array) => {
  // create head
  let head = new Node(array[0]);
  let currentNode = head;
  let newNode;

  for (let i = 1; i < array.length; i++) {
    newNode = new Node(array[i]);
    currentNode.NEXT = newNode;
    currentNode = newNode;
  }
  return head;
};

const printLL = (head) => {
  let currentNode = head;
  while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
};

/* Reverse a DDL by reversing the data using stack 
  ------------------------------------------------
  TC -> O(2N)
  SC -> O(N)

*/
const reverseLLStack = () => {};

/* Reverse a DDL by reversing Link
  ------------------------------------------------
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

/* Reverse a DDL by recursion
  ------------------------------------------------
  TC -> O(N)
  SC -> O(N)
*/

const reverseLLRecursion = (head) => {
  if (head === null || head.next === null) {
    return head;
  }
  front.next = head;
  head.next = null;
  return front;
};
