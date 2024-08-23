/*
  XOR of numbers in a given range
  TC => O(N)
*/

const findXor = (N) => {
  switch (N % 4) {
    case 1:
      return 1;
    case 2:
      return N + 1;
    case 3:
      return 0;
    case 0:
      return N;
    default:
  }
};

const findXorInRange = (left, right) => {
  return findXor(left - 1) ^ findXor(right);
};
