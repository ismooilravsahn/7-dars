let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  document.getElementById("display").value = currentInput;
}

function setOperator(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = "";
  document.getElementById("display").value = "";
}

function calculate() {
  let result;
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  if (isNaN(num1) || isNaN(num2)) return;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Xato";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = "";
  previousInput = "";
  document.getElementById("display").value = currentInput;
}
