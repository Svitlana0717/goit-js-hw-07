// Вибираємо елемент ul#categories
const categories = document.querySelector('#categories');

// Отримуємо всі елементи li.item у списку ul#categories
const categoryItems = categories.querySelectorAll('.item');

// Виводимо кількість категорій
console.log(`Кількість категорій: ${categoryItems.length}`);

// Для кожного елемента li.item знаходимо текст заголовка (тег <h2>) і кількість вкладених елементів <li>
categoryItems.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const itemsCount = item.querySelectorAll('li').length;
  console.log(`Категорія: ${title}\nКількість елементів: ${itemsCount}`);
});
