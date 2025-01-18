// script.js
const button = document.getElementById('generateButton');
const numberDisplay = document.getElementById('number');

button.addEventListener('click', () => {
  generateRandomNumber();
});

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  numberDisplay.textContent = `Generated number: ${randomNumber}`;
}