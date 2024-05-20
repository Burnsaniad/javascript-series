const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const empty = {}
empty.name = "Saniad Islam"
empty.age = 21
empty.Institute = "FEC"

// console.log(empty)

const regularUser = {
    emailName : "islamsaniad@gmail.com",
    FullName :{
        Username : {
            FirstName : "Saniad",
            LastName : "Islam"
        }
    }
}

// console.log(regularUser.FullName.Username.FirstName)

const User = [
    {
    name_1 : "Saniad",
    email_1 : "islamsaniad@gmail.com"
    },
    {
        name_2 : "Saikat",
        email_2 : "saikatcool@gmail.com"
    },
    {
        name_3 : "Anupam",
        email_3 : "anupampro@gmail.com"
    }
]
// console.log(User[0])
// console.log(User[1])
// console.log(User[2])

User[0].email_1 = "saniadislam@gamil.com"
// console.log(User[0])
User[2].email_3 = "anupamdetoxed@gmail.com"
// console.log(User[2])


// console.log(Object.keys(empty))
// console.log(Object.values(empty))
// console.log(Object.entries(empty))

console.log(empty.hasOwnProperty('age')) //True
console.log(empty.hasOwnProperty('Islogged')) //False
