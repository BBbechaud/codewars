// Codewars Challenge 22 (Level 7kyu): Unscrambled eggs

// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

// Example:
// unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"\\

function unscrambleEggs(word){
    return word.replace(/egg/g, '')
  }