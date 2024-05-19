console.clear();
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const convertArrayToLL = (array) => {
  // create head node
  let head = new Node(array[0]);
  let currentNode = head;

  let newNode;

  for (let i = 1; i < array.length; i++) {
    newNode = new Node(array[i]);
    currentNode.next = newNode;
    currentNode = currentNode.next;
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

/*
   Find the middle node
   Naive Solution
   O(2N) time complexity
   O(N) space complexity
   -------------------------------------------- 
   Naive Implementation
   Middle Node = (Length/ 2) + 1
   
   Length is even,
   We have 2 middle nodes m1 nad m2, 
   We need to return m2 
*/

const findMiddleNode = (head) => {
  // empty LL
  if (head === null) return -1;

  // length of LL
  let count = 0;
  let currentNode = head;

  while (currentNode) {
    count++;
    currentNode = currentNode.next;
  }
  // find middle node index
  middle = parseInt(count / 2);

  let middleNode = head;

  for (let i = 0; i < middle; i++) {
    middleNode = middleNode.next;
  }

  return middleNode;
};

/*
 Optimized Solution
 Find the middle node
  O(N/2) time complexity
  O(1) space complexity
 ---------------------------------------

 slow pointer  => moves by 1 step
 fast pointer  => moves by 2 step 
 In even LL, fast pointer reaches last 
 In odd LL, fast pointer never reaches last
*/

const findMiddleNodeOp = (head) => {
  let slowPointer = head;
  let fastPointer = head;

  /*
  fastPointer.next === null, 
  fastPointer is the tail.
  The LL has even nodes

  ============================

  fastPointer === null, 
  fastPointer is the tail.next
  The LL has odd nodes
  */

  while (fastPointer.next !== null && fastPointer !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
};

head = convertArrayToLL([1, 2, 3, 4, 5]);
console.log(head);

printLL(head);

console.log("Naive SOlution =>", findMiddleNode(head));

console.log("Optimized => ", findMiddleNodeOp(head));
