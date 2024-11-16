/*
  Optimal Solution

  TC => O(log N)
*/

const search = (nums, target) => {
  let n = nums.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);

    // slight optimization
    if (nums[mid] === target) return true;
    if (nums[low] === target) return true;
    if (nums[high] === target) return true;

    // if all the 3 are equal, trim form left & right
    if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
      high -= 1;
      low += 1;
      continue;
    }

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

  return false;
};
