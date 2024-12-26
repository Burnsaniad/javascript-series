const users = {
    name: "saniad",
    age:22,
    university: "FEC"
}

function UserDetails(name, age, university){
    this.name = name
    this.age = age
    this.university = university
    this.greeting = function(){
        console.log(`Welcome. Hey ${this.name}`)
    }
}

const UserOne = new UserDetails("Saniad", 23, "MEC");
const UserTwo = new UserDetails("Saniad", 23, "MEC");
console.log(UserOne)
console.log(UserTwo)