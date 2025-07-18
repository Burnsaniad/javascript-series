                            // array concatinate method

const first = [1, 2, 3];
const second = [4, 5, 6];
  
const merged = first.concat(second);
  
// console.log(merged); // [1, 2, 3, 4, 5, 6]

const third = [7, 8, 9] // [1, 2, 3, 4, 5, 6, 7, 8, 9]
const mergeAgain = first.concat(second, third)
// console.log(mergeAgain)

                            // array join methods

const emotions = ['🙂', '😍', '🙄', '😟'];

const joined = emotions.join(); // joined in a string  
// console.log(joined); // "🙂,😍,🙄,😟"

const joinedAgain = emotions.join('');
// console.log(joinedAgain); // "🙂😍🙄😟"

[].join() // 📝 returns an empty string ''

                            // The fill() method

const colors = ['red', 'blue', 'green'];

colors.fill('pink'); // 📌 replace all the elements with 'pink'
// console.log(colors); // ["pink", "pink", "pink"]

const colors1 = ['red', 'blue', 'green']; 

colors1.fill('pink', 1,3); // ["red", "pink", "pink"] 📌 .fill(replace, st_idx, lt_idx)


                            // array includes method

const names = ['tom', 'alex', 'bob', 'john'];

names.includes('tom'); // true
names.includes('july'); // false

                            // array indexOf method

const names0 = ['tom', 'alex', 'bob', 'john'];

names.indexOf('alex'); // 1
names.indexOf('rob'); // -1


const names1 = ['tom', 'alex', 'bob', 'tom'];

names1.indexOf('tom'); // 0
names1.lastIndexOf('tom'); // 3

                            //❗Array Mutability Method

                            // The reverse() array method

const names2 = ['tom', 'alex', 'bob'];
names2.reverse(); // ["bob", "alex", "tom"] 📌 change the arginal array
console.log(names2)

                            // The sort() array method

let artists = [
    'John White Abbott', 
    'Leonardo da Vinci', 
    'Charles Aubry', 
    'Anna Atkins', 
    'Barent Avercamp'
  ];

let sorted = artists.sort();
  
// console.log('Sort the artist names', sorted);

// console.log(artists === sorted); // true

// Compare function in Js
// function (a, b) {
//       if (a > b) {
//         return -1;
//       }
//       if (a < b) {
//         return 1;
//       }
//       // a must be equal to b
//       return 0;
//    }

//   function (a,b) {
//    return a === b ? 0 : a > b ? -1 : 1;
//   }

artists.sort(function (a, b) {
    return a === b ? 0 : a > b ? -1 : 1;
});
  
// console.log('Sort the artist names(Descending)', artists);

// Sorting Numbers

let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

ages.sort(function(a,b){
    return a - b
});

// console.log(ages)

ages.sort(function(a,b){
    return b - a
});

// console.log(ages)

                        // The splice() array method

const name0 = ['tom', 'alex', 'bob'];

name0.splice(1, 0, 'zack');
  
// console.log(name0); // ["tom", "zack", "alex", "bob"]


const name1 = ['tom', 'alex', 'bob'];

const deleted = name1.splice(2, 1, 'zack'); // 📝 it's return the deleted item
  
// console.log(deleted); // ["bob"]
// console.log(name1); // ["tom", "alex", "zack"]

                        // The at() method

// 📌 When we want to use negative index, at() method for negative index                       
const junkFoodILove = ['🥖', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🍿'];

junkFoodILove.at(0); // 🥖
junkFoodILove.at(3); // 🍕
junkFoodILove.at(-1); // 🍿
junkFoodILove.at(-5); // 🍕
junkFoodILove.at(-8); // 🥖
junkFoodILove.at(10); // undefined

                        // The flat() method

const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
  
const arr2 = [0, 1, [2, [3, [4, 5]]]];
// console.log(arr2.flat(2));
// console.log(arr2.flat(3));
// console.log(arr2.flat(Infinity)); // 📝 if we want to flat all nested array

                        // The copyWithin() method

const arrays = [1, 2, 3, 4, 5, 6, 7];
arrays.copyWithin(0, 3, 6) // 📌 copyWithin(target, start, End) 
// console.log(arrays)
const arrays1 = [1, 2, 3, 4, 5, 6, 7];
arrays1.copyWithin(0, 4) // 📌 copy(target, start) to end


                        // Array Imutability Methods
// 🧠 Imutability means does't change the orginal array

// The toSorted() method
const months0 = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months0.toSorted();
// console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
// console.log(months0); // ['Mar', 'Jan', 'Feb', 'Dec']


// The toReversed() method
const items = [1, 2, 3];
// console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
// console.log(reversedItems); // [3, 2, 1]
// console.log(items); // [1, 2, 3]


// The toSpliced() method
const months1 = ["Jan", "Mar", "Apr", "May"];
const months2 = months1.toSpliced(1, 0, "Feb");

// console.log(months2)
// console.log(months1)


// The with() method
const numbers0 = [1, 2, 3, 4, 5];

// numbers0[2] = 6;
// console.log(numbers0); // [1, 2, 6, 4, 5];

const newArray = numbers0.with(2,6);

// console.log(numbers0); // Unchanged => [1, 2, 3, 4, 5];
// console.log(newArray); // Changed(A new copy) => [1, 2, 6, 4, 5];

numbers0[-2] = 8;
// console.log(numbers0); // [1, 2, 3, 4, 5, -2: 8]

// 📌 we can also use -index in with() method
const numbers1 = [1, 2, 3, 4, 5];
const anotherArray = numbers1.with(-2, 8);
// console.log(anotherArray); // [1, 2, 3, 8, 5]

anotherArray.at(-2); // 8