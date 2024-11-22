/* 
   Related problem
   ===================
   Power Exponentiation 
   n is even
   n is odd

   n can be -ve or +ve.
   x could be a float number


   TC => O(log n(base 2)), most of the time n might be even
*/

const pow = (x, n) => {
  if (x == 0 || x == 1) return x;

  let answer = 1;

  // m is for storing the sign of n
  let m = n;

  // n is -ve
  if (n < 0) n = Math.abs(n);

  while (n > 0) {
    /*
      n is odd
      x^n = x *(x^ n - 1)
    */
    if ((n & 1) == 1) {
      answer *= x;
      n = n - 1;
    } else {
      /*
        n is even
        x^n = (x^2)*n/2 
      */
      n = n >> 1;
      x *= x;
    }
  }

  if (m < 0) answer = 1 / answer;

  return answer;
};

// Find the Nth root of an Integer

const nthRoot = (n, m) => {
  let low = 0;
  let high = n;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);
  }

  return -1;
};
