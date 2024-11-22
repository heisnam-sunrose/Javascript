/*
  Lower Bound -> 
    Smallest number in the array such that arr[index] >= target
*/

const lowerBound = (nums, x, low, high) => {
  if (low > high) return answer;

  let mid = low + ((high - low) >> 1);

  // minor optimization
  if (nums[low] >= x) return low;

  if (nums[mid] >= x) return lowerBound(nums, x, low, mid - 1);
    
  return lowerBound(nums, x,mid + 1, high);
};

const solution = (nums, x) => {
  let low = 0;
  let high = nums.length - 1;

  /*
    if x is greater than last element then, 
    lower bound does not exist
  */
  if (nums[high] < x) return nums.length;

  return lowerBound(nums, x, low, high);
};

class Solution {
  findLowerBound(nums, x) {
    let low = 0;
    let high = nums.length - 1;

    // return -1 or array size based onn question
    if (nums[high] < x) return nums.length;

    while (low <= high) {
      let mid = low + ((high - low) >> 1);

      // minor optimization
      if (nums[low] >= x) return low;

      if (nums[mid] >= x) {
        high = mid - 1;
      } else low = mid + 1;
    }

    return low;
  }
}

nums = [3, 5, 8, 15, 19];
n = 5;
x = 9;

console.log(solution(nums, x));
