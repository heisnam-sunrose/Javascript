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

/* 
  Better Solution
  Steps 
  ======================================
  1. Get L1 and L2, lengths of both LLs
  2. Align LL1 & LL2 (Move L1 / L2 by ( L1- L2 ) // match up the difference)
  3. Traverse L1 and L2, return the node where data is same 

  TC => O(3N))
  sc => O(1)
*/
const collisionPoint = (smallerLLHead, largerLLHead, difference) => {
  let collisionNode = 0;
  let L1 = smallerLLHead;
  let L2 = largerLLHead;

  for (let i = 0; i <= collisionNode; i++) {
    L2 = L2.next;
  }

  while (L1 && L2) {
    if (L1.data === L2.data) return L1;
  }

  return null;
};
const intersectionPointV2 = (head1, head2) => {
  let LL1 = head1;
  let LL2 = head2;

  let LL1Length = 0;
  let LL2Length = 0;

  // get the length of each LLs

  while (LL1) {
    LL1Length++;
    LL1 = LL1.next;
  }

  while (LL2) {
    LL2Length++;
    LL2 = LL2.next;
  }

  if (L1 > L2) {
    return collisionPoint(head1, head2, LL2Length - LL1Length);
  } else {
    return collisionPoint(head2, head1, LL1Length - LL2Length);
  }
};

/*
  Optimal Solution

  Steps 
 =============================
  1. Traverse LL1 & LL2 simultaneously by 1 steps
  2. Align LL1 & LL2 
  ( When LL1 reaches tail, LL1 points to LL2 head and move forward . same for LL2)
  3. Traverse LL1 & LL2 till colliding node. 

  TC = O(N + M) 
  SC =>
*/

const intersectionPointOp = (headA, headB) => {
  if (headA === null || headB === null) return null;

  let LL1 = headA;
  let LL2 = headB;

  while (LL1 != LL2) {
    LL1 = LL1.next;
    LL2 = LL2.next;

    // LL1 and LL2 collided
    if (LL1 === LL2) return LL1;

    // LL1 and LL2 never intersects
    if (LL1 === null && LL2 === null) return null;

    if (LL1 === null) LL1 = headB;

    if (LL2 === null) LL2 = headA;
  }

  return null;
};
