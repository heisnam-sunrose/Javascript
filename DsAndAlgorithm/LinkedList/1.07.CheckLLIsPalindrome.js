// Check if LL is palindrome

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
  // 1. Split the LL at middle into left & right sub arrays
  let hare = head;
  let tortoise = head;

  while (hare.next && hare.next.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  let left = head;
  // Reverse the right sub array
  let newHead = reverseLL(tortoise.next);
  let right = newHead;

  // 3. Palindrome check
  while (right) {
    if (left.val !== right.val) {
      reverseLL(right);
      return false;
    }
    right = right.next;
    left = left.next;
  }

  reverseLL(right);
  return true;
};
