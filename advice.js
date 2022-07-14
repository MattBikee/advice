// API
const API_URL = "https://api.adviceslip.com/advice";

function get(url) {
  return fetch(url).then(resp => resp.json())
}

const API = { get }

const quoteP = document.querySelector("h2#quote")
const adviceId = document.querySelector("p#aid")

function getQuotes() {
  API.get(API_URL).then(data => addQuote(data['slip']['advice']))
}

function getId() {
  API.get(API_URL).then(data => addId(data['slip_id']))
}

// FUNCTIONS

function addQuote(quote) {
  quoteP.innerText = '"' + quote + '"';
}

function addId(id) {
  adviceId.innerText = 'Advice #' + id
}

const reloadButton = document.querySelector("button#reload")
reloadButton.addEventListener("click", () => getQuotes())

// START PAGE
document.body.onload = getQuotes
document.body.onload = getId
