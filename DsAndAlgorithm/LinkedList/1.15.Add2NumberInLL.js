/* Add 2 numbers in LinkedList 
 Dummy Node Approach
 TC => O(max(L1, L2))
 SC => O(max(L1, L2))
*/

const addTwoNumbers = (head1, head2) => {
  // create a dummy node
  let dummyNode = new Node(-1);
  let currentNode = dummyNode;

  let currentNode1 = head1;
  let currentNode2 = head2;

  let sum = 0;
  let data = 0;
  let carry = 0;

  while (currentNode1 || currentNode2) {
    // reset the sum for every loop
    sum = carry;
    if (currentNode1) sum += parseInt(currentNode1.data);
    if (currentNode2) sum += parseInt(currentNode2.data);

    currentNode.next = new Node(parseInt(sum % 10));
    currentNode = currentNode.next;
    carry = parseInt(sum / 10);
    // traverse L1 nad L2
    if (currentNode1) currentNode1 = currentNode1.next;
    if (currentNode2) currentNode2 = currentNode2.next;
  }
  if (carry > 0) {
    currentNode.next = new Node(carry);
  }

  return dummyNode.next;
};
