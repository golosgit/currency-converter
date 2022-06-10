{
  let exchangeRate;
  const exchangeAmount = document.querySelector(".js-exchangeAmount");
  const exchangeCurrency = document.querySelector(".js-exchangeCurrency");
  const resultCurrency = document.querySelector(".js-resultCurrency");

  const changeTextInfo = () => {
    const exchangeCurrencyInfo = document.querySelector(".js-exchangeCurrencyInfo");
    const resultCurrencyInfo = document.querySelector(".js-resultCurrencyInfo");
    const exchangeRateInfo = document.querySelector(".js-exchangeRateInfo");

    exchangeCurrencyInfo.innerText = exchangeCurrency.value;
    resultCurrencyInfo.innerText = resultCurrency.value;
    exchangeRateInfo.innerText = exchangeRate;
  };

  const calculateResult = (exchangeRate) => {
    return (exchangeAmount.value * exchangeRate).toFixed(2);
  };

  const checkRate = () => {
    const PLNtoEUR = 0.21805;
    const EURtoPLN = 4.56391;
    const PLNtoUSD = 0.23418;
    const USDtoPLN = 4.24671;
    const USDtoEUR = 0.92783;
    const EURtoUSD = 1.07041;

    if (exchangeCurrency.value === "PLN" && resultCurrency.value === "EUR") {
      exchangeRate = PLNtoEUR;
    } else if (
      exchangeCurrency.value === "PLN" &&
      resultCurrency.value === "USD"
    ) {
      exchangeRate = PLNtoUSD;
    } else if (
      exchangeCurrency.value === "EUR" &&
      resultCurrency.value === "PLN"
    ) {
      exchangeRate = EURtoPLN;
    } else if (
      exchangeCurrency.value === "EUR" &&
      resultCurrency.value === "USD"
    ) {
      exchangeRate = EURtoUSD;
    } else if (
      exchangeCurrency.value === "USD" &&
      resultCurrency.value === "PLN"
    ) {
      exchangeRate = USDtoPLN;
    } else if (
      exchangeCurrency.value === "USD" &&
      resultCurrency.value === "EUR"
    ) {
      exchangeRate = USDtoEUR;
    } else if (exchangeCurrency.value === resultCurrency.value) {
      exchangeRate = 1;
    }
  };

  const calculate = () => {
    const resultAmount = document.querySelector(".js-resultAmount");

    checkRate();
    resultAmount.value = calculateResult(exchangeRate);
    changeTextInfo();
  };

  const init = () => {
    exchangeAmount.addEventListener("input", calculate);
    exchangeCurrency.addEventListener("change", calculate);
    resultCurrency.addEventListener("change", calculate);
  };

  init();
}
