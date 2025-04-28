const fruits = ['Orange', 'Pineapple', 'Pawpaw']
const proteins = ['Beans', 'Fish', 'Eggs']

console.log('Before:')
console.log(fruits)
console.log(proteins)

fruits.forEach((item) => item.toLocaleUpperCase())
proteins.map((item) => item.toLocaleUpperCase())

// const uppercaseFruits = fruits.forEach((item) => item.toLocaleUpperCase())
// const uppercaseProteins = proteins.map((item) => item.toLocaleUpperCase())

console.log('After fruits:')
console.log(fruits)
console.log(proteins)

// console.log('Foreach:')
// console.log(uppercaseFruits)

// console.log('Map:')
// console.log(uppercaseProteins)
