/*
   Minimum Bit Flips to Convert Number
   TC =>  O(no of set bits)
   alternate => log(base 2 ) start ^ goal
*/
const minimumBitFlip = (start, goal) => {
  let xor = start ^ goal;
  let count = 0;

  while (xor != 0) {
    count++;

    xor = xor & (xor - 1);
  }

  return count;
}; 
