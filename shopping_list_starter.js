/********************************************************************
 *                                                                  
 *  Team Edge Array Mini-project: THE SHOPPING LIST HELPER
 * 
 *  This project prompts users using readline_sync to prompt users
 *  to add (or remove) items from a shopping list. It starts empty
 *  and each time the program is run it asks you to either add or 
 *  remove an item from the list. It also updates the user of its
 *  contents. The shopping list also checks to see if an item 
 *  is already present in the array and prevents you from adding it
 *  again, giving feedback along the way. 
 * 
 * ***************************************************************/

const READLINE = require("readline-sync");

let active = true

console.log("Welcome to: ")

console.log(`
 __..                    .        ,   
(__ |_  _ ._ ._ *._  _   |   * __-+-  
.__)[ )(_)[_)[_)|[ )(_]  |___|_)  |   
          |  |      ._|               

`)

let welcomeMessage = `Hi! I'm your shopping assistant. Let me take your order. \n
You can type 'add milk' to add milk to your shopping list. \n 
or you can type 'remove milk' to remove it. \n`

console.log(welcomeMessage)


//-->Todo: declare a shoppingList array

let shoppingList = ["milk", "cereal", "meat", "chips", "salad", "Cookies"]


while(active){
    let reply = promptUser()
    //console.log(reply);
    checkAnswer(reply) //this makes the program continously prompt and check response while the boolean 'active' returns true

}

function promptUser(){

    let  reply = READLINE.question("What item do you want to add or remove?  >>  ")

    return reply

}

function checkAnswer(reply){
    console.log(reply)
    let userReply = reply.split(" ");
    if (userReply[0] === "add") {
        addItem(userReply);
    } else if (userReply[0] === "remove") {
        removeItem(userReply);
    }
}

function addItem(userReply){
    shoppingList.push(userReply[1])
    console.log(shoppingList);

}

function removeItem(userReply){
    // remove = shoppingList.indexOf(userReply[1]);
    shoppingList.splice(userReply);
    console.log(shoppingList);
}


