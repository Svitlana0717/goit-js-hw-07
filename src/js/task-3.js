const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const inputValue = nameInput.value.trim(); // Очищаємо значення від пробілів

  // Якщо інпут порожній або містить лише пробіли
  if (inputValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = inputValue; // Підставляємо значення
  }
});
