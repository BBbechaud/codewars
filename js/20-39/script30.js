// Codewars Challenge 30 (Level 7kyu): Inspiring Strings

// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' // returns string value of white

// 'red blue gold' // returns gold

function longestWord(str){
    let arr = str.split(' ').sort(function(a,b) {
      return b.length-a.length
    })
    if (arr[0].length == arr[1].length) {
      return arr[1]
    } else {
       return arr[0]
    }
  }