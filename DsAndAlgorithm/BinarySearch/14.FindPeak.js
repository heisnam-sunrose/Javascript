/*
  Naive Solution
  ================= 
  TC => O(N)
  SC => O(1)
*/

const peak = (nums) => {
  let n = nums.length;

  // the must condition
  if (n === 0) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[n - 1] > nums[n - 2]) return n - 1;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) return nums[i];
  }

  return -1;
};

/*
  Optimal Solution 
  =================
   TC => O(log N)
   SC => O(1)
*/

const peakOp = (nums) => {
  let n = nums.length;

  // the must condition
  if (n === 0) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[n - 1] > nums[n - 2]) return n - 1;

  let low = 1;
  let high = n - 2;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);

    if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) return mid;

    // mid is on the increasing curve
    if (nums[mid] < nums[mid - 1]) low = mid + 1;
    // mid is on the descending curve
    else high = mid - 1;
  }

  return -1;
};
