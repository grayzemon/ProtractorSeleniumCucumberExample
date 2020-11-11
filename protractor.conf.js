var reporter = require('cucumber-html-reporter');

exports.config = {
   //seleniumAddress: 'http://localhost:4444/wd/hub',

   baseUrl: 'http://www.duckduckgo.com',

   capabilities: {
      browserName:'chrome'
   },

   framework: 'custom',

   frameworkPath: require.resolve('protractor-cucumber-framework'),

   specs: [
      './features/*.feature'
   ],
   
   getPageTimeout: 10000,
   defaultTimeoutInterval: 10000,

   // cucumber command line options
   cucumberOpts: {
      require: ['./specs/*.js','./hooks/*.js'],
      tags: "@selenium",
	  format: ['./node_modules/cucumber-pretty'],
      format: 'json:./report/report.json',
      'dry-run': false,
      compiler: []
   },
   
   onPrepare: function () {
		browser.manage().window().maximize();
   },
   
  onComplete: function () {
	  
	var options = {
		theme: 'bootstrap',
		jsonFile: './report/report.json',
		output: './report/cucumber_report.html',
		reportSuiteAsScenarios: true,
		launchReport: true,
			metadata: {
				"App Version": "1.0.0",
				"Test Environment": "QA",
				"Browser": "Chrome",
				"Platform": "Windows 10",
				"Parallel": "n/a",
				"Executed": "Local"
			}
	   }
   reporter.generate(options);
  },
   
};