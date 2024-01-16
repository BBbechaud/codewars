// Day 100 LeetCode 189. (medium) Rotate Array

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

var rotate = function(nums, k) {
     const n = nums.length;
    k = k % n; // handle cases where k is larger than the array length

    // Slice the array into two parts and swap them
    nums.unshift(...nums.splice(n - k, k));
};