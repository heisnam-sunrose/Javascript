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
  /*
    for adding any number to LL

    let sum = null;
    while (currentNode) {
    if (carry === 0) {
    return reverseLL(newHead);
    }
    sum = carry;
    currentNode.data = parseInt(sum % 10);
    carry = parseInt(sum / 10);
    currentNode = currentNode.next;
   }
  */

  while (currentNode) {
    currentNode.data = currentNode.data + carry;

    if (currentNode.dat < 10) {
      carry = 0;
      break;
    } else {
      currentNode.data = 0;
      carry = 1;
    }
  }

  if (carry) {
    currentNode.next = new Node(carry);
  }

  return reverseLL(newHead);
};

/*
   Using Recursion 
   Only Recursion has backtracking
*/

const helper = (node) => {
  if (node === null) {
    return 1;
  }

  let carry = helper(node.next);
  node.data += carry;

  if (node.data < 10) {
    return 0;
  } else {
    node.data = 0;
    return 1;
  }
};

const add1toLLByRecursion = (head) => {
  let carry = helper(head);
  if (carry === 1) return new Node(carry, head);
  return head;
};
