// const input = document.querySelector('#controls input');
// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const boxesContainer = document.querySelector('#boxes');

// createBtn.addEventListener('click', () => {
//   const amount = input.value;
//   const boxes = [];

//   for (let i = 0; i < amount; i += 1) {
//     const box = document.createElement('div');
//     const size = 30 + i * 10;

//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxes.push(box);
//   }

//   boxesContainer.append(...boxes);
// });

// destroyBtn.addEventListener('click', () => {
//   boxesContainer.innerHTML = '';
// });

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, '0')}`;
// }

// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const boxesContainer = document.getElementById('boxes');

// // Функція для генерації випадкового кольору
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, '0')}`;
// }

// // Функція для створення колекції елементів
// function createBoxes(amount) {
//   // Створюємо масив з вказаною кількістю елементів
//   const boxes = new Array(amount).fill('');
//   // Генеруємо HTML-код для кожного елементу та об'єднуємо їх у рядок
//   const boxesMarkup = boxes.reduce((acc, _, index) => {
//     const size = 30 + index * 10;
//     const color = getRandomHexColor();
//     return (
//       acc +
//       `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
//     );
//   }, '');
//   // Додаємо HTML-код у контейнер для елементів
//   boxesContainer.insertAdjacentHTML('beforeend', boxesMarkup);
// }

// // Функція для очищення колекції елементів
// function destroyBoxes() {
//   boxesContainer.innerHTML = '';
// }

// createBtn.addEventListener('click', () => {
//   const amount = document.querySelector('input').value;
//   createBoxes(amount);
// });

// destroyBtn.addEventListener('click', () => {
//   destroyBoxes();
// });





const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const boxesContainer = document.getElementById('boxes');
// Функція для генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Функція для створення колекції елементів
function createBoxes(amount) {
  // Створюємо масив з вказаною кількістю елементів
  const boxes = new Array(amount).fill('');
  // Генеруємо HTML-код для кожного елементу та об'єднуємо їх у рядок
  const boxesMarkup = boxes.reduce((acc, _, index) => {
    const size = 30 + index * 10;
    const color = getRandomHexColor();
    return (
      acc +
      `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
    );
  }, '');
  // Додаємо HTML-код у контейнер для елементів
  boxesContainer.insertAdjacentHTML('beforeend', boxesMarkup);
}

// Функція для очищення колекції елементів
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(document.querySelector('input').value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

// const controls = document.querySelector('#controls');
// const boxesContainer = document.querySelector('#boxes');
// const input = document.querySelector('input');
// const numberElement = document.querySelector('#number');

// input.addEventListener('input', () => {
//   const value = input.value;
//   numberElement.textContent = value;
// });


// controls.addEventListener('click', handleControlsClick);

// function handleControlsClick(event) {
//   if (event.target.dataset.create) {
//     const amount = Number(controls.querySelector('input').value);
//     createBoxes(amount);
//   }

//   if (event.target.dataset.destroy) {
//     destroyBoxes();
//   }
// }