/*
   Flattening a LinkedList( Vertical LL)
   Every node will have sorted child nodes 
   A horizontal LL with vertical LL linked on each node
*/

/* Naive Solution
   1. Move all the nodes data to an array.
   2. Sort the array.
   3. Convert array to vertical LL
   ========================================================
   TC => O(2N * M) + O(MN log(MN))
   SC => O(MN)
*/

const mergeSort = (arr) => {};

const flattenLL = (head) => {
  let currentNode = head;
  let nodeValues = [];

  /* 
    Move all the nodes data to array
    O(N * M)
  */
  while (currentNode) {
    let childNode = currentNode;
    while (childNode) {
      nodeValues.push(childNode.values);
      childNode = childNode.down;
    }
    currentNode = currentNode.next;
  }
  /*
    Sort the array
    TC => O(MN *log(MN)) 
  */
  nodesValues = mergeSort(nodeValues);

  /*
    Covert the array to vertical LL
    TC => O(MN *log(MN)) 
    SC => O(MN) 
  */
  let head = new Node(nodeValues[0]);
  let temp = head;
  for (let i = 0; i < nodesValues.length; i++) {
    let newNode = new Node(nodesValues[i]);
    temp.bottom = newNode;
    temp = newNode;
  }
};

/* 
   Optimal Approach
    TC => O(N*N) 
    SC => O(N)
 */

const mergeVLL = (head1, head2) => {
  let dummyNode = new Node(-1);
  let mover = dummyNode;

  while (head1 && head2) {
    if (head1.data < head2.data) {
      mover.bottom = head1;
      mover = head1;
      head1 = head1.bottom;
    } else {
      mover.bottom = head2;
      mover = head2;
      head2 = head2.bottom;
    }
  }
  if (head1) mover.bottom = head1;
  if (head2) mover.bottom = head2;
  return dummyNode.bottom;
};

const flattenLLR = (head) => {
  // Base condition
  if (head == null || head.next == null) {
    return head;
  }

  let mergeHead = flattenLLR(head.next);

  return mergeVLL(head, mergeHead);
};
