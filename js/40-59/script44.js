// Codewars Challenge 44 (Level 7kyu): Alternate capitalization

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(str) {
    let result1 = '';
    let result2 = '';
  
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        result1 += str[i].toUpperCase();
        result2 += str[i].toLowerCase();
      } else {
        result1 += str[i].toLowerCase();
        result2 += str[i].toUpperCase();
      }
    }
  
    return [result1, result2];
  }