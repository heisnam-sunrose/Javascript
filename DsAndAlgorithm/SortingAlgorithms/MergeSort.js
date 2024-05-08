console.clear();
const merge = (arr, low, mid, high) => {
  let temp = [];
  let left = low;
  let right = mid + 1;
  while (low <= mid && left <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left += 1;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
  return arr;
};

const mergeSort = (arr, low, high) => {
  let mid = (low + high) / 2;
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
  return arr;
};

console.log(mergeSort([34, 12, 39, 4, 12, 5, 9, 12], 0, 8));
