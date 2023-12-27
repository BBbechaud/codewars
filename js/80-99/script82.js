// Codewars Challenge 82 (Level 7kyu): Check three and two

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

function checkThreeAndTwo(array) {
    const countMap = new Map();

    array.forEach(element => {
        countMap.set(element, (countMap.get(element) || 0) + 1);
    });

    return [...countMap.values()].includes(3) && [...countMap.values()].includes(2);
}