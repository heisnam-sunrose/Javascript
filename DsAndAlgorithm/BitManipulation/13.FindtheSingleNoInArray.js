/*
  All the elements appear twice expect one element which appears once
  
  Find the single number
*/

/*
  Naive solution 

  use Map [ element => count] 
*/

/*
  Optimal Solution 
  use XOR operation
  
  TC => O(N)
*/

const findSingleOccurrenceNumber = (nums) => {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }

  return xor;
};
