const el = document.getElementById('container')
let max = 10

const countDownID = setInterval(() => {
  if (max >= 0) {
    if (max === 10) el.textContent += ' Countdown ' + max
    else if (max === 0) el.textContent += ' Blast off!'
    else el.textContent += ' ' + max
    max = max - 1
    console.log(max)
    if (max < 1) clearInterval(countDownID)
  }
}, 1000)
