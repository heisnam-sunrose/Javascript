/* 
  Check if the number is a power of 2

  N = 16 Yes 

  N = 13 No 

  N = 32 Yes

  if there is only one set bit, then the number is a power of 2
*/

const isNumberPowerOfTwo = (num) => {
  return (num & (num - 1)) == 0;
};
