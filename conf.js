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
		
		browser.ignoreSynchronization = true;
	},
	capabilities: {
		browserName: 'chrome' ,
		chromeOptions: { args: [ 'start-maximized' ] }
	}	
}