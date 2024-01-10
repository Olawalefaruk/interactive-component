'use strict';

// seleting the submit button
const submit = document.querySelector('.submit-button');

// selecting the second container
const secondContainer = document.querySelector('.container-2');

// selecting the first container
const firstContainer = document.querySelector('.container');

// Selecting all numbers in the html
const numbers = document.querySelectorAll('.number');

// the user rating
const ratingNum = document.querySelector('.rating');

// initializing the rating
let ratings;

// Looping through the numbers
numbers.forEach(num => {
  // add an event listener to each number button
  num.addEventListener('click', e => {
    // tracking the element clicked
    const target = e.currentTarget;

    // removing active state from the number button
    numbers.forEach(nums => {
      if (nums !== target) nums.classList.remove('active');
    });

    // add active class to the clicked button
    target.classList.add('active');

    // set rating variable to the clicked button data-id
    ratings = target.dataset.id;

    // inputing it to the user interface
    ratingNum.textContent = ratings;
  });
});

// to show the first container only
const showContainer = function () {
  firstContainer.classList.remove('hidden');
  secondContainer.classList.add('hidden');
};
showContainer();

// to hide the first container only
const hideContainer = function () {
  firstContainer.classList.add('hidden');
  secondContainer.classList.remove('hidden');
};

// add event listener to the submit button to hide the first container and show the second container
submit.addEventListener('click', function () {
  if (showContainer) {
    hideContainer();
  }
});
