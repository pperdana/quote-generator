const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twiterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')


let apiQuotes = []

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complate() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}


// Show new Quote
function newQuote() {
  loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  if (!quote.author) {
    authorText.textContent = "Unknown"
  } else {
    authorText.textContent = quote.author
  }
  if (quote.text.length > 50) {
    quoteText.classList.add('long-quote')
  } else {
    quoteText.classList.remove('long-quote')
  }
  quoteText.textContent = quote.text
  complate()
}

// Get Quotes From API
async function getQuotes() {
  loading()
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote()
  } catch (error) {

  }
}

newQuoteBtn.addEventListener('click', newQuote)
getQuotes()
