// Immediately Invoked Function Expressions - IIFE
// It pronounces Iffy by Ben Alman who introduced the acronym

// With anonymous arrow function inside
(() => {
  // do stuff 
})();

// With the function keyword
(function () {
  // do stuff
})();

// With a function name (allows for recursion)
let num;

(function ImmidInvFnExpr() {
  num++;
  console.log(num);
  return num !== 5 ? ImmidInvFnExpr(num) : console.log('finished!');
})(num = 0);

// 01 Does not pollute the global object namespace
const x = "whatever";
const helloWorld = () => "Hello world.";

// Isolate declarations within the function
(() => {
  const x = 'iife whatever';
  const helloWorld = () => "Hello iife";
  console.log(x); // iife whatever
  console.log(helloWorld()); // Hello iife
})();

console.log(x); // whatever
console.log(helloWorld()); // Hello world.

// 02 Private variables and Methods from Closures
const increment = (() => {
  let counter = 0;
  console.log(counter);
  const credits = (num) => console.log(`I have ${num} credit(s).`)

  // It returns an anonymous function that increments the value of counter by one and then 
  // we pass the value of the counter
  return () => { counter++; credits(counter); }
})(); 

increment(); // I have 1 credit(s).
increment(); // I have 2 credit(s).
increment(); // I have 3 credit(s).

// 03 The module pattern
const score = (() => {
  let count = 0;

  return {
    current: () => { return count },
    increment: () => { count++ },
    reset: () => { count = 0 }
  }
})();

score.increment();
score.reset();
console.log(score.current()); // 0
score.increment();
score.increment();
console.log(score.current()); // 2

// The revealing pattern is a variation of the module pattern
const game = (() => {
  let count = 0;
  const current = () => { return `Game score is ${count}.` };
  const increment = () => { count++ };
  const reset = () => { count = 0 };

  return {
    current, // current: current,
    increment, // increment: increment,
    reset, // reset: reset,
  }
})();

game.increment();
game.increment();
game.increment();
console.log(game.current()); // Game score is 3.
game.reset();
console.log(game.current()); // Game score is 0.

// 04 Injecting a namespace object
const app = {};

((namespace) => {
  namespace.count = 0;
  namespace.current = function() { return `App count is ${this.count}.` };
  namespace.increment = function() { this.count++ };
  namespace.reset = function() { this.count = 0 };
})(app);

app.increment()
console.log(app.current()) // App count is 1.
app.increment()
app.increment()
app.increment()
console.log(app.current()) // App count is 4.
app.reset()
console.log(app.current()) // App count is 0.

