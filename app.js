/*-------------------------------- Constants --------------------------------*/




/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const btns = document.querySelectorAll('.button number');
const calculatorEl = document.querySelector('#calculator');
const displayEl = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/

btns.forEach((btn) => {
  displayEl.innerText = btn.innerText
});


/*-------------------------------- Functions --------------------------------*/

const 