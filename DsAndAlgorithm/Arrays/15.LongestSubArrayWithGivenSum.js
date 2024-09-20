/*
  Longest Subarray with sum K
  subarray => contiguous part of the array
  subsequence / sequence => random selection of elements form the array 
*/

/*
  Naive Solution
  TC => O(N^2)
*/

const subArraySizeN = (arr, K) => {
  let maxLength = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum > K) break;

      if (sum == K) maxLength = Math.max(maxLength, j - i);
    }
  }
  return maxLength;
};

/*
  Optimal Solution for Longest Subarray with sum K with +ves,zeros and -ves
  Hashing / prefix sum
  TC => O(N log N) (ordered Hash)
  TC => O(N * 1 / N * N)( unordered Hash (1) / unordered Hash (N) worst case 
  SC => O(N)
*/

const subArraySizeH = (arr, K) => {
  let preSumWithIndex = new Map();
  let maxLength = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === K) maxLength = Math.max(maxLength, i + 1);

    let rem = sum - K;
    if (preSumWithIndex.has(rem)) {
      maxLength = Math.max(maxLength, i - preSumWithIndex.get(rem));
    }

    /*
      Do not re update an index if current element is 0 / negative
    */

    if (!preSumWithIndex.has(sum)) preSumWithIndex.set(sum, i);
  }

  return maxLength;
};

/*
  Optimal Solution for Longest Subarray with sum K with +ves and zeros
  2 pointers
  TC => O(2N)
  SC => O(1) 
*/

const subArraySize2P = (arr, K) => {
  let n = arr.length;
  let maxLength = 0;
  let sum = arr[0];
  let right = 0;
  let left = 0;

  while (right < n) {
    while (left <= right && sum > K) {
      sum -= arr[left];
      left++;
    }

    if (sum == K) maxLength = Math.max(maxLength, right - left + 1);
    right++;
    sum += arr[right];
  }

  return maxLength;
};

/*
arr = [-13, 0, 6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6];
n = 17;
k = 15;
op = 5;
console.log(subArraySizeH(arr, -15));

console.log(subArraySize2P([-1, 0, 0, 0, 0, 2, 3], 3));
*/

/* 
   Alternate optimal solution for array with positives

*/
const subArraySizePos = (arr, K) => {
  let n = arr.length;
  let longest = 0;

  let right = 0;
  let left = 0;
  let sum = 0;

  while (right < n) {
    sum += arr[right];

    if (sum === K) longest = Math.max(longest, right - left + 1);

    console.log(sum, left, right, 1);

    while (sum > K && left <= right) {
      sum -= arr[left];
      left++;
    }

    console.log(sum, left, right);

    right++;
  }
  return longest;
};

console.log(subArraySizePos([10, 5, 2, 7, 1, 9], 15));


/*
  Possible types of Subarray with sum K problems
  ===============================================
  1. Longest Subarray with sum K
  2. Shortest Subarray with sum K
  3. No of sub arrays count
  4. Return all the sub arrays
*/