// Delete the middle node of the LinkedList

/*
  Traditional Way 
  TC => O(N + N/2)
  SC => O(1)
*/

const deleteMiddleNode = (head) => {
  let currentNode = head;
  let count = 0;

  // LL length
  while (currentNode) {
    count++;
    currentNode = currentNode.next;
  }

  mid = parseInt(count / 2);

  // get the node previous of middle
  currentNode = head;

  while (currentNode) {
    mid--;
    if (mid === 0) {
      let middle = currentNode.next;
      currentNode.next = middle.next;
      middle = null;
      break;
    }

    currentNode = currentNode.next;
  }

  return head;
};

/*
 Floyd's Tortoise & Hare Algorithm  
 Ensure tortoise skips one step 
*/
const deleteMiddleNodeTH = (head) => {
  if (head == null || head.next === null) return null;
  let tortoise = head;
  // Ensure tortoise skips one step
  let hare = head.next.next;

  //  tortoise much reach the node before the middle node
  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  let middle = tortoise.next;
  tortoise.next = middle.next;
  middle = null;

  return head;
};
