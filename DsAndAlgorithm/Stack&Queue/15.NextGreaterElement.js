/*
   TC => O(N * N)
   SC => O(N)
*/
const nextLargerElementN = (arr) => {
  const length = arr.length;
  const result = new Array(length).fill(-1);
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] < arr[j]) {
        result[i] = arr[j];
        break;
      }
    }
  }
  return result;
};

/*
  using decreasing monotonic stack
   TC => O(N)
   SC => O(N)
*/
const nextGreaterElement = (arr) => {
  const length = arr.length;
  const answer = new Array(length).fill(-1);
  const stack = new StackImplementation();
  for (let i = length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && arr[i] >= stack.peek()) {
      stack.pop();
    }
    if (!stack.isEmpty()) answer[i] = stack.peek();

    stack.push(arr[i]);
  }
  return answer;
};

// Alternate solution

const nextLargerElement = (arr) => {
  const length = arr.length;
  const answer = new Array(length).fill(-1);
  const stack = [];

  for (let i = length - 1; i >= 0; i--) {
    while (stack.length && arr[i] >= stack[stack.length - 1]) {
      stack.pop();
    }

    if (stack.length) {
      answer[i] = stack[stack.length - 1];
    }

    stack.push(arr[i]);
  }

  return answer;
};

