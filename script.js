// counter program
const decreseBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const incrementBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

// create function for increment
incrementBtn.addEventListener("click", ()=> {
  count++;
  countLabel.innerHTML = count;
});

// create function for decrease
decreseBtn.addEventListener("click", ()=> {
  count -- ;
  countLabel.innerHTML = count;
});

// create function for reset 
resetBtn.addEventListener("click", ()=>{
  count = 0;
  countLabel.innerHTML = count;
});