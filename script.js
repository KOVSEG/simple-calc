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

// Get sign of every button and pass it to the next function
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

// Work with value of buttons
function sumFunc(getValue, thisValue) {

  getBntValueArr.push(getValue);
  let getThis = thisValue;

  getZeroNumAndComma(getValue);

  getOherNums(getValue);

  console.log(getNumsArr);

};

// Get zero number and decimal value with zero num
function getZeroNumAndComma(getZeroAndCommaValue) {

  for(let i = 0; i < getBntValueArr.length; i++) {
    if(getBntValueArr[0] == '0' || getBntValueArr[0] == '00') {
      getNumsArr[0] = '0';
    };
  };

  if(getNumsArr[0] == '0' && getNumsArr[1] == ',') {
    getNumsArr.push(getZeroAndCommaValue);
  };

  if(getZeroAndCommaValue == ',') {
    getNumsArr.push(getZeroAndCommaValue);
    checkArrNums();
  };
};

// Get number from 1 to 9
function getOherNums(getOtherNums) {
  if(getNumsArr[0] != '0' && getNumsArr[1] != ',' && getOtherNums != ',') {
    getNumsArr.push(getOtherNums);
  };
};

// Check zero before comma
function checkArrNums() {
  if(getNumsArr[0] == ',') {
    getNumsArr[0] = '0';
    getNumsArr[1] = ',';
  };
};