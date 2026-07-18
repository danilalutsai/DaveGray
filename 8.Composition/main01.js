// Javascript object composition vs Javascript object inheritance

class Pizza {
  constructor(size, crust, sauce) {
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = [];
  }
  
  prepare() { console.log('Preparing...') }
  bake() { console.log('Baking...') }
  ready() { console.log('Ready!') }
}

// Problem: Repeating methods - Not D.R.Y.
// D.R.Y. - Don't Repeat Yourself
class Salad {
  constructor(size, dressing) {
    this.size = size;
    this.dressing = dressing;
  }

  prepare() { console.log('Preparing...') }
  toss() { console.log('Tossing...') }
  ready() { console.log('Ready!') }
}

class StuffedCrustPizza extends Pizza {
  stuff() { console.log('Stuffing the crust...') }
}

class ButterCrustPizza extends Pizza {
  butter() { console.log('Buttering the crust...') }
}

// Problem - Repeating methods - Not D.R.Y.
class StuffedButteredCrustPizza {
  stuff() { console.log('Stuffing the crust...') }
  butter() { console.log('Buttering the crust...') }
}

const pizza01 = new StuffedButteredCrustPizza();
pizza01.stuff()
pizza01.butter()

// Instead, use composition for methods
const prepare = () => {
  return {
    prepare: () => console.log('Preparing...')
  }
}

const bake = () => {
  return {
    bake: () => console.log('Baking...')
  }
}

const toss = () => {
  return {
    toss: () => console.log('Tossing...')
  }
}

const ready = () => {
  return {
    ready: () => console.log('Ready!')
  }
}

const stuff = () => {
  return {
    stuff: () => console.log('Stuffing...')
  }
}

const butter = () => {
  return {
    butter: () => console.log('Buttering...')
  }
}

// That's the function that composes an object
const createPizza = (size, crust, sauce) => {
  const pizza = {
    size, // size: size
    crust, // crust: crust
    sauce, // sauce: sauce
    toppings: [],
  }

  return {
    ...pizza,
    ...prepare(),
    ...bake(),
    ...ready(),
  }
}

const createSalad = (size, dressing) => {
  return {
    size,
    dressing,
    ...prepare(),
    ...toss(),
    ...ready(),
  }
}

// Compare to ES6 Class syntax with extends and super()
const createStuffedButteredCrustPizza = (pizza) => {
  return {
    ...pizza,
    ...stuff(),
    ...butter(),
    ...ready(),
  }
}

const pizza03 = createPizza("medium", "thin", "original")
pizza03.prepare();
pizza03.bake();
pizza03.ready();

const pizza02 = createStuffedButteredCrustPizza(pizza03)
pizza02.bake()
pizza02.stuff();
pizza02.butter();
pizza02.ready();

// or
const pizza04 = createStuffedButteredCrustPizza(createPizza("medium", "thin", "original"));

const salad01 = createSalad("big", "caesar");
salad01.prepare();
salad01.toss();
salad01.ready();
console.log(salad01)
console.log(pizza02)

const addTopping = (pizza, topping) => {
  pizza.toppings.push(topping);
  return pizza;
}

// What about the topping?
addTopping(pizza02, "BBQ")
console.log(pizza02)

const pizza05 = createPizza("medium", "thin", "original")
console.log(pizza05)
console.log(addTopping(pizza05, "pepperoni"))

// We need to clone pizza object to avoid mutation
const shallowPizzaClone = (fn) => {
  return (obj, arr) => {
    const newObj = { ...obj };
    return fn(newObj, arr);
  }
}

// Is preferable structuredClone as it does clone all the nested objects inside the object itself
const structuredPizzaClone = structuredClone(pizza01)

let addToppings = (pizza, toppings) => {
  pizza.toppings = [...pizza.toppings, ...toppings];
  return pizza;
}

const pizza06 = createPizza("medium", "thin", "original")
const pizza06WithToppings = addToppings(pizza06, ["olives", "cheese", "pepperoni"])
console.log(pizza06WithToppings)
