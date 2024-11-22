/*
  Optimal Solution

  TC => O(log N)
*/

const search = (nums, target) => {
  let n = nums.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    // slight optimization

    if (nums[low] === target) return low;
    if (nums[high] === target) return high;

    let mid = low + ((high - low) >> 1);

    if (nums[mid] === target) return mid;

    // left sorted
    if (nums[low] <= nums[mid]) {
      // left sorted and target lies in the left search range
      if (nums[mid] > target && nums[low] < target) high = mid - 1;
      else low = mid + 1;
    } else {
      // right sorted

      if (nums[mid] < target && target < nums[high]) low = mid + 1;
      else high = mid - 1;
    }
  }

  return -1;
};
