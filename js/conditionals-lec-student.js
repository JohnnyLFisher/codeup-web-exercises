"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
var isAdmin = true
if(isAdmin){
	//display admin nav bar
	// (if is Admin = false, then none of this code will be run at all
	alert("All of the secrets!")
}

//TODO Together: Send a 20% off coupon if its users birthday
var birthday = "12-27"
if(birthday === "12-27") {
	alert("Happy birthday! 20% off: JDJfdohr")
	//any other bday than "12-27" will not run this code and get no discount code
}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
var isRainy = true
if(isRainy){
	alert("It's raining!")
}
//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
var accountBalance = 300
var itemCost = 25
if(accountBalance >= itemCost){
	alert("You have enough money to buy this item.")
} else {
	//this means the accountBalance is less than the itemCost
	alert("You cannot afford this item.")
}

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
	var numberOfLives = 3
	if(numberOfLives === 0){
		alert("Sorry, game over")
	}
function lifeCheck(numOfLives){
	if(numOfLives === 0){
		alert("Sorry, game over")
	}
}
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
	var weather = "snowing"
	if(weather === "snowing"){
		alert("It's snowing!")
	}
function weatherCheck(wthr){
	if(wthr === "snowing"){
		alert("It's snowing!")
	}
}
//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
	var numberInput = 12
	if(numberInput > 10){
		alert(true)
	}
function valueCheck(numInput){
	if(numInput > 10){
		alert(true)
	}
}


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
 isAdmin = true

var adminNavbar = "Home | About | Contact | Secret Login | Filestore"
var regularNavbar = "Home | About | Contact | Login"

if(isAdmin){
	console.log(adminNavbar)
} else {
	console.log(regularNavbar)
}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
isRainy = false
if (isRainy) {
	alert("It's raining")
} else {
	alert("Have a nice day!")
}



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
if(numberOfLives === 0){
	alert("Sorry, game over")
} else {
	alert("Next Level!")
}
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
if(weather === "snowing"){
	alert("It's snowing!")
} else {
	alert("Check back later for more details!")
}
//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
if(numberInput > 10){
	alert(true)
} else {
	alert("the number is less than 10")
}
//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 
function checkIfGameIsOver(numLives){
	if(numLives === 0){
		return "Sorry, game over"
	} else {
		return "Next Level!"
	}
}


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.
function snowExistance(currentweather){
	if(currentweather === "snowing"){
		return "It's snowing!"
	} else {
		return "Check back later for more details!"
	}
}
weather = "sunny"
console.log(snowExistance(weather))
    
// SHOULD WE DELETE STUFF EXAMPLE




//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
var overThirteen = confirm("Are you 13 years of age or older?")

if (overThirteen) {
	alert("You may proceed")
} else {
	alert("Sorry, you are not able to proceed")
}

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

if(weather === "snowing"){
    alert("It's snowing!")
}else if (weather === "raining"){
    alert("It's raining")
}else {
    alert("Have a nice day!")
}

//TODO Together: refactor the above statement as a function
function choosyWeather(weatherString){
	if(weatherString === "snowing"){
		return "It's snowing!"
	}else if (weatherString === "raining"){
		return "It's raining"
	}else {
		return "Have a nice day!"
	}
}

// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true

// }
// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.
function trafficLight(lightColor){
	if(lightColor === "red"){
		return "Stop"
	}else if (lightColor === "yellow"){
		return "Slow down"
	}else if (lightColor === "green") {
		return "Go"
	}else {
		return "You are not at a traffic light"
	}
}





// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.

function canYouDrive(driverAge,hasPermit){
	if (driverAge < 15) {
		return "You are completely ineligible"
	} else {
		// the driver is 15 or older
		// do all our other checks here
		if (driverAge === 15) {
			return "You are eligible for a learner's permit"
		} else if (driverAge >= 16) {
			// need to know whether or not the have a permit
			if (hasPermit) {
				// >= 16, AND they have a permit
				return "You are eligible for a license!"
			} else {
				return "You are not eligible for a license"
			}
		}
	}
}







// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

var message;
var success = true;

if (success) {
    message = "Operation was successful.";
} else {
    message = "Oops, something went wrong.";
}
console.log(message);

message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
console.log(message)

// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

weather = "sunny";
var weatherMessage;

if(weather === "rainy"){
   weatherMessage = "It's raining!";
} else {
    weatherMessage = "Have a nice day!";
}
//WRITE YOUR TERNARY STATEMENT HERE!
weatherMessage = (weather === "rainy") ? "It's raining" : "Have a nive day!"



// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
switch(weatherCondition) {
    case "rainy":
        alert("It's raining");
        break;
    case "sunny":
        alert("It's sunny");
        break;
	case "snow":
		alert("It's snowing");
		break;
    default:
        alert("The current weather is: " + weatherCondition);
        break;
}

//TODO: Rewrite the intersection function from earlier as a switch statement.
switch(stopLight) {
	case "red":
		alert("Stop");
		break;
	case "yellow":
		alert("Slow down");
		break;
	case "green":
		alert("Go");
		break;
	default:
		alert("You are not at a stoplight");
		break;
}


// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

