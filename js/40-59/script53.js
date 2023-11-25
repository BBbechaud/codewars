// Codewars Challenge 53 (Level 7kyu): Driving School Series #1

// Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

// At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

// Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.

// Example: [10,10,10,18,20,20] --> 12

function passed (list) {  
    let nonePassed = list.every((score) => score > 18) 
    if (nonePassed) {
         return "No pass scores registered." 
    } else {
    let didPass = list.filter((score) => (score < 19))                         
    let reduced = didPass.reduce((a,b) => a+b, 0)
    let avg = reduced / (didPass.length)
    return Math.round(avg)
    }
  }

// More concise solution:

function passed (list) { 
   let result = list.filter(score => score <= 18);
   return result.length ? Math.round(result.reduce((a, b) => a + b, 0)/result.length) : 'No pass scores registered.'
} 