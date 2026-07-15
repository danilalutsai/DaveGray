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

recurToTen()

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
function fibonacci(num, array = [0, 1]) {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2)
    array.push(nextToLast + last)
    num -= 1
  }

  return array
}

console.log(fibonacci(12))

function recursionFibonacci(num, array = [0, 1]) {
  if (num <= 2) return array
  const [nextToLast, last] = array.slice(-2)
  return recursionFibonacci(num - 1, [...array, nextToLast + last])
}

console.log(recursionFibonacci(12))

// What number is in the nth position of the fibonacci sequence?

// Without recursion
function fibonacciPos(pos) {
  if (pos <= 1) return pos
  const seq = [0, 1]
  
  for (let i = 2; i <= pos; i++) {
    const [nextToLast, last] = seq.slice(-2)
    seq.push(nextToLast + last)
  }

  return seq[pos]
}

console.log(fibonacciPos(8))
