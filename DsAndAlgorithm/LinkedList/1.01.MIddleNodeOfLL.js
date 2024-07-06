// Find the middle node of the LL
/*
   Find the middle node
   Naive Solution
   O(2N) time complexity
   O(1) space complexity
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
 Floyd's Tortoise & Hare Algorithm

 Find the middle node
  O(N/2) time complexity
  O(1) space complexity
 ---------------------------------------

 tortoise pointer  => moves by 1 step
 hare pointer  => moves by 2 step 

 hare travels -> x distance
 tortoise travels => x/2 distance

 In even LL, hare crosses tail and reaches tail.next( null )
 In odd LL, hare reaches tail
*/

const findMiddleNodeOp = (head) => {
  let tortoise = head;
  let hare = head;

  /*
  LL has odd nodes
  if hare.next === null, hare is the tail.

  LL has even nodes
  if hare === null, hare is the tail
  */

  while (hare.next && hare) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  return tortoise;
};
