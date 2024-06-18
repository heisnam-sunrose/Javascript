// Reverse a DDL using links

console.clear();
class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

const arrayToDDL = (arr) => {
  // create head
  let head = new Node(arr[0]);
  let currentNode = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i], null, currentNode);
    currentNode.next = newNode;
    currentNode = newNode;
  }
  return head;
};

const print = (head) => {
  let currentNode = head;
  while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
};

const reverseDLL = (head) => {
  /*
       Empty DDL
       DDL with only head 
       */

  if (head === null || head.next === null) return head;

  let currentNode = head;
  let previousNode;

  while (currentNode) {
    previousNode = currentNode.prev;
    currentNode.back = currentNode.next;
    currentNode.next = previousNode;

    currentNode = currentNode.back;
  }
  return previousNode.back;
};

// Execution

let head = arrayToDDL([1, 2, 3, 4]);
console.log(head);
print(head);
console.log("+++++ After reversal ++++++++");
head = reverseDLL(head);
print(head);
console.log(head);
