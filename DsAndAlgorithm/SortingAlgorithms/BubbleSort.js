console.clear();

const bubbleSort = (arr) => {
  let length = arr.length - 1;
  for (let i = length; i >= 1; i--) {
    let didSwap = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        didSwap += 1;
      }
    }
    if (didSwap === 0) break;
  }
  return arr;
};

console.log(bubbleSort([34, 12, 39, 4, 12, 5, 9, 12]));
// time Complexity
// Worst case O(N^2)
// Average case O(N^2)
// Best case O(N)
 