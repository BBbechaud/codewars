// Codewars Challenge 24 (Level 7kyu): Find the stray number

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
    const uniqueNumbers = numbers.filter((num, index, array) => array.indexOf(num) === array.lastIndexOf(num));
   return uniqueNumbers[0];
 }