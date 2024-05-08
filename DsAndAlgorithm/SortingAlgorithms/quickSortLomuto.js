console.clear();

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

const lomutoPartition = (arr, low, high) => {
  let pivot = arr[high];
  let i = low;
  // move all the smaller to the left
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }

  swap(arr, i, high);
  return i;
};
const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    let partitionIndex = lomutoPartition(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
  return arr;
};

console.log(quickSort([34, 12, 39, 4, 12, 5, 9, 12]));
console.log(quickSort([3, 2, 1, 78, 9798, 97]));
