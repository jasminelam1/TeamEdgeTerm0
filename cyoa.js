const READLINE = require("readline-sync")
// let gameOn = true
// let userInput = ""

// function start(){
//     console.log("")

//     while(gameOn){
//         checkAnswer(promptUser)
//     }
// }

//     function promptUser(){
//         let reply = READLINE.question("");
//         return reply
//     }
//     function checkAnswer(input){
//         inputMsg = input
//     }

let mySchedule = ["Math", "History", "Biology", "Art", "English", "Music"];

let newClass = READLINE.question("What class would you like to add to your schedule?:");

if (mySchedule.length < 7 && mySchedule.includes(newClass) == false){
    console.log("Class Added");
}
else {
    console.log("Couldn’t Add");
}