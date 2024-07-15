// Find element that appears once

/*
  Naive Solution
  TC => O(N * N)
  SC => O(1)
*/

const onceOccurrenceNo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }

    if (count === 1) return i;
  }
};

/*
  Hashing (Array)

*/

const number1countArr = (arr) => {
  /*
    1. Find the maximum element in the array
    TC => O(N)
  */
  maximum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maximum = Math.max(maximum, arr[i]);
  }

  /* 
    2. Define a array hash of maximum + 1 size
    SC => O(N)
  */
  hashMap = Array(maximum + 1).fill(0);

  /*
    3. Update the count on hashMap
    TC => O(N)
  */
  for (let i = 0; i < arr.length; i++) {
    hashMap[arr[i]] += 1;
  }

  /*
    4. check element with one occurrence
    TC => O(N)
  */
  for (let i = 0; i < hashMap.length; i++) {
    if (hashMap[i] == 1) return i;
  }
};

/*
  Hashing (Map)

*/

const number1countMap = (arr) => {
  let map = new Map();
  /*
      Ordered Map => O(N * log M) 
      N => size of the array
      M => size of the map
      Unordered map => O(N) best case , worst case rarely happened 
    */

  for (let i = 0; i < arr.length; i++) {
    map[i] = map[i] + 1;
  }

  map.forEach((value, key) => {
    if (value == 1) return key;
  });
};

/*
  XOR 
  TC => O(N)
*/

const number1countXor = (arr) => {
  let xor;
  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
  }
  return xor;
};
