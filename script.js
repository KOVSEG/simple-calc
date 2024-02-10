let numsOnDisplay = document.querySelector('.numsondisplay');

let btnNumbers = document.querySelectorAll('.numbers .btn');

let displayNumber = '';

for(let num of btnNumbers) {
  if(num.value === ',') {
    num.addEventListener('click', func);

    function func() {
      showNumsOnDisplay(this.value);
      num.removeEventListener('click', func);
    };
    
  } else {
    num.addEventListener('click', function() {
      showNumsOnDisplay(this.value);
    });
  }
};

function showNumsOnDisplay(elems) {
  displayNumber += elems;
  numsOnDisplay.textContent = displayNumber;
};


console.log(displayNumber);