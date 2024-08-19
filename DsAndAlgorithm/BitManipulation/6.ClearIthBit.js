// Clear the ith Bit

const clearIthBit = (num, i) => {
  return num & ~(i << i);
};
