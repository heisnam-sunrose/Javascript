// Get the length of the Loop

/* Hashing Technique

  TC ->  O(N * hashing set and get) 
  SC -> O(N) (size of node map)
*/

const lengthH = (head) => {
  let currentNode = head;
  let count = 1;
  let nodes = new Map();

  while (currentNode) {
    if (nodes.has(currentNode)) {
      return count - nodes.get(currentNode);
    }
    nodes.set(currentNode, count);
    currentNode = currentNode.next;
    count++;
  }

  return 0;
};

/*
  Tortoise & Hare Algorithms  
*/

const lengthTH = (head) => {
  let tortoise = head;
  let hare = head;

  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    // detect the loop
    if (tortoise === hare) {
      // count the loop
      let count = 1;
      hare = hare.next;
      while (hare !== tortoise) {
        hare = hare.next;
        count++;
      }

      return count;
    }
  }

  return 0;
};
