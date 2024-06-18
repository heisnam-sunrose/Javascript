/*
  Delete all occurrences of a Key in DLL
  
  TC => O(N)
  SC => O(1)
*/

const deleteKey = (head, key) => {
  // Empty DLL
  if (head === null) return head;

  /* 
   update head if head is deleted

    if (head.data === key) {
        let temp = head;
        head = head.next;
        // delete head
        temp.next = null;
        temp.prev = null;
        temp = null;
    }

*/

  // DLL and

  let currentNode = head;
  let prevNode;
  let nextNode;

  while (currentNode) {
    if (currentNode.data === key) {
      prevNode = currentNode.prev;
      nextNode = currentNode.next;

      /*
        link previous and next nodes

        prevNode is null means currentNode is the head        
      */
      if (prevNode) {
        prevNode.next = nextNode;
      } else {
        head = head.next;
      }

      // nextNode = null means currentNode has reached tail
      if (nextNode) nextNode.prev = prevNode;

      // detached the currentNode from DLL
      currentNode.prev = null;
      currentNode.next = null;
      // delete the node
      currentNode = null;

      currentNode = nextNode;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head;
};
