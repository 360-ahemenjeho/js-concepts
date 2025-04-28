// reduceRight works like reduce, just that is starts from the end of the array instead reduce starts at the begining
// reduce can choose to have an initial value or don't

// LET US REVERSE THIS WORD

const letters = ['l', '0', 'v', '3']
const word = letters.reduceRight((prev, curr) => {
  return prev + curr
})

console.log(word)
