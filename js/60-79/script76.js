// Codewars Challenge 76 (Level 7kyu): Array - squareUp b!

// Given an integer n greater than or equal to 0, create and return an array with the following pattern:

// squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) => [0, 1, 2, 1]
// squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]

function squareUp(n){
    const result = []
    for (let i=1; i<= n; i++){
      for (let j=1; j<=n; j++){
         if (j > n - i) {
         result.push(n - j + 1);
       } else {
         result.push(0);
        }
      }
    }
   return result
 }