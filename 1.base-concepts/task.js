"use strict"

function solveEquation(a, b, c) {
  	let arr = [];
  	let d = Math.pow(b, 2) - (4 * a * c);

	if (d < 0) {
		arr = [];
	}
	else if (d == 0) {
		arr.push(-b/(2*a));
	}
	else {
		arr.push((-b + Math.sqrt(d) )/(2*a));
		arr.push((-b - Math.sqrt(d) )/(2*a));
	}
  	
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = percent*0.01/12;
	let creditBody = amount - contribution;
	let payment = creditBody * (percent	+ (percent / (Math.pow(1 + percent, countMonths) - 1)));
	let allPrice = +(payment * countMonths).toFixed(2);

	return allPrice;
}
