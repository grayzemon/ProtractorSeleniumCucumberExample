const { Before, Given, When, Then } = require('cucumber');
const assert = require('assert');
const {browser, by, element, protractor} = require('protractor');
const chai = require('chai');
const expect = chai.expect;

var EC = protractor.ExpectedConditions;

         Given('I use search engine url {string}', async (url) => {
			console.log('url ' + url);
			await browser.get(url,10000);		
         });

         Given('I enter the search term {string}', async (searchTerm) => {
			console.log('Searchterm ' + searchTerm);
			await element(by.name('q')).sendKeys(searchTerm); 

         });

         When('I select the search button', async () => {
			console.log('Selecting search button');
			await element(by.id('search_button_homepage')).click();
			//await browser.sleep(5000);
         });
		 
         Then('a search result will be returned', async () => {
			console.log('Waiting for search result');
			
			var result = await browser.wait(EC.presenceOf(element(by.id('r1-0'))),5000,'Unable to find element!');
			console.log(result);
			expect(result).to.equal(true);
         });
