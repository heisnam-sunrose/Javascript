/*
  TC => O(len(binaryNo))
  SC => O(1)
*/

const convertBinaryToDecimal = (binaryNo) => {
  let n = binaryNo.length - 1;
  let power2 = 1;
  let ans = 0;
  for (let i = n; i >= 0; i--) {
    if (binaryNo[i] === "1") {
      ans += power2;
    }

    power2 <<= 1; // power2 *= 2;
  }

  return ans;
};
