var dataProvider = require('./TestData.json');
var using = require('jasmine-data-provider');
var LoginPage = require('./Pages/loginpage.js');
var SearchPage = require('./Pages/searchpage.js');
var ItemPage = require('./Pages/itempage.js');

describe('Item Searched in Home page', () => {

	var loginpage = new LoginPage();
	var searchpage = new SearchPage();
	var itempage = new ItemPage();

	//beforeEach(function () {
	//	browser.get(browser.baseUrl);
	//})

	it('Verify selected item is added into cart', () => {
	//	loginpage.login("9884826525", "Flipkartlogin");
	//	expect(browser.getTitle()).toEqual("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
		searchpage.enterItem(browser.params.item);
		searchpage.waitForSearchItem();
		searchpage.selectItem();
		browser.getAllWindowHandles().then(function (handles) {
			newWindowHandle = handles[1];
			browser.switchTo().window(newWindowHandle).then(function () {

				expect(browser.getTitle()).toEqual("Samsung Guru Music 2 Online at Best Price On Flipkart.com");
				itempage.waitForAddItemButton();
				itempage.addToCart();
				browser.wait(function () {
					return element(by.xpath("//button[span[text()='Place Order']]")).isPresent()
				});
				expect(browser.getTitle()).toEqual("Shopping Cart | Flipkart.com");
				var addedItem = element(by.xpath("//a[contains(text(),'Samsung Guru Music 2')]"));
				expect(addedItem.getText()).toEqual('Samsung Guru Music 2');
			});
		});

	})
})