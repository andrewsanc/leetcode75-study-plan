// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Solution #1 Brute Force - Space(O(n)), Time(O(n))
function runningSumBrute(nums) {
  let runningSum = 0;
  return nums.map((num) => (runningSum += num));
}

// Solution #2 Optimal - Space(O(1)), Time(O(n))
function runningSumOptimal(nums) {
  let rollingSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let summedNumber = nums[i] + rollingSum;
    nums[i] = summedNumber;
    rollingSum = summedNumber;
  }
  return nums;
}
