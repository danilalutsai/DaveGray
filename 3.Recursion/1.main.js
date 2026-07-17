// Recursion is a method of solving problem where the solution depends on solution
// to smaller instances of the same problem

// Any situation where you do something, and depending on the results, you might do it again
// In programming the recursion occurs when the function calls itself

// Any iteration function (aka function with a loop) can be recursive instead
function countToTen(num = 1) {
  while (num <= 10) {
    console.log(num)
    num++
  }
}

// countToTen()

// Recursive function have two parts:
// 1. The recursive call to the function
// 2. At least one condition to exit
function recurToTen(num = 1) {
  if (num > 10) return
  console.log(num)
  num++
  recurToTen(num)
}

// recurToTen()

// With great power comes greate responsability
// Reasons to use (not abuse) recursion
// 1. Less code
// 2. Elegant code (aka Pleasing to look at)
// 3. Increased readability

// Reasons to not use recursion
// 1. Performance
// 2. Possibly more difficult to debug (aka follow the logic)
// 3. Is the readability improved?

// The standart example: The Fibonacci Sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, etc

// No recursion
function fibonacci(num, array = [0, 1]) {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2)
    array.push(nextToLast + last)
    num -= 1
  }

  return array
}

fibonacci(12)

// With recursion
function recursionFibonacci(num, array = [0, 1]) {

  // This is called the reason to exit the loop
  if (num <= 2) return array
  const [nextToLast, last] = array.slice(-2)

  return recursionFibonacci(num - 1, [...array, nextToLast + last])
}

recursionFibonacci(12)

// What number is in the nth position of the fibonacci sequence?
function fibonacciPos(position) {

  if (position <= 1) return position
  const sequence = [0, 1]
  
  for (let i = 2; i <= position; i++) {
    const [nextToLast, last] = sequence.slice(-2)
    sequence.push(nextToLast + last)
  }

  return sequence[position]
}

console.log(fibonacciPos(12)) // 144

// With recursion
function fibonacciPosRec(pos) {
  if (pos < 2) return pos
  return fibonacciPosRec(pos - 1) + fibonacciPosRec(pos -2)
}

console.log(fibonacciPosRec(12)) // 144

// The same recursive fibonacci sequence function can be written only in one line of code
const fibPosRecOneLine = pos => pos < 2 ? pos : fibPosRecOneLine(pos - 1) + fibPosRecOneLine(pos - 2)
console.log(fibPosRecOneLine(12)) // 144
