const listWithClass = document.querySelectorAll('.item');
console.log(`Number of categories: ${listWithClass.length}`);
listWithClass.forEach(listEl => {
  console.log('');
  console.log(`Category: ${listEl.firstElementChild.textContent}`);
  console.log(
    `Elements: ${listEl.lastElementChild.querySelectorAll('li').length}`,
  );
});


