import career, { introduceSinger } from './lib.js'

const singerName = 'Logos'
introduceSinger(singerName)
console.log(
  '%cCAREER:',
  'color: cyan; font-size: 20px; font-weight: bold; text-shadow: 1px 1px 2px black;'
)
console.log(
  `%cThis is your destiny - ${career()}`,
  'color: orange; font-style: italic; font-size: 16px;'
)
