// Codewars Challenge 87 (Level 7kyu): Frank's Sticky Calculator

// Frank just bought a new calculator. But, this is no normal calculator. This is a 'Sticky Calculator.

// Whenever you add add, subtract, multiply or divide two numbers the two numbers first stick together:

// For instance:

// 50 + 12 becomes 5012
// and then the operation is carried out as usual:

// (5012) + 12 = 5024
// Task
// It is your job to create a function which takes 3 parameters:

// stickyCalc(operation, val1, val2)
// which works just like Frank's sticky calculator

// Some Examples
// stickyCalc('+', 50, 12)     // Output: (5012 + 12) = 5024
// stickyCalc('-', 7, 5)       // Output: (75 - 5) = 70
// stickyCalc('*', 13, 20)     // Output: (1320 * 20 ) = 26400
// stickyCalc('/', 10, 10)     // Output: (1010 / 10) = 101
// Note
// The calculator only works for positive integers only.
// The calculator rounds any non-integer before operating.
// The calculator rounds any output to nearest integer.

function stickyCalc (operation, val1, val2){
    val1 = Math.round(val1)
    val2 = Math.round(val2)
    stickyNum = parseInt(val1.toString() + val2.toString());
    switch (operation){
      case "+": result = val3 + val2; break;
      case "-": result = val3 - val2; break;
      case "*": result = val3 * val2; break;
      case "/": result = val3 / val2; break;
    }
    return Math.floor(result);
}