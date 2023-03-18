// const listWithClass = document.querySelectorAll('.item');
// console.log(`Number of categories: ${listWithClass.length}`);
// listWithClass.forEach(listEl => {
//   console.log('');
//   console.log(`Category: ${listEl.firstElementChild.textContent}`);
//   console.log(
//     `Elements: ${listEl.lastElementChild.querySelectorAll('li').length}`,
//   );
// });
const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log(listWithId);
const listWithClass = document.querySelector('.menu');
console.log(listWithClass);
const menuItemsByClass = document.querySelectorAll('.menu-item');
console.log(menuItemsByClass);
const secondMenuItem = document.querySelector('.menu-item');
secondMenuItem.style.color = 'tomato';
console.log(secondMenuItem);