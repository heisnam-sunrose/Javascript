// Find Second Largest/ Smallest Element in Array (without Sorting)

/*
  Naive Solution 
=============================
  1. Sort the array
  2. Return the 2nd largest
   TC => O(N*logN) + O(N)
   Sc => O(1)
*/

const mergeSort = (arr) => {
  // MergeSort code
};

const largest2nd = (arr) => {
  let sortedArray = mergeSort(arr);

  // Find the second largest element in the array
  for (let i = sortedArray.length - 2; i < 0; i++) {
    if (sortedArray[i] < sortedArray[-1]) return sortedArray[i];
  }

  // Return -1 if not found
  return -1;
};

/*
  Better Solution

  1. Find largest element
  2. Find second largest element

  TC => O(N) + O(N)
  SC => O(1)
*/

const secondLargest = (arr) => {
  let largest = 0;
  // find largest element

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > largest) largest = arr[i];
  }

  // find 2nd largest element
  let largest2nd = -1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > largest2nd && arr[i] < largest) largest2nd = arr[i];
  }

  return largest2nd;
};

/*
  Optimal Solution
  TC => O(N)
*/

const secondLargestOptimal = (arr) => {
  let largest = arr[0];
  // let largest2nd = Number.INT_MIN;
  let largest2nd = -1;

  for (let i = 1; i < arr.length - 1; i++) {
    if (largest < arr[i]) {
      largest2nd = largest;
      largest = arr[i];
    } else {
      if (arr[i] > largest2nd) largest2nd = arr[i];
    }
  }

  return largest2nd;
};

const secondSmallest = (arr) => {
  // code
};
