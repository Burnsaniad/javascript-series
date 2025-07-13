                        // How to create Array
const salad0 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const anotherSalad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');

// console.log(salad0 === anotherSalad) // false, 📝 elements are same but not the arrays

i = 4
const array = new Array(i) // 📝 If we pass just 1 argument then it creates i number of empty element
// console.log(array) 

                       // How to get array element

const salad1 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
// Using indexes
salad1[2]; // '🥦'
salad1[0]; // '🍅'
salad1[5]; // '🥕'
const len = salad1.length;
salad1[len - 1]; // '🥑'
salad1[len - 3]; // '🌽'

// 🧠Using for loop
for(let i=0; i<salad1.length; i++) {
    // console.log(`Element at index ${i} is ${salad1[i]}`);
  }

                       // How to add elements to an array

const salad2 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
//❗Important Notes: push & unshift method change the alginal array 
// console.log(salad2.push('🥜'));  // push the element in the last
// console.log(salad2.unshift('🥜'));  // push the element in the first
// console.log(salad2)

                       // How to remove element to an array

const salad3 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
//   console.log(salad3.pop()); // 🥑
//   console.log(salad3.shift()); // 🍅
//   console.log(salad3);

                       // How to copy & clone an array

const salad4 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const saladCopy = salad4.slice(); // slice is immutable

// console.log(saladCopy); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

salad4 === saladCopy; // false, 📝 elements are same but not the arrays

                       // How to determine a if value is an array

Array.isArray(['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']); // true
Array.isArray('🍅'); // false
Array.isArray({ 'tomato': '🍅'}); // false
Array.isArray([]); // true

                       // Array Destructuring in JavaScript

let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕']; // syntax of array destructuring
// console.log(tomato, mushroom, carrot); // Output, 🍅 🍄 🥕

let vegetables0 = ['🍅', '🍄', '🥕'];
let tomatos = vegetables0[0];
let mushrooms= vegetables0[1];
let carrots= vegetables0[2];

                       // How to assign a default value to a variable
  
let [tom , mush = '🍄'] = ['🍅'];
// console.log(tom,mush); // 🍅 🍄

                       // How to Skip a Value in an Array

let [toma, , carro] = ['🍅', '🍄', '🥕'];

// console.log(toma,carro); // 🍅 🥕

                        // Nested Array Destructuring in JS

let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
const veg = fruits[4]; // ['🍅', '🍄', '🥕']
const carrot_veg = veg[2]; // 🥕 index way
fruits[4][2]; // 🥕 matrix way
let [,,,,[,,carrot_veg_des]] = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']]; // 🥕 destructuring way

                       // How to Use the Rest Parameter in JS

// when we want to clone or copy an array
const salad5 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const saladCloned = [...salad5];
// console.log(saladCloned); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]
  
salad5 === saladCloned // false

                        // How to swap values using destructuring

let first = '😔';
let second = '🙂';   
[first, second] = [second, first];
  
// console.log(first,second);  // '🙂','😔'

                        // How to merge two array
                       
const emotion = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];

const emotionalVeggies = [...emotion, ...veggies];
// console.log(emotionalVeggies); // ["🙂", "😔", "🥦", "🥒", "🌽", "🥕"]

                        // Array length property
                  
const arr1 = [11, 21, 73];
const arr2 = new Array(7); // length 7 but element 0
  
// console.log(arr1.length);
// console.log(arr2.length);
  
arr2.length = 2 ** 32 - 1; // 📝 4294967295 -> maximum length of array
  
// const arr3 = new Array(-10);  // ❌ Not working, negetive number not applicable

const arr = [11, 32];
// console.log(arr);
arr.length = 5;  // 📌 array length is 5, [11, 32, empty x 3]
arr.length = 0  // 📌 array length is 0, []

                        // Non-Modifiable Length Property

const ages = [21, 12, 73, 41, 67];
Object.defineProperty(ages, "length", { writable: false });
// ages[5] = 6; 
// ages.push(5); 
ages.length = 7 // ❌ Not working, cause array length is non-writable
// console.log(ages.length)