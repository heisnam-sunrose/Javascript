// Find the starting point of the Loop/Cycle in LinkedList

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
  Floyd's Tortoise & Hare Algorithm

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
