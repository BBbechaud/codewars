// Day 97 LeetCode 125. (easy) Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// str => toLowercase, only letters, same forwards/backwards
// return true if palindrome

var isPalindrome = function(s) {
    // convert to lowercase and get rid of special characters
    let cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    // reverse the cleanedStr
    let reversed = cleanedStr.split('').reverse().join('')
    // if cleanedStr === reversed, true
    return cleanedStr === reversed
};

// console.log(isPalindrome('racecar'), true)
// console.log(isPalindrome('Hello my name is'), false)