
//Exercise 1
function showMultiplicationTable(num) {
	for (var count = 1; count <= 10; count++) {
		console.log(num + " x " + count + " = " + (num * count));
	};
};
showMultiplicationTable(5)

//Exercise 2
for (var count2 = 1; count2 <= 10; count2++) {
	var random = Math.floor((Math.random() * 200 - 20) + 20);
	if (random % 2 === 0){
		console.log(random + " is even");
	} else {
		console.log(random + " is odd");
	};
};

//Exercise 3
for (var count3 = 1; count3 < 10; count3++) {
	console.log((count3.toString().repeat(count3)));
};

//Exercise 4
for (var count4 = 100; count4 > 0; count4 -= 5) {
	console.log(count4);
};