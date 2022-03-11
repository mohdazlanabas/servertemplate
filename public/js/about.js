const textDisplay = document.getElementById('text')

const phrases = [ 'INTRO- Education is the foundation of the future, currently and for the coming reality it is a commodity, by right it should already be easily accessible by all. In a fast growing Artificial Intelligence period of time, acceleration and freedom to pursue knowledge with a guided path without restriction of pace should already been pervasive. This initiative is to eliminate the barriers to basic and intermediate education with the use of available technology.',
'PROBLEM- Technology and humans have evolve pass the industrial stage, to accelerate the progress of a nation, the population must be allowed to fly at their own pace, as the guided train model is obsolete. The current system does not allow reproducibility with consistency as to many variable moving parts are in existence. This solution will create a reproducible output and at the same time elevate the roles and effectiveness of educators to support the changed information and technology environment',
'SOLUTION- A curated platform that is managed centrally but is ubiquitous. A scalable easily adaptable for the changing time. Fast development and agile. Standardized and lightweight based on existing available 4G capability with lesser dependent on device capability. Cheap and acccesible to all with a layer of customization and commerce for long term sustainability. A nation tool to take control the growing of its people asset to compete with other nations to remain relevant in the world.',
'BENEFIT- Increase in education levels for the nation, reduced operational cost, move towards a more digitalised nation, higher order activities for educators, accelerate nation building, champion and patreaon long term recognition, sustainable option, implementation within 12 months with additional features rolled out there after in phases, lightweight technology delivering a heavy-weight impact, no changes to policy which can follow through in phases, an achievable and visible change agenda',
'DEMAND- "5,000,000 user base that will utilize the base reference features. Different options and tier levels for revenue creation on add on feature.'
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