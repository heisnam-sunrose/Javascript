/*
  First and last occurrence

*/

const firstOccurrence = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  if (nums[low] === target) return low;
  if (nums[high] < target) return -1;

  let answer = -1;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);

    if (nums[low] === target) return low;

    if (nums[mid] === target) {
      answer = mid;
      high = mid - 1;
    }
    if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return answer;
};

const secondOccurrence = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let rightIndex = -1;

  if (nums[high] === target) return high;
  if (nums[low] > target) return -1;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);

    if (nums[high] === target) return high;

    if (nums[mid] === target) {
      low = mid + 1;
      rightIndex = mid;
    } else if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return rightIndex;
};

const searchRange = (nums, target) => {
  let leftIndex = this.leftIndex(nums, target);

  if (leftIndex == -1) return [-1, -1];
  return [this.leftIndex(nums, target), this.rightIndex(nums, target)];
};
