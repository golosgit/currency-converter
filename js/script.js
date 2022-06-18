{
  const exchangeAmount = document.querySelector(".js-exchangeAmount");
  const exchangeCurrency = document.querySelector(".js-exchangeCurrency");
  const resultCurrency = document.querySelector(".js-resultCurrency");

  const changeTextInfo = () => {
    const exchangeCurrencyInfo = document.querySelector(
      ".js-exchangeCurrencyInfo"
    );
    const resultCurrencyInfo = document.querySelector(".js-resultCurrencyInfo");
    const exchangeRateInfo = document.querySelector(".js-exchangeRateInfo");

    exchangeCurrencyInfo.innerText = exchangeCurrency.value;
    resultCurrencyInfo.innerText = resultCurrency.value;
    exchangeRateInfo.innerText = checkRate().toFixed(4);
  };

  const calculateResult = (exchangeRate) => {
    return (exchangeAmount.value * exchangeRate).toFixed(2);
  };

  const checkRate = () => {
    const eurToPln = 4.6313;
    const usdToPln = 4.4209;
    const czkToPln = 0.1874;
    let exchangeRate;

    switch (exchangeCurrency.value) {
      case "PLN":
        exchangeRate = 1;
        break;
      case "EUR":
        exchangeRate = eurToPln;
        break;
      case "USD":
        exchangeRate = usdToPln;
        break;
      case "CZK":
        exchangeRate = czkToPln;
        break;
    }
    switch (resultCurrency.value) {
      case "PLN":
        return exchangeRate;
      case "EUR":
        return exchangeRate / eurToPln;
      case "USD":
        return exchangeRate / usdToPln;
      case "CZK":
        return exchangeRate / czkToPln;
    }
  };

  const checkIfPositive = () => {
    if (Math.sign(exchangeAmount.value) < 0) {
      exchangeAmount.value = exchangeAmount.value.slice(1);
      alert("Nie można wprowadzać wartości ujemnych.");
    }
  };

  const calculate = () => {
    checkIfPositive();

    const resultAmount = document.querySelector(".js-resultAmount");

    resultAmount.value = calculateResult(checkRate());
    changeTextInfo();
  };

  const init = () => {
    exchangeAmount.addEventListener("input", calculate);
    exchangeCurrency.addEventListener("change", calculate);
    resultCurrency.addEventListener("change", calculate);
  };

  init();
}
