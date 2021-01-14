"use strict";

$(document).ready(function() {

	/****************** MAP, FILTER, REDUCE ******************/

		// Array of MacBookPro{} objects
	let mbpModels = [
			{
				id: 'MA464LL/A',
				desc: 'Apple MacBook Pro 15-Inch "Core Duo" 2.0',
				model: 'A1150',
				year: '2006',
				price: 3199
			},
			{
				id: 'MB986LL/A',
				desc: 'Apple MacBook Pro 15-Inch "Core 2 Duo" 2.8',
				model: 'A1286',
				year: 'Mid-2009',
				price: 2799
			},
			{
				id: 'MD311LL/A ',
				desc: 'Apple MacBook Pro 17-Inch "Core i7" 2.4',
				model: 'A1297',
				year: 'Late-2011',
				price: 2399
			},
			{
				id: 'MGXA2LL/A',
				desc: 'Apple MacBook Pro 15-Inch "Core i7" 2.2',
				model: 'A1398',
				year: 'Mid-2014',
				price: 2299
			}
		];

	// *****************   ******     ******************//
	// *****************  TODO: MAP() ******************//
	// *****************   ******     ******************//

	// Print a list of id's of the mbpModels array
	//  1. Use forEach()
	//  2. Use map()
	//  3. Use ES6

	/********************************* 1 *********************************/
	//  1. Using forEach()
	let ids = [];
	mbpModels.forEach(function(mbp) {
		ids.push(mbp.id)
	});
	/******** 4 lines of code **********/
	$("#forEach").html(createList(ids));

	/********************************* 2 *********************************/
	//  2. Using map()
	let idsMap = mbpModels.map(function(mbp) {
			return mbp.id;
		})
	/******** 3 lines of code ***********/
	console.log("idsMap: ");
	console.log(idsMap);

	/********************************* 3 *********************************/
	//  3. Use ES6
	let idsES6 = mbpModels.map(mbp => mbp.id);
	// ****** 1 line of code!!!! **********
	console.log("idsES6: ");
	console.log(idsES6);



	/**************************** createList() ***************************/
	/*********** creates an HTML list from an array of strings ***********/
	function createList(arr) {
		let html = '';
		arr.forEach(function (item) {
			html += '<li>' + item + '</li>';
		});
		return html;
	}


	// *****************   ******     ******************//
	// **************  TODO: FILTER() ******************//
	// *****************   ******     ******************//

	// Print a list of the models made in 2011 and later
	//  1. Use forEach()
	//  2. Use map()
	//  3. Use ES6

	/**************************** LEAVE IN FOR STUDENTS ***********************************/
	/*********************** function to get year from string *****************************/
	function getYear(yearString) {
		let yearArr = yearString.split('');
		let newArr = [];
		for(let i = yearArr.length - 4; i < yearArr.length; i++) {
			newArr.push(yearArr[i]);
		}
		return newArr.join('');
	}
	/********************* END function to get year from string ***************************/


	/********************************* 1 *********************************/
	//  1. Use forEach()
	let forEach2011 = [];
	mbpModels.forEach(function(mbp) {
		// get the current year
		let thisModelYear = getYear(mbp.year); // 2006 for the first element in the array

		if(thisModelYear >= 2011) {
			// list the description and the year string in the forEach2011 array
			forEach2011.push(mbp.desc + ' <strong>(' + mbp.year + ')</strong>');
			// i.e. "Apple MacBook Pro 15-Inch "Core Duo" 2.0 (2006)"
		}
	});
	$("#filterForEach").html(createList(forEach2011));

	/********************************* 2 *********************************/
	//  2. Use filter()
	let filter2011 = mbpModels.filter(function(mbp) {
			return getYear(mbp.year) >= 2011;
		});
	console.table(filter2011);

	/********************************* 3 *********************************/
	//  3. Use ES6
	let es62011 = mbpModels.filter(mbp => getYear(mbp.year) >= 2011);
	console.log("es62011: ");
	console.log(es62011);


	// *****************   ******     ******************//
	// **************  TODO: REDUCE() ******************//
	// *****************   ******     ******************//

	// Determine the total value of all MacBook Pros together
	//  1. Use forEach()
	//  2. Use reduce()
	//  3. Use ES6

	/********************************* 1 *********************************/
		//  1. Use forEach()
	let totalValueFE = 0;
	mbpModels.forEach(function(mbp) {
		totalValueFE += mbp.price;
	})
	console.log("Total forEach: " + totalValueFE);
	$("#reduceForEach").html(commaThousands(totalValueFE));

	/********************************* 2 *********************************/
		//  2. Use reduce()
	let totalValueReduce = mbpModels.reduce(function (total, mbp) {
			return total += mbp.price; // i.e. 0 + 3199 - first iteration through
		}, 0);
	console.log("Total Value Reduced: " + totalValueReduce);

	/********************************* 3 *********************************/
		//  3. Use ES6
	let totalValueES6 = mbpModels.reduce((total, mbp) => total + mbp.price, 0);
	console.log("Total Value ES6: " + commaThousands(totalValueES6));

	/**************************** LEAVE IN FOR STUDENTS **(********************************/
	/*********************** function to get commas in number *****************************/
	function commaThousands(number) {
		let numArr = number.toString().split('');
		let startPos = numArr.length % 3;
		let initialLength = numArr.length;
		let first = true;
		let extra = 0;
		// add commas every third digit from the end
		if( numArr.length <= 3) {
			return number;
		} else {
			for(let i = 0; i < (numArr.length - numArr.length % 3) / 3; i++) {
				console.log('for iteration');
				console.log(i * 3 + extra + startPos);
				if(i*3+extra+startPos >= initialLength+extra) {
					// console.log('stop');
					break;
				} else {
					if((startPos !== 0) && first) {
						numArr.splice(startPos,0,',');
						first = false;
						extra++;
					} else{
						numArr.splice((i*3+extra),0,',');
						extra++;
					}
				}
			}
			// console.log(numArr.join(''));
			numArr.splice(0,0,'$');
			return numArr.join('');
		}
	}
	/**************************** DON'T WORRY HOW THIS FUNCTION WORKS **(********************************/

});