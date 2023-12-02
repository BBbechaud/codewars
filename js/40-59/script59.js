// Codewars Challenge 59 (Level 7kyu): Is it a vowel on this position?

// Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.

// A few cases:

// {
// checkVowel('cat', 1)  ->   true // 'a' is a vowel
// checkVowel('cat', 0)  ->   false // 'c' is not a vowel
// checkVowel('cat', 4)  ->   false // this position doesn't exist
// }
// P.S. If n < 0, return false

function checkVowel(string, position) {  
    if (position < 0) {
        return false;
    }

    const char = string.charAt(position).toLowerCase();

    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
}

// In one line

const checkVowel=(s,p)=>'aeiouAEIOU'.includes(s[p])