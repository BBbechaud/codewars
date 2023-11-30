// Codewars Challenge 57 (Level 7kyu): Find the anonymous function

// Find the anonymous function in the given array and use the function to filter the array

// Input: Your input. First Parameter will be an array with an anonymous function somewhere in the lot, The second Parameter will be an array which you will filter using the anonymous function you find.

// Output: Your output. Output a filtered version of the second parameter using the function found in the first parameter.

const FindFunction = function(func, arr) {
    let useFunc = func.find((e) => typeof e === 'function')
    let result = arr.filter(useFunc)
    
    return result
  }


// Or in one line:

const FindFunction2 = (func, arr) => arr.filter(func.find(e => typeof e === 'function'))