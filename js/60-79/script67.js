// Codewars Challenge 66 (Level 7kyu): Minimum to multiple

// Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.

// minimum(10, 6)  //= 2

// 10+2 = 12 which is a multiple of 6

function minimum(a, x) {
    const remainder = a % x;
    const addOrSubtract = Math.min(remainder, x - remainder);

    return addOrSubtract;
}
