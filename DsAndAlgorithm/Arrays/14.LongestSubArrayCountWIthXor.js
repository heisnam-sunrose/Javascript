// Count the subarray with XOR as K

/* Naive Solution*/

const subArrayCountWithXOR = (nums, K) => {
  let n = nums.length;
  let xor = 0;
  let subarrayCount = 0;

  for (let i = 0; i < n; i++) {
    xor = 0;
    for (let j = i; j < K; j++) {
      xor ^= nums[j];

      if (xor === K) subarrayCount++;
    }
  }
  return subarrayCount;
};

/*
  Optimal Solution 

  Hashing => PreXor, count
*/

const subArraysWithXorK = (nums, k) => {
  let n = nums.length;
  let xor = 0;
  let subarrayCount = 0;
  let preXor = new Map();

  /*
    preXor.set(xor, (preXor.get(xor) || 0) + 1);
    alternate to  if (xor == k) subarrayCount++;
  */
  for (let i = 0; i < n; i++) {
    xor ^= nums[i];
    if (xor == k) subarrayCount++;

    subarrayCount += preXor.get(xor ^ k) || 0;

    preXor.set(xor, (preXor.get(xor) || 0) + 1);
  }

  return subarrayCount;
};


/*
  Possible types of Subarray with xor K problems
  ===============================================
  1. Longest Subarray with xor K
  2. Shortest Subarray with xor K
  3. No of sub arrays count
  4. Return all the sub arrays
*/