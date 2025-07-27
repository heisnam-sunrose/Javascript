/*
  Each row is treated as the base of a histogram.

  heights[j] stores the prefix sum above that column.

  For each row's histogram, we find the largest rectangle.

*/
const maximalRectangleMatrix = (matrix) => {
  if (!matrix.length || !matrix[0].length) return 0;

  const n = matrix.length; // rows
  const m = matrix[0].length; // columns
  const heights = Array(m).fill(0);
  let maxArea = 0;

  // loop through the rows
  for (let i = 0; i < n; i++) {
    // Build histogram for this row
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        heights[j] += 1;
      } else {
        heights[j] = 0;
      }
    }

    maxArea = Math.max(maxArea, largestRectangleHistogramOp(heights));
  }
  return maxArea;
};
