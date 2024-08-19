/*
  Count the number of set bits
  TC  => O(log(base 2)N)
*/ 

const countNumberOfSetBit = (num) => {
  let count = 0;
  while (num > 1) {
    /*
     The last bit of the odd number is always one
     The odd check logic
     num % 2 == 1 // num & 1
    */
    count += num & 1;
    num = num >> 1;
  }

  if (num == 1) count++;
  return count;
};

/*
  Alternative implementation

  keep turning off the right most bit until the number become 0 
  TC => O(no of set bits) // O(31)

*/

const a = () => {
  let count = 0;
  while (num != 0) {
    count++;
    //turning off the right most bit
    num = num & (num - 1);
  }

  return count;
};

