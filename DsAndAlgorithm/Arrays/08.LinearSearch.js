/*
  Linear Search
  Return First Index
*/

const index = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
};
