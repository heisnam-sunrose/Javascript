/*
   at any point i, for i = 0 to n-1

   summation of min(leftMax, rightMax) - arr[i] 

   prefixMax[N] & suffixMax[N] , Ni is the size of the array.

   TC => O(N) + O(N) + O(N) = O(3N)
   SC => O(N) + O(N) => O(2N)
*/

class Solution {
  constructor(groundLevelArr) {
    this._groundLevelArr = groundLevelArr;
    this._length = groundLevelArr.length;
    this._prefixMax = this._computePrefixMax();
    this._suffixMax = this._computeSuffixMax();
  }

  totalWater() {
    let total = 0;
    for (let i = 0; i < this._length; i++) {
      let maxLeft = this._prefixMax[i];
      let maxRight = this._suffixMax[i];
      if (
        this._groundLevelArr[i] < maxLeft &&
        this._groundLevelArr[i] < maxRight
      ) {
        total += Math.min(maxLeft, maxRight) - this._groundLevelArr[i];
      }
    }
    return total;
  }

  _computePrefixMax() {
    /*
      We can memorize this as we travel from left to right
      So we can skip this code to optimize the SC
    */

    let arr = new Array(this._length);
    arr[0] = this._groundLevelArr[0];

    for (let i = 1; i < this._length; i++) {
      arr[i] = Math.max(this._groundLevelArr[i], arr[i - 1]);
    }
    return arr;
  }

  _computeSuffixMax() {
    let arr = new Array(this._length);
    arr[this._length - 1] = this._groundLevelArr[this._length - 1];

    for (let i = this._length - 2; i >= 0; i--) {
      arr[i] = Math.max(arr[i], this._groundLevelArr[i + 1]);
    }
    return arr;
  }
}

/*
  Sliding window Approach 

*/

const waterTrapped = (height) => {
  const length = height.length;
  let left = 0;
  let right = length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let total = 0;

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    /*
        Math.min(maxLeft, maxRight) - this._groundLevelArr[i];
        At any point we do not need both maxLeft and maxRight,
        only smaller one is the required
     */
    if (leftMax < rightMax) {
      total += leftMax - height[left];
      left++;
    } else {
      total += leftMax - height[right];
      right--;
    }
  }

  return total;
};
