console.clear();

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

const arrayToLL = (array) => {
  // create head
  let head = new Node(array[0]);
  let currentNode = head;
  let newHead;

  for (let i = 1; i < array.length; i++) {
    newNode = new Node(array[i]);
    currentNode.next = newNode;
    currentNode = newNode;
  }

  return head;
};

let printLL = (head) => {
  let currentNode = head;

  while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
};

/*
  Hashing Technique
  TC ->  O(N * hashing set and get) 
  SC -> O(N) (size of node map)
*/

const startNode = (head) => {
  let currentNode = head;
  const nodes = new Map();

  while (currentNode) {
    // If the current node already exists
    if (nodes.has(currentNode)) return currentNode;

    nodes.set(currentNode, currentNode.data);
    currentNode = currentNode.next;
  }

  return null;
};

/*
  Tortoise and Hare algorithm

  Steps 
  -----------------------------------

  1.Detect the loop 
  2.Find the starting point
  ===================================

  Intuition 
*/

const startNodeTH = (head) => {
  let tortoise = head;
  let hare = head;

  // Detect the loop
  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;

    // Loop is present
    if (tortoise === hare) {
      // Find the starting point
      tortoise = head;

      while (tortoise !== hare) {
        tortoise = tortoise.next;
        hare = hare.next;
      }

      return tortoise;
    }
  }

  return null;
};
