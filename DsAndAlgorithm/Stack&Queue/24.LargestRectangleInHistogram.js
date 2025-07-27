/*
  area(i) = arr[i] * ( nse - pse -1)

  At any bar of the histogram, we need to know the nse and pse,
  to determine the width of the rectangle

  Assumption: 

  if no nse found, the nse is length of the heights
  if no pse found, the pse is -1

*/

/*
   Naive approach

   TC => O(2N)(nse) + O(2N)(pse) + O(N)(area calculation)
   SC => O(2N)(nse) + O(2N)(pse)
*/
const largestRectangleHistogram = (heights) => {
  const n = heights.length;

  // 1. Previous Smaller Element (PSE)
  const getPSEIndex = () => {
    const stack = new Array(n); // Pre-size to avoid resizing
    let top = -1;
    const result = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
      while (top >= 0 && heights[stack[top]] >= heights[i]) {
        top--;
      }

      if (top >= 0) result[i] = stack[top];

      stack[++top] = i;
    }

    return result;
  };

  // 2. Next Smaller Element (NSE)
  const getNSEIndex = () => {
    const stack = new Array(n);
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

  const pse = getPSEIndex();
  const nse = getNSEIndex();

  // 3. Calculate Maximum Area
  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    const width = nse[i] - pse[i] - 1;
    const area = heights[i] * width;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};

/*
  Optimal Approach
  
  we calculate nse or pse, while popping out the element
  TC => O(2n)
  SC => O(N) 

*/

const largestRectangleHistogramOp = (heights) => {
  const n = heights.length;
  const st = new Array(n);
  let top = -1;
  let maxArea = 0;
  // Calculate pse

  for (let i = 0; i < n; i++) {
    while (top >= 0 && heights[st[top]] >= heights[i]) {
      /*
        we have found the nse and pse of the heights[st[top]]  
      */
      const height = heights[st[top--]];
      let nseI = i;
      let pseI = top >= 0 ? st[top] : -1;
      const width = nseI - pseI - 1;
      maxArea = Math.max(maxArea, height * width);
    }

    st[++top] = i;
  }

  // Final cleanup: process remaining elements
  while (top >= 0) {
    let height = heights[st[top--]];
    let nseI = n;
    let pseI = top >= 0 ? st[top] : -1;
    const width = nseI - pseI - 1;
    maxArea = Math.max(maxArea, height * width);
  }

  return maxArea;
};
