const textDisplay = document.getElementById('text')
const phrases = [
    'INTRO- "under construction" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident inventore earum nobis dolores voluptates error aperiam. Minus facere rem assumenda cum necessitatibus odio ipsum veritatis blanditiis unde? Earum corrupti velit sit temporibus maxime dolore nobis vitae aut culpa quia fugiat aperiam.', 
    'PROBLEM- "under construction" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident inventore earum nobis dolores voluptates error aperiam. Minus facere rem assumenda cum necessitatibus odio ipsum veritatis blanditiis unde? Earum corrupti velit sit temporibus maxime dolore nobis vitae aut culpa quia fugiat aperiam.', 
    'SOLUTION- "under construction" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident inventore earum nobis dolores voluptates error aperiam. Minus facere rem assumenda cum necessitatibus odio ipsum veritatis blanditiis unde? Earum corrupti velit sit temporibus maxime dolore nobis vitae aut culpa quia fugiat aperiam.', 
    'BENEFIT- "under construction" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident inventore earum nobis dolores voluptates error aperiam. Minus facere rem assumenda cum necessitatibus odio ipsum veritatis blanditiis unde? Earum corrupti velit sit temporibus maxime dolore nobis vitae aut culpa quia fugiat aperiam.',
    'DEMAND- "under construction" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident inventore earum nobis dolores voluptates error aperiam. Minus facere rem assumenda cum necessitatibus odio ipsum veritatis blanditiis unde? Earum corrupti velit sit temporibus maxime dolore nobis vitae aut culpa quia fugiat aperiam.'
    ]

let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = 5
  const normalSpeed = 30
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();