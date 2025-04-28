// reduce an array into a single value. but you get the accumulation of the last thing you reduce it to
// can choose to take an initial value or not

const letters = ['l', '0', 'v', '3']
const word = letters.reduce((prev, curr) => {
  return prev + curr
}, '1 ')

console.log(word)
