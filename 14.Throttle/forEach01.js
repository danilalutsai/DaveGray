const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

async function initApp() {
  getPostsSerialized(ids)
}

document.addEventListener('DOMContentLoaded', initApp)

async function getPosts(id) {
  return await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json()
}

// This is a bad example of how not to do because forEach can not run asyncronous operation it doesn't await
// forEach doesn't return anything that's why we can't await on it to return something
function useForEach(ids) {
  ids.forEach(async (id) => {
    const data = await getPosts(id)

    console.log(data)
  })
}

async function getPostsSerialized(ids) {
  await ids.reduce(async (acc, id) => {
    // It wait for the previous item to complete
    await acc

    // Get the next item
    const post = await getPosts(id)

    console.log(post)
  }, Promise.resolve())

  console.log("I'll wait on you")
}

// Another solution for getting posts 
async function getPostsConcurrently(ids) {

  // map() returns something that's why we can await on it
  // If we want to accept Promise.all even if some promise fail and we still want to receive some Promises
  const posts = await Promise.allSettled(ids.map(async (id) => getPosts(id)))

  console.log(posts)
  console.log("I'll wait on you")
}
