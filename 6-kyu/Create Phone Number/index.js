/* 
  Title:
    Create Phone Number
    
  Description:
    Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

  Example:
    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
    The returned format must be correct in order to complete this challenge. 
    Don't forget the space after the closing parenthesis!
  
  Link:
    https://www.codewars.com/kata/525f50e3b73515a6db000b83
*/

function createPhoneNumber(numbers) {
  const numbersStr = numbers.join('')
  const firstPart = numbersStr.substring(0, 3)
  const secondPart = numbersStr.substring(3, 6)
  const thirdPart = numbersStr.substring(6, 10)

  return `(${firstPart}) ${secondPart}-${thirdPart}`
}

// Function Export
module.exports = createPhoneNumber
