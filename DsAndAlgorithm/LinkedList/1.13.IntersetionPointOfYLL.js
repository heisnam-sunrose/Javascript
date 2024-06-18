// Find the intersection point of Y LinkedList

/* Hashing concept 
   TC =>  O(2(N map operation) )
   SC = > O(N) 
*/

const intersectionPoint = (head1, head2) => {
  let temp1 = head1;
  let temp2 = head2;

  let nodesMap = new Map();

  while (temp1) {
    nodesMap.set(temp1, 1);
    temp1 = temp1.next;
  }

  while (temp2) {
    if (nodesMap.has(temp2)) return temp2;
    temp2 = temp2.next;
  }

  return null;
};

/* */

const intersectionPointV2 = (head1, head2) => {
  let temp1 = head1;
  let temp2 = head2;

  let temp1Length = 0;
  let temp2Length = 0;

  // get the length of each LLs

  while (temp1) {
    temp1Length++;
    temp1 = temp1.next;
  }

  while (temp2) {
    temp2Length++;
    temp2 = temp2.next;
  }
};
