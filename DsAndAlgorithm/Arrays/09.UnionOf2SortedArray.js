// Union of 2 sorted arrays

/*
  Naive Solution
*/

const union2SortedArray = (arr1, arr2) => {
  let setUnion = new Set();
  let unionArray = [];

  /*
    Move arr1 to union set
  */
  for (let i = 0; i < arr1.length; i++) {
    setUnion.add(arr1[i]);
  }

  /*
    Move arr2 to union set
  */
  for (let i = 0; i < arr2.length; i++) {
    setUnion.add(arr2[i]);
  }

  /*
    Move union set elements to new union array
  */
  setUnion.forEach((key, value) => unionArray.push(key));
  return unionArray;
};

/*
  2 pointers algorithm 
*/
const union2SortedArray2p = (arr1, arr2) => {
  let n = arr1.length;
  let m = arr2.length;
  let firstPointer = 0;
  let secondPointer = 0;
  let unionArray = [];

  function pushToUnionArray(val) {
    if (unionArray.length == 0 || unionArray[unionArray.length - 1] != val) {
      unionArray.push(val);
    }
  }

  while (firstPointer < n && secondPointer < m) {
    if (arr1[firstPointer] < arr2[secondPointer]) {
      pushToUnionArray(arr1[firstPointer]);
      firstPointer++;
    } else {
      pushToUnionArray(arr2[secondPointer]);
      secondPointer++;
    }
  }

  while (firstPointer < n) {
    pushToUnionArray(arr1[firstPointer]);
    firstPointer++;
  }

  while (secondPointer < m) {
    pushToUnionArray(arr2[secondPointer]);
    secondPointer++;
  }

  return unionArray;
};

console.log(union2SortedArrayOp([1, 1, 2], [3, 4]));
