const {BeforeAll, Before, After, Status, AfterAll} = require('cucumber');
var {setDefaultTimeout} = require('cucumber');
const {browser} = require('protractor');
var fs = require('fs');

BeforeAll ({timeout: 1000}, async function () {
	console.log('Running before all');
	browser.waitForAngularEnabled(false);
	setDefaultTimeout(30000);
});

Before ({timeout: 1000}, async function () {
	console.log('Running before');
});

After ({timeout: 1000}, async function () {
	console.log('Running after');
	 await browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, './screenshots/screen');
    });
});

AfterAll ({timeout: 1000}, async function () {
	console.log('Running after all');
	browser.driver.close();
});

function writeScreenShot(data, filename) {
	var stream = fs.createWriteStream(filename + Date.now() + '.png');
	stream.write(new Buffer(data, 'base64'));
	stream.end();
}