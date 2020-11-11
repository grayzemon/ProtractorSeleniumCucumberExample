const { Before, Given, When, Then } = require('cucumber') 
const assert = require("assert");

var total = 0;

         Given('I have the number {int}', function (amount) {
			total += amount;
			console.log('add number ' + amount);
         });


         When('I add them together', function () {
			console.log('Total ' + total);
         });


         Then('the answer is {int}', function (answer) {
			assert(answer === total);
         
         });

