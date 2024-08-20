/*
   Divide Two Integers without using Multiplication and Division Operators
   ======================================================================

   Example: 

   dividend = 22 [ -2 power 31, 2 power 31 -1 ] 
   divisor = 3 
   quotient = 7 
   remainder = 1
   Return quotient only

   7 = 111 ( 2^2 + 2^1 + 2^0)
   
   The logic is keep removing the largest 2^* until divisor > dividend 
   Sum of powers of 2 is the divisor 



*/

const divide = (dividend, divisor) => {
  if (dividend === divisor) return 1;

  let sign = 1;
  let answer = 0;
  let powerOf2 = 1;
  if (dividend < 0 && divisor > 0) sign = -1;
  if (dividend > 0 && divisor < 0) sign = -1;

  let numerator = Math.abs(dividend);
  let denominator = Math.abs(divisor);
  
  // TC => log(base 2) N 
  while (numerator >= denominator) {
    powerOf2 = 1;

    /*
       divisor * 2^count => divisor * (1 << count)
       TC => log(base 2) N
    */
    while (numerator >= denominator * powerOf2) {
      powerOf2 <<= 1;
    }
    
    // remove the extra left shift
    powerOf2 >>= 1;
    answer += powerOf2;
    numerator -= denominator * powerOf2;
  }

  if (sign > 0 && answer > Number.MAX_VALUE) return Number.MAX_VALUE;
  if (sign < 0 && answer > Number.MAX_VALUE) return Number.MIN_VALUE;

  return sign * answer;
};
