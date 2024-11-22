/*
   largest i such that nums[i] >= target
   lower bound
*/
const ceilOrLowerBound = (nums, x) => {
  let low = 0;
  let high = nums.length - 1;

  if (nums[high] < x) return -1;

  while (low <= high) {
    if (nums[low] >= x) return nums[low];

    let mid = low + ((high - low) >> 1);

    if (nums[mid] >= x) high = mid - 1;
    else low = mid + 1;
  }

  return nums[low];
};
