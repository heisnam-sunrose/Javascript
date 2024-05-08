console.clear();

const selectionSort = (arr) => {
  let length = arr.length - 1;

  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = 1; j < length; j++) {
      if (arr[j] < arr[i]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }8
  }
  return arr;
};

console.log(selectionSort([34, 12, 39, 4, 12, 5, 9, 12]));

// time Complexity
// Worst case O(N^2)
// Average case O(N^2)
// Best case O(N^2)
