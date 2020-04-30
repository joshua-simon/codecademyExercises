// 'countLetters' returns the number of times a letter appears in a string


const countLetters = (inputString, inputLetter) => {
    let count = 0
    let string = inputString.toLowerCase()
    let letter = inputLetter.toLowerCase()
    
    for (let i=0; i<string.length; i++) {
      if (string[i]===letter) {
         count ++
      }
    }
    return count
  }
  
  console.log(countLetters('Test', 't'))

// 'reverse' reverses the order of a string

const reverse = (string) => {
    newString = ''
    for (let i = string.length-1; i >=0;i--) {
      newString +=string[i]
    }
    return newString
  }


