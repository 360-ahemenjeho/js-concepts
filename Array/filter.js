const PASS_SCALE = 4.5
const expertiseScale = [1, 10, 6, 3, 4, 8, 9, 2, 6]
const filteredExpertiseScale = expertiseScale.filter(
  (item) => item >= PASS_SCALE
)

console.log('Expertise Scale: ', expertiseScale)
console.log('Pass Scale: ', filteredExpertiseScale)
