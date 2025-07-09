// An object representing a person
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Creating Objects
// 1. Object Literal Syntax (Most Common)
// javascript
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  isElectric: false
};

let fruits = {name: "mango"}
const anotherfruits = {name: "mango"}


console.log(fruits == anotherfruits)
console.log(fruits === anotherfruits)

fruits = anotherfruits

console.log(fruits == anotherfruits)
console.log(fruits === anotherfruits)


obj2 = Object.assign({}, fruits)
console.log(obj2)
console.log(fruits)

console.log(obj2 === fruits)