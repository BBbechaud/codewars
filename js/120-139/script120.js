// Day 120 LeetCode 2723.(easy) Add Two Promises

// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

var addTwoPromises = async function(promise1, promise2) {
    // Wait for both promises to resolve and retrieve their values
   const [value1, value2] = await Promise.all([promise1, promise2]);
 
   // Return a new promise that resolves with the sum of the values
   return value1 + value2;
 };