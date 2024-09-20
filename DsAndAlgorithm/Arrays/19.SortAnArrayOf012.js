// Sort an array of 0's 1's & 2

/*
  Naive Solution
  Using merge sort 

  TC => O(N * log N)
  Sc => O(N) 
*/

/*
  Better Solution
  ================
  zeroCount, oneCount, twoCount

  TC => O(N + N)
*/

/*
 Optimal Solution
 ================================

 Dutch National Flag Algorithm
 Uses 3 pointers low, mid and high

 Rules 
 [0 ... low-1] => 0
 [low ... mid-1] => 1
 [mid ... high] => unsorted numbers
 [high + 1 ... n-1] => 2

 TC => O(N)
 SC => O(1)
*/

const sort012 = (nums) => {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  function swap(i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  while (mid <= high) {
    if (nums[mid] === 0) {
      swap(low, mid);
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      swap(mid, high);
      high--;
    }
  }
};
