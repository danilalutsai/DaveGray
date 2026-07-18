// Functional programming

// Often uses pipe and compose = higher order functions

// A higher order function is any function which takes a function as an argument, 
// returns a function or both

// Here is how a compose function works

// Start with small unary (one parameter) functions
const add02 = (x) => x + 2
const subtract01 = (x) => x - 1
const multiplyBy05 = (x) => x * 5

// Notice how the functions execute from inside to outside & right to left
const result = (multiplyBy05(subtract01(add02(4)))) // 25 = ((4 + 2) - 1) * 5)

// Make our own compose and pipe function
// Note: Ramda.js and lodash libraries have their own built-in compose and pipe functions
// lodash calls pipe "flow"
// The higher order function "reduce" takes a list of values and applies a function to each
// of those values, accumulating a single result

// To get the compose order from right to left as we see with nested function calls 
// in our example above, we need reduceRight
const compose = (...fns) => val => fns.reduceRight((acc, fn) => fn(acc), val)
console.log(compose)

const compRes = compose(multiplyBy05, subtract01, add02)(4)
console.log(compRes) // 25

// To do the same, but read from left to right... we use 'pipe'. It is the same except
// it uses reduce instead of reduceRight
const pipe = (...fns) => val => fns.reduce((acc, fn) => fn(acc), val)
console.log(pipe(multiplyBy05, subtract01, add02)(4)) // 21

const pipeRes = pipe(add02, subtract01, multiplyBy05)(4);
console.log(pipeRes) // 25

// We often will see functions on a separate lines:
const pipeRes02 = pipe(
  add02,
  subtract01,
  multiplyBy05,
)(4)

console.log(pipeRes02) // 25

// This is a 'pointer free' style where you do not see the unary parameter passed between each function

// Example with 2 parameters
const divideBy = (divisor, num) => num / divisor

const pipeRes03 = pipe(
  add02,
  subtract01,
  multiplyBy05,
  x => divideBy(2, x)
)(5)

console.log(pipeRes03) // 15

// Or you could curry the divideBy function for a custom unary function:
const divBy = (divisor) => (num) => num / divisor
const divBy2 = divBy(2) // partially applied

const pipeRes04 = pipe(
  add02,
  subtract01,
  multiplyBy05,
  divBy2,
)(5)

console.log(pipeRes04) // 15

// Let's look on some examples that are not math functions
const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."

const splitOnSpace = (str) => str.split(' ')
const count = (arr) => arr.length

console.log(count(splitOnSpace(lorem))) // 57

const wordCount = pipe(
  splitOnSpace,
  count,
);

console.log(wordCount(lorem)) // 57

// Pipe function is also reusable
const egbdf = "Everyday good boy does fine."
console.log(wordCount(egbdf)) // 5

// Combine processes: check for palindrome
const pal1 = 'taco cat'
const pal2 = 'UFO tofu'
const pal3 = 'Dave'

const split = str => str.split('')
const join = str => str.join('')
const lower = str => str.toLowerCase()

// Reverse is an array method, not a string method
const reverse = arr => arr.reverse()

const fwd = pipe(
  splitOnSpace,
  join,
  lower,
)

const rev = pipe(
  fwd, // a nested pipe function
  split,
  reverse,
  join
)

console.log(fwd(pal1) === rev(pal1)) // true
console.log(fwd(pal2) === rev(pal2)) // true
console.log(fwd(pal3) === rev(pal3)) // false

// Clone or copy functions within a pipe or compose function. 3 approaches:
// 1. Clone the object before an impure function mutates it
const scoreObj = { home: 0, away: 0 }

const shallowClone = obj => Array.isArray(obj) ? [...obj] : { ...obj }

const incrementHome = obj => {
  obj.home += 1
  return obj
}

const homeScore = pipe(
  shallowClone,
  incrementHome,
  // another function,
  // and another function,
)

console.log(homeScore(scoreObj))
console.log(scoreObj)
console.log(homeScore(scoreObj) === scoreObj)

// Fewer function calls
// Create impure functions and testing dificulties

// Curry the function to create a partial that is unary
let incrementHomeB = cloneFn => obj => {
  const newObj = cloneFn(obj)
  newObj.home += 1 // mutation on copied object
  return newObj
}

// Creates the partial by applying the first argument in advance
incrementHomeB = incrementHomeB(shallowClone)

const homeScoreB = pipe(
  incrementHomeB,
  // another function,
  // another function
)

console.log(homeScoreB(scoreObj))
console.log(scoreObj)

// Positive: Pure functions with clear dependencies
// Negative: More calls to the cloning function

// Insert the clone function as a dependency
const incrementHomeC = (obj, cloneFn) => {
  const newObj = cloneFn(obj)
  newObj.home += 1
  return newObj
}

const homeScoreC = pipe(
  x => incrementHomeC(x, shallowClone),
  // another function,
  // another function
)

console.log(homeScoreC(scoreObj))
console.log(scoreObj)

// Positive: pure function with clear dependencies
// Negative: non-unary function in your pipe / compose chain
