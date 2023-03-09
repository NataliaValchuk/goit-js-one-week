// const galleryList = document.querySelector('ul');

// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// let newArray = [];

// images.forEach(image => {
//   const galleryItemEl = document.createElement('li');
//   galleryItemEl.classList.add('list_item');

//   const galleryImg = document.createElement('img');
//   galleryImg.classList.add('list_img');
//   galleryImg.src = `${image.url}`;
//   galleryImg.alt = `${image.alt}`;
//   galleryImg.width = 340;
//   galleryItemEl.appendChild(galleryImg);
//   return newArray.push(galleryItemEl);
// });
// console.log(newArray);
// galleryList.appendChild(...newArray);

// const galleryItems = images
//   .map(({ url, alt }) => {
//     return `
//     <li>
//       <img
//         src="${url}"
//         alt="${alt}"
//         style="width: 100%; height: auto; object-fit: cover;"
//       >
//     </li>
//   `;
//   })
//   .join('');

// galleryContainer.insertAdjacentHTML('beforeend', galleryItems);

// button.style.backgroundColor = 'teal';
// button.style.fontSize = '24px';
// button.style.textAlign = 'center';

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

const galleryContainer = document.querySelector('ul');

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryItems = images
  .map(({ url, alt }) => {
    return `
    <li style="list-style: none;">
      <img
        src="${url}"
        alt="${alt}"
        style="width: 100%; height: auto; object-fit: cover;"
      >
    </li>
  `;
  })
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryItems);
