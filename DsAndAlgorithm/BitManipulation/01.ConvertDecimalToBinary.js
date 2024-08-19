/*
  TC => O(LogN(base2))
  SC => O(1)
*/

const convertDecimalToBinary = (num) => {
  let binaryNo = "";
  while (num != 1) {
    binaryNo = (num % 2).toString() + binaryNo;
    num = num >> 1; // num = Math.floor(num / 2);
    if (num === 1) binaryNo = 1 + binaryNo;
  }
  return binaryNo;
};
 


