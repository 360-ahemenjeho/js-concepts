const admitEl = document.getElementById('admit')
const refuseEl = document.getElementById('refuse')

const people = [
  'Chris',
  'Anne',
  'Colin',
  'Terri',
  'Phil',
  'Lola',
  'Sam',
  'Kay',
  'Bruce'
]

for (let i = 0; i < people.length; i++) {
  const person = people[i]
  if (person === 'Phil' || person === 'Lola')
    refuseEl.textContent += ' ' + person
  else admitEl.textContent += ' ' + person
}
