/*-------------------------------- Constants --------------------------------*/

const calculatorEl = document.querySelector('#calculator');
const equalsEl = document.querySelector('.equals');

/*-------------------------------- Variables --------------------------------*/

let displayEl = document.querySelector('.display');
let operandX = null;
let operandY = null;
let operator = null;
let result;

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

const calculate = () => {
  operandX = Number(operandX);
  operandY = Number(operandY);
  if (operator === 'add') {
    result = operandX + operandY;
  } else if (operator === 'subtract') {
    result = operandX - operandY;
  } else if (operator === 'multiply') {
    result = operandX * operandY;
  } else if (operator === 'divide') {
    result = operandX / operandY;
  }
  displayEl.innerText = result;
}

const reset = () => {
  displayEl.innerText = '';
  operandX = null;
  operandY = null;
  operator = null;
}   

/*----------------------------- Event Listeners -----------------------------*/

calculatorEl.addEventListener('click', (event) => {
  if (event.target.classList.contains('number')) {
    displayEl.innerText += event.target.innerText;
    if (operator === null) {
      operandX = Number(displayEl.innerText);
    } else {
      operandY = Number(displayEl.innerText);
    }
  } else if (event.target.classList.contains('operator') && (event.target.innerText !== 'C')) {
    if (event.target.innerText === '+') {
      operator = 'add';
      displayEl.innerText = '';
    } else if (event.target.innerText === '-') {
      operator = 'subtract';
      displayEl.innerText = '';
    } else if (event.target.innerText === '*') {
      operator = 'multiply';
      displayEl.innerText = '';
    } else if (event.target.innerText === '/') {
      operator = 'divide';
      displayEl.innerText = '';
    }
  } else if (event.target.classList.contains('operator') && (event.target.innerText === 'C')) {
    reset();
  }
});

equalsEl.addEventListener('click', () => {
  if (operandX !== null && operator !== null && operandY !== null) {
    calculate();
  }
});
