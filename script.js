let numsOnDisplay = document.querySelector('.numsondisplay');
let calculator = document.querySelector('.calculator');
let btnCommon = document.querySelectorAll('.btn');
let getBntValueArr = [];
let getNumsArr = [];
let fullArr = '';
let guk = [];

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

  sumFunc(getBtnValue);
};

// Work with value of buttons
function sumFunc(getValue) {

  getBntValueArr.push(getValue);
  let sum = 0;

  for(let i = 0; i < getBntValueArr.length; i++) {
    if(getBntValueArr[i] == '0'|| getBntValueArr[i] == '00') {
      sum ++;
    };
  };

  if(getBntValueArr[0] == '0' && getValue >= '1') {
    guk = getBntValueArr.slice(sum);
    getBntValueArr = [];
  } else {
    guk.push(getValue);
  };

  console.log(getBntValueArr)
  console.log(guk);

  getZeroNumAndComma(getValue);

  // getOherNums(getValue);

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

// Check zero before comma
function checkArrNums() {
  if(getNumsArr[0] == ',') {
    getNumsArr[0] = '0';
    getNumsArr[1] = ',';
  };
};

// Get number from 1 to 9
function getOherNums(getOtherNums) {
  if(getNumsArr[0] != '0' && getNumsArr[1] != ',' && getOtherNums != ',') {
    getNumsArr.push(getOtherNums);
  };
};