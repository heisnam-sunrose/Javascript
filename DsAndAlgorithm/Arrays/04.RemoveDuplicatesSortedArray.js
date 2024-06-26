// Remove Duplicates in place from sorted Array

/* Naive Solution
   TC => O(N*log N) + O(N)
   SC => O(N)
*/

const removeDuplicates = (arr) => {
  let uniqueElements = new Set();
  for (let i = 0; i < arr.length; i++) {
    // Set takes logN times for insertion
    set.add(arr[i]);
  }

  let index = 0;
  uniqueElements.forEach((key, value) => {
    arr[index] = key;
    index++;
  });
  return index;
};

/*
  Optimal Solution
  2 pointers implementation
  =================================
  TC  => O(N)
  SC => O(1)
*/

const removeDuplicatesOp = (arr) => {
  let firstPointer = 0;
  for (let secondPointer = 1; secondPointer < arr.length; secondPointer++) {
    if (arr[firstPointer] != arr[secondPointer]) {
      firstPointer++;
      arr[firstPointer] = arr[secondPointer];
    }
  }

  return firstPointer + 1;
};
