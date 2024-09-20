/*
  Given an integer array nums of size n containing values from [1, n] 
  and each value appears exactly once in the array, 
  except for A, which appears twice and B which is missing.
*/

/* 
  Naive Solution 
  Tc => O(N)
*/

const missingRepeatingNosN = (nums) => {
  let n = nums.length;
  let missing = -1;
  let repeated = -1;

  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (j = 0; j < n; j++) {
      if (nums[j] === i) count++;
    }

    if (count == 2) repeated = i;
    if (count == 0) missing = i;

    if (missing != -1 && repeated != -1) break;
  }

  return [missing, repeated];
};

/*
  Optimal Solution
  TC => O(N)
*/

const missingRepeatingNos = (nums) => {
  let n = nums.length;
  // sum of n natural number
  let Sn = parseInt((n * (n + 1)) / 2);
  // sum of squares of n natural number
  let Sn2 = parseInt((n * (n + 1) * (2 * n + 1)) / 6);
  // sum of all the elements of nums
  let s = 0;
  // sum of squares all the elements of nums
  let s2 = 0;

  // TC => O(n)

  for (let i = 0; i < n; i++) {
    s += nums[i];
    s2 += nums[i] * nums[i];
  }

  /*
    let x => repeated  number
        y => missing number

        x - y = s - Sn
  
  */
  let xMinusY = s - Sn; // eqn 1

  /*
    x^2 - y^2 = s- Sn2

   => (x - y)(x + y) = s2 - Sn2
   => (x + y) = (s2 - Sn2)/(x - y)
   => (x + y) = (s2 - Sn2)/(s - Sn)
  
  */
  let xPlusY = parseInt((s2 - Sn2) / xMinusY); // eqn 2
  console.log(xMinusY, xPlusY);

  /*
    Adding eqn 1 and eqn 2

    2x = ((s2 - Sn2)/(s - Sn)) + (s - Sn)

    x  = (((s2 - Sn2)/(s - Sn)) + (s - Sn))/ 2

    x = repeating number
  */

  let repeatingNo = parseInt((xPlusY + xMinusY) / 2);

  let missingNo = xPlusY - repeatingNo;

  return [repeatingNo, missingNo];
};

/*
 Alternate Optimal Solution( Using XOR)

 steps
  1. xor all the elements of given array with numbers from 1 to n(size of the array) 
  2. resultant xor = missing ^ repeating
  3. Find the right most set bit ( 2 different numbers has at least one different bit)
  4. Segregate the elements of the array and 
     numbers from 1 to n(size of the array) into 2 buckets,
     A. one - with right most bit of xor set 
     B. another - with right most bit of xor not set
     ensure to xor them when we move them to buckets
  5. the 2 buckets will have missing element in one bucket and 
  repeating element in another bucket     
           
     


 TC => O(N) + O(N)
 SC => O(1)
*/

const missingRepeatingNosXor = (nums) => {
  let n = nums.length;
  let xor = 0;

  /*
    xor of elements in nums1 and nums from 0 to n-1
    TC => O(N) 
  */
  for (let i = 0; i < n; i++) {
    xor ^= i + 1;
    xor ^= nums[i];
  }

  // find the first set bit from right
  let bitNo = 0;
  while (true) {
    if ((xor & (1 << bitNo)) > 0) break;
    bitNo++;
  }

  /*
    Use 2 buckets 
      1. Store nos with set bit
      2. Store nos without set bit      
  */
  let bitSet = 0;
  let bitNotSet = 0;

  // TC => O(N)
  for (let i = 0; i < n; i++) {
    if ((nums[i] & (1 << bitNo)) > 0) bitSet ^= nums[i];
    else bitNotSet ^= nums[i];

    if (((i + 1) & (1 << bitNo)) > 0) bitSet ^= i + 1;
    else bitNotSet ^= i + 1;
  }

  return [bitSet, bitNotSet];
};

nums = [1, 2, 3, 6, 7, 5, 7];

console.log(missingRepeatingNosN(nums));
