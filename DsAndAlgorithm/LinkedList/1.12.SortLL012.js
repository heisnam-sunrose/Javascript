// Sort a LinkedList of 0's, 1's and 2's

/*
   Brute Force Method
   TC => O(2N)
   SC => O(1)
*/

const sortLL012 = (head) => {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  let currentNode = head;
  while (currentNode) {
    if (currentNode.data === 0) count0++;
    else if (currentNode.data === 1) count1++;
    else count2++;
    currentNode = currentNode.next;
  }

  currentNode = head;
  while (currentNode) {
    if (count0) {
      currentNode.data = 0;
      count0--;
    } else if (count1) {
      currentNode.data = 1;
      count1--;
    } else {
      currentNode.data = 2;
      count2--;
    }
    currentNode = currentNode.next;
  }

  return head;
};

/*
   TC => O(N)
   SC => O(1)
*/

const sortLL012I = (head) => {
  if (head === null || head.next === null) return head;

  let zeroHead = new Node(0);
  let oneHead = new Node(1);
  let twoHead = new Node(2);

  let zeroTemp = zeroHead;
  let oneTemp = oneHead;
  let twoTemp = twoHead;

  let currentNode = head;

  // Segregate 0,1,2 nodes

  while (currentNode) {
    if (currentNode.data === 0) {
      zeroTemp.next = currentNode;
      zeroTemp = currentNode;
    } else if (currentNode.data === 1) {
      oneTemp.next = currentNode;
      oneTemp = currentNode;
    } else {
      twoTemp.next = currentNode;
      twoTemp = currentNode;
    }

    currentNode = currentNode.next;
  }

  // Join the nodes
  zeroTemp.next = oneHead.next ? oneHead.next : twoHead.next;
  oneTemp.next = twoHead.next;
  twoTemp.next = null;

  // redeclare the head
  head = zeroHead.next;

  // delete the temp nodes
  zeroHead = null;
  oneHead = null;
  twoHead = null;

  return head;
};
