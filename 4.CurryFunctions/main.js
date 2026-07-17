// Currying is turning a function that takes multiple arguments 
// into a sequence of functions that each take one argument.

// Each returned function “remembers” the earlier arguments through closures

function buildSandwich(ingredient1) {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`
    }
  }
}

const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato")
console.log(mySandwich)

// It works but thats getting ugly and nested the further we go
const buildSammy = ingred1 => ingred2 => ingred3 =>
  `${ingred1}, ${ingred2}, ${ingred3}`

console.log(buildSammy("Lettuce")("Bacon")("Cheese"))

const multiply = (x, y) => x * y
const curriedMultiply = x => y => x * y

console.log(multiply(5, 10))

console.log(curriedMultiply(5)(10))

// Partially applied functions are a common use of currying
const timesTen = curriedMultiply(10)
console.log(timesTen(8)) // 80

const updateElemText = id => content => document.querySelector(`#${id}`).textContent = content
const updateHeaderText = updateElemText("header")

// Another common use of currying is function composition
// Allows calling small functions in a specific order
const addCustomer = fn => (...args) => {
  console.log("Saving customer info...")
  return fn(...args)
}

const processOrder = fn => (...args) => {
  console.log(`Processing order #${args[0]}`)
  return fn(...args)
}

let completeOrder = (...args) => {
  console.log(`Order #${[...args].toString()} completed.`)
}

completeOrder = (processOrder(completeOrder))
completeOrder = (addCustomer(completeOrder))
completeOrder(1000)

function addCustomer1(...args) {
  return function processOrder(...args) {
    return function completeOrder(...args) {
      // end
    }
  }
}

// Requires a function with a fixed number of parameters
const curry = (fn) => {
  console.log(fn.length) // 3
  const curried = (...args) => {
    console.log(args.length) // 1, 2, 3
    console.log(...args) // 10, 20, 30
    if (fn.length !== args.length) {
      return curried.bind(null, ...args) // Bind crates a new function remembered parameters
    }

    return fn(...args)
  }

  return curried
}

const total = (x, y, z) => x + y + z
const curriedTotal = curry(total)

console.log(curriedTotal(10)(20)(30))
