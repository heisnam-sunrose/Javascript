/*
  Given a sorted array, nums[] and a number target, 
  find the number of occurrences of target in nums[]. 

  Solution: (2nd occurrence index - 1st occurrence index) + 1
*/

class Solution {
  firstOccurrence(nums, target) {
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
  }

  secondOccurrence(nums, target) {
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
  }

  // Function to count the occurrences of x in the array.
  countFreq(arr, target) {
    let first = this.firstOccurrence(arr, target);

    if (first === -1) return 0;
    return this.secondOccurrence(arr, target) - first + 1;
  }
}
