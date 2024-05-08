console.clear();

const naivePartition = (arr, low, high) => {
  let pivot = arr[high];
  let temp = [];
  let pivotIndex;

  // swap the pivot with last element
  //   [arr[pivot], arr[high]] = [arr[high], arr[pivot]];

  for (let i = low; i <= high; i++) {
    if (arr[i] <= pivot) {
      temp.push(arr[i]); 
    }
  }

  pivotIndex = temp.length - 1 + low;

  for (let i = low; i < high; i++) {
    if (arr[i] > pivot) {
      temp.push(arr[i]);
    }
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  // console.log(temp, arr, pivotIndex);
  //   console.log(arr, pivotIndex, temp);
  return pivotIndex;
};

const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    let partitionIndex = naivePartition(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
  return arr;
};

// console.log(quickSort([34, 12, 39, 4, 12, 5, 9, 12]));
console.log(quickSort([3, 2, 1, 78, 9798, 97]));

// console.log(partition([34, 12, 39, 4, 12, 5, 9, 12], 0, 7));
