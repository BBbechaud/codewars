// Codewars Challenge 31 (Level 7kyu): How Many Unique Consonants?

// Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

// Consonants are letters used in English other than "a", "e", "i", "o", "u".

// Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

// Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.

function countConsonants(str) {
  
    const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/g
  
    // Use a Set to store unique consonants
    const uniqueConsonants = new Set(str.toLowerCase().match(consonantRegex));
  
    // Return the size of the Set, which is the count of unique consonants
    return uniqueConsonants.size;
  }
