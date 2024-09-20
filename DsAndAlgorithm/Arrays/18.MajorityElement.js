// Majority Element occurring more than N/2 times

/*
  Naive Solution 

  2 for loops, with counter, return the element with largest count > N/2
  
  TC => O(N * N)

*/ 

/*
  Better Solutions

  Hashing( element, count)

  TC => O(N) 

  Sc => O(N)
*/

const majorityElement = (nums) => {
  let elementCount = new Map();
  let N = nums.length;
  /*
    TC => O(N * log N)
    log N => ordered map 
    1 => unordered map best case
    N => unordered map worst case
  */
  for (let i = 0; i < N; i++) {
    let count = elementCount.get(nums[i]);
    elementCount.set(nums[i], count++);
  }
  // TC => 0(N)
  elementCount.forEach((element, count) => {
    if (count === N / 2) return element;
  });

  return -1;
};

/*
  Optimal Solution
  Moore Voting Algorithm
  TC = > O(N) + O(N)
*/

const majorityElementMA = (nums) => {
  // Moore Voting Algorithm
  let n = nums.length;
  if (n == 1) return nums[0];

  let majorityElement;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (count === 0) {
      majorityElement = nums[i];
      count = 1;
    } else if (nums[i] === majorityElement) count++;
    else count--;
  }
  /*
    This step is required if the question does not confirm the existence of a majority element
  */
  let count1 = 0;
  for (let i = 0; i < count; i++) if (nums[i] === majorityElement) count1++;

  if (count1 === 0) return majorityElement;

  return -1;
};


