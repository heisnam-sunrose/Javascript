// Sort a list

/*
  Traditional way 
  =======================================
  1. Move all elements of LL to an array.
  2. Sort the elements of the array.
  3. Put back the sorted elements into LL.

  TC => O(2N + TC of the sort)
  SC = > O(N)
*/

const sortArray = (arr) => {
  // any sorting algorithm
};

const sortLL = (head) => {
  let arr = [];
  let currentNode = head;

  while (currentNode) {
    arr.push(currentNode.data);
    currentNode = currentNode.next;
  }
  arr = sortArray(arr);

  currentNode = head;
  let index = 0;
  while (currentNode) {
    currentNode.data = arr[index];
    index++;
    currentNode = currentNode.next;
  }

  return head;
};

/*
  Merge Sort is simpler to implement
  Quick Sort is tougher to implement 

  TC  => O(log N) * O(N + N/2) ~ O(N logN) 
    SC => O(1) 

  Note => multiple function then preferable use a class 
*/

// TC =>  O(N/2)
const middle = (head) => {
  let tortoise = head;
  // LL with even nodes gets splitted at the first half
  let hare = head.next;
  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  return tortoise;
};

// TC =>  O(N)
const merge = (head1, head2) => {
  let dummyNode = new Node(-1);
  let mover = dummyNode;

  while (head1 && head2) {
    if (head1.data <= head2.data) {
      mover.next = head1;
      head1 = head1.next;
    } else {
      mover.next = head2;
      head2 = head2.next;
    }
    mover = mover.next;
  }

  mover.next = head1 || head2;

  return dummyNode.next;
};

// TC =>  O(log N)
const divide = (head) => {
  // Base condition
  if (head === null || head.next === null) return head;

  let leftHead = middle(head);
  let rightHead = leftHead.next;
  leftHead.next = null;

  leftHead = divide(leftHead);
  rightHead = divide(rightHead);
  return merge(leftHead, rightHead);
};

const sortLLMS = (head) => {
  return divide(head);
};

/*
  Sample Solution
*/
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const merge = (left, right) => {
    const dummy = new ListNode(-1);
    let curr = dummy;

    while (left && right) {
      if (left.val <= right.val) {
        curr.next = left;
        left = left.next;
      } else {
        curr.next = right;
        right = right.next;
      }
      curr = curr.next;
    }

    curr.next = left || right;

    return dummy.next;
  };

  const findMiddle = (node) => {
    let slow = node;
    let fast = node.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  };

  const mid = findMiddle(head);
  const rightHead = mid.next;
  mid.next = null;

  const sortedLeft = sortList(head);
  const sortedRight = sortList(rightHead);

  return merge(sortedLeft, sortedRight);
};
