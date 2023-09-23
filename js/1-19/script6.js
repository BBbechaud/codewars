// Codewars Challenge 6 (Level 7kyu): Alternate Case

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      switch (char) {
        case char.toUpperCase():
          result += char.toLowerCase();
          break;
        case char.toLowerCase():
          result += char.toUpperCase();
          break;
        default:
          result += char;
      }
    }
    return result;
  }