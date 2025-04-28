const numbers = [1, 2, 3, 5, 5]
const mixed = [1, 's', 3, 56]

const caseTrue = numbers.every((item) => Number(item))
const caseFalse = mixed.every((item) => Number(item))

console.log('Case true: ', caseTrue)
console.log('Case false: ', caseFalse)
