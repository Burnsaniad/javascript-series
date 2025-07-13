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
console.log(joined); // "🙂,😍,🙄,😟"

const joinedAgain = emotions.join('');
console.log(joinedAgain); // "🙂😍🙄😟"

[].join() // 📝 returns an empty string ''

                            // The fill() method

const colors = ['red', 'blue', 'green'];

colors.fill('pink'); // 📌 replace all the elements with 'pink'
console.log(colors); // ["pink", "pink", "pink"]

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

                            // The reverse() array method

const names2 = ['tom', 'alex', 'bob'];
names2.reverse(); // ["bob", "alex", "tom"]

                            