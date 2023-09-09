const adviceNo = document.querySelector('.advice-no')
const adviceContent = document.querySelector('.advice')
const diceBtn = document.querySelector('.dice-wrapper')

// Fetch functions
function fetchData(url) {
  return fetch(url)
          .then(response => response.json())
          .then(data => data.slip)
          .catch(error => console.error('Error when fetching: ', error))
}

async function fetchAndPrint() {
  try {
    const dataJSON = await fetchData('https://api.adviceslip.com/advice')
    printAdvice(dataJSON)
  } catch(error) {
    console.error ('Something is wrong :', error)
  }
}

// Helper functions
function printAdvice(data) {
  const advice = data.advice
  const adviceNum = data.id
  adviceContent.textContent = `"${advice}"`
  adviceNo.textContent = `ADVICE #${adviceNum}`
}

// Event Listeners
diceBtn.addEventListener('click', fetchAndPrint)