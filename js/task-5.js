function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція для генерації випадкового кольору у hex-форматі
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Вибираємо елементи button.change-color та span.color
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Додаємо слухача подій для button.change-color
changeColorButton.addEventListener('click', () => {
  // Генеруємо випадковий колір
  const newColor = getRandomHexColor();

  // Змінюємо колір фону body та вміст span.color
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});
