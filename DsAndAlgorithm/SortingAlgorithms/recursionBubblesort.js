console.clear();
const bubbleSort = (arr, n) => {
  if (n == 0) return;

  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  bubbleSort(arr, n - 1);
  return arr;
};

console.log(bubbleSort([5, 4, 3, 2, 1], 4));
