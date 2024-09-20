/*
  number of sub arrays with a sum equal to k
*/

/*
  Naive Solution
  TC => O(N * N)
*/

const countSubArray = (nums, K) => {
  let subArrayCount = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (j = i; j < K; j++) {
      sum += nums[j];
      if (sum == K) subArrayCount++;

      if (sum > K) break;
    }
  }

  return subArrayCount;
};

/* 
  Optimal Solution 
  Hashing =>{ Prefix sum, count }
  TC =>  O(N * map operation)
  SC => O(N)
*/

const subarraySumCount = (nums, k) => {
  let subArrayCount = 0;
  let prefixSumMapWithCount = new Map();
  let n = nums.length;
  let preSum = 0;

  /*
     this is required
     alternate to if (sum == k) subArrayCount++;
  */
  prefixSumMapWithCount.set(preSum, 1);

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    // if (sum == k) subArrayCount++;
    let remainder = sum - k;
    subArrayCount += prefixSumMapWithCount.get(remainder) || 0;
    prefixSumMapWithCount.set(sum, (prefixSumMapWithCount.get(sum) || 0) + 1);
  }

  return subArrayCount;
};
