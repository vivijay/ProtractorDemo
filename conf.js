var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	baseUrl: 'https://www.flipkart.com/' ,
	specs: ['TC_LoginValidation.js','TC_ItemAddingToCart.js'],
	params:
		{
		 item: 'samsung mobiles'
		
		},
	onPrepare: function () {
		
		jasmine.getEnv().addReporter(
			new Jasmine2HtmlReporter({
			  baseDirectory: 'Reports/screenshots'
			})
		  );
		browser.ignoreSynchronization = true;
	},
	capabilities: {
		browserName: 'chrome' ,
		chromeOptions: { args: [ 'start-maximized' ] }
	}	
}