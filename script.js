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
    if(this.value === ',') {
      writeZeroBeforeDot();
      this.removeEventListener('click', func); //Restrict commas of number
    };
    if(this.classList.contains('number')) {
      getNums += this.value;
      numsOnDisplay.textContent = getNums; //Show nums on display
    };

  });
};

// Write zero first if the first call is a decimal point
function writeZeroBeforeDot() {
  if(getNums == '') {
    getNums = '0';
  };
};


// Limit the number of digits on display
// Forbid to repeat a value 00 before dot, after dot it can repeat many times