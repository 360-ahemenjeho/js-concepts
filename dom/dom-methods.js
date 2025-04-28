const bodyEl = document.querySelector('body')
const parentEl = document.createElement('div')
const el = document.createElement('button')
const linkEl = document.querySelector('a')
const paragraphEl = document.querySelector('p')
const funEl = document.getElementById('fun-el')

el.textContent = 'Hello, world!'
parentEl.appendChild(el)
bodyEl.insertBefore(parentEl, linkEl)

setTimeout(() => {
  const removedEl = bodyEl.removeChild(paragraphEl)
  console.log(removedEl)

  // to add a single inline style
  linkEl.style.color = 'red'

  // to add multiple inline styles
  linkEl.style.cssText =
    'font-size: 20px; font-weight: bold; font-style: italic;'

  // via setAttribute - change the value of the style attribute of that element
  linkEl.setAttribute(
    'style',
    'background-color: yellow; font-size: 39px; color: green;'
  )
}, 3000)

const funElClass = funEl.getAttribute('class')
console.log('funEl class: ', funElClass)

let i = 1
const dynamicColorIntervalID = setInterval(() => {
  if (i > 5) {
    clearInterval(dynamicColorIntervalID)
    return
  }
  let elClassAttr = funEl.getAttribute('class')
  elClassAttr += ` color-${i}`
  console.log(elClassAttr)
  funEl.setAttribute('class', elClassAttr)
  i++
}, 1000)
