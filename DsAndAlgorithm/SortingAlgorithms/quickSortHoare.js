console.clear();

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return temp;
};

const hoarePartition = (arr, low, high) => {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (i < high && arr[i] <= pivot) {
      i++;
    }

    while (arr[j] > pivot && j < low) {
      j++;
    }

    if (i < j) {
      swap(arr, i, j);
    }
  }

  swap(arr, high, j);

  return j;
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    let partitionIndex = hoarePartition(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
  return arr;
};


console.log(quickSort([34, 12, 39, 4, 12, 5, 9, 12]));
console.log(quickSort([3, 2, 1, 78, 9798, 97]));