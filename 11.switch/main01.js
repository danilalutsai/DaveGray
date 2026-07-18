// Switch statement
let extension = '.css'
let contentType

switch (extension) {
  case '.css':
    contentType = 'text/css'
    break
  case '.js':
    contentType = 'text/javascript'
    break
  case '.json':
    contentType = 'application/json'
    break
  case '.jpg':
    contentType = 'image/jpeg'
    break
  case '.png':
    contentType = 'image/png'
    break
  case '.txt':
    contentType = 'text/html'
    break
  default:
    contentType = 'text/html'
}

console.log(contentType) // text/css

extension = '/'

// Better approach
const extensionObj = {
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.txt': 'text/plain',
}

// We looking it up by referencing the key to get the value
// To keep the default value we use Or ||
console.log(extensionObj[extension] || 'text/html') // text/html

const myMap = new Map()
myMap.set('.css', 'text/css')
myMap.set('.json', 'application/json')

extension = '.css'
console.log(myMap.get(extension) || 'text/html') // text/css

console.log(myMap)
