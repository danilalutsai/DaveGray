import { posts } from "./posts.js"

// Is a function that does at least one of the following: 
// Takes one or more functions as an argument (parameter)
// Returns a function as the result

// forEach() - works as a for loop
posts.forEach(post => {
  console.log(post.title);
});

// filter() 
const filteredPosts = posts.filter(post => {
  return post.userId === 9;
});

console.log(filteredPosts);

// map()
const mappedPosts = filteredPosts.map(post => {
  return post.id * 10;
})

console.log(mappedPosts);

// reduce()
const reducedPosts = mappedPosts.reduce((acc, post) => {
  return acc + post;
}, 0);

console.log(reducedPosts);
