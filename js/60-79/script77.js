// Codewars Challenge 76 (Level 7kyu): Sorting Arrays

// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

// Example:
// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

function sortArray(a1, a2) {
    const indexMap = {}
  
  a1.forEach((word, index) => {
    const firstLetter = word[0].toLowerCase()
    indexMap[firstLetter] = index
  })
  return a2.sort((word1, word2) =>
    indexMap[word1[0].toLowerCase()] - indexMap[word2[0].toLowerCase()])
}