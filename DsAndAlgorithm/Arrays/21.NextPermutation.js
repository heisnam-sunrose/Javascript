/*
  Next Permutation
  ============================================================= 
  Permutations are set of rearranged numbers in ascending order

  arr = [3,1,2]

  permutations = N!
   [1,2,3]
   [1,3,2]
   [2,1,3]
   [2,3,1]
   [3,1,2]
   [3,2,1]

*/

/*
  Naive Solution
  ==============================================================
  1. Generate all permutations in sorted order (using Recursion)
  2. Linear search the existing permutation
  3. Get the Next permutation
  
  TC => O(N! * N)
*/

const nextPermutationN = () => {};

/* 
  Optimal Solution
  ==============================================================
  1. Find the longer prefix match(breakPoint / nums[i] < nums[i + 1]). 
     Everything on the right is greater than the leftmost element. 

  2. Find smallest element on the right subarray > breakPoint element.
     Swap breakPoint with  smallest element

  3. Sort the right subarray starting from breakPoint + 1 // 
     Reverse the subarray as it was already sorted in desc

  TC => O(N + N + N)
  SC => O(1)
  ======== 
  We are altering array but not using new array. 
  If these to be considered then, SC => O(N) 
*/

const nextPermutationO = (nums) => {
  let n = nums.length;
  /*
    Find the longer prefix match(breakPoint). Everything on 
    the right is greater than the leftmost element. 

     nums[i] < nums[i + 1]
 */
  let breakPoint = -1;
  for (let i = n - 2; i > 0; i--) {
    if (nums[i] < nums[i + 1]) {
      breakPoint = i;
      break;
    }
  }

  /*
    No breakPoint means, it is last / biggest permutation
    So return the first permutation 
  */

  if (breakPoint == -1) return nums.reverse();

  /*
    Note that the right subarray is sorted in descending order.

    Find smallest element on the right subarray > breakPoint element. 
    Replace it with the breakpoint 
  */

  for (i = n - 1; i > breakPoint; i--) {
    if (nums[i] > nums[breakPoint]) {
      // swap the breakpoint and nums[i]

      let temp = nums[i];
      nums[i] = nums[breakPoint];
      nums[breakPoint] = temp;
      break;
    }
  }
  /*
    Reverse the subarray as it was already sorted in desc
  */
  nums = nums.splice(0, breakPoint + 1).concat(nums.reverse());

  return nums;
};
