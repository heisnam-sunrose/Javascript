// Find Sqrt of a number

/*
  Linear Search Way 
  TC => O(N)
*/

/*
  Optimal Solution
  TC => O(log N)
*/

const floorSqrt = (n) => {
  let low = 1;
  let high = n;
  let answer = low;

  while (low <= high) {
    let mid = low + ((high + low) >> 1);

    if (mid * mid <= n) {
      low = mid + 1;
      answer = mid;
    } else high = mid - 1;
  }

  return answer;
};
