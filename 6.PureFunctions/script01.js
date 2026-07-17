// Rules to have pure functions: the same input always gives the same output and no side effects
const add = (x, y) => x + y
console.log(add(2, 3)) // 5

const fullName = (firstname, lastname) => `${firstname} ${lastname}`
console.log(fullName("Danila", "Lutsai")) // Danila Lutsai

// We can replace the function with the output this is called "referential transparency"
// A pure function should have at least one parameter
// Otherwise, it is the same as a constant because they can only work with their input
const firstName = () => "Danila"
// const firstName = "Danila"

// Accessing the scope outside the function makes the function impure
const z = 5
const sum = (x, y) => x + y + z
console.log(sum(2, 2)) // 9

// Pure function can not access database, API, file system, storage, modify the DOM, log to the console
// No input state can be modified, that is, no data should be "mutated". Consider all input data to be immutable

// Impure example 01 - we mutate the value of variable outside the function scope
let x = 1
const increment = () => x += 1
console.log(increment()) // 2
console.log(x) // 2

// Refactoring example 01 to make it pure function, we don't mutate x outside the scope
const pureIncrement = (num) => num += 1
console.log(pureIncrement(x)) // 3
console.log(x) // 2

// Impure example 02 - we mutate the original array outside the function scope
const arr01 = [1, 2, 3]
const addToArr = (arr, data) => {
  arr.push(data)
  return arr
}

console.log(addToArr(arr01, 4)) // [1, 2, 3, 4]

// Refactoring example 02 to make it pure function
const pureAddToArr = (arr, data) => [...arr, data]

console.log(pureAddToArr(arr01, 5)) // [1, 2, 3, 4, 5]
console.log(arr01) // [1, 2, 3, 4]

// Pure functions always return something, no return means you definitely do not have a pure function
// This higher order functions below are a great example of pure functions
const oneToFive = [1, 2, 3, 4, 5]
const oddToFive = oneToFive.filter(elem => elem % 2 !== 0)

console.log(oddToFive) // [1, 3, 5]

const doubled = oneToFive.map(elem => elem * 2)

console.log(doubled) // [2, 4, 6, 8, 10]

const summed = oneToFive.reduce((elem, acc) => acc + elem)
console.log(summed) // 15
console.log(oneToFive) // [1, 2, 3, 4, 5]

