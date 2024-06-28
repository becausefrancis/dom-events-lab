/*-------------------------------- Constants --------------------------------*/




/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const buttonNumEl = document.querySelectorAll('div .button number');
const displayEl = document.querySelector('.display');





/*----------------------------- Event Listeners -----------------------------*/

buttonNumEl.addEventListener('click', displayNum)
  

/*-------------------------------- Functions --------------------------------*/

const displayNum = () => {
  displayEl.textContent = 'hi';
}