class ItemPage {
	
	constructor() {
		
	}
	
	addToCart() {
		
		var addButtonSelector = "//ul[@class='row']/li/button";
		element(by.xpath(addButtonSelector)).click();
	}

	waitForAddItemButton() {

		browser.wait(function () {
			return element(by.xpath("//ul[@class='row']/li/button")).isPresent()
		}, 10000);
	}
	
}

module.exports = ItemPage