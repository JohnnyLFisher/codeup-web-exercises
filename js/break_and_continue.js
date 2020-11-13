//Exercise 5
var userInput = prompt("Please enter an odd number between 1 and 50.");

while ((parseFloat(userInput) % 2 === 0) || (parseFloat(userInput) <= 1) || (parseFloat(userInput) >= 50) || isNaN(parseFloat(userInput))) {
	alert("That is not a valid number.");
	userInput = prompt("Please enter a valid odd number between 1 and 50");
};
console.log("The number to skip is: " + userInput);
console.log("");
for (var count = 1; count <= 50; count++) {
	if (count % 2 === 0) {
		continue;
	};
	if (count == userInput) {
		console.log("Yikes! Skipping number: " + count);
	} else {
		console.log("Here is an odd number: " + count);
	};
};
