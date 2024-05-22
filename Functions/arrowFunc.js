const user = {
    username : "saniad",
    price : 999,

    welcomeMessage : function(){
        // console.log(`${this.username}, welcome to my chsnnel`)
        // console.log(this) //executed
    }
}
user.welcomeMessage()
user.username = "SamZone"
user.welcomeMessage()
// console.log(this)  //not executed

// function chai(){
//     let usernames = "Saniad"
//    console.log(this.usernames)  //undefined
// }
// chai()

const chai = () =>{
    let username = "Saniad"
    // console.log(this.username)  //undefinedl;ko
}
chai()

const addtwo = (num1,num2) => num1 + num2
// console.log(addtwo(4,5))

const addTwo = () =>({username : "saniad"})
// console.log(addTwo())

(function myname(){
    console.log(`Hello htytu`);
}) ();
 
( (name) => {
    console.log(`DB Connected Two ${name}`)
})('Islam')
