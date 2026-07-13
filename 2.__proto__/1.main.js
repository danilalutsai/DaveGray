const person = {
  alive: true
}

const musician = {
    plays: true
}

console.log(musician.plays) // true
console.log(musician.alive) // undefined

// It says that person is the parent of musician
musician.__proto__ = person

console.log(musician) // { plays: true, __proto__: alive: true }

// New Javascript has two method getPrototypeOf() and setPrototypeOf()
// It takes two args: 1. the child element 2. the parent element
Object.setPrototypeOf(musician, person) // musician.__proto__ = person
console.log(Object.getPrototypeOf(musician)) // { alive: true }
console.log(Object.getPrototypeOf(musician) === musician.__proto__) // true

// Extending the prototype chain
const guitarist = {
  strings: 6,
  __proto__: musician
}

console.log(guitarist.alive) // true

// No circular references allowed person can't be guitarist but guitarist can be a person
// An object can only directly inherit from one object
const car = {
  doors: 2,
  seats: "vinyl",
  get seatMaterial() {
    return this.seats
  },
  set seatMaterial(material) {
    this.seats = material
  }
}

const luxuryCar = {}
Object.setPrototypeOf(luxuryCar, car)
console.log(luxuryCar.seatMaterial = "leather") // leather // Note keyword "this" 
console.log(luxuryCar) // { ... seats: "leather", doors: 2, ... }

// Walking up the chain - props and methods are not copied 
console.log(luxuryCar.valueOf()) // valueOf is inherited from default Object built in Javascript

// Getting the keys of an object
console.log(Object.keys(luxuryCar)) // [ "seats" ]

// Loop through each object key
Object.keys(luxuryCar).forEach(key => {
  console.log(key) // seats
})

// For loop includes inherited properties
for (let key in luxuryCar) {
  console.log(key) // seats doors seatMaterial
}

// Object constructors
class Animal {
  constructor(species) {
    this.species = species
    this.eats = true
  }
}

Animal.prototype.walks = function() {
  return `A ${this.species} is walking.`
}

const Bear = new Animal("bear")

console.log(Bear.species) // bear
console.log(Bear.walks()) // A bear is walking.

// The prototype property is where inheritable props and methods are
console.log(Bear.__proto__) // Animal { walks: [Function] ... __proto__ ... }
console.log(Bear.__proto__ === Animal.prototype) // true


class Vehicle {
  constructor() {
    this.wheels = 4
    this.motorized = true
  }

  ready() {
    return "Ready to go!"
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    // To change existing values we need to call super so we can refer to this object and rewrite it 
    super()
    this.wheels = 2
  }

  wheelie() {
    return "On one wheel now!"
  }
}

const myBike = new Motorcycle()
console.log(myBike) // wheels: 2, motorized: true, wheelie [Function], ready [Function]
console.log(myBike.wheels) // 2
console.log(myBike.ready()) // Ready to go!
console.log(myBike.wheelie()) // On one wheel now!
