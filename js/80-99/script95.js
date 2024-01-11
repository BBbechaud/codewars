// Day 95 LeetCode 58. (easy) Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    // trim white space & split into array
    let arr = s.trim().split(' ')
    // grab last index
    let lastWord = arr[arr.length-1]
    // return length of last word
    return lastWord.length
};

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.