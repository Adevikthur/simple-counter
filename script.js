const counterNumber = document.getElementById("counter-number");
const addBtn = document.getElementById("add-btn");
const resetBtn = document.getElementById("reset-btn");
const subtractBtn = document.getElementById("subtract-btn");

let count = 0;

// Declare [arrow] Functions before calling them

const add = () => {
  count++;
  counterNumber.textContent = count;
};

const subtract = () => {
  count--;
  counterNumber.textContent = count;
};

const reset = () => {
  count = 0;
  counterNumber.textContent = count;
};

// Event listeners (triggers)
addBtn.addEventLister("click", add);
resetBtn.addEventLister("click", reset);
subtractBtn.addEventLister("click", subtract);

// Alternative and Simplified Function Calls using Switch Statements
/* 
const updateCounter = (operation) => {
  switch(operation) {
    case 'add':
      count++;
      break;
    case 'subtract':
      count--;
      break;
    case 'reset':
      count = 0;
      break;
  }
  counterNumber.textContent = count;
};

addBtn.addEventListener("click", () => updateCounter('add'));
resetBtn.addEventListener("click", () => updateCounter('reset'));
subtractBtn.addEventListener("click", () => updateCounter('subtract'));
 */