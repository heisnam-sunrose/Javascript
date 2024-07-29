/*
  Leaders in a array
  Leaders => everything on right must be smaller
*/

/*
  Naive Solution
  TC => O(N *N)
  SC => O(N)
*/

const leadersN = (nums) => {
  let leaders = [];
  for (let i = 0; i < nums.length; i++) {
    let isLeader = true;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        isLeader = false;
        break;
      }
    }

    if (isLeader === true) leaders.push(nums[i]);
  }

  return leaders;
};

/*
  Optimal Solution
 
  TC => O(N)
  SC => O(N)
*/

const leadersO = (nums) => {
  let n = nums.length;
  let leaders = [nums[n - 1]];
  // let currentLeader = Number.MIN_VALUE;
  let currentLeader = nums[n - 1];
  /*
    Traverse in the reverse order
    Memoize the leader
  */
  for (let i = n - 2; i > 0; i--) {
    if (nums[i] > currentLeader) {
      currentLeader = nums[i];
      leaders.push(currentLeader);
    }
  }
  return leaders.sort((a, b) => {
    return b - a;
  });
};
