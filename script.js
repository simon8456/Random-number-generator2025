// script.js
const button = document.getElementById('generateButton');
const numberDisplay = document.getElementById('randomNumber');
const sharedNumbersList = document.getElementById('sharedNumbersList');

button.addEventListener('click', () => {
  generateRandomNumber();
});

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  numberDisplay.textContent = randomNumber;

  // Vytvoření tlačítka pro sdílení
  const shareButton = document.createElement('button');
  shareButton.textContent = 'Share';
  shareButton.addEventListener('click', () => {
    shareNumber(randomNumber);
  });

  // Přidání tlačítka do stránky
  numberDisplay.appendChild(shareButton);
}

// Funkce pro sdílení čísla
function shareNumber(number) {
  const listItem = document.createElement('li');
  listItem.textContent = `Number: ${number}`;

  // Přidání čísla do seznamu sdílených čísel
  sharedNumbersList.appendChild(listItem);
}
