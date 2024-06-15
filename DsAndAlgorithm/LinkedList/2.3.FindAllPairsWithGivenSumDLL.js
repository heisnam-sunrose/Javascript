// Find all Pairs with given Sum in a SORTED Doubly Linked List

/*
  Naive implementation

  TC => close to O(N^2)
  Sc => O(1)
*/

const pair = (head, sum) => {
  // empty DLL

  if (head === null || head.next === null) return [];

  let first = head;
  let second = null;
  let pairsArray = [];

  while (first) {
    second = head.next;

    /* 
       first.data + second.data > sum, 
       Since it is a sorted DLL, 
       No need to traverse second node further 
    */
    while (second && first.data + second.data <= sum) {
      if (first.data + second.data === sum) {
        pairsArray.push([first.data, second.data]);
      }
    }

    first = first.next;
  }

  return pairsArray;
};

/*
  Preferred implementation

  Take 2 pointers left pointing at head, right pointing at tail
  move left and right towards each other till they cross 
  ===============================================================
  TC => O(2N)
  Sc => O(1)
*/

const pairIm = (head, sum) => {
  let left = head;
  let right = head;

  // position right to the tail
  while (right) {
    right = right.next;
  }

  let pairsArray = [];
  // move left and right towards each other till they cross
  while (left.data < right.data) {
    if (left.data + right.data > sum) {
      right = right.prev;
    } else if (left.data + left.data < sum) {
      left = left.next;
    } else {
      pairsArray.push([left.data, right.data]);
    }
    left = left.next;
  }

  return pairsArray;
};
