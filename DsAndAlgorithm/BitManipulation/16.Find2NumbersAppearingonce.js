/*
  Given a nums array, every number is occurring twice, except for 2 nums.
  Find the 2 nos   
  eg [2,4,2,14,8,7,7,8]
*/

/*
 Naive Solution
 use map (number => frequency count)
*/

/*
 Optimal Solution 
 
 Use bucket
 TC => O(2N)
*/

const findNums = (nums) => {
  let xor = 0;
  let bucket1 = 0;
  let bucket2 = 0;

  /*
    1. xor is the resultant xor of 2 distinct numbers
    2. For 2 distinct numbers, there is a minimum  of one bit which is different
  */
  for (let i = 0; i < nums.length; i++) xor ^= nums[i];
  /*
    num & (num -1) ^ num => 
    a new number with only the first/rightmost  bit is set

    10 & (10 -1) ^ 10 => 2
  */
  let rightmostBit = (xor & (xor - 1)) ^ xor;

  for (let i = 0; i < nums.length; i++) {
    /*
      Since 2 distinct numbers have at least one bit difference,
      on xoring with firstBitDifferenceNumber, 
      they will never come under the same bucket 
    */
    if (nums[i] & rightmostBit) bucket1 ^= nums[i];
    else bucket2 ^= nums[i];
  }

  return [bucket1, bucket2];
};
