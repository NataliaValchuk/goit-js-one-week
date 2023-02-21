function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Change code below this line

  if (password === null) {
    message = 'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  // switch (password) {
  //   case null:
  //     message = 'Canceled by user!';
  //     break;

  //   case ADMIN_PASSWORD:
  //     message = 'Welcome!';
  //     break;

  //   default:
  //     message = 'Access denied, wrong password!';
  // }

  // Change code above this line
  return message;
}

// console.log(checkPassword('sd'));
// console.log(checkPassword('jqueryismyjam'));

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

// console.log(getNameLength('Poly'));
// console.log(getNameLength('Harambe'));
// console.log(getNameLength('Billy'));
// console.log(getNameLength('Joe'));

const courseTopic = 'JavaScript essentials';
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopicLength - 1];

function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return 'Your order is empty!';
  } else if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  } else {
    return 'The order is accepted, our manager will contact you';
  }
}

// Change code above this line
// Записать массив, const arr = [“BEST”, “the”, “foo”, “is”,  “JS” ]
// развернуть массив,
// вырезать foo,
// перевести его в строку разделенную пробелами
// Запишіть масив, розверніть його, виріжіть foo, зберіть його у рядок

const arr = ['BEST', 'the', 'foo', 'is', 'JS'];

const cutValue = function (array, value) {
  let newArray = [...array];
  let indexValue = newArray.indexOf(value);
  let cutValueArray = newArray.splice(indexValue, 1);
  let finalResult = newArray.join('');

  console.log(cutValueArray);
  console.log(finalResult);
};

// cutValue(arr, 'foo');

// const cutValue2 = function (array, value) {
//   let newArray = [...array];

//   return newArray
//     .reverse()
//     .slice(0, array.indexOf(value))
//     .concat(array.slice(array.indexOf(value) + 1))
//     .join('');
// };

// console.log(cutValue2(arr, 'foo'));

// За каждый месяц налоговая начисляет на зп разработчика 5% от суммы.

// *?  Напишите консольную функцию, для которую пользователь вводит сумму зп

// *?  и количество месяцев с помощью prompt() не забываем что prompt возвращает строку.

// *?  А налоговая вычисляет конечную сумму зп без налогов за год,

// *?  сумму налогов всего и чистый доход разработчика за каждый месяц.

// *? Для вычисления суммы с учетом процентов используйте цикл for.

// function taxCounter() {
//   let devSalary = Number(prompt('Enter your salary per month'));

//   if (isNaN(devSalary)) {
//     alert('Invalid salary');
//     taxCounter();
//   }

//   let devMonths = Number(prompt('Enter quantity of months'));

//   if (isNaN(devMonths)) {
//     alert('Invalid months');
//     taxCounter();
//   }

//   let clearSalary = 0;
//   let totalTax = 0;
//   const tax = 0.05;

//   for (let i = 0; i <= devMonths; i++) {
//     clearSalary += devSalary - devSalary * tax;
//     totalTax += devSalary * tax;
//   }

//   console.log(`Your clear salary: ${clearSalary}, total tax: ${totalTax}`);
// }

// // taxCounter();

// function splitMessage(message, delimiter) {
//   return message.split(delimiter);
// }

// console.log(splitMessage('Lorem ipsum', ' '));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice[(0, 3)];
// const nonExtremeEls = fruits.slice(1);
// const lastThreeEls = fruits.slice();

// firstTwoEls();
// nonExtremeEls();
// lastThreeEls();

// function findLongestWord(string) {
//   const newArray = string.split(' ');
//   let longestWord = '';

//   for (let i = 0; i < newArray.length; i++) {
//     const currentWord = newArray[i];

//     if (currentWord.length > longestWord.length) {
//       longestWord = currentWord;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord('Google web site'));

// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }


// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location.country = ['Jamaica'];
// apartment.location.city = 'Kingston';
