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

//fizzbuzz

const fizzBuzz = () => {
  for (let i=0; i <=100; i++) {
    if (i%3===0 && i%5===0){
      console.log('FizzBuzz')
    } else if (i%5===0){
      console.log('Buzz')
    } else if (i%3===0) {
      console.log('Fizz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz()


// Find the Longest Word in a String

let string = 'this is a string'


const returnWord = (string) => {
    let newString = string.split(' ')
    const wordLength = newString.map(word => word.length)
    return Math.max(...wordLength)
}

console.log(returnWord(string)) 

// Return Largest Numbers in Arrays

const largestInArray = (arr) => {
  for (let i =0; i<arr.length; i++) {
    let largestNum = 0
    for (let j=0; j<arr[i].length; j++) {
      let largestNum = arr[i][0]
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j]
      }
    }
    results.push(largestNum)
  }
  return results
}

// Confirm the Ending: Check if a string (first argument, str) ends with the given target string (second argument, target).

const checkEnd = (str, target) => {
  
  let sliced = str.slice(str.length - target.length)
  if (sliced === target) {
    return true
  } else {
    return false
  }
}

// Repeat a String

const repeat = (str,num) => {
  
  let accumulatedString =''
  
  while(num>0) {
    accumulatedString +=str
    num--
  }
  return accumulatedString
}

//Find sum of arrays within an array

const arraySum =(arr) => {
  let total = 0
  for (let i=0; i<arr.length; i++) {
    total += arr[i].reduce((x,y) => x+y)
  }
  return total
}

