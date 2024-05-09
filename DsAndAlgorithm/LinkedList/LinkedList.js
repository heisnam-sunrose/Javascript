/*
  data => actual data
  next => reference to next node

  Operations

  ==================================================

  1. Convert an array to Linked List
  2. Traversal in Linked List
  3. Length of the Linked List
  4. Search an element in a Linked List

*/
console.clear();

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node;
  }

  /* 
     1. Convert an array to Linked List
     O(N) time Complexity 

  */

  arrayToLinkedList(array) {
    // 1.First array element is created as the head of the Linked List.

    this.head = new Node(array[0]);
    let mover = this.head;

    /* 
       2.Loop through rest of the elements of the array.
          1. Create a new node. 
          2. Previous node.next = newNode (Create the link).
          3. Mover is set as the current node. 
    */

    for (let i = 1; i < array.length; i++) {
      let newNode = new Node(array[i]);
      mover.next = newNode;
      mover = newNode;
    }
    return this.head;
  }

  /*
     2. Search an element in a Linked List
     O(N) time Complexity 
  */

  traverse() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  /* 
    3. Length of the Linked List
    O(N) time Complexity 
  */

  length() {
    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      currentNode = currentNode.next;
      count++;
    }
    console.log(count);
    return count;
  }

  /* 
    3. Length of the Linked List
    O(N) time Complexity 
  */

  checkIfPresent(number) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data == number) return true;
      currentNode = currentNode.next;
    }

    return false;
  }
}

// Execution
let ll = new LinkedList();
ll.arrayToLinkedList([2, 5, 10]);
console.log(ll.head.data);
ll.traverse();
ll.length();
console.log(ll.checkIfPresent(5));
