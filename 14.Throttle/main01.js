const initApp = () => {
  const tbutton = document.querySelector('#button')

  tbutton.addEventListener('click', throttle(clickLog, 2000))

  window.addEventListener('scroll', throttle(scrollLog, 200))
}

const clickLog = () => console.log('click')
const scrollLog = () => console.log('scrolling')

document.addEventListener('DOMContentLoaded', initApp)

const throttle = (fn, interval) => {
  let lastTime = 0
  let id = 0

  console.log('called Throttle immediately')

  return (...args) => {
    const now = new Date().getTime()

    id++

    if (now - lastTime < interval) {
      return 
    }

    lastTime = now

    console.log(`event id ${id}`)

    fn(...args)
  }
}

// When to use throttle and when to use debounce?
// Debounce: at end of wait time. Final state.
// Throttle: at intervals. Intermediate state.
