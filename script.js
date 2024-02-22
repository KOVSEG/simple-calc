let numsOnDisplay = document.querySelector('.numsondisplay');
let calculator = document.querySelector('.calculator');
let btnCommon = document.querySelectorAll('.btn');
let getBtnValue = '';
let summary = '';

// Turn on the calculator
calculator.addEventListener('mouseover', startCalc);
function startCalc() {
  numsOnDisplay.textContent = '0'; //Show number 0 when calc is on
  calculator.removeEventListener('mouseover', startCalc);
};

// Get value of every button
for(let button of btnCommon) {
  button.addEventListener('click', func);
};

function func() {

  if(this.classList.contains('number')) {
    getBtnValue = this.value;

    if(this.value == ',') {
      this.removeEventListener('click', func);
    } else {
      getBtnValue = this.value;
    };

  };

  if(this.classList.contains('fix')) {
    console.log(this);
  };

  if(this.classList.contains('operate')) {
    console.log(this);
  };

  sumFunc(getBtnValue);
};


function sumFunc(getNumber) {

  //Nums less than 16 digits
  if(getNumber.length <= 16) {
    numsOnDisplay.textContent = getNumber;
  };

};