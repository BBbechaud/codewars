// Codewars Challenge 46 (Level 7kyu): ReOrdering

// There is a sentence which has a mistake in its ordering.

// The part with a capital letter should be the first word.

// Please build a function for re-ordering

// Examples
// >>> re_ordering('ming Yao')
// 'Yao ming'

// >>> re_ordering('Mano donowana')
// 'Mano donowana'

// >>> re_ordering('wario LoBan hello')
// 'LoBan wario hello'

// >>> re_ordering('bull color pig Patrick')
// 'Patrick bull color pig'

function reOrdering(text){
    let arr = text.split(' ')
    if (arr[0].charAt(0) === arr[0].charAt(0).toUpperCase()){
          return arr.join(' ')
    } else arr.forEach((word) => {
      if (word.charAt(0) === word.charAt(0).toUpperCase()){
        let index = arr.indexOf(word)
        arr.splice(index,1)
        arr.unshift(word)
        return arr
      }
    })
      return arr.join(' ')
  }