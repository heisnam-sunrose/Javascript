/*
  Steps
  ========================================================
  1. Divide the array until sub array has only one element 
  2. Merge sub array back

  TC => O(N * logN)
  SC = >  
*/

console.clear();
/*
  Merge 2 sorted arrays, arr[low .. mid], arr[mid + 1 .. high]
  TC => O(N)
  Sc => O(N)
*/
const merge = (arr, low, mid, high) => {
  let temp = [];
  let left = low;
  let right = mid + 1;

  // Push the elements to temporary array after sorting
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  // Push the remaining elements to the temporary array
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // Update the original array
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
};

/*
  Divide the array until sub array has only one element 
  TC => O(LogN) ( log(N) with base 2 )
*/
const divide = (arr, low, high) => {
  // Base condition
  if (low == high) return;

  let mid = parseInt((low + high) / 2);
  divide(arr, low, mid);
  divide(arr, mid + 1, high);
  merge(arr, low, mid, high);
};

const mergeSort = (arr, low, high) => {
  divide(arr, low, high);
  console.log(arr);
};

console.log(mergeSort([34, 12, 39, 4, 12, 5, 9, 12], 0, 7));
