class Calculator {
  constructor(previousTextElement, currentTextElement) {
    this.previousTextElement = previousTextElement;
    this.currentTextElement = currentTextElement;
    this.clear();
  }
  clear() {
    this.current = "";
    this.previous = "";
    this.operations = undefined;
  }
  delete() {}
  appendNumber(number) {
    this.current = this.current.toString() + number.toString();
  }
  chooseOperation(operations) {
    if (this.current === "") return;
    if (this.previous !== "")
      return {
        this: compute(),
      };
    this.operations = operations;
    this.previous = this.current;
    this.current = "";
  }
  compute() {}
  updateDisplay() {
    this.currentTextElement.innerText = this.current;
    this.previousTextElement.innerText = this.previous;
  }
}

const numberButtons = document.querySelectorAll("number");
const mathButtons = document.querySelectorAll("operations");
const equalButton = document.querySelector("equal");
const clearbutton = document.querySelector("clear");
const clearAllButton = document.querySelector("clearAll");
const previousTextElement = document.querySelector("previous");
const currentTextElement = document.querySelector("current");

const calculator = new Calculator(previousTextElement, currentTextElement);
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
mathButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});
