/*
  data => actual data
  next => reference to next node
  prev => reference to previous node

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

  Refactor this file
*/

console.clear();
class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(head) {
    this.head = head;
  }

  //1. Convert an array to Linked List

  arrayToDoublyLinkedList(arr) {
    this.head = new Node(arr[0]);
    let previousNode = this.head;

    for (let i = 1; i < arr.length; i++) {
      let newNode = new Node(arr[i], null, previousNode);
      previousNode.next = newNode;
      previousNode = newNode;
    }

    return this.head;
  }

  /*
    5.1 Deletion of head of a Linked List 
     O(1) time Complexity 
  */

  deleteHead() {
    // return head for empty Linked List
    if (this.head === null) return this.head;

    let temp = this.head;
    this.head = this.head.next;
    // Linked List contains head only
    if (this.head) this.head.prev = null;
    temp = null;

    return this.head;
  }

  /*
    5.2 Deletion of tail of a Linked List 
     O(N) time Complexity 
  */

  deleteTail() {
    // Empty Linked List
    if (this.head === null) return this.head;

    // only Head Present
    if (this.head.next === null) {
      let temp = this.head;
      this.head = null;
      temp = null;
      return this.head;
    }

    // Find the second Last

    let secondLastNode = this.head;

    while (secondLastNode.next.next !== null) {
      secondLastNode = secondLastNode.next;
    }

    secondLastNode.next.prev = null;
    secondLastNode.next = null;
    return this.head;
  }

  /*
    5.3 Deletion of Kth Position Node of a Linked List 
     O(N) time Complexity 
  */

  deleteByPosition(position) {
    // empty Linked List
    if (this.head === null) return this.head;

    // if position = 1, delete head
    if (position === 1) {
      let temp = this.head;
      if (this.head.next) {
        this.head = this.head.next;
        this.prev = null;
      }
      temp = null;

      return this.head;
    }

    // Any Kth position
    let count = 1;
    let prevNode = this.head;
    let nodeToDelete;
    while (prevNode) {
      count++;
      if (count === position) {
        // Detached the node from The Linked List
        nodeToDelete = prevNode.next;
        nodeToDelete.next = null;
        nodeToDelete.prev = null;
        prevNode = nodeToDelete.next;
        nodeToDelete.next.prev = prevNode;
        break;
      }
      prevNode = prevNode.next;
    }
    // Delete the node
    nodeToDelete = null;
    return this.head;
  }

  /*
    5.4 Deletion q node by value Linked List 
     O(N) time Complexity
  */

  deleteByValue(value) {
    // empty Linked List
    if (this.head === null) return this.head;

    let prevNode = this.head;
    let nodeToDelete;
    while (prevNode) {
      if (prevNode.next.data === value) {
        // Detached the node from The Linked List
        nodeToDelete = prevNode.next;
        nodeToDelete.next = null;
        nodeToDelete.prev = null;
        prevNode = nodeToDelete.next;
        nodeToDelete.next.prev = prevNode;
        break;
      }
      prevNode = prevNode.next;
    }

    return this.head;
  }

  //6.1 Insertion of a node at head of the Linked List
  insertAtHead(value) {
    let newNode = new Node(value, null, this.head);

    // Non Empty Linked List
    if (this.head) this.head.prev = newNode;

    this.head = newNode;

    return newNode;
  }

  //6.2 Insertion of a node at tail of the Linked List
  insertAtTail(value) {
    // Empty Linked List
    if (this.head === null) {
      this.head = new Node(value);
      return this.head;
    }

    let tailNode = this.head;

    // Non Empty Linked List
    while (tailNode.next != null) {
      tailNode = tailNode.next;
    }

    let newNode = new Node(value, tailNode);
    tailNode.next = newNode;

    return newNode;
  }

  /*
      6.3 Insertion of a node in a Linked List at Kth position
      K = 1 to n+1
  */
  insertAtPosition(position, value) {
    // LinkedList is empty
    if (this.head === null) {
      if (k === 1) {
        this.head = new Node(value);
      }

      return this.head;
    }

    // if position == 1, insert at head
    if (position === 1) {
      let newNode = new Node(value, this.head);
      this.head.prev = newNode;
      this.head = newNode;
      return this.head;
    }

    /* 
       K(position) > 2
       Insert at tail 
       Insert at Kth 
    */
    let count = 1;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      if (count === position) {
        new Node(value, currentNode.next, currentNode);
        break;
      }

      currentNode = currentNode.next;
    }
    return this.head;
  }
}

dll = new DoublyLinkedList();

// console.log(dll.arrayToDoublyLinkedList([1, 2, 3]));
dll.arrayToDoublyLinkedList([1, 3, 4, 5]);

// console.log(dll.deleteHead());
// console.log(dll.deleteHead().next.next.prev);

console.log(dll.deleteTail());
