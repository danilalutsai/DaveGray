function initApp() {
  const multiplyBy10 = memoizedMultiplyBy10()
  const memoizedAdd3 = memoize(add3)
  const memoizedFib = memoize(fib)

  console.log(memoizedFib(40))
  console.log(memoizedFib(40))
  console.log(memoizedFib(40))

  console.log(memoizedAdd3(1, 2, 3))
  console.log(memoizedAdd3(1, 2, 3))

  console.log(multiplyBy10(10))
  console.log(multiplyBy10(10))
}

function fib(pos) {
  if (pos < 2) {
    return pos
  }

  return fib(pos - 1) + fib(pos - 2)
}

function memoize(fn) {
  const cache = {}

  return (...args) => {
    if (args.toString() in cache) {
      console.log(cache)

      return cache[args.toString()]
    }
    
    const result = fn(...args)
    cache[args.toString()] = result
    
    return result
  }
}

document.addEventListener('DOMContentLoaded', initApp)

function multiplyBy10(num) {
  return num * 10
}

function add3(num1, num2, num3) {
  return num1 + num2 + num3
}

function addMany(...args) {
  return args.reduce((acc, num) => acc + num, 0)
}

function memoizedMultiplyBy10() {
  const cache = {}

  return (num) => {
    if (num in cache) {
      console.log(cache)
      
      return cache[num]
    }

    const result = num * 10
    cache[num] = result
    
    return result
  }
}
