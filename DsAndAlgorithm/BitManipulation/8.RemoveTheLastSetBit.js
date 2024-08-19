/* Remove the right most set bit 
  
   N = 16 
   1 0 0 0 0

   (when converting N - 1)
   N = 15 
   0 1 1 1 1

*/

const removeRightMostSetBit = (num) => {
  return num & (num - 1);
};
