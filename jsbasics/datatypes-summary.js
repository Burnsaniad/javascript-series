//premitive datatypes

//7 types: String, Number, Boolean, null, Undefined, Symbol, BigInt

const Name = "Saniad" //String
const Score = 33 //Number
const IsLoggedIn = false //Boolean
const IsTemp = null //null value
let age; //Undefined
const BigNum = 24356433443464n //BigInt
const symBol = Symbol('123')


//Reference (Non premitive)
//Array, Objects

const Names = ["Saniad", "robin", "Anupam", "Sabit", "Rafi"] //Arrays
let Identity = {
    name: "saniad",
    age: 21,          // Object
    height: 6
}
// console.log(Identity)

const MyFunction = function(){
    // console.log("Hello World")
}

// stack (premitive datatype)  Heap(Non-premitive datatype)

let EmailAdress = "saniad@gmail.com"
let AdressTwo = EmailAdress

console.log(AdressTwo)
console.log(EmailAdress)

let EmailOne = {
    email : "Saniad1@gmail.com"
}

let EmailTwo = EmailOne 
EmailTwo.email = "Anupam@gmail.com"

console.log(EmailOne)
console.log(EmailTwo)
