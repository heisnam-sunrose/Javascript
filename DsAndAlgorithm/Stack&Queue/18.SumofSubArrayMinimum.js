/*
  Naive Solution
*/
const sumOfSubarrayMin = (arr) => {
  const length = arr.length;
  const mod = Math.pow(10, 9) + 7;
  //   const mod = 1e9 + 7;
  let sum = 0;

  for (let i = 0; i < length; i++) {
    let min = arr[i];
    // all subArrays of i
    for (let j = i; j < length; j++) {
      min = Math.min(min, arr[j]);
      sum = (sum + min) % mod;
    }
  }

  return sum;
};

/*
  Optimized

  To compute the total sum of minimums across all sub arrays, for each element:

      Contribution = element * (left * right)

      left = index − previous smaller element (PSE)

      right = next smaller element (NSE) − index

      So, total sub arrays where the element is the minimum = left * right

  Optimization Insight:
      While popping from the stack:

      stack[top - 1] acts as the PSE of stack[top]

      Current index is the NSE of stack[top]

      This avoids explicitly computing PSE/NSE arrays.
  
*/

const sumOfSubarrayMinOp = (arr) => {
  const n = arr.length;
  const mod = 1e9 + 7;
  const stack = new Array(n);
  let top = -1;
  let result = 0;

  for (let index in arr) {
    while (top >= 0 && arr[stack[top]] > arr[index]) {
      const minIndex = stack[top--];

      const rightCount = index - minIndex;
      const leftCount = minIndex - (stack[top] || -1);
      // no of sub arrays with arr[minIndex] as minimum
      const subArraysCount = leftCount * rightCount;

      result = (result + ((subArraysCount * arr[minIndex]) % mod)) % mod;
    }

    stack[++top] = index;
  }

  while (top >= 0) {
    if (stack[top] == stack[top - 1]) {
      top--;
      continue;
    }

    const minIndex = stack[top--];
    const rightCount = n - minIndex;
    const leftCount = minIndex - (stack[top] || -1);
    // no of sub arrays with arr[minIndex] as minimum
    const subArraysCount = leftCount * rightCount;

    result = (result + ((subArraysCount * arr[minIndex]) % mod)) % mod;
  }

  return result;
};
