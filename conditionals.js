
/* -------------------------------------------- 
Day 2 Challenges
-------------------------------------------- */

let message = `Welcome to Day 2
Today we are learning about conditionals. 
Let's practice writing some conditionals of our own!`;
console.log(message);

const READLINE = require("readline-sync");
/* -------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")
/* Can you drive?
    Prompt the user to enter their age.
    Write conditional statements that print out whether you can drive in your city. */
let msg = "";
msg = READLINE.question("age? ");
console.log("my age is " + msg);


if (msg >= 16) {
    console.log("you can drive!!! skirt skirt")
}else {
    console.log("not old enough!")
}













/* -------------------------------------------- */

console.log("------------------- Challenge 2 -------------------") 

/* Who placed first?
    Write conditional statements that checks which is the highest and prints the highest score. 
    Hint: Create three variables and assign them random scores. */
num1 = 14;
num2 = 14.5;
num3 = 125;

if (num1>num2 && num1>num3) {
    console.log(num1);
} 
else if (num2>num1 && num2>num3) {
    console.log(num2);
} else {
    console.log(num3);
}










/* -------------------------------------------- */

console.log("------------------- Challenge 3 -------------------")

/* One of the most common parts of our daily routine is checking the weather. 
   Our outfit and accessories are dependent on the temperature and conditions outside. 
   ie. We're probably not going to wear shorts out when it's snowing...


**** Challenge 3: Part 1 ****
   Write a conditional statement that checks the value of the weather variable 
   and prints out a weather report based on the current weather:
   Rainy: Bring an umbrella
   Sunny: Wear a hat and sunglasses
   Snowing: Wear gloves and a scarf */

//Here's a variable to get you started:
let weather = `rainy`;

if (weather === "sunny") {
    console.log("Wear a hat and sunglasses.");
}
else if (weather === "rainy") {
    console.log("Bring an umbrella."); 
} else {
    console.log("Wear gloves and a scarf");
}













//Tip: Try changing the value of the weather variable to test your other conditions.

/**** Challenge 3: Part 2 ****
   Now that you've written conditions for specific weather forecasts, let's also add in temperature! 
   You can't dress accordingly if you only know that it's raining outside but not how cold it is!
   For example:
      If it's raining and 60 degrees, you might want to bring your umbrella and wear a light jacket.
      However, if it's raining and 30 degrees, you might want to break out a warmer jacket with your umbrella instead. 
    
   Add to your conditional statements above and modify your weather reports to also take into account the temperature. 
   Make sure to account for at least three different temperatures!
   Hint: You will need another variable to keep track of the temperature.
*/
let temperature = 100;
temperature = READLINE.question("Temperature? ");

if (temperature <= 40) {
    console.log("Break out a warmer jacket.");
}
else if ( temperature < 40) {
    console.log("Wear a light jacket."); 
} else {
    console.log("No need for a jacket.");
}










/* -------------------------------------------- */

console.log("------------------- Challenge 4 -------------------")

/* Prompt the user to enter the day of the week (1-7 representing Monday - Sunday)
    Write a set of conditionals that will take a number from 1 to 7 
    and print out the corresponding day of the week. 
    Make sure to add a statement that accounts of any numbers out of range! */
let num = "";
num = READLINE.question("Enter a number from 1-7: ");
if (num == 1) {
    console.log("Monday");
}
else if (num == 2) {
    console.log("Tuesday");
}
else if (num == 3) {
    console.log("Wednesday");
}
else if (num == 4) {
    console.log("Thursday");
}
else if (num == 5) {
    console.log("Friday");
}
else if (num == 6) {
    console.log("Saturday");
}
else if (num == 7) {
    console.log("Sunday");

} else {
    console.log("Does not exist.");
}










/* -------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")

/* A leap year is a calendar year that contains an additional day added 
    to keep the calendar year synchronized with the astronomical year or seasonal year.
    To calculate if a specific year is/was a leap year, you can follow the following steps:
      1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
      2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
      3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
      4. The year is a leap year (it has 366 days).
      5. The year is not a leap year (it has 365 days).

  Those are a lot of conditions...

  Your challenge is to translate the steps above into conditionals which will evaluate if the 
  year stored in a variable is/was a leap year.*/


  
  let year = 2020
  if (year%4 == 0) {
  } else {
    console.log("It's not a Leap Year")
  if (year%100 == 0) {
  } else { 
      console.log("It's a Leap Year")
  if (year%400 ==0) {
  } else { 
      console.log("It's not a Leap year")
  }
  }
  }


  let day = "Saturday"
  let hoursOfHomework = 2
   
  if (day != "Sunday" && day != "Saturday") {
      console.log("I have to do all of my homework today")
  } else if (hoursOfHomework <= 2 && day != "Sunday") {
      console.log("I will do my homework tomorrow")
  } else {
      console.log("I will start my homework today and finish it tomorrow")
  }

