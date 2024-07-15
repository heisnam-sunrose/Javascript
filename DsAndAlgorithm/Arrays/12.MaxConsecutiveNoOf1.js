/*
   Max Consecutive number of 1's in a binary array
   TC => O(N)
*/

const maxConsecutiveCount1 = (arr) => {
  let maxCount1 = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count += 1;
      maxCount1 = Math.max(count, maxCount1);
    } else {
      count = 0;
    }
  }

  return maxCount1;
};
