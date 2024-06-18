/*
   Rotate a LinkedList
   TC => O(2N)
   SC => O(1)
*/

const rotateLL = (head, K) => {
  // empty LinkedList
  if (head === null || K === 0) return head;

  let tail = head;
  /*
    Length => length of LL
  */
  let length = 1;
  while (tail.next) {
    length++;
    tail = tail.next;
  }

  //LL rotated with length times returns to the same LL
  if (parseInt(K % length === 0)) return head;

  // Join the tail and head
  tail.next = head;

  let tailPosition = parseInt(length - (K % length));

  tail = head;

  for (let i = 1; i < tailPosition; i++) {
    tail = tail.next;
  }

  head = tail.next;
  tail.next = null;

  return head;
};
