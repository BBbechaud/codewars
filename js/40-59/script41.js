// Codewars Challenge 41 (Level 7kyu): Fruit string calculator

// You are given a string of words and numbers. Extract the expression including:

// the operator: either addition ("gains") or subtraction ("loses")
// the two numbers that we are operating on
// Return the result of the calculation.

// Notes:

// "loses" and "gains" are the only two words describing operators
// No fruit debts nor bitten apples = The numbers are integers and no negatives
// Examples
// "Panda has 48 apples and loses 4"  -->  44
// "Jerry has 34 apples and gains 6"  -->  40

const calculate=s=>s.match(/\d+/g).reduce((a,b)=>s.indexOf("loses")!=-1 ? +a - +b : +a + +b);
