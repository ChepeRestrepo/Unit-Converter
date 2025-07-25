function convert() {
  const inputValue = document.getElementById("userInput").value;
  const unit = document.getElementById("unit").value;
  const milesToKm = unit === "milesToKm";
  let result = 0;
  if (milesToKm === true) {
    result = inputValue * 1.60934;
    const resultString = inputValue + " miles are " + result.toFixed(2) + " km";
    const resultElement = document.getElementById("resultElement");
    resultElement.innerHTML = resultString;
  } else {
    result = inputValue / 1.60934;
    const resultString =
      inputValue + " kilometers are " + result.toFixed(2) + " miles";
    const resultElement = document.getElementById("resultElement");
    resultElement.innerHTML = resultString;
  }
}
