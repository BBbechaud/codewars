// Day 111 LeetCode 242.(easy) Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

if (s.length !== t.length) return false;

const charMap = Array(26).fill(0);

for (let i = 0; i < s.length; i++) {
    charMap[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    charMap[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
}

return charMap.every(count => count === 0);