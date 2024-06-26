/*
  Left Rotate the Array by One
  TC => O(N)
  SC => O(1)
*/

const leftRotate = (arr) => {
  let firstElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = firstElement;

  return arr;
};

console.log(leftRotate([1, 2, 3]));
