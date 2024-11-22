// class Solution {
//   findUpperBound(arr, k) {
//     let low = 0;
//     let high = arr.length - 1;
//     let answer = -1;

//     while (low <= high) {
//       let mid = low + ((high - low) >> 1);

//       if (arr[mid] >= k) {
//         answer = mid;
//         high = mid - 1;
//       } else low = mid + 1;
//     }

//     return answer;
//   }
// }

class Solution {
  binarySearch(nums, target, low, high, answer) {
    if (low > high) return answer;

    let mid = low - ((high - 1) >> 1);
    if (nums[mid] > target) {
      answer = mid;
      return this.binarySearch(nums, target, low, mid - 1, answer);
    }
    return this.binarySearch(nums, target, mid + 1, high, answer);
  }

  upperBound(nums, x) {
    let answer = nums.length;
    let low = 0;
    let high = answer - 1;

    return this.binarySearch(nums, x, low, high, answer);
  }
}
