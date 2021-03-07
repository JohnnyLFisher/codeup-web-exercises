$(document).ready(function() {
	let base = 250;
	let previous = [];

	let ascended = true;
	let info;
	if (ascended === true) {
		info = 0
	} else {
		info = 1
	}

	let fOA = ["The Fruit of Ascension", "The ????? of ?????????"]
	let prime = ["Primordial", "Unknown"]
	let rankUp = ["Past the Mortal Boundary, strength is measured very differently. Rather than leveling up through the gaining of experience, Power is cultivated through the active absorption of higher energies. There are 10 Immortal Ranks separated by 9 half ranks.", "Further information is restricted."]

	for (let i = 1; i <= 56; i++) {
		if( i === 1){
			let exp = base;
			previous.push(exp);

			$("div").append(`<br>To go from level ${i - 1} to level ${i} requires ${commas(exp)} exp.`);

		} else  if (i <= 55){
			let exp = previous.reduce((a, b) => a + b, 0) + (base * i);
			previous.push(exp);

			$("div").append(`<br>To go from level ${i - 1} to level ${i} requires ${commas(exp)} exp.`);

		} else {

			$("div").append(`<br><br>Level 55 is the Mortal Boundary. Those who have crossed the Mortal Boundary cannot be slain by those who have not.`);
			$("div").append(`<br>To pass the Mortal Boundary requires "<em>${fOA[info]}</em>" - Item class: ${prime[info]}.`);
			$("div").append(`<br><br>${rankUp[info]}`);

		}
	}

	function commas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

});