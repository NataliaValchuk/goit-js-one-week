// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text,
//  оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

// const input = document.querySelector('#font-size-control');
// const span = document.querySelector('#text');

// input.addEventListener('input', () => {

// })
// const fontControl = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');

// fontControl.addEventListener('input', function () {
//   text.style.fontSize = fontControl.value + 'px';
// });


const fontControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

// Встановлення розміру шрифту при завантаженні сторінки
text.style.fontSize = fontControl.value + 'px';

fontControl.addEventListener('input', function () {
  text.style.fontSize = fontControl.value + 'px';
});
