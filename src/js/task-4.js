const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки при сабміті

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  // Перевірка на заповненість полів
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  // Створення об'єкта з даними форми
  const formData = {
    email: email,
    password: password,
  };

  // Виведення об'єкта в консоль
  console.log(formData);

  // Очищення полів форми
  form.reset();
});
