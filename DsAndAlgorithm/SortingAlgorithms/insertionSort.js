console.clear();

const insertionSort = (arr) => {
  length = arr.length - 1;
  for (let i = 0; i <= length; i++) {
    let j = i;
    while ((j > 0) & (arr[j] < arr[j - 1])) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j -= 1;
    }
  }
  return arr;
};

console.log(insertionSort([34, 12, 39, 4, 12, 5, 9, 12]));

// time Complexity
// Worst case O(N^2)
// Average case O(N^2)
// Best case O(N)
