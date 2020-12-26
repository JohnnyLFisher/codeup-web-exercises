"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 *
 * isGreaterThan
 * isLessThan
 * isEqualNumber
 * isEqual
 * isNot
 * calcAbs
 * calcCube
 * isTypeMatch
 * findLongestString
 * isFactor
 */

// * isGreaterThan
function isGreaterThan(num1,num2){
	return parseFloat(num1) > parseFloat(num2)
}

// * isLessThan
function isLessThan(num1,num2){
	return parseFloat(num1) < parseFloat(num2)
}

// * isEqualNumber
function isEqualNumber(num1,num2){
	return parseFloat(num1) === parseFloat(num2)
}

// * isEqual
function isEqual(x,y){
	return x == y
}

// * isNot
function isNot(boolean){
	if (boolean == null){
		return false
	} else {
		return !(boolean)
	}
}

// * calcAbs
function calcAbs(num) {
	if (typeof (num) !== "number") {
		return 0
	} else {
		return Math.abs(num)
	}
}

// * calcCube
function calcCube (num){
	if (typeof (num) !== "number") {
		return 0
	} else {
		return Math.pow(num,3)
	}
}

// * isTypeMatch
function isTypeMatch(type1,type2){
	return typeof (type1) === typeof (type2)
}

// * findLongestString
function findLongestString (string1,string2) {
	if (typeof string1 !== "string" && typeof string2 !== "string"){
		return ""
	} else if (typeof string1 === "string" && typeof string2 !== "string"){
		return string1
	} else if (typeof string1 !== "string" && typeof string2 === "string"){
		return string2
	} else if (string1.length > string2.length) {
		return string1
	} else
		return string2
}

// * isFactor
function isFactor(num1,num2){
	return ((parseFloat(num2) % parseFloat(num1)) === 0)
}