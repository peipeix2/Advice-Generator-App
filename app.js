const adviceNo = document.querySelector('.advice-no')
const adviceContent = document.querySelector('.advice')
const diceBtn = document.querySelector('.dice-wrapper')

// Fetch functions
function fetchData(url) {
  return fetch(url)
          .then(response => response.json())
          .catch(error => console.error('Error when fetching: ', error))
}

async function fetchAndPrint() {
  const dataJSON = await fetchData('https://api.adviceslip.com/advice')
  printAdvice(dataJSON)
}

// Helper functions
function printAdvice(data) {
  const advice = data.slip.advice
  const adviceNum = data.slip.id
  adviceContent.textContent = `"${advice}"`
  adviceNo.textContent = `ADVICE #${adviceNum}`
}

// Event Listeners
diceBtn.addEventListener('click', () => {
  fetchData('https://api.adviceslip.com/advice')
    .then(data => fetchAndPrint())
})