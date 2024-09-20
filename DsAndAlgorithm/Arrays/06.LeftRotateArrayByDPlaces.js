/* 
   Left Rotate the Array by D places.
   An array rotated with array length returns to the original position.
*/

/*

Naive Solution
  By shifting
  TC => O(D) + O(N-D) + O(D) => O(N + D)
  SC => O(D)
*/

const leftRotateNSV1 = (arr, D) => {
  let length = arr.length;
  D = D % length;

  /*
    Put the elements to be rotated in temp array
    TC => O(D)
    SC => O(D)
  */
  let temp = [];
  for (let i = 0; i < D; i++) {
    temp.push(arr[i]);
  }
  /*
    Shift the elements to the right
    TC => O(N-D)
  */
  for (let i = D; i < arr.length; i++) {
    arr[i - D] = arr[i];
  }

  /*
    Put back temp elements to original array
    TC => O(D)
  */
  for (let i = 0; i < temp.length; i++) {
    arr[length - D + i] = temp[i];
  }

  return arr;
};

/*
Optimal Solution

reverse (0, D) TC  => O(D)
reverse (D, N-1) => O(N - D)
reverse (0, N-1) => O(N)

TC => O(2N)
Sc => 0(1)
*/

const reverse = (arr, start, end) => {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

const leftRotate = (arr, D) => {
  let length = arr.length;
  D = D % length;
  reverse(arr, 0, D);
  reverse(arr, D + 1, length - 1);
  reverse(arr, 0, length - 1);
  return arr;
};

console.log(leftRotateNSV1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 12));
console.log(leftRotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 15));

