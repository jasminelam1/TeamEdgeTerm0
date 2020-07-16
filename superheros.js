 
/********************************************************************
 *                                                                  
 *  Team Edge objects: SUPERHERO CHALLENGES 
 * 
 *   In this challenge you are going to modify this code to do the
 *   the following below. Before you begin, walkthrough the code 
 *   with your coaches.
 *   
 *   1. Change both superhero and nemesis using same class.
 *   2. Change the constants to modify gameplay and see how it affects
 *      the game outcomes.
 *   3. Make any improvements you think would make this game better.
 *   4. Complete all the comments to demonstrate you understand the code
 *      Be specific about what each code block is doing.
 *     
 * 
 * ***************************************************************/

console.log("-------------------  SUPERHERO !!  -------------------")

const DELAY = 3000
const DAMAGE_LIMIT = 5
const MAJOR_BLOW = DAMAGE_LIMIT -2
const LIVES_TOP_RANGE = 60
const LIVES_BOTTOM_RANGE = 40
let rounds = 1
let gameIsOn = true

//COMMENT 1: this block of code uses attributes to define superhero.
class Superhero {

    constructor(name, isAlive, friends, hitPoints, isGood , attackPower) {
       this.name = name;
       this.isAlive = isAlive;
       this.taunts=[]
       this.cries=[]
       this.lives = []
       
       
     } attack(enemy){
        
        //COMMENT 2 .... checks if both characters are alive. if so, the hero removes a certain amount of damage to the enemy
        if(this.isAlive && enemy.isAlive){  
          
            console.log("  \n   ")
            let damage = randomInteger(0,DAMAGE_LIMIT)         
            enemy.lives.splice(0, damage)
            
            if(damage >= MAJOR_BLOW){

                console.log(` ⚔️⚔️⚔️  Major Blow! ⚔️⚔️⚔️  \n`)
                 
            }

             //COMMENT 3.... randomly picks a sentence from the taunts and prints out the damages and health of the superhero and villian.
            console.log(`${this.name} 💬 : ${this.taunts[randomInteger(0,this.taunts.length-1)]} \n`)
            console.log(`${this.name}  💥X ${damage} ${enemy.name}  ${enemy.lives} : ${enemy.lives.length} \n`)

            if(enemy.lives.length <= 0){
               
                //COMMENT 4.... checks if the enemy is alive or not. If not alive then the code will print game over.
                enemy.isAlive=false
                gameIsOn =false
                console.log(`💀💀💀💀💀💀 ${enemy.name} has been slain!!! 💀💀💀💀💀 `)
                console.log(` GAME OVER `)
                clearInterval(timer)
            }
            if(this.lives.length <= 0  ){

                this.isAlive = false
                gameIsOn =false
                console.log(`💀💀💀💀💀💀 ${this.name} has been slain!!! 💀💀💀💀💀`)
                console.log(` GAME OVER `)
                clearInterval(timer);

            }

        } 

     }

     fillHealth(){
          //COMMENT 5.... generates the health of players with hearts bwtween 40 and 60.
          let amt = randomInteger(LIVES_BOTTOM_RANGE, LIVES_TOP_RANGE)
           
            for(let i = 0; i <= amt ; i++){

                this.lives.push("💙")
            }

    }
 }

//COMMENT 6.... batman and jokers are created from the class "superhero" and assign different attributes to each of the players. In the objects, it will fill in a random number hearts for the number of lives they have.
let batman = new Superhero()
batman.name="Batman 🦸‍♂️"
batman.isAlive = true 
batman.lives=[]
batman.taunts=["The Dark Knight always wins!" , "You can't hang with the bat man" , "Meet my fist, scumbag" , "You Suck!"]
batman.cries=["Ouch!" , "UFF!" , "Gaaaaaaa" , "No!!!!!"]
batman.fillHealth()
 
let joker = new Superhero()
joker.name = "Joker 🦹‍♂️"
joker.isAlive = true
joker.lives=[]
joker.taunts =["You are a schmemer" , "Don't mess with the Joker!" , "Pick your face off the ground, you might need it!", "Getting tired of the beatings?"]
joker.cries = ["Aaaa!" , "Goh!" , "Hmph!" ,"You will pay for this"]
joker.fillHealth()


console.log(`${joker.name} :  ${joker.lives} - ${joker.lives.length}`)
console.log(`${batman.name} : ${batman.lives} -  ${batman.lives.length} `)
console.log(`${batman.name} 💬 ${batman.taunts[1]}  \n `)
console.log(`${joker.name} 💬 ${joker.taunts[1]}  \n `)


//COMMENT 7.... fucntion fight inputs a new round and add the number of attacks changing the lives of the players.
function fight(a, b){
    console.log(" ------------- ROUND -------------> " + rounds)
    
    a.attack(b)
    b.attack(a)
    rounds ++

}

//This helper function returns a random number between a given min and max value, and is used various times in this game.
function randomInteger(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min 
  }


  //COMMENT 8.... check if the game is on and if its on, it continues until one player dies.
  let timer = setInterval(function() {

    if(gameIsOn){
        
        fight(batman,joker) 
        console.log(" \n")


    }
}, DELAY);