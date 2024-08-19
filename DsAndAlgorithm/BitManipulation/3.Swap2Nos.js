/*
  Swap 2 numbers 
*/
const swap2Nos = (num1, num2) => {
  num1 = num1 ^ num2;
  num2 = num1 ^ num2;
  num1 = num1 ^ num2;

  return [num1, num2];
};

console.log(swap2Nos(1, 2));
