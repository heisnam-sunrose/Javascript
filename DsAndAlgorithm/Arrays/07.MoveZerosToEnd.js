// Move all Zeros to the end of the array

/*
  Naive Solution 
  TC => O(2N)
  SC => O(size of non 0)=> O(m)
*/
const move0ToEnd = (arr) => {
  // SC => O(size of non 0)=> O(m)
  let temp = [];

  /*
    Move all non 0 to temporary array
    TC => O(N)
  */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) temp.push(arr[i]);
  }

  /*
    Move back all non 0 elements,
    from temporary array to original array
    TC => O(m)
  */
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }

  /*
     Update remaining elements in original array with 0
     O(N-m)
  */
  for (let i = temp.length; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
};

/*
  2 pointers Algorithm 
  TC => O(N)
  SC => O(1)
*/
const move0ToEndOp = (arr) => {
  let zeroIndex = -1;
  /*
     Find the first 0
  */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroIndex = i;
      break;
    }
  }

  if (zeroIndex == -1) return arr;

  // Swap 0s with non 0s
  let nonZeroIndex = zeroIndex + 1;
  while (nonZeroIndex < arr.length) {
    if (arr[nonZeroIndex] != 0) {
      // Swap 0 with non 0
      arr[zeroIndex] = arr[nonZeroIndex];
      arr[nonZeroIndex] = 0;
      zeroIndex++;
    }
    nonZeroIndex++;
  }

  return arr;
};

console.log(move0ToEnd([1, 0, 2, 0, 4, 5, 6, 7, 8, 90, 1, 0]));
console.log(move0ToEndOp([0, 0, 0, 0, 4, 5, 6, 7, 8, 90, 1, 0]));
