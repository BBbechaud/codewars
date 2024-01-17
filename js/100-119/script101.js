// Day 101 LeetCode 55. (medium) Jump Game

// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

var canJump = function(nums) {
    let max = 0;

    for(let i =0; i<nums.length;i++){
        max = Math.max(nums[i] + i,max);
        if(max >= nums.length-1) return true;
        if(max == i && nums[i] == 0) return false;
    }

    return false;
};