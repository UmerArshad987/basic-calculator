let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  if (display.value === "") {
    display.value = "0";
    return;
  }

  let input = display.value;
  let operators = input.split(/[\d.]+/).filter(op => op.trim() !== "");
  let numbers = input.split(/[\+\-\*\/]/).map(Number);

  let result = numbers[0];
  for (let i = 0; i < operators.length; i++) {
    let operator = operators[i];
    let nextNumber = numbers[i + 1];

    if (operator === "+") result += nextNumber;
    else if (operator === "-") result -= nextNumber;
    else if (operator === "*") result *= nextNumber;
    else if (operator === "/") result /= nextNumber;
  }

  display.value = result;
}
