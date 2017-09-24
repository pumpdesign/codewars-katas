/* 
  Description ⚔️
    A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.

  For example, take 153 (3 digits):
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
  and 1634 (4 digits):
    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
  
  The Challenge:
    Your code must return true or false depending upon whether the given number is a Narcissistic number.
    
    Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.
*/

// Long Solution
function narcissistic(value) {
  if (!Number.isInteger(value)) return `${value} is not an integer`

  const numberDestructured = [...value.toString()].map(num => Number(num))
  const result = numberDestructured.reduce(
    (accumulator, currentValue) => accumulator + Math.pow(currentValue, numberDestructured.length),
    0
  )
  return value === result
}

// One-line Solution

// Test to pass
console.log(narcissistic(7)) // => It should return "true"
console.log(narcissistic(153)) // => It should return "true"
console.log(narcissistic(371)) // => It should return "true"
console.log(narcissistic(1634)) // => It should return "true"
console.log(narcissistic(10158)) // => It should return "false"
console.log(narcissistic(30308)) // => It should return "false"