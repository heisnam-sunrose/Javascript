/*
  Previous Smaller Elements Index

  Why this is faster:

  Avoids push and pop, which are function calls.

  Uses raw index manipulation with a top pointer (like in C-style stacks).

  Avoids internal JS engine array resizing for stack.
*/

const getPreviousSmallerIndices = (arr) => {
  const n = arr.length;
  const stack = new Array(n); // Pre-size to avoid resizing
  let top = -1;
  const result = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    while (top >= 0 && arr[stack[top]] > arr[i]) {
      top--;
    }

    if (top >= 0) result[i] = stack[top];

    stack[++top] = i;
  }

  return result;
};

/*
   Next Smaller Elements Index
*/
const getNSEIndex = () => {
  const stack = new Array(n); // Pre-size to avoid resizing
  let top = -1;
  const result = new Array(n).fill(n);

  for (let i = n - 1; i >= 0; i--) {
    while (top >= 0 && heights[stack[top]] >= heights[i]) {
      top--;
    }

    if (top >= 0) result[i] = stack[top];

    stack[++top] = i;
  }

  return result;
};
