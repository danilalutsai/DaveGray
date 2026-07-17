// When itcomes to Objects, what about..? Object.freeze()

const scores = {
  "first": 44,
  "second": 12,
  "third": { 
    "a": 1,
    "b": 2
  }
}

Object.freeze(scores)
scores.third.a = 3

// Still mutates, it is a shallow freeze
console.log(scores.third.a) // 3

// Pure function
const pureAddToScoreHistory = (array, score, cloneFunc) => {
  const newArray = cloneFunc(array)
  newArray.push(score)
  return newArray
}

const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj

  const newObject = Array.isArray(obj) ? [] : []

  for (let key in obj) {
    const value = obj[key]

    // Recursive call for nested objects & arrays
    newObject[key] = deepClone(value)
  }

  return newObject
}

