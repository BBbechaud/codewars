// Codewars Challenge 75 (Level 7kyu): CompoundArray

// You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

// Input - {1,2,3,4,5,6} and {9,8,7,6} 
// Output - {1,9,2,8,3,7,4,6,5,6}

function compoundArray(a, b) {
    const result = []
    const minLength = Math.min(a.length, b.length)
 
    for (let i = 0; i < minLength; i++) {
        result.push(a[i], b[i])
    }
 
    if (a.length > minLength) {
        result.push(...a.slice(minLength))
    } else if (b.length > minLength) {
        result.push(...b.slice(minLength))
    }
 
    return result
 }