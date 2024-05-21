function addTwoNum(num1, num2){
    return num1 + num2
}

const result = addTwoNum(4,5)
// console.log("Result :", result)

function userName(username){
    return `${username} you are a good Boy`
}
// console.log(userName("Saniad"))

function userName(username){
    if(username == undefined){
        // console.log("Please enter a username")
        return
    }
    return `${username} you are a good Boy`
}
// console.log(userName())

function number(...num1){
    return num1
}
// console.log(number(200,400,300))
// console.log(number(200, 300, 400, 500, 600))

const user = {
    usernames : "saniad Islam",
    age : 21,
    university : "FEC"
}

function Defined(object){
    console.log(`username is ${object.usernames} and age is ${object.age} from ${object.university}`)
}
// Defined(user)
Defined({
    usernames : "saniad",
    age : 21,
    university : "FEC"
})

const myArray = [200, 300, 400, 500]
function gerTheArray(getarray){
    return getarray[2]
}
// console.log(gerTheArray(myArray))
console.log(gerTheArray([300, 700, 400, 600]))