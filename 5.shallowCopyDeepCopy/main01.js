// Javascript data types: Primitive, structural
// Primitive: string, number, undefined, null, boolean, bigInt, symbol
// Structural (non primitive): array, object, linked list, Map, Set, function, Weak map, Date

let x = 2
let y = x
y += 1
console.log(y) // 3
console.log(x) // 2

let xArray = [1, 2, 3, 4]
let yArray = xArray
yArray.push(5)

console.log(xArray.splice(2, 2)) // [3, 4]
console.log(xArray.slice(1, 2)) // [2]
console.log(yArray) // [1, 2, 5]
console.log(xArray) // [1, 2, 5]

// Mutable vs Immutable
let firstname = "Danila"
firstname = "Nikita"
console.log(firstname)

xArray[0] = 10
console.log(xArray) // [10, 2, 5]
console.log(yArray) // [10, 2, 5]

// Pure functions require you to avoid mutating the data
// Impure function that mutates the data outside the function scope
function addToStoreHistory(array, score) {
  array.push(score)
  return array
}

const scoreArray = [44, 23, 32]
console.log(addToStoreHistory(scoreArray, 12)) // [44, 23, 32, 12]
console.log(scoreArray) // [44, 23, 32, 12]

// This mutates the original array
// This is considered to be a side-effect

// Const doesn't make the array or object immutable
// We need to modify our function so it does not mutate the original data

// Shallow copy vs Deep copy
const zArray = [...xArray, 10]
console.log(zArray) // [10, 2, 5, 10]
console.log(xArray === yArray) // true
console.log(xArray === zArray) // false

const cArray = Object.assign([], zArray)
console.log(cArray) // [10, 2, 5, 10]
console.log(cArray === zArray) // false

cArray.push([1, 2, 3])
console.log(cArray) // [10, 2, 5, 10, [1, 2, 3]]
cArray[4].push(5)
console.log(cArray) // [10, 2, 5, 10, [1, 2, 3, 5]]

// Nested structural data types still share a reference
