let numsOnDisplay = document.querySelector('.numsondisplay');

let btnNumbers = document.querySelectorAll('.numbers .btn');

let getNums = '';
let displayNumber = [];
let history = [];

for(let num of btnNumbers) {
  if(num.value === ',') {
    num.addEventListener('click', func);
    function func() {
      getNums += this.value;
      num.removeEventListener('click', func);
      showNumsOnDisplay();
    };
  } else {
    num.addEventListener('click', function() {
      getNums += this.value;
      showNumsOnDisplay();
    });
  }
};

function showNumsOnDisplay() {
  if(getNums.length <= 16) {
    numsOnDisplay.textContent = getNums;
    displayNumber.push(getNums);
  };
};