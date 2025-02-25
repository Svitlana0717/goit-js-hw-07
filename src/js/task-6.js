function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Генеруємо випадковий hex-колір
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Створюємо елементи
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  
  // Очищаємо старі елементи перед додаванням нових
  boxesContainer.innerHTML = '';

  // Створюємо amount елементів
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = 30 + i * 10; // Розмір елементів збільшується на 10px для кожного наступного
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor(); // Випадковий колір
    div.style.margin = '5px'; // Відступи між елементами
    boxesContainer.appendChild(div); // Додаємо елемент в контейнер
  }
}

// Очищаємо колекцію
function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Очищаємо вміст контейнера
}

// Обробка натискання на кнопку Create
const createButton = document.querySelector('[data-create]');
createButton.addEventListener('click', () => {
  const input = document.querySelector('input');
  const amount = parseInt(input.value, 10); // Отримуємо кількість з input

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); // Створюємо нову колекцію
  }

  input.value = ''; // Очищаємо поле вводу
});

// Обробка натискання на кнопку Destroy
const destroyButton = document.querySelector('[data-destroy]');
destroyButton.addEventListener('click', () => {
  destroyBoxes(); // Очищаємо колекцію
});
