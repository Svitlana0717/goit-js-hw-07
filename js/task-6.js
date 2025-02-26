function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція для генерації випадкового кольору у hex-форматі
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Вибираємо елементи
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

// Функція для створення колекції елементів
function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const element = document.createElement('div');
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();
    elements.push(element);
  }
  boxes.append(...elements);
}

// Функція для очищення колекції елементів
function destroyBoxes() {
  boxes.innerHTML = '';
}

// Додаємо слухача подій для кнопки Create
createButton.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

// Додаємо слухача подій для кнопки Destroy
destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
