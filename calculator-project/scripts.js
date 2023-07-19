let operation = "";
let storedString = "";
let currentString = "";
let decimalPointUsed = false;

function addNumber(num) {
  currentString = currentString + num;
  console.log(currentString);
  document.getElementById("result").innerText = currentString;
}

function addDecimalPoint() {
  if (!decimalPointUsed) {
    decimalPointUsed = true;
    currentString = currentString + ".";
    console.log(currentString);
    document.getElementById("result").innerText = currentString;
  }
}

function clearNumbers() {
  currentString = "";
  decimalPointUsed = false;
  console.log(currentString);
  document.getElementById("result").innerText = currentString;
}

function deleteNumber() {
  if (currentString.charAt(currentString.length - 1) == ".") {
    decimalPointUsed = false;
  }

  currentString = currentString.slice(0, currentString.length - 1);
  console.log(currentString);
  document.getElementById("result").innerText = currentString;
}

function addOperation(op) {
  operation = op;
  newChar = "";
  switch (operation) {
    case "add":
      newChar = "+";
      break;
    case "multiply":
      newChar = "×";
      break;
    case "subtract":
      newChar = "-";
      break;
    case "divide":
      newChar = "÷";
      break;
    default:
      break;
  }
  if (currentString != "") {
    storedString = currentString;
    currentString = "";
  } else {
  }
  document.getElementById("result").innerText = currentString;
  document.getElementById("operation").innerText = storedString + " " + newChar + " ";
}

function calculateEquals() {
  let a = parseFloat(currentString);
  let b = parseFloat(storedString);
  let result = 0;
  let newChar = "";
  switch (operation) {
    case "add":
      newChar = "+";
      result = a + b;
      break;
    case "multiply":
      newChar = "×";
      result = a * b;
      break;
    case "subtract":
      newChar = "-";
      result = a - b;
      break;
    case "divide":
      newChar = "÷";
      result = b != 0 ? a / b : 0;
      break;
    default:
      break;
  }
  storedString = result.toString();
  document.getElementById("result").innerText = result;
  document.getElementById("operation").innerText = a + " " + newChar + " " + b;
}
