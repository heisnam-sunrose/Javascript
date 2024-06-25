/* Largest element in an array

    Naive Solution
    ================== 
    1. Sort the array
    2. return the last element of the array.

    TC => O(N log N)
    SC => O(1)
 */

const mergeSort = (arr) => {
  // MergeSort code
};

const largestBySort = (arr) => {
  let sortedArray = mergeSort(arr);
  return arr[-1];
};

/*
    Optimal Solution
    TC => O(N)
    SC => O(1)
  */

const largest = (arr) => {
  let largest = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (largest < arr[i]) largest = arr[i];
  }
  return largest;
};
