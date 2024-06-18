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
     2. Traverse the Linked List
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
    4. Search an element in a Linked List
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

  /*
    5.1 Deletion of head of a Linked List 
     O(1) time Complexity 
  */

  deleteHead() {
    // return null if linked list is empty
    if (!this.head) return this.head;

    let temp = this.head;
    this.head = this.head.next;

    // detached previous head form the Linked List
    temp.next = null;
    // free head memory / delete head
    temp = null;

    return this.head;
  }

  /*
    5.2 Deletion of tail of a Linked List 
     O(N) time Complexity 
  */

  deleteTail() {
    // return null if linked list is empty
    if (this.head === null) return this.head;

    // if only head is present
    if (this.head.next === null) {
      this.head = null;
      return this.head;
    }

    /*
      Contains more than head 
      find second last element assigned next to null
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
  }

  /*
    5.3 Deletion of Kth position Node of a Linked List 
     O(N) time Complexity 
  */

  deleteByPosition(position) {
    // Linked List was empty

    if (this.head === null || position == 0) return this.head;

    // Position == 1, delete head

    if (position == 1) {
      let temp = this.head;
      this.head = this.head.next;
      temp = null;
      return this.head;
    }

    /* 
       Any arbitrary position
       Position == LinkedList last node, delete tail
       Position > LinkedList size no deletion
       
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
  }

  /*
    5.4 Deletion q node by value Linked List 
     O(N) time Complexity 
  */

  deleteByValue(value) {
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
  }
  /*
      6.1 Insertion of a node at head of the Linked List
  */

  insertAtHead(value) {
    let newNode = new Node(value, this.head);
    this.head = newNode;

    return this.head;
  }

  /*
      6.2 Insertion of a node at tail of the Linked List
  */

  insertAtTail(value) {
    let newNode = new Node(value);
    let currentNode = this.head;

    // Empty Linked List
    if (currentNode === null) {
      this.head = newNode;
      return this.head;
    }

    // traverse till last node
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return this.head;
  }

  /*
      6.3 Insertion of a node in a Linked List at Kth position
      K = 1 to n+1
  */

  insertAtPosition(position, value) {
    let newNode = new Node(value);

    // LinkedList is empty
    if (this.head === null) {
      if (k === 1) {
        this.head = newNode;
      }

      return this.head;
    }

    // if position == 1, insert at head
    if (position === 1) {
      newNode.next = this.head;
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
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next;
    }
    return this.head;
  }

  insertBeforeValue(element, value) {
    // LinkedList is empty
    if (this.head === null) return this.head;

    let newNode = new Node(value);
    // if position == 1, insert at head
    if (this.head.data === value) {
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
    }

    /* 
       K(position) > 2
       Insert at tail 
       Insert at Kth 
    */
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next.data === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next;
    }
    return this.head;
  }
}

// Execution
let ll = new LinkedList();
ll.arrayToLinkedList([2, 5]);
console.log("------------------");
console.log(ll.head.data);
ll.traverse();
ll.length();
console.log("------------------");
console.log(ll.checkIfPresent(5));
console.log("------------------");
ll.deleteHead();
ll.deleteTail();
ll.traverse();
ll.deleteByPosition(1);
ll.deleteByValue(9);
ll.insertAtHead(535);
ll.insertAtTail(535111);
ll.insertAtPosition(4, 23);
ll.traverse();
