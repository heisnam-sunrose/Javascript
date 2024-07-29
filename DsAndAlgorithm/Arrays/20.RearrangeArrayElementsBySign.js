/*
  Rearrange Array Elements by Sign 
  All the positives will be at even index
  All the Negative will be at odd index

  2 types of problem 
  ====================================
  A. No of Positives == No of Negative
  B. No of Positives != No of Negative 
*/

/*
  Optimal Solution
  B. No of Positives != No of Negative 
  TC => O(N) +O(N)
  SC => O(N/2) + O(N/2)
*/

const rearrangeElementsBySignNEq = function (nums) {
  let positiveNums = [];
  let negativeNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) positiveNums.push(nums[i]);
    else negativeNums.push(nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (!positiveNums[i] && !negativeNums[i]) break;
    if (positiveNums[i]) nums[i * 2] = positiveNums[i];
    if (negativeNums[i]) nums[i * 2 + 1] = negativeNums[i];
  }

  return nums;
};

/*
  Optimal Solution
  A. No of Positives == No of Negative
  TC => O(N)
  SC => O(N)

*/

const rearrangeElementsBySignEq = (nums) => {
  let length = nums.length;
  let positiveIndex = 0;
  let negativeIndex = 1;
  let newNums = new Array(length);

  for (i = 0; i < length; i++) {
    if (nums[i] > 0) {
      newNums[positiveIndex] = nums[i];
      positiveIndex += 2;
    } else {
      newNums[negativeIndex] = nums[i];
      negativeIndex += 2;
    }
  }
  return newNums;
};
