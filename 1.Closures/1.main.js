// A closure is a function having access to the parent scope, even after a parent function has closed
// Closure is created when we define a function, not when the function is executed

let x = 1

const parentFunction = () => {
  let myValue = 2
  console.log(x)
  console.log(myValue)

  const childFunction = () => {
    console.log(x += 5)
    console.log(myValue += 1)
  }

  // We don't execute the function inside the parent function
  return childFunction
}

const result = parentFunction() // 1, 2
// console.log(result) // 1, 2, () => {}

// Even the parent function was already executed we still can execute the result of it 
// and now we run the childFunction even after parent function was closed
result() // 1, 2, 6, 3

// It continued to increment its values 
result() // 1, 2, 6, 3, 11, 4
console.log(x) // 11

// We can't console.log(myValue) we gonna get a reference error as it is in the function scope
// IIFE - Inmediately Invoked Function Expression
const privateCounter = (() => {
  let count = 0
  // This console log only happend once at the initialization of the IIFE function
  console.log(`initial value: ${count}`)

  return () => { count += 1; console.log(count) } // initial value: 0
})()

// The variable count is private so we can't access it through console.log(count)
privateCounter() // 1

// IIFE
const credits = ((num) => {
  let credits = num
  
  // This function only happens once at the initialization of the function
  console.log(`initial credits value: ${credits}`)

  return () => {
    credits -= 1
    if (credits > 0) console.log(`playing game, ${credits} credit(s) remaining`)
    if (credits <= 0) console.log(`not enought credits`)
  }
})(3) // initial credits value: 3

credits() // playing game, 2 credit(s) remaining
credits() // playing game, 2 credit(s) remaining
credits() // not enought credits
credits() // not enought credits
