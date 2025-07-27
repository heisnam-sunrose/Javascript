// pse
const sumOfSubarrayMin = (arr) => {
  const n = arr.length;
  const mod = 1e9 + 7;
  const stack = new Array(n);
  let top = -1;
  let result = 0;

  for (let index in arr) {
    while (top >= 0 && arr[stack[top]] > arr[index]) {
      const minIndex = stack[top--];

      const rightCount = index - minIndex;
      const leftCount = minIndex - (top >= 0 ? stack[top] : -1);
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
    const leftCount = minIndex - (top >= 0 ? stack[top] : -1);
    // no of sub arrays with arr[minIndex] as minimum
    const subArraysCount = leftCount * rightCount;

    result = (result + ((subArraysCount * arr[minIndex]) % mod)) % mod;
  }

  return result;
};

// pge
const sumOfSubarrayMax = (arr) => {
  const n = arr.length;
  const mod = 1e9 + 7;
  const stack = new Array(n);
  let top = -1;
  let result = 0;

  for (let index in arr) {
    while (top >= 0 && arr[stack[top]] < arr[index]) {
      const maxIndex = stack[top--];

      const rightCount = index - maxIndex;
      const leftCount = maxIndex - (top >= 0 ? stack[top] : -1);
      // no of sub arrays with arr[minIndex] as minimum
      const subArraysCount = leftCount * rightCount;

      result = (result + ((subArraysCount * arr[maxIndex]) % mod)) % mod;
    }

    stack[++top] = index;
  }

  while (top >= 0) {
    if (stack[top] == stack[top - 1]) {
      top--;
      continue;
    }

    const maxIndex = stack[top--];
    const rightCount = n - maxIndex;
    const leftCount = maxIndex - (top >= 0 ? stack[top] : -1);
    // no of sub arrays with arr[minIndex] as minimum
    const subArraysCount = leftCount * rightCount;

    result = (result + ((subArraysCount * arr[maxIndex]) % mod)) % mod;
  }

  return result;
};

const SumOfSubarrayRanges = (arr) => {
  const mod = BigInt(1e9 + 7);
  const maxSum = sumOfSubarrayMax(nums);
  const minSum = sumOfSubarrayMin(nums);
  const diff = (maxSum - minSum + mod) % mod;
  return Number(diff);
};
