import { Calculator } from './calculator.js';

const calculator = new Calculator();

const input = document.querySelector('#input');
const numbers = document.querySelectorAll('#number');
const buttons = document.querySelectorAll('button');

const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', () => {
  calculator.delete();
});

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
  calculator.reset();
});

const seperatorButton = document.querySelector('#seperator');
seperatorButton.addEventListener('click', () => {
  calculator.addSeperator();
});

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
  calculator.calculate();
});

const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
  calculator.setFunction();
});

const subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', () => {
  calculator.setSubtractOperation();
});

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
  calculator.setMultiplyOperation();
});

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {
  calculator.setDivideOperation();
});

numbers.forEach((button) => {
  button.addEventListener('click', (event) => {
    calculator.addDigit(event.target.dataset.value);
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    input.value = calculator.getValue();
  });
});
