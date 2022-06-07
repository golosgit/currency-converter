let PLNtoEUR = 0.21805;
let EURtoPLN = 4.56391;
let PLNtoUSD = 0.23418;
let USDtoPLN = 4.24671;
let USDtoEUR = 0.92783;
let EURtoUSD = 1.07041;

let exchangeAmount = document.querySelector(".js-exchangeAmount");
let exchangeCurrency = document.querySelector(".js-exchangeCurrency");
let resultCurrency = document.querySelector(".js-resultCurrency");
let resultAmount = document.querySelector(".js-resultAmount");
let exchangeCurrencyInfo = document.querySelector(".js-exchangeCurrencyInfo");
let exchangeRateInfo = document.querySelector(".js-exchangeRateInfo");
let resultCurrencyInfo = document.querySelector(".js-resultCurrencyInfo");

exchangeAmount.addEventListener("input", () => {
  let amount = exchangeAmount.value;
  if (exchangeCurrency.value === "PLN" && resultCurrency.value === "EUR") {
    var exchangeRate = PLNtoEUR;
  } else if (
    exchangeCurrency.value === "PLN" &&
    resultCurrency.value === "USD"
  ) {
    var exchangeRate = PLNtoUSD;
  } else if (
    exchangeCurrency.value === "EUR" &&
    resultCurrency.value === "PLN"
  ) {
    var exchangeRate = EURtoPLN;
  } else if (
    exchangeCurrency.value === "EUR" &&
    resultCurrency.value === "USD"
  ) {
    var exchangeRate = EURtoUSD;
  } else if (
    exchangeCurrency.value === "USD" &&
    resultCurrency.value === "PLN"
  ) {
    var exchangeRate = USDtoPLN;
  } else if (
    exchangeCurrency.value === "USD" &&
    resultCurrency.value === "EUR"
  ) {
    var exchangeRate = USDtoEUR;
  } else if (exchangeCurrency.value === resultCurrency.value) {
    var exchangeRate = 1;
  }
  let result = amount * exchangeRate;
  resultAmount.value = result.toFixed(2);
});

exchangeCurrency.addEventListener("change", () => {
  let amount = exchangeAmount.value;
  if (exchangeCurrency.value === "PLN" && resultCurrency.value === "EUR") {
    var exchangeRate = PLNtoEUR;
  } else if (
    exchangeCurrency.value === "PLN" &&
    resultCurrency.value === "USD"
  ) {
    var exchangeRate = PLNtoUSD;
  } else if (
    exchangeCurrency.value === "EUR" &&
    resultCurrency.value === "PLN"
  ) {
    var exchangeRate = EURtoPLN;
  } else if (
    exchangeCurrency.value === "EUR" &&
    resultCurrency.value === "USD"
  ) {
    var exchangeRate = EURtoUSD;
  } else if (
    exchangeCurrency.value === "USD" &&
    resultCurrency.value === "PLN"
  ) {
    var exchangeRate = USDtoPLN;
  } else if (
    exchangeCurrency.value === "USD" &&
    resultCurrency.value === "EUR"
  ) {
    var exchangeRate = USDtoEUR;
  } else if (exchangeCurrency.value === resultCurrency.value) {
    var exchangeRate = 1;
  }
  let result = amount * exchangeRate;
  resultAmount.value = result.toFixed(2);
  exchangeCurrencyInfo.innerText = exchangeCurrency.value;
  exchangeRateInfo.innerText = exchangeRate;
});

resultCurrency.addEventListener("change", () => {
  let amount = exchangeAmount.value;
  if (exchangeCurrency.value === "PLN" && resultCurrency.value === "EUR") {
    var exchangeRate = PLNtoEUR;
  } else if (
    exchangeCurrency.value === "PLN" &&
    resultCurrency.value === "USD"
  ) {
    var exchangeRate = PLNtoUSD;
  } else if (
    exchangeCurrency.value === "EUR" &&
    resultCurrency.value === "PLN"
  ) {
    var exchangeRate = EURtoPLN;
  } else if (
    exchangeCurrency.value === "EUR" &&
    resultCurrency.value === "USD"
  ) {
    var exchangeRate = EURtoUSD;
  } else if (
    exchangeCurrency.value === "USD" &&
    resultCurrency.value === "PLN"
  ) {
    var exchangeRate = USDtoPLN;
  } else if (
    exchangeCurrency.value === "USD" &&
    resultCurrency.value === "EUR"
  ) {
    var exchangeRate = USDtoEUR;
  } else if (exchangeCurrency.value === resultCurrency.value) {
    var exchangeRate = 1;
  }
  let result = amount * exchangeRate;
  resultAmount.value = result.toFixed(2);
  resultCurrencyInfo.innerText = resultCurrency.value;
  exchangeRateInfo.innerText = exchangeRate;
});
