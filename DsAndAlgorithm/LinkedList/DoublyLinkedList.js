/*
  data => actual data
  next => reference to next node
  prev => reference to previous node

  Doubly linked list is used in browsers

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
      4.Node (Not Value)
      
  6. Insertion of a node in a Linked List
      1.Head
      2.Before Last
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
    // create head
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
    The idea for deletion is remove the prev and next
    (OR) assign next and prev to null
      
    5.1 Deletion of head of a Linked List 
     O(1) time Complexity 
  */

  deleteHead() {
    // return head for empty Linked List
    if (this.head === null) return this.head;

    // only head exists
    if (this.head.next === null) {
      this.head = null;
      return this.head;
    }

    let temp = this.head;
    this.head = this.head.next;

    // detached the previous head form the Linked List
    this.head.prev = null;
    temp.next = null;
    // delete previous head
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
      this.head = null;
      return this.head;
    }

    // Find tail

    let tailNode = this.head;

    while (tailNode.next !== null) {
      tailNode = tailNode.next;
    }

    // detached the tail node from the Linked List
    tailNode.prev.next = null;
    tailNode.prev = null;

    // delete tail
    tailNode = null;

    return this.head;
  }

  /*
    5.3 Deletion of Kth Position Node of a Linked List 
     O(N) time Complexity 
     cases
  */

  deleteByPosition(position) {
    // empty Linked List
    if (this.head === null) return this.head;

    // if position = 1, delete head
    if (position === 1) {
      let temp = this.head;
      if (this.head.next) {
        this.head = this.head.next;

        // detached the node from the Linked List
        this.head.prev = null;
        temp.next = null;
      }
      temp = null;

      return this.head;
    }

    /* 
       Any arbitrary position
       Position == LinkedList last node, delete tail
       Position > LinkedList size no deletion
       
    */
    let count = 1;
    let prevNode = this.head;
    let nodeToDelete;
    let nextNode;
    while (prevNode) {
      count++;
      if (count === position) {
        nodeToDelete = prevNode.next;
        nextNode = prevNode.next.next;

        // Connect the previous and next nodes
        prevNode.next = nodeToDelete.next;

        // nextNode == = null means nodeToDelete is last Node
        if (nextNode) nodeToDelete.next.prev = prevNode;

        // Detached the node from The Linked List
        nodeToDelete.next = null;
        nodeToDelete.prev = null;

        // Delete the node
        nodeToDelete = null;

        break;
      }
      prevNode = prevNode.next;
    }

    return this.head;
  }

  // preferred
  deleteByPositionV2(position) {
    // empty Linked List
    if (this.head === null) return this.head;

    let count = 0;
    let KNode = this.head;
    while (KNode) {
      count++;
      if (count === position) break;
      KNode = KNode.next;
    }

    let prev = KNode.prev;
    let next = KNode.next;

    if (prev === null && front === null) {
      // only head present
    } else if (prev == null) {
      // delete head
      this.head = next;
    } else if (next === null) {
      // delete tail
      prev.next = null;
    } else {
      // delete intermediate node

      // Connect the previous and next nodes
      prev.next = next;
      next.prev = prev;

      // Detached the node from The Linked List
      KNode.next = null;
      KNode.prev = null;
    }
    // Delete node
    KNode = null;

    return this.head;
  }

  /*
    5.4 Deletion q node by value Linked List 
    The node to delete must never be the head of Linked List
     O(N) time Complexity
  */

  deleteNode(node) {
    // empty Linked List
    if (this.head === null) return this.head;

    let prevNode = node.prev;
    let nextNode = node.next;

    // tail of the Linked List
    if (nextNode === null) {
      prevNode.next = null;
    } else {
      // delete intermediate node

      // Connect the previous and next nodes
      prevNode.next = next;
      nextNode.prev = prev;
    }

    // Detached the node from The Linked List
    node.next = null;
    node.prev = null;

    // Delete node
    node = null;

    return this.node;
  }

  //6.1 Insertion of a node at head of the Linked List
  insertBeforeHead(value) {
    let newHead = new Node(value, this.head);

    // Non Empty Linked List
    if (this.head) this.head.prev = newHead;

    this.head = newHead;

    return this.head;
  }

  //6.2 Insertion of a node at tail of the Linked List
  insertBeforeTail(value) {
    // Empty Linked List
    if (this.head === null) {
      this.head = new Node(value);
      return this.head;
    }

    // Non Empty Linked List
    let tailNode = this.head;

    while (tailNode) {
      tailNode = tailNode.next;
    }
    let prevNode = tailNode.prev;
    let newNode = new Node(value, tailNode, tailNode.prev);

    // Connect the previous and next nodes
    tailNode.prev = newNode;
    // no prevNode means only head is present
    if (prevNode) prevNode.next = newNode;

    return this.head;
  }

  /*
      6.3 Insertion of a node in a Linked List before Kth position
      K = 1 to n
  */

  insertBeforeKthElement(position, value) {
    // LinkedList is empty
    if (this.head === null) {
      if (k === 1) {
        this.head = new Node(value);
      }

      return this.head;
    }

    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      count++;
      if (count === position) break;
      currentNode = currentNode.next;
    }
    let prevNode = currentNode.prev;

    let newNode = new Node(value, currentNode, prevNode);

    // Connect the previous and next nodes
    currentNode.prev = newNode;
    // prevNode is empty means currentNode is head
    if (prevNode) prevNode.next = newNode;

    return this.head;
  }

  /*
  6.4 Insert before given node in a Linked List
      node can never be head, as we don't want to alter the head of the Linked List
  */
  insertBeforeNode(node, value) {
    let prevNode = node.prev;

    let newNode = new Node(value, node, prevNode);

    // Connect the previous and next nodes
    node.prev = newNode;
    prevNode.next = newNode;

    return this.head;
  }
}

// Execution
dll = new DoublyLinkedList();

// console.log(dll.arrayToDoublyLinkedList([1, 2, 3]));
dll.arrayToDoublyLinkedList([1, 3, 4, 5]);

// console.log(dll.deleteHead());
// console.log(dll.deleteHead().next.next.prev);

console.log(dll.deleteTail());
