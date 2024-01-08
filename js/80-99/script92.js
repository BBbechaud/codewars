// Day 92 LeetCode 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    nums.sort(); 
          
      let max_count = 1, result = nums[0]; 
      let curr_count = 1; 
          
      for (let i = 1; i < nums.length; i++) 
      { 
          if (nums[i] == nums[i - 1]) 
              curr_count++; 
          else
              curr_count = 1; 
           
          if (curr_count > max_count) 
          { 
              max_count = curr_count; 
              result = nums[i - 1]; 
          } 
      }      
    return result; 
};