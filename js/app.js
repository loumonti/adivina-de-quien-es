document.getElementById("new-quote-api").addEventListener("click", getQuote);

async function getQuote() {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        'X-Api-Key': 'WCLPRfFD20HDzwD8XL5qgA==NGxwo9MpkWnAADpS'
      }
    });
    const data = await response.json();
    document.getElementById("quote-api").innerText = data[0].quote;
  } catch (error) {
    document.getElementById("quote-api").innerText = "Oops! Could not fetch a quote.";
  }
}
