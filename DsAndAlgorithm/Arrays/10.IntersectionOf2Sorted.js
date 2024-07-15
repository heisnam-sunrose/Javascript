// Intersection of 2 sorted arrays

/*
  Naive Solution
*/

const intersectionOf2SortedArrays = (arr1, arr2) => {};

const intersectionOf2SortedArraysOp = (arr1, arr2) => {
  let n = arr1.length;
  let m = arr2.length;
  let firstPointer = 0;
  let secondPointer = 0;
  let intersectionArray = [];

  while (firstPointer < n && secondPointer < m) {
    if (arr1[firstPointer] === arr2[secondPointer]) {
        intersectionArray.push(arr1[firstPointer]);
    }
  }
  return intersectionArray;
};
