var dataProvider = require('./TestData.json');
var using = require('jasmine-data-provider');
var LoginPage = require('./Pages/loginpage.js');
var SearchPage = require('./Pages/searchpage.js');

describe('Demo Suit', function () {

	var loginpage = new LoginPage();
	var searchpage = new SearchPage();

	beforeEach(function () {
		browser.get(browser.baseUrl);
	})

	using(dataProvider, function (data) {
		it('Verify Page title and login functionality', function () {

			loginpage.login(data.user.id, data.user.pwd);
			expect(browser.getTitle()).toEqual("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");

		})
	})
})