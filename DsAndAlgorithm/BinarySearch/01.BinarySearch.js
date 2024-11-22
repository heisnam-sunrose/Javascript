/*
  Binary Search Algorithm
  =======================
   Trim down the search space until target is found

  1. the data structure must be sorted 
  2. TC O(log N base 2)
  3. Chances of low & high overlapping, even no of elements & target is on odd index. 
*/

/*
  Iterative Solution
  ==================
  TC => O(log N)

*/
class Solution {
  search(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
      // minor optimization
      if (nums[low] === target) return low;
      if (nums[high] === target) return high;

      if (nums[mid] === target) return mid;
      else if (nums[mid] > target) high = mid - 1;
      else low = mid + 1;
    }

    return -1;
  }
}

/*
  Recurrence Solution
  ===================
  TC => O(log N) 
*/

var binarySearch = function (nums, low, high, target) {
  if (low > high) return -1;

  let mid = low + ((high - low) >> 1);

  // minor optimization
  if (nums[low] === target) return low;
  if (nums[high] === target) return high;

  if (nums[mid] === target) return mid;
  else if (nums[mid] > target) {
    return binarySearch(nums, low, mid - 1, target);
  }
  return binarySearch(nums, mid + 1, high, target);
};

var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  return binarySearch(nums, low, high, target);
};
