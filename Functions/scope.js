function one(){
    const username = "Saniad"

    function two(){ 
        const website = "saniad.com"
        // console.log(username)
    }
    // console.log(website) //Not execute casuse parent doesnot print child values
    // two()
}
one()

if(true){
    const username = "Saniad Islam"
    if(username === "Saniad Islam"){
        const website = " YouTube Chanel"
        // console.log(username + website)

    }  
    // console.log(website) //Not execute casuse parent doesnot print child values
}
// console.log(username)  //Not execute casuse parent doesnot print child values



console.log(addOne(5))
function addOne(num){
    return num + 1
}

// addtwo(6) //when variable is declared the function not be execute before the function declared
const addtwo = function(num){
    return num + 3
}
