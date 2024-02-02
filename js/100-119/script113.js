// Day 113 LeetCode 219.(easy) Contains Duplicate II

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true

var containsNearbyDuplicate = function(nums, k) {
    const numIndexMap = {};

 for (let i = 0; i < nums.length; i++) {
     const currentNum = nums[i];

     if (numIndexMap.hasOwnProperty(currentNum) && Math.abs(i - numIndexMap[currentNum]) <= k) {
         return true;
     }

     // Update the last index where the current number appeared
     numIndexMap[currentNum] = i;
 }

 return false; 
};