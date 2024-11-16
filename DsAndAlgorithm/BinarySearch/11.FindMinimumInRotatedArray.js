/*
  Smallest number in a Sorted Rotated Array

  TC => O(log N)
  SC = O(1)
*/
const findKRotation = (nums) => {
  let n = nums.length;

  let low = 0;
  let high = n - 1;
  let minimum = Number.MAX_SAFE_INTEGER;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);

    if (nums[low] <= nums[high]) {
      minimum = Math.min(minimum, nums[low]);
      break;
    }

    /*
      find the sorted side to shrink
    */
    if (nums[mid] <= nums[high]) {
      minimum = Math.min(minimum, nums[mid]);
      high = mid - 1;
    } else {
      minimum = Math.min(minimum, nums[low]);
      low = mid + 1;
    }
  }

  return minimum;
};
