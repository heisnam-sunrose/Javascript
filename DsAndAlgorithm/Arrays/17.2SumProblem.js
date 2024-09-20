/*
  2 Sum Problem
  Given an array and a number N

  2 types 
  ==================

  1. Check if there exists 2 numbers in array whose sum is N 

  2. Return the index of the 2 nos whose sum is N
*/

/*
Naive Solution
  TC => near to O(N*N)
*/

const twoSumProblem = (arr, N) => {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[j]) continue;

      if (arr[j] + arr[j] === N) return [i, j];
    }
  }
};

/*
   Most optimal for type 2 
   Better Solution for type 1
   Hashing 

   TC => O(N * map operation)
   SC => O(N)
*/

const twoSumProblemH = (nums, target) => {
  let dataWithIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];
    if (dataWithIndex.has(remaining)) {
      return [dataWithIndex.get(remaining), i].sort();
    }
    dataWithIndex.set(nums[i], i);
  }
};

/*
 Optimal Solution
 2 pointers 
 TC => O(N) + O(N * logN)/ sorting
*/

const twoSumProblem2P = (arr, K) => {
  let left = 0;
  let right = arr.length - 1;
  /*
    Sort the array
    if indexes need to be return,
    we need to preserve tha array index in some hash 
  */
  arr.sort();

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == K) return true;
    else if (sum > K) right--;
    else left--;
  }
  return false;
};


