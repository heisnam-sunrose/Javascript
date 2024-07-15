/*
Add 1 to a number represented by LinkedList

Steps (Naive Approach)
======================================
Reverse the LL 
Add 1 to LL
sum % 10 -> data
sum / 10 => carry
Reverse the LL 

======================================

TC => O(3N)
Sc => O(1)
*/

const reverseLL = (head) => {
  let currentNode = head;
  let prev = null;
  let next = null;

  while (currentNode) {
    next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }

  return prev;
};

const add1toLL = (head) => {
  let newHead = reverseLL(head);

  let currentNode = newHead;
  let carry = 1;

  while (currentNode) {
    currentNode.data = currentNode.data + carry;

    if (currentNode.data < 10) {
      carry = 0;
      break;
    } else {
      currentNode.data = 0;
      carry = 1;
    }

    currentNode = currentNode.next;
  }

  if (carry) currentNode.next = new Node(carry);

  return reverseLL(newHead);
};

// Add any number to LL
const addToLL = (head, N) => {
  let newHead = reverseLL(head);

  let currentNode = newHead;
  let carry = N;

  while (currentNode) {
    sum = currentNode.data + carry;
    currentNode.data = parseInt(sum % 10);
    carry = parseInt(sum / 10);

    if (carry === 0) break;
    currentNode = currentNode.next;
  }

  if (carry > 0) currentNode.next = new Node(carry);

  return reverseLL(newHead);
};

/* 
  Optimal Solution
  ==============================
  Using Recursion 
  Only Recursion has backtracking
  TC => O(N)
  Sc => O(N)

*/

const getCarry = (node) => {
  if (node === null) {
    return 1;
  }

  let carry = getCarry(node.next);
  node.data += carry;

  if (node.data < 10) {
    return 0;
  } else {
    node.data = 0;
    return 1;
  }

  /*
    TO Add any No to LL
    let carry = this.getCarry(node.next);
    let sum = node.data + carry;
    node.data = sum % 10; 
    carry = parseInt(sum /10 );
    return carry;
  */
};

const add1toLLByRecursion = (head) => {
  let carry = getCarry(head);
  if (carry === 1) return new Node(carry, head);
  return head;
};
