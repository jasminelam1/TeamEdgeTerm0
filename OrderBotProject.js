/* -------------------------------------------- 

	You've just learned about variables, conditionals, functions, and user input. 
	You've also created a basic calculator in a previous project.
	
	Now imagine you are going out to eat with two other friends.
	Are you at a restaurant for a meal? Are you grabbing boba? Or are you just going to an ice cream parlor?
	At the end of the meal, you and your friends have to split the bill. 

	Wouldn't it be great if we could automate that math?

					Let's try it!

  -------------------------------------------- 

Scenario Parameters: 

	When you and your friends eat out, each of you have the option to order one or multiple items.
	What kind of items are available to order?

	At the end of the order, the receipt comes and you all have to calculate the cost for each person:
	Don't forget the tax and tip!

After this program finishes running, it should output a specific total for each person

  -------------------------------------------- */

const READLINE = require("readline-sync");

/* -------------------------------------------- 

Part 1:
Let's start by asking taking the order of the group(you and two friends). What did each person order?

Write a function that will take the group's order:
- Prompt the user to enter the price of each item they ordered
- Return the cost 

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */
let personOne = READLINE.question("Enter your name: ");
let personTwo = READLINE.question("Enter your friend's name: ");
let personThree = READLINE.question("Enter your other friend's name: ");



function order(person, item) {
	cost = parseFloat(READLINE.question(`Cost of ${person}'s ${item}: `));
	return cost
}

oneMeal = order(personOne, `meal `);
oneDrink = order(personOne, `drink `);
twoMeal = order(personTwo, `meal `);
twoDrink = order(personTwo, `drink `);
threeMeal = order(personThree, `meal `);
threeDrink = order(personThree, `drink `);


console.log(oneMeal, oneDrink, twoMeal, twoDrink, threeMeal, threeDrink);











/* -------------------------------------------- 

Part 2:
Now that you have the costs of everything ordered, let's calculate the cost of each person's order(including tip and tax).

Write a function that will calculate the cost of each person's order, including:
- Cost of all of their ordered items
- Tax (Look up the sales tax of your city)
- Tip (Give the user the option to enter how much they want to tip)

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */
let oneTotal;
let twoTotal;
let threeTotal;


function calculate(meal, drink) {
	userTip = READLINE.question("How much do you want to tip? 10%? 15%? 20%? ");
	meals = meal + drink;
	tax = meals * 0.0875;
	totalWithTax = meals + tax
	let tip = 0
	if (userTip == `10%`) {
		tip = totalWithTax * 0.18;
	} else if (userTip == `15%`) {
		tip = totalWithTax * 0.15;
	} else if (userTip == `20%`) {
		tip = totalWithTax * 0.20;
	}
	total = totalWithTax + tip;
	return total;
}

oneTotal = calculate(oneMeal, oneDrink);
twoTotal = calculate(twoMeal, twoDrink);
threeTotal = calculate(threeMeal, twoDrink);

console.log(oneTotal, twoTotal, threeTotal);










/* -------------------------------------------- 

Part 3:
Let's print out a receipt for each person.

Write a function that will take the values of each person's order and total cost and print it out in an appealing way.

The receipt should include:
- Cost of each item
- Total cost for each person

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */
function personRecipt(person, meal, drink, total) {
	console.log(`${person}:
		Meal: ${meal}
		Drink: ${drink}
		+ ${tax} & ${tip}
		Total: ${total}`);
	
}

personRecipt(personOne, oneMeal, oneDrink, oneTotal);
personRecipt(personTwo, twoMeal, twoDrink, twoTotal);
personRecipt(personThree, threeMeal, threeDrink, threeTotal);









/* -------------------------------------------- 

Part 4: Upchallenges!

How many of these upchallenges can you implement?

- Make sure the user is only entering numbers. If they enter an invalid value, prompt them to re-enter. 
- The displayed prices should only have two decimal places.
- Can you adjust your program to account for any shared items ordered for the group?
- Display the tax and tip values
- Implement a rewards system (stamp cards, buy one get one, etc)

-------------------------------------------- */
