// Maximum Subarray Sum

/*
  Naive Solution 
  TC => O(N^2) 

*/
const maximumSubarraySumN = (nums) => {
  let maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
};

