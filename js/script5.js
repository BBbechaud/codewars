// Codewars challenge 5 (Level 8kyu): Add Length

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Example(Input --> Output)
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

function addLength(str) {
    let words = str.split(' ')
    
    let result = words.map(function(word){
      let length = word.toString().length
      return word + ' ' + length;
    });
    return result
  }
console.log(addLength('apple ban'))