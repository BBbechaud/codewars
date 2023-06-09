// Codewars Challenge 7 (Level 7kyu): Find the index of the second occurrence of a letter in a string

// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

function secondSymbol(str, letter) {
    return str.indexOf(letter, str.indexOf(letter) + 1);
  }

  console.log(secondSymbol('test case', 't'))
  console.log(secondSymbol('test case', 'a'))