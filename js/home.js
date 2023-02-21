// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//     this.potions.splice(potionIndex, 1, newName);
//   },
// };

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// const base = 3;
// const power = 5;
// const result = Math.pow(base, power);
// console.log(result);

// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }


// // Change code below this line

// const result = null;
// const pointer = null;


// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName);
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

    
//   function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     calculateTotalPrice.forEach(function (element) {
//       totalPrice += element;
//     });

//     // Change code above this line
//     return totalPrice;
// }
  
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function (element) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   });

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   // Change code above this line
//   return filteredNumbers;
// }
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function (element) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i])
//     }
//   });

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   // Change code above this line
//   return filteredNumbers;
// }
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line
// const changeEven = (numbers, value) => {
//   const newNumbers = [];

//   numbers.forEach(element) => {
//     if (element % 2 === 0) {
//       element = element + value;
//     }
// }
//   return newNumbers;
// };

// const changeEven = (numbers, value) => {
//   const newArray = [];
  
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else {
//       newArray.push(element);
//     }
//   });
  
//   return newArray;
// }


// const getUserNames = users.map((user => user.name)

// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);


// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName); \

// const x = 10;
// const y = 5;

// Додавання
// console.log(x * y); // 15

// const person = {
//   firstName: 'John',
//   age: 30,
// };
// const { firstName: personName } = person;
// console.log(personName);

// const base = 2;
// const power = 5;
// const result = Math.pow(base,power);
// console.log(result);



