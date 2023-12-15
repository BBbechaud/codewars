// Codewars Challenge 70 (Level 7kyu): Spoonerize Me

// A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

// In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

// "not picking" --> "pot nicking"

// Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment.

function spoonerize(words) {
    let arr = words.split(' ')
    let firstLetter1 = arr[0][0]
    let firstLetter2 = arr[1][0]
    
    const spoonerism = firstLetter2 + arr[0].slice(1) + ' ' + firstLetter1 + arr[1].slice(1);
 
    return spoonerism
 }