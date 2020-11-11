Installation instructions for simple protractor / selenium / cucumber framework

prerequisites

install node.js msi package from https://nodejs.org/
chrome browser

Required packages

npm install -g protractor

npm install cucumber@6.0.5 (latest was causing issues at the time)

npm install protractor-cucumber-framework

npm install cucumber-pretty

npm install cucumber-html-reporter

npm install chai

webdriver-manager update > Will create a Selenium directory which contains the required Chrome driver

To run

protractor
