/*
   Given a sorted array of distinct integers and a target value, 
   return the index if the target is found. If not, 
   return the index where it would be if it were inserted in order.

   Lower bound nums[i] >= target
*/

const searchInsert = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  if (nums[high] < target) return nums.length;

  while (low <= high) {
    //minor optimization
    if (nums[low] >= target) return low;

    let mid = low + ((high - low) >> 1);
    if (nums[mid] >= target) high = mid - 1;
    else low = mid + 1;
  }
  return low;
};
