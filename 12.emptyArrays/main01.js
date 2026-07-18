// Check for empty array
let arr01 = []

// Arrays have a length property
console.log(arr01.length)

// Mistake comparing it
console.log(arr01.length ? true : false)

arr01 = undefined
// Error. Because we can not read the property length of an undefined value
// console.log(arr01.length ? true : false)

// So we have learned to do this, so we don't get an error
console.log(arr01 && arr01.length ? true : false) // false

// We now have a more concise way of checking for an empty array
let arr02 = []

// Optional chaining
console.log(arr02?.length ? true : false) // false

// ?. is the optional chaining operator
arr02 = [{ 'id': '1' }]

// We check if [0] field exists and if id exists
console.log(arr02?.[0]?.id ? true : false) // true

// We check if [0] field exists and if name exists
console.log(arr02?.[0]?.name ? true : false) // false

// You can use it with the null coalescing operator, too
// ?? operator works if the value of the expression to the left is undefined or null
console.log(arr02?.[0]?.id ?? 'No id property') // 1 (id value)
console.log(arr02?.[0]?.name ?? 'No name property') // No name property

// If need to find out if it is an array
console.log(Array.isArray(arr02)) // true

let arr03 = [{ 'id': 1 }]
console.log(Array.isArray(arr03) && arr03.length ? true : false) // true

// Or we can also check for the property with this method
console.log(Array.isArray(arr03) && arr03[0]?.id ? true : false) // true
console.log(Array.isArray(arr03) && arr03[0]?.name ? true : false) // false
