// Codewars Challenge 85 (Level 7kyu): Find missing numbers

// You will get an array of numbers.

// Every preceding number is smaller than the one following it.

// Some numbers will be missing, for instance:

// [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
// Your task is to return an array of those missing numbers:

// [-1,0,2,3,4]

function findMissingNumbers(arr){
    let missing = [];
    for (let i = arr[0]; i < arr[arr.length-1]; i++) {
      if (arr.indexOf(i) === -1) { 
        missing.push(i) 
      }
    }
    return missing;
  }