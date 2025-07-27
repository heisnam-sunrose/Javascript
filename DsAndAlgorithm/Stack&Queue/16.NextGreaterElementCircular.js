/*
  Next greater element with circular Array
*/

const nextGreaterElementCircularV2 = (arr) => {
  const length = arr.length;
  const answer = new Array(length).fill(-1);
  for (let i = 0; i < length; i++) {
    /*
      circular array
      length = i + length
      index = j % length 

      for (let j = i + 1; j < i + length - 1; j++)
      This skips checking the last element
    */
    for (let j = i + 1; j < i + length; j++) {
      const index = j % length;
      if (arr[index] > arr[i]) {
        answer[i] = arr[index];
        break;
      }
    }
  }
  return answer;
};

/*
  for NGE always use decreasing monotonic stack
  for next smaller elements always use increasing monotonic stack
*/
const nextGreaterElementV2 = (arr) => {
  const length = arr.length;
  const answer = new Array(length).fill(-1);
  const stack = [];

  for (let i = 2 * length - 1; i >= 0; i--) {
    index = i % length;
    while (stack.length && arr[index] >= stack[stack.length - 1]) {
      stack.pop();
    }

    if (stack.length) {
      answer[index] = stack[stack.length - 1];
    }

    stack.push(arr[index]);
  }

  return answer;
};
