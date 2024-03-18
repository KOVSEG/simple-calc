let numsOnDisplay = document.querySelector('.numsondisplay');
let calculator = document.querySelector('.calculator');
let btnCommon = document.querySelectorAll('.btn');
let getBntValueArr = [];
let getNums = [];

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

  // Get sum of zero nums from every click
  for(let i = 0; i < getBntValueArr.length; i++) {
    if(getBntValueArr[i] == '0'|| getBntValueArr[i] == '00') {
      sum ++;
    };
  };

  if((getBntValueArr[0] == '0' || getBntValueArr[0] == '00') && getValue >= '1' || getValue == ',') {

    // If first figure > 0 don't clear array and continue getting figures
    if(getNums[0] >= '1') {
      getBntValueArr = [];
      getNums.push(getValue);
      getBntValueArr.push(getValue);
    } else {
      // If first figure is 0, clear every 0 and get comma
      getNums = getBntValueArr.slice(sum);
      getBntValueArr = [];
      getBntValueArr.push(getValue);

      // If comma is first sign - add first zero before comma 
      firstZeroNum(); 
    };

  } else {
    getNums.push(getValue);
  };

  function firstZeroNum() {
    if(getNums[0] == ',') {
      getNums.unshift('0');
    };
  };
};