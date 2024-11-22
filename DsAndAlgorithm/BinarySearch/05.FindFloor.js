/*
   largest i such that nums[i] <= target
*/

const floor = (nums, x) => {
  let low = 0;
  let high = nums.length - 1;

  if (nums[low] > x) return -1;

  while (low <= high) {
    if (nums[high] <= x) return nums[high];

    let mid = low + ((high - low) >> 1);

    if (nums[mid] <= x) low = mid + 1;
    else high = mid - 1;
  }

  return nums[high];
};
