/* -------------------------------------------- 

	You've just learned about variables, conditionals.
	Just from knowing those two topics, you can do so much!
	
	Let's try to make a simple program that responds to the user.
	We're going to recreate the Magic 8 Ball!!!
			
			Never heard of it? That's ok!

					You got this!

  -------------------------------------------- 

	How a Magic 8 Ball Works:

	The user asks a question and vigoriously shakes the ball. 
	Then the ball will respond with one of twenty responses, chosen at random. 

	That's pretty simple right?

  -------------------------------------------- 

	Part 1: 
	Print instructions on the screen and 
	prompt the user to ask a question

	Tip: Don't forget to import the readline-sync module!

  -------------------------------------------- */
  const READLINE = require("readline-sync");

  question = READLINE.question("Question: ");















/* -------------------------------------------- 

	Part 2: Next, we need to randomly select a response from 20 options.

	Randomly select a number from 0 - 19 
	Use that to select from the following responses:
		0 - It is certain.
		1 - It is decidedly so.
		2 - Without a doubt.
		3 - Yes - definitely.
		4 - You may rely on it.
		5 - As I see it, yes.
		6 - Most likely.
		7 - Outlook good.
		8 - Yes.
		9 - Signs point to yes.
		10 - Reply hazy, try again.
		11 - Ask again later.
		12 - Better not tell you now.
		13 - Cannot predict now.
		14 - Concentrate and ask again.
		15 - Don't count on it.
		16 - My reply is no.
		17 - My sources say no.
		18 - Outlook not so good.
		19 - Very doubtful.

	Look up Math.random to see how you can use it to select a random number.

  -------------------------------------------- */





function tellFortune() {
	let fortunes = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
	let randomNumber = Math.floor(Math.random() * fortunes.length);
	let chooseOne = fortunes[randomNumber];
	console.log("Answer: " + chooseOne);
}

tellFortune();



let person = READLINE.question("What's your name?: ");
if (person != "") {
  console.log("Hello " + person + "!");
  let feeling = READLINE.question("How are you today?: ");
  if (feeling == "good" || "Good") {
    console.log("Happy to hear that!");
  }
  else {
    console.log("Oh okay.");
  }
}
console.log("Goodbye now.");


















/* -------------------------------------------- 

	Part 3: Customize it!

	Select your own theme and use case and modify your code!
	
  -------------------------------------------- */

question = READLINE.question("Ask any questions: ");

function tellFortune() {
	let fortunes = ["It's a bad idea.", "It will never happen.", "Are you sure?", "This will definately be the best decision.", "Follow your path.", "Try it and if it doesn't work, try again.", "Most likely.", "No issue.", "Yes.", "Signs point to yes.", "DO IT AGAIN.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
	let randomNumber = Math.floor(Math.random() * fortunes.length);
	let chooseOne = fortunes[randomNumber];
	console.log("Answer: " + chooseOne);
}

tellFortune();

















