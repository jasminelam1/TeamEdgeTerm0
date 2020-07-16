/****************************************************************************
 *                                                                  
 *  Team Edge objects: OBJECTS CHALLENGES 
 * 
 *  For this activity, you will be building an object and with properties
 *  and methods. You will access the properties, set new values, and use
 *  the methods to change your object state. What object? Ask your coach.
 * 
 *  1. DEFINE: Make an object and set its properties, logging changes in between.
 *  2. MODIFY: Add 2 new properties and assing values. Change existing values,
 *     including adding or updating values inside arrays
 *  3. METHODS: Now its time to make some methods. Then can simply make a change
 *     to your values, like a boolean, or they can console log something about
 *     the object. Nothing fancy, unless you fancy it.
 *  4. LITERALLY: Use string literals to put it all together in one statement.
 * 
 * *************************************************************************/

console.log("------------------- CHALLENGE 1 : DEFINE    -------------------")

//Below is a simple example of an object implementaion. 
//-->TODO: Add at least 3 comments to the object below to demonstrate you understand its usage

let object = {
    name: "box",
    isEmpty: true,
    fillMe(){
        this.isEmpty=false
    },
    emptyMe(){

        this.isEmpty =true
    }
}

// let smartPhone = {
//     screen: "resolution bla bla",
//     brand: "iPhone",
//     camera: 14,
//     isNew: false,
//     isCracked: true,
//     features: ["fron-face", "bluetooth"],

//     saveData(){
//         console.log("your data was saved");
//     }
    

// }

// console.log(smartPhone.brand);
// smartPhone.color = "black"
// console.log(smartPhone.color)


//working with the object:
object.length = 12
object.width = 8
object.contents = ["thing 1", "thing 2", "thing 3"]
console.log(`${object.name} is ${object.length}  x ${object.width} `)
object.contents.push("thing 4")
console.log(`${object.name} has ${object.contents} `)
console.log(object)

 

//-->TODO: Declare a new object and set at least 4 properties to it including: string, boolean, number, array

//*********************************  MY OBJECT *************************** */
let waterBottle = {
    color: "blue",
    oz: 40,
    brand: "Hydroflask",
    isNew: false,
    isBig: true,
    features: ["scratch marks", "dents"],

    drinkWater(){
        this.oz = this.oz - 20
        console.log("you drank half the bottle.");
    },

    droppedWater(){
        this.features.push("color scratched")
        console.log("you dropped your water bottle again.");
    }


}






//************************************************************************* */



console.log("------------------- CHALLENGE 2 : MODIFY   -------------------")

//-->TODO: Log your object you created above
console.log(waterBottle);

//-->TODO: Update the object you just created  by adding new properties and values, including array elements, in this section.
waterBottle.isPerfect = false

//-->TODO: Log your object again and observe changes


console.log("------------------- CHALLENGE 3 : METHOD   -------------------")

//-->TODO: Add at least two methods (object functions) to your object defined in Challenge 1 and invoke them here.
//          Make your methods update your variables, or add a random number to an array, etc.
console.log(waterBottle.oz)
waterBottle.drinkWater()
console.log(waterBottle.oz)

console.log(waterBottle.features)
waterBottle.droppedWater()
console.log(waterBottle.features)

console.log("------------------- CHALLENGE 4 : LITERALLY   -------------------")

//-->TODO: Put it all together using a string literal to tell the story of your object!
console.log(`My water bottle is already ruined since the 3rd day I've had it. The water bottle has ${waterBottle.features}. I have ${waterBottle.color} ${waterBottle.brand}. Typically I would drink ${waterBottle.oz} oz amount of water. `)
