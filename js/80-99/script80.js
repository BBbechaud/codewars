// Codewars Challenge 79 (Level 7kyu): Dinner Plans

// Compare the proposals with the following function:

// function commonGround(s1, s2)
// The parameters s1 and s2 are the strings representing what each of the generals said. You should output a string containing the words in s1 that also occur in s2.

// Each word in the resulting string shall occur once, and the order of the words need to follow the order of the first occurence of each word in s2.

// If they are saying nothing in common, kill both samurai and blame a ninja. (output "death")

function commonGround(s1, s2){
    const words1 = s1.split(' ')
    const words2 = s2.split(' ')
    const commonWords = words2.filter(word => words1.includes(word))
  
    if (commonWords.length === 0) {
      return 'death'
    }
    return commonWords.join(' ')
  }

//   Alternative method
  function commonGround(s1, s2){
    let a1 = s1.split(' ')
    let a2 = s2.split(' ')
    return a1.filter(i=> a2.includes(i)).join(' ') || 'death';
 }