/* 
  Detect a loop in a Linked List
  
  1. Using hashing
  2. Tortoise & Hare Algorithm 
*/

const makeLoop = (head, k) => {
  // traverse the linked list until loop
  // point not found
  let temp = head;
  let count = 1;
  while (count < k) {
    temp = temp.next;
    count++;
  }

  // backup the joint point
  let jointPoint = temp;

  // traverse remaining nodes
  while (temp) temp = temp.next;

  // joint the last node to k-th element
  temp.next = jointPoint;
  return head;
};

/*
  1. Using Hashing 

  TC -> O(N * 2 map set and get operations)
  SC -> O(N)
*/

const containsLoop = (head) => {
  let nodes = new Map();

  const currentNode = head;
  while (currentNode) {
    if (nodes.has(currentNode)) return true;
    nodes.set(currentNode, 1);
    currentNode = currentNode.next;
  }

  return false;
};

/* 
  Floyd's Tortoise & Hare Algorithm

  If the tortoise and hare collides, the LL has a loop 
  ===========================

  tortoise -> moves by 1 steps
  hare -> moves by 2 steps

  Hare will always catch up the tortoise.
  Hare will travel 2d nodes, Tortoise will travel d nodes.( This is where they collide )

  ===========================
  TC => O(N)
  SC => O(1) 

*/

const containsLoopTH = (head) => {
  let tortoise = head;
  let hare = head;
  /*
     hare => hare is at last node.next (even Linear LL)
     hare.next => hare is at the last( odd Linear LL)  
   */
  while (hare && hare.next) {
    // If tortoise and hare collides, loop is present
    if (hare === tortoise) {
      return true;
    }
    hare = hare.next.next;
    tortoise = tortoise.next;
  }
  // Linear LL
  return false;
};
