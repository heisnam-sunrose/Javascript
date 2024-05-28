// group the given LL into odd and even nodes
/*
  1. Using another DS list with data replacement
   TC => O(N) 
   SC => O(N)
*/

const segregateOddEven = (head) => {
  // empty LL or LL
  if (head === null || head.next === null) return head;
  let temp = head;

  let nodesData = [];

  /* 
    loop for odd nodes
    TC => O(N/2) 
  */
  while (temp && temp.next) {
    nodesData.push(temp.data);
    temp = temp.next.next;
  }

  // case for even nodes
  if (temp) nodesData.push(temp.data);

  /* 
    loop for even nodes
    TC => O(N/2) 
  */
  temp = head.next;
  while (temp && temp.next) {
    nodesData.push(temp.data);
    temp = temp.next.next;
  }

  if (temp) nodesData.push(temp.data);

  /* 
    loop through nodes for data replacement
    TC => O(N) 
  */

  temp = head;
  let i = 0;

  while (temp) {
    temp.data = nodesData.pop();
    i++;
    temp = temp.next;
  }

  return head;
};

/*
   Using link changes
   TC => O(N)
   SC => O(1)SS
*/

const segregateOddEvenLC = (head) => {
  // empty LL or only head LL
  if (head === null || head.next === null) return head;

  let odd = head;
  let even = head.next;
  let evenHead = head.next;
  /*
    Even is before Odd, so even should reach tail first
  */
  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next.next;
  }

  // connect odd and even nodes
  odd.next = evenHead;

  return head;
};
