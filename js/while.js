//Exercise 6
var timesTwo = 2;

while (timesTwo <= 65536){
	console.log(timesTwo);
	timesTwo *= 2;
};

//Exercise 7
var allCones = Math.floor(Math.random() * 50) + 50;

console.log("I have to sell " + allCones + " cones.");

do{
	var customerPurchase = Math.floor(Math.random() * 5) + 1;
	if (customerPurchase > allCones){
		console.log("Sorry, I can't sell you " + customerPurchase + " cones. I only have " + allCones);
	} else {
		console.log(customerPurchase + " cones sold.");
		allCones -= customerPurchase;
		console.log(allCones + " cones remaining.");
	};
	if (allCones === 0){
		console.log("Yay! I've sold all the cones!");
		break;
	};
} while (allCones > 0);