// Codewars challenge 14 (Level 7 kyu): Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
    let length = s.length
    let middleIndex = Math.floor(length / 2)
    
    if(length % 2 === 1) {
      return s[middleIndex]
    } else {
      return s[middleIndex - 1] + s[middleIndex]
    }
   }