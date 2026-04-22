//API part

//Fetch exchange rates from the API and populate the dropdowns with currency codes
const exchangeDataURL = "https://open.er-api.com/v6/latest/USD";

const ratesResponse =  await fetch(exchangeDataURL);
const currencyRates = await ratesResponse.json();

const currencyCodes = Object.keys(currencyRates.rates);

//DOM elements

// Populate the dropdowns with currency codes

document.getElementById('dropdown-from-currency').innerHTML = currencyCodes
    .map(code => `<option value="${code}">${code}</option>`).join('');

document.getElementById('dropdown-to-currency').innerHTML = currencyCodes
    .map(code => `<option value="${code}">${code}</option>`).join('');

// Set default currencies
document.getElementById('dropdown-from-currency').value = "EUR";
document.getElementById('dropdown-to-currency').value = "DKK";

// Get references to Inputs, currency selectors, button, and result display
const inputAmount = document.getElementById('input-amount');
const fromCurrencySelect = document.getElementById('dropdown-from-currency');
const toCurrencySelect = document.getElementById('dropdown-to-currency');
const convertBtn = document.getElementById('convert-btn');
const outputAmount = document.getElementById('output-amount');

// Connect the button
convertBtn.addEventListener('click', convertCurrency);

// Function to convert currency

function convertCurrency() {
    const inputAmountValue = Number(inputAmount.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
      
    if (inputAmountValue <= 0 || isNaN(inputAmountValue)) {
        outputAmount.textContent = "Please enter a valid amount and select valid currencies.";
        return;
    }
    const convertedAmount = (inputAmountValue / currencyRates.rates[fromCurrency]) * currencyRates.rates[toCurrency];
   
   outputAmount.textContent = `${inputAmountValue} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}