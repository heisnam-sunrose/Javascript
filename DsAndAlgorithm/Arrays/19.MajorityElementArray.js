/*
  Given an integer array nums of size n. 
  Return all elements which appear more than n/3 times in the array. 
  The output can be returned in any order.
*/

/*
  Naive implementation
  TC => O(N * N)
*/

const majorityArrayWithNBy2Occurrence = (nums) => {
  let n = nums.length;
  let frequency = Math.floor(nums / 3);
  let majorityArray = [];

  for (let i = 0; i < n; i++) {
    // if (majorityArray.length === 0 && majorityArray.at(-1) !== nums[i]) {
    let count = 0;
    for (let j = i; j < n; j++) if (nums[i] === nums[j]) count++;
    if (count > frequency) majorityArray.push(nums[i]);
    // }
    if (majorityArray.length === 2) break;
  }
  return majorityArray;
};

/*
  Better Approach
  Hashing => (Element, count)
  TC => O(N)
  SC => O(N)
*/

const majorityArrayWithNBy2OccurrenceH = (nums) => {
  let n = nums.length;
  let frequency = Math.floor(n / 3);
  let majorityArray = [];
  let majorityCountMap = new Map();

  for (let i = 0; i < n; i++) {
    majorityCountMap.set(nums[i], (majorityCountMap.get(nums[i]) || 0) + 1);
    console.log(majorityCountMap.get(nums[i]), nums[i], frequency);

    if (majorityCountMap.get(nums[i]) > frequency) {
      console.log(frequency);
      majorityArray.push(nums[i]);
    }

    if (majorityArray.length == 2) break;
  }

  return majorityArray.sort((a, b) => a - b);
};

/*
  Optimal Approach

*/

const op = (nums) => {
  let n = nums.length;
  let el1;
  let el2;
  let count1 = 0;
  let count2 = 0;

  for (i = 0; i < n; i++) {
    if (count1 == 0 && el2 !== nums[i]) {
      count1 = 1;
      el1 = nums[i];
    } else if (count2 == 0 && el1 !== nums[i]) {
      count2 = 1;
      el2 = nums[i];
    } else if (nums[i] == el1) {
      count1++;
    } else if (nums[i] == el2) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  // Confirm the elements

  let majorityArray = [];
  count1 = 0;
  count2 = 0;
  for (let i = 0; i < n; i++) {
    if (el2 === nums[i]) count2++;
    if (el1 === nums[i]) count1++;
  }

  let freq = Math.floor(n / 3);

  if (count1 > freq) majorityArray.push(el1);
  if (count2 > freq) majorityArray.push(el2);
  return majorityArray;
};
