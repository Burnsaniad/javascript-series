const myNum = ['a', 'b', 'c', 'd', 'e'];
// myNum.forEach((num) => console.log(num))

const num = [1,2,3,4];
const newNum = num.reduce((acc,curr) => (acc + curr),0)
console.log(newNum);