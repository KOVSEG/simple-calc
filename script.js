let numsOnDisplay = document.querySelector('.numsondisplay');
let calculator = document.querySelector('.calculator');
let btnCommon = document.querySelectorAll('.btn');
let getNums = '';

// Turn on the calculator
calculator.addEventListener('mouseover', startCalc);
function startCalc() {
  numsOnDisplay.textContent = '0'; //Show number 0 when calc is on
  calculator.removeEventListener('mouseover', startCalc);
};

// Get value of every button
for(let button of btnCommon) {
  button.addEventListener('click', function func() {
    if(this.classList.contains('number')) {
      getNums += this.value;
      numsOnDisplay.textContent = getNums; //Show nums on display
    };
    if(this.value === ',') {
      this.removeEventListener('click', func); //Restrict commas of number
    };
  });
};