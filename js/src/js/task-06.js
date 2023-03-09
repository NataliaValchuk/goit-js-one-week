// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

// const input = document.getElementById('validation-input');

// input.addEventListener('blur', () => {
//   const expectedLength = input.getAttribute('data-length');
//   const actualLength = input.value.length;

//   if (actualLength === parseInt(expectedLength)) {
//     input.classList.add('valid');
//     input.classList.remove('invalid');
//   } else {
//     input.classList.add('invalid');
//     input.classList.remove('valid');
//   }
// });


// const input = document.querySelector('#validation-input');
// const dataLength = input.getAttribute('data-length');

// input.addEventListener('blur', () => {
//   const inputValue = input.value;
//   if (inputValue.length === Number(dataLength)) {
//     input.classList.add('valid');
//     input.classList.remove('invalid');
//   } else {
//     input.classList.add('invalid');
//     input.classList.remove('valid');
//   }
// });


const input = document.querySelector('#validation - input');
const dataLength = input.getAttribute('data-length');

