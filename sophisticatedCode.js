// Filename: sophisticatedCode.js
// Content: A sophisticated, elaborate and complex example of JavaScript code

// Class definition for Calculator
class Calculator {
  constructor(name) {
    this.name = name;
    this.displayElement = document.getElementById('display');
    this.buttons = [];
    this.result = null;
  }

  addButtons(buttons) {
    this.buttons = this.buttons.concat(buttons);
    buttons.forEach((button) => {
      button.addEventListener('click', () => this.handleButton(button));
    });
  }

  handleButton(button) {
    const buttonValue = button.textContent;
    switch (buttonValue) {
      case 'C':
        this.clearDisplay();
        break;
      case '=':
        this.calculate();
        break;
      default:
        this.addToDisplay(buttonValue);
        break;
    }
  }

  addToDisplay(value) {
    this.displayElement.textContent += value;
  }

  clearDisplay() {
    this.displayElement.textContent = '';
    this.result = null;
  }

  calculate() {
    // Code for complex calculation
    const equation = this.displayElement.textContent;
    this.result = eval(equation);
    this.displayElement.textContent = this.result;
  }
}

// Creating an instance of Calculator
const calculator = new Calculator('Super Calculator');

// Creating buttons for calculator
const buttonsContainer = document.getElementById('buttons-container');
const buttons = [
  { value: 'C', type: 'operator' },
  { value: '7', type: 'number' },
  { value: '8', type: 'number' },
  { value: '9', type: 'number' },
  { value: '/', type: 'operator' },
  { value: '4', type: 'number' },
  { value: '5', type: 'number' },
  { value: '6', type: 'number' },
  { value: '*', type: 'operator' },
  { value: '1', type: 'number' },
  { value: '2', type: 'number' },
  { value: '3', type: 'number' },
  { value: '-', type: 'operator' },
  { value: '0', type: 'number' },
  { value: '.', type: 'number' },
  { value: '=', type: 'operator' },
  { value: '+', type: 'operator' },
];

// Function to create button elements
function createButtonElement(button) {
  const buttonElement = document.createElement('button');
  buttonElement.textContent = button.value;
  buttonElement.classList.add(button.type);
  return buttonElement;
}

// Adding buttons to the calculator
buttons.forEach((button) => {
  const buttonElement = createButtonElement(button);
  buttonsContainer.appendChild(buttonElement);
});

// Attaching buttons to the calculator instance
calculator.addButtons(document.querySelectorAll('button'));
