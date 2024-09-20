/*
  Merge 2 sorted arrays without an extra space
*/

/*
  Naive implementation
  // Similar to merge Sort 

  TC => O( m + n) + O(m + n)
  SC => O( m + n)
*/

const mergeN = (nums1, m, nums2, n) => {
  let sortedCombinedArray = [];
  let nums1Index = 0;
  let nums2Index = 0;

  // compare nums1 and nums2 elements and push them to sortedCombinedArray
  while (nums1Index < m && nums2Index < n) {
    if (nums1[nums1Index] < nums2[nums2Index]) {
      sortedCombinedArray.push(nums1[nums1Index]);
      nums1Index++;
    } else {
      sortedCombinedArray.push(nums2[nums2Index]);
      nums2Index++;
    }
  }

  // push left over nums1 elements to sortedCombinedArray
  while (nums1Index < m) {
    sortedCombinedArray.push(nums1[nums1Index]);
    nums1Index++;
  }

  //push left over nums2 elements to sortedCombinedArray

  while (nums2Index < n) {
    sortedCombinedArray.push(nums2[nums2Index]);
    nums2Index++;
  }

  // move sortedCombinedArray elements to nums1
  let index = 0;

  for (let i = 0; i < n + m; i++) {
    nums1[i] = sortedCombinedArray[i];
  }
};

/*
  Optimal implementation
  TC => O(min(m,n)) + 
*/
const mergeOp1 = (nums1, m, nums2, n) => {
  let nums1Index = m - 1,
    nums2Index = 0;

  // O(min(m,n)) + O(m*log m) + O(n*log n) + O(n)
  while (nums1Index > 0 && nums2Index < n) {
    /* 
    Swap nums1(right to left) and nums2( left to right),
    till nums1 is smaller than nums2(
    At this point nums1 is smaller than nums2)
    */
    if (nums1[nums1Index] < nums2[nums2Index]) break;

    [nums1[nums1Index], nums2[nums2Index]] = [
      nums2[nums2Index],
      nums1[nums1Index],
    ];
    nums1Index--;
    nums2Index++;
  }

  // O(m*log m)
  nums1.sort((a, b) => a - b);
  // O(n*log n)
  nums2.sort((a, b) => a - b);

  // O(n)
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[i - m];
  }
};

/*
  Optimal Solution Using Shell sort
  TC  =>  log(m+n) * O(m + n)
  SC => O(1)
*/

class MergeOp2 {
  merge(nums1, m, nums2, n) {
    // using shell sort
    let length = m + n;
    // log(m+n), base 2 
    for (let gap = Math.ceil(length / 2); gap > 0; gap = Math.ceil(gap / 2)) {
      let firstPointer = 0;
      let secondPointer = gap;
      // O(m+n)
      while (secondPointer < length) {
        // nums1, nums2
        if (firstPointer < m && secondPointer >= m) {
          this.swap(nums1, nums2, firstPointer, secondPointer - m);
        }
        // nums2, nums2
        else if (firstPointer >= m) {
          this.swap(nums2, nums2, firstPointer - m, secondPointer - m);
        }
        // nums1, nums1
        else {
          this.swap(nums1, nums1, firstPointer, secondPointer);
        }

        firstPointer++;
        secondPointer++;
      }

      // ensures to stop repetitive calculation of Maths.floor(1/2) == 1
      if (gap == 1) break;
    }

    for (let i = m; i < m + n; i++) {
      nums1[i] = nums2[i - m];
    }
  }

  swap(arr1, arr2, index1, index2) {
    if (arr1[index1] > arr2[index2]) {
      [arr1[index1], arr2[index2]] = [arr2[index2], arr1[index1]];
    }
  }
}
