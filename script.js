'use strict';

const submit = document.querySelector('.submit-button');
const secondContainer = document.querySelector('.container-2');
const firstContainer = document.querySelector('.container');

// const displayMessage = function(){
//   const display = document.querySelector('.message').textContent = `You selected ${.} out of 5`;
// }

const showContainer = function () {
  firstContainer.classList.remove('hidden');
  secondContainer.classList.add('hidden');
};
showContainer();

const hideContainer = function () {
  firstContainer.classList.add('hidden');
  secondContainer.classList.remove('hidden');
};

submit.addEventListener('click', function () {
  if (showContainer) {
    hideContainer();
  }
});
