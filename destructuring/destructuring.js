let users = {
    name: "saniad",
    age: 21,
    university: "FEC",
    degree: {
        sub: "CSE",
        roll: 874
    }
}

// const {name: hello} = users;
// console.log(hello);

const {degree: {sub:x},} = users
console.log(x)