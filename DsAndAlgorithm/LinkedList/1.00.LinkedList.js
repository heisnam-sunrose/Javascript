/*
  data => actual data
  next => reference to next node

  Operations

  ==================================================

  1. Convert an array to Linked List
  2. Traversal in Linked List
  3. Length of the Linked List
  4. Search an element in a Linked List
  5. Deletion of a node in a Linked List
      1.Head
      2.Last
      3.Position
      4.Value
      
  6. Insertion of a node in a Linked List
      1.Head
      2.Last
      3.Position
      4.Before a given Value

*/
console.clear();

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/* 
  1. Convert an array to Linked List
  TC => O(N) 
*/
const arrayToLinkedList = (array) => {
  // 1.First array element is created as the head of the Linked List.

  let head = new Node(array[0]);
  let mover = head;

  /* 
    2.Loop through rest of the elements of the array.
      1. Create a new node. 
      2. Previous node.next = newNode (Create the link).
      3. Mover is set as the current node. 
  */

  for (let i = 1; i < array.length; i++) {
    mover.next = new Node(array[i]);
    mover = mover.next;
  }
  return head;
};

/*
  2. Traverse the Linked List
  TC => O(N)
*/
const traverse = (head) => {
  let currentNode = head;

  while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
};

/* 
  3. Length of the Linked List
  TC => O(N)  
*/
const length = () => {
  let currentNode = head;
  let count = 0;

  while (currentNode) {
    currentNode = currentNode.next;
    count++;
  }
  console.log(count);
  return count;
};

/* 
  4. Search an element in a Linked List
  TC => O(N)
*/
const checkIfPresent = (data) => {
  let currentNode = head;

  while (currentNode) {
    if (currentNode.data == data) return true;
    currentNode = currentNode.next;
  }

  return false;
};

/*
  5.1 Deletion of head of a 
  TC => O(1) 
*/
const deleteHead = (head) => {
  // return null if LL is empty
  if (!head) return head;

  let temp = head;
  head = head.next;

  // detached previous head from the LL
  temp.next = null;
  // free head memory / delete head
  temp = null;

  return head;
};

/*
  5.2 Deletion of tail of a LL
  TC =>  O(N)
*/
const deleteTail = () => {
  // return null if linked list is empty
  if (head === null) return head;

  // if only head is present
  if (head.next === null) {
    head = null;
    return head;
  }

  /*
    Contains more than head 
    Find second last element assigned next to null
  */
  let secondLastNode = this.head;

  while (secondLastNode.next.next != null) {
    secondLastNode = secondLastNode.next;
  }
  // delete tail node
  secondLastNode.next.next = null;

  // Do we need this????
  secondLastNode.next = null;

  return this.head;
};

/*
  5.3 Deletion of Kth position Node of a Linked List 
  TC =>  O(N)
*/
const deleteByPosition = (head, position) => {
  // Linked List was empty
  if (this.head === null || position == 0) return head;

  // Position == 1, delete head
  if (position == 1) {
    let temp = head;
    head = head.next;
    temp = null;
    return head;
  }

  /* 
    Any arbitrary position
    Position == LL last node, delete tail
    Position > LL size no deletion
       
  */
  let count = 1;
  let currentNode = this.head;
  let prevNode;
  while (currentNode) {
    count++;
    if (count === position) {
      prevNode.next = prevNode.next.next;
      currentNode = null;
      break;
    }
    prevNode = currentNode;
    currentNode = currentNode.next;
  }

  return this.head;
};

/*
  5.4 Deletion q node by value Linked List 
  TC =>  O(N)
*/
const deleteByValue = (value) => {
  let currentNode = this.head;
  let prevNode;
  while (currentNode) {
    if (currentNode.data === value) {
      prevNode.next = prevNode.next.next;
      currentNode = null;
      break;
    }
    prevNode = currentNode;
    currentNode = currentNode.next;
  }

  return this.head;
};

/*
  6.1 Insertion of a node at head of LL
  TC => O(1)
*/
const insertAtHead = (head, value) => {
  return new Node(value, head);
};

/*
  6.2 Insertion of a node at tail of the LL
  TC => O(N)
*/
const insertAtTail = (head, value) => {
  let newNode = new Node(value);
  let currentNode = head;

  // Empty LL
  if (currentNode === null) return newNode;

  // traverse till last node
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
  return head;
};

/*
  6.3 Insertion of a node in LL at Kth position
  K = 1 to n+1
  TC => O(N)
*/
const insertAtPosition = (head, position, value) => {
  // LL is empty
  if (head === null) {
    if (position === 1) head = new Node(value);
    return head;
  }

  // If position == 1, insert at head
  if (position === 1) return new Node(value, head);

  /* 
    K(position) > 2
    Insert at tail 
    Insert at Kth 
  */
  let count = 1;
  let currentNode = head;
  while (currentNode) {
    count++;
    if (count === position) {
      currentNode.next = new Node(value, currentNode.next);
      break;
    }
    currentNode = currentNode.next;
  }

  return head;
};

/*
 6.4 Insertion of a node in LL before a given Value
 TC => O(N)
*/
const insertBeforeValue = (head, element, value) => {
  // LinkedList is empty
  if (head === null) return head;

  // if position == 1, insert at head
  if (head.data === value) return new Node(value, head);

  /* 
    K(position) > 2
    Insert at tail 
    Insert at Kth 
  */
  let currentNode = head;
  while (currentNode) {
    if (currentNode.next.data === value) {
      currentNode.next = new Node(value, currentNode.next);
      break;
    }
    currentNode = currentNode.next;
  }
  return head;
};
