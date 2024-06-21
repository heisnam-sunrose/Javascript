/*
   Clone a LinkedList with Next and Random Pointers
   A linked list of length n is given such that each, 
   node contains an additional random pointer, 
   which could point to any node in the list, or null.
*/

/*
  Naive implementation
  TC => O(2N)
  Sc => O(N) + O(N) 
*/

const cloneLLN = (head) => {
  let currentNode = head;

  let copyNodes = new Map();

  while (currentNode) {
    copyNodes.set(currentNode, new Node(currentNode.data));
    currentNode = currentNode.next;
  }

  let temp;
  while (currentNode) {
    temp = copyNodes.get(currentNode);
    temp.random = copyNodes.get(currentNode.random);
    currentNode = currentNode.next;
  }

  return copyNodes.get(head);
};

/* 
  Preferred Solution
  ============================================== 
  1. Insert the copy nodes in between
  2. Add the random pointers on copy nodes
  3. Segregate copy nodes and original copy nodes

  TC => O(3N)
  SC => O(N)

*/

const cloneLL = (head) => {
  let currentNode = head;
  let copyNode;

  //1. Insert the copy nodes in between
  while (currentNode) {
    copyNode = new Node(currentNode.data, currentNode.next);
    currentNode.next = copyNode;
    currentNode = copyNode.next;
  }

  //2. Add the random pointers on copy nodes
  currentNode = head;
  while (currentNode) {
    copyNode = currentNode.next;
    if (currentNode.random) copyNode.random = currentNode.random.next;
    currentNode = copyNode.next;
  }

  //3. Extract copy nodes from original LL
  currentNode = head;
  let dummyNode = new Node(-1);
  let mover = dummyNode;

  while (currentNode) {
    mover.next = currentNode.next;
    mover = mover.next;
    currentNode.next = mover.next;
    currentNode = currentNode.next;
  }

  return dummyNode.next;
};
