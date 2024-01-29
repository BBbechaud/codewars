// Day 109 LeetCode 2215.(easy) Find the Difference of Two Arrays

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

const set1 = new Set(nums1);
const set2 = new Set(nums2);

const result1 = [...set1].filter(num => !set2.has(num));
const result2 = [...set2].filter(num => !set1.has(num));

return [result1, result2];