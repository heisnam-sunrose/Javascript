/*
  Power Set (Print all subsets)
  TC  => O(N * 2^N)
  SC => O(N * 2^N) approx
*/

const powerSet = (nums) => {
  let results = [];
  let powerSetCount = 1 << nums.length;

  // TC = O(2^N)
  for (let i = 0; i < powerSetCount; i++) {
    let subSet = [];

    // TC = O(N)
    for (let j = 0; j < nums.length; j++) {
      console.log(i & (i << j), i, j);
      if (i & (1 << j)) subSet.push(nums[j]);
    }
    results.push(subSet);
  }

  return results;
};

