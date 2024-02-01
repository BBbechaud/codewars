// Day 112 LeetCode 1.(easy) Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

var twoSum = function(nums, target) {
    const numIndicesMap = {};
 
     for (let i = 0; i < nums.length; i++) {
         const complement = target - nums[i];
 
         //  if (complement in numIndices) - is another way to say this
         if (numIndicesMap.hasOwnProperty(complement)) {
             return [numIndicesMap[complement], i];
         }
 
         numIndicesMap[nums[i]] = i;
     }
     return null;
 };