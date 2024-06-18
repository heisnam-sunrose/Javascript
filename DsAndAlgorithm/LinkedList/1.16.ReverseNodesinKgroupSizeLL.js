/* 
   Reverse Nodes in K Group Size of LinkedList
   TC => O(N)
   SC => O(1)
*/




const reverseLL = (head) => {
  let currentNode = head;
  let prevNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;

    currentNode = nextNode;
  }

  return prevNode;
};

const findKthNode = (head, K) => {
  let currentNode = head;

  for (let i = 0; i < K; i++) {
    currentNode = currentNode.next;
    if (currentNode === null) return;
  }

  return currentNode;
};

const reverseByGroupLL = (head, K) => {
  let temp = head;
  let kthNode;
  let nextNode;
  let prevNode;

  while (temp) {
    // Segregate LL int K subgroups
    kthNode = findKthNode(temp, K);
    if (kthNode === null) {
      /*
        original / sub LL nodes are less than K
        prevNode is null means => original LL has less than K nodes, 
        the whole reversal is also stopped
      */
      if (prevNode) prevNode.next = temp;
      break;
    }
    /*
      For reversal, KthNode = null, k nodes are grouped
      nextNode keeps track of the next node  / remembers the next node
    */
    nextNode = kthNode.next;
    kthNode.next = null;

    reverseLL(temp);
    // for the first K group, we need to update the head
    if (temp === head) {
      head = kthNode;
    } else {
      // connect each k group nodes / sub LL
      prevNode.next = kthNode;
    }
    prevNode = temp;
    temp = nextNode;
  }

  return head;
};
