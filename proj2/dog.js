const textDisplay = document.getElementById('text')
const phrases = ['*Woof* Oh hey there *Woof* Im a bit hungry so can you press something for me. Thx man *Woof* ']
let i = 0
let j = 0 
let currentPhrase = []
let end = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!end && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

  }
  const spedUp = 40
  const normalSpeed = 40
  const time = 50
  setTimeout(loop, time)
}

loop();