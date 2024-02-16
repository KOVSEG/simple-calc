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
    if (this.value === ',') {
      writeZeroBeforeDot();
      this.removeEventListener('click', func); //Restrict commas of number
    };
    if (this.classList.contains('number')) {
      getNums += this.value;
      limitNumber(getNums);
    };
  });
};

// Write zero first if the first call is a decimal point(comma)
function writeZeroBeforeDot() {
  if(getNums == '') {
    getNums = '0';
  };
};

function limitNumber(getNums) {
  if(getNums.length <= 16) {
    numsOnDisplay.textContent = getNums; //Show nums on display, lower than 16 digits
  };
};