// Check if LL is palindrome

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

/*                           
   1. Using Stack 
   =================================

   Move all the nodes data to the stack 
   Pop each data out of the stack and compare it with LL node 
   ================================== 
   TC -> O(2N)
   SC -> O(N) 
*/

/*
  2. Optimized Solution 

  Steps 
  ===================  

  1. Split the LL to left and right sub LL using Tortoise & Hare algorithm 
  2. Reverse The right LL (using the Link reversal) 
  3. Compare left and right sub LLs
  4. Reverse the right LL   

  ========================

  TC  => O(2N) // 4 * O(N/2)
  SC => O(N)

*/

const reverseLL = (head) => {
  let currentNode = head;
  let prev = null;
  let front = null;

  while (currentNode) {
    front = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = front;
  }

  return prev;
};

const isPalindrome = (head) => {
  if (head === null || head.next === null) return true;

  let hare = head;
  let tortoise = head;

  while (hare.next && hare.next.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  let newHead = reverseLL(tortoise.next);
  let first = head;
  let second = newHead;

  while (second) {
    if (first.data != second.data) {
      reverseLL(newHead);
      return false;
    }
    first = first.next;
    second = second.next;
  }

  reverseLL(newHead);
  return true;

  /*

  This one works in leet code
  
  if (head === null || head.next === null) return true;

  let hare = head;
  let tortoise = head;

  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  let newHead = reverseLL(tortoise);
  let first = head;
  let second = newHead;

  while (second) {
    if (first.val !== second.val) {
      reverseLL(newHead);
      return false;
    }
    first = first.next;
    second = second.next;
  }

  reverseLL(newHead);
return true; 

*/
};

let head = convertArrayToLL([1, 2, 4]);

console.log(isPalindrome(head));
