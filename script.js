document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    const clearButton = document.getElementById("clear");
    const calculateButton = document.getElementById("calculate");

    let currentInput = "";
    let previousInput = "";
    let currentOperator = null;


    function updateDisplay() {
      display.value = currentInput;
    }

    numberButtons.forEach((button) => {
      button.addEventListener("click", function () {
        currentInput += button.innerText;
        updateDisplay();
      });
    });

    operatorButtons.forEach((button) => {
      button.addEventListener("click", function () {
        if (currentInput === "") return;
        if (previousInput !== "") {
          calculate();
        }
        currentOperator = button.innerText;
        previousInput = currentInput;
        currentInput = "";
      });
    });

    calculateButton.addEventListener("click", calculate);


    clearButton.addEventListener("click", function () {
      currentInput = "";
      previousInput = "";
      currentOperator = null;
      updateDisplay();
    });


    function calculate() {
      if (currentInput === "" || previousInput === "" || currentOperator === null) return;
      const currentValue = parseFloat(currentInput);
      const previousValue = parseFloat(previousInput);
      let result;
      switch (currentOperator) {
        case "+":
          result = previousValue + currentValue;
          break;
        case "-":
          result = previousValue - currentValue;
          break;
        case "*":
          result = previousValue * currentValue;
          break;
        case "/":
          if (currentValue === 0) {
            result = "Error";
          } else {
            result = previousValue / currentValue;
          }
          break;
      }
      currentInput = result.toString();
      previousInput = "";
      currentOperator = null;
      updateDisplay();
    }
  });




