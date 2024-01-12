// Day 96 LeetCode 14. (easy) Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    // Sort the array to have the shortest and longest strings at the beginning and end
   strs.sort();

   // Take the first and last strings
   const firstStr = strs[0];
   const lastStr = strs[strs.length - 1];

   // Find the common prefix between the first and last strings
   let i = 0;
   while (i < firstStr.length && firstStr[i] === lastStr[i]) {
       i++;
   }

   // Return the common prefix
   return firstStr.substring(0, i);
};