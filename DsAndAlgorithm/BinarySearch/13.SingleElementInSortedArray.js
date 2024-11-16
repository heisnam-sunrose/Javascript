/*
  Naive Solution
  
  TC => O(N)
  SC = O(1)

*/

const singleNonDuplicate = (nums) => {
  let n = nums.length;

  if (n === 0) return nums[0];
  if (nums[0] !== nums[1]) return nums[0];
  if (nums[n - 2] !== nums[n - 1]) return nums[n - 1];

  for (let i = 1; i < n - 1; i++) {
    if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) return nums[i];
  }

  return -1;
};

/*
  Optimal Solution
  
  TC => O(log N)
  SC = O(1)

*/

const singleNonDuplicateOp = (nums) => {
  let n = nums.length;

  if (n == 0) return nums[0];
  if (nums[0] !== nums[1]) return nums[0];
  if (nums[n - 2] !== nums[n - 1]) return nums[n - 1];

  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);

    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return mid;

    if (mid % 2 !== 0 && nums[mid] != nums[mid - 1]) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
};
