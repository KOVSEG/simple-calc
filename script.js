let numsOnDisplay = document.querySelector('.numsondisplay');

let btnNumbers = document.querySelectorAll('.numbers .btn');

let displayNumber = '';

for(let num of btnNumbers) {
  if(num.textContent === ',') {
    num.addEventListener('click', function() {
      num = num.textContent;
      // showNumsOnDisplay(num);
    });
  } else {
    num.addEventListener('click', function() {
      console.log(num.textContent);
      num = num.textContent;
      // num = Number(num.textContent);
      showNumsOnDisplay(num);
    });
  }
};

function showNumsOnDisplay(elems) {
  displayNumber += elems;
  // numsOnDisplay.textContent = displayNumber;
};


console.log(displayNumber);