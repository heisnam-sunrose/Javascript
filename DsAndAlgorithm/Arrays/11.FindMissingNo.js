/* FInd the missing number
   Given an array arr containing n distinct numbers in the range [0, n]
*/

/* 
   Linear Search 
   TC  => O(N * N)
   SC  => O(N)
*/

const findMissingLS = (arr) => {
  let N = arr.length;
  for (let i = 0; i <= N; i++) {
    let flag = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (i == arr[j]) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) return i;
  }
};

/* 
   Hashing
   TC  => O(2N)
   SC  => O(N)
*/

const findMissingHash = (arr) => {
  let N = arr.length;
  // hash of N size
  hashN = Array(N);

  for (let i = 0; i < arr.length; i++) {
    hashN[arr[i]] = 1;
  }

  for (let i = 0; i < hashN.length; i++) {
    if (hashN[i] !== 1) return i;
  }
};

/*
  SUM
  ==================================
  Missing Number  = Sum of the Nu numbers (N(N+1)/2) - sum of elements if array
  TC => O(N) 

*/

const findMissingSum = (arr) => {
  let N = arr.length;
  let sumN = N * ((N + 1) / 2);

  for (let i = 0; i < arr.length; i++) {
    sumN -= arr[i];
  }
  return sumN;
};

/*
  XOR => Slightly better than SUM
  ================================
  Same No ^ Same No = 0
  TC => O(N) 
  SC => O(1)
*/

const findMissingXOR = (arr) => {
  let N = arr.length;
  let xor1;
  let xor2;
  for (let i = 0; i < arr.length; i++) {
    xor1 ^= arr[i];
    xor2 ^= i;
  }

  xor2 = xor2 ^ N;

  return xor1 ^ xor2;
};
