console.clear();
const insertionSort = (arr, index) => {
  let i = index;
  if (i == arr.length) return;

  while ((i > 0) & (arr[i] < arr[i - 1])) {
    let temp = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = temp;
    i--;
  }
  insertionSort(arr, index + 1);
  return arr;
};

console.log(insertionSort([5, 4, 3, 2, 1], 0));
