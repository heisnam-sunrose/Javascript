// Check if ith bit is set or not

const isIthBitSet = (num, i) => {
  return ((num >> i) & 1) > 0;

  //return (num & (1 << i)) > 0;
};

console.log(isIthBitSet(5, 3));
