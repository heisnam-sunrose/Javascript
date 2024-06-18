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

const sortLL = (head) => {
  let arr = [];
  let currentNode = head;

  while (currentNode) {
    arr.push(currentNode.data);
    currentNode = currentNode.next;
  }
  arr = sort(arr);

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
*/
const sortLlMS = (head) => {};
