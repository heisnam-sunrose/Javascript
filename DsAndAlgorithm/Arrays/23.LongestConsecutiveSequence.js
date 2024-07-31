/*
  Longest Consecutive Sequence 
  ===========================================
  Input: nums = [100,4,200,1,3,2]
  Output: 4
  Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. 
  Therefore its length is 4.                                                                                                                                                                                                                                      
*/

/* 
  Naive Solution 
  TC => O(N * N) 
*/

const longestConsecutiveSequenceN = (nums) => {
  function linearSearch(a, b) {
    // linear search code
  }

  let longest = 1;

  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    let x = nums[i];
    while (linearSearch(nums, x + 1) === true) {
      x = x + 1;
      count += 1;
    }
    longest = Math.max(longest, count);
  }

  return longest;
};

/* 
  Better Solution 
  TC => O(N * logN) + O(N)
*/

const longestConsecutiveSequenceB = (nums) => {
  let longest = 1;
  let count = 0;
  let lastSmallest = Number.MIN_VALUE;

  // 1. sort the array
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length; i++) {
    // if element repeats do nothing
    if (nums[i] == lastSmallest) continue;
    // if sequence is formed, increase count
    if (nums[i] - 1 == lastSmallest) count += 1;
    // if sequence is broken, reset the count to 1
    else count = 1;

    lastSmallest = nums[i];
    longest = Math.max(longest, count);
  }
};

/* 
  Optimal Solution 
  ==================
  1. Put all elements to a set

  2. Iterate all the elements in the set, 
     For each element check if previous element exists in the set,
     If yes move on the next element in set.
     We want to start counting from the smallest element.

  3. Once we found the smallest, we keep on counting 
     till next larger element does not exist. 
     Resultant count value is the longest count  

  TC => O(N) + O(2N)

   

*/
const longestConsecutiveSequenceO = (nums) => {
  let elementSet = new Set();
  let longest = 1;

  /*
    TC => O(N)
    ============
    Assuming elementSet.add(nums[i]) takes O(1) in average /bast case
    In the worst case, when collision happens, it takes O(N)
  */
  for (let i = 0; i < nums.length; i++) {
    elementSet.add(nums[i]);
  }

  /*
    TC => O(2N), not O(N * N)
    We ensure that while loop is run only from smallest element,
    So, in total it takes only O(2N) 
  */
  for (let value of elementSet) {
    if (elementSet.has(value - 1)) continue;
    let count = 1;

    while (elementSet.has(value + 1)) {
      count++;
      value += 1;
    }
    longest = Math.max(longest, count);
  }

  return longest;
};
