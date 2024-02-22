let numsOnDisplay = document.querySelector('.numsondisplay');
let calculator = document.querySelector('.calculator');
let btnCommon = document.querySelectorAll('.btn');
let getBntValueArr = [];
let getNumsArr = [];

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
  let getBtnValue = '';
  
  let getThis = this;

  if(this.classList.contains('number')) {
    getBtnValue = this.value;

    if(this.value == ',') {
      this.removeEventListener('click', func);
    };

  };

  if(this.classList.contains('fix')) {
    console.log(this);
  };

  if(this.classList.contains('operate')) {
    console.log(this);
  };

  sumFunc(getBtnValue, getThis);
};


function sumFunc(getValue, thisValue) {
  getBntValueArr.push(getValue);
  let getThis = thisValue;

  for(let i = 0; i < getBntValueArr.length; i++) {
    if(getBntValueArr[i] == '0' || getBntValueArr[i] == '00') {
      getNumsArr[0] = '0';
    };
  };

  if(getNumsArr[0] == '0' && getNumsArr[1] == ',') {
    getNumsArr.push(getValue);
  };

  if(getValue == ',') {
    getNumsArr.push(getValue);
    checkArrNums();
  };

};

function checkArrNums() {
  if(getNumsArr[0] == ',') {
    getNumsArr[0] = '0';
    getNumsArr[1] = ',';
  };
};