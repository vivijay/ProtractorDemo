const { element, by, browser } = require('protractor');

class SearchPage {

	constructor() {

	}

	enterItem(searchItem) {
		try {
			var searchTextboxSelector = "//input[@type='text']";
			var searchButtonSelector = "//button[@type='submit']";
			browser.sleep(5000);
			element(by.xpath(searchTextboxSelector)).sendKeys(searchItem);
			element(by.xpath(searchButtonSelector)).click();
		} catch (error) {
			console.log("Error" + error)
		}

	}

	selectItem() {
		var clickItemSelector = "//div[@data-id='MOBE9TGVE7ZBRAEN']";
		element(by.xpath(clickItemSelector)).click();
	}

	waitForSearchItem() {

		browser.wait(function () {
			return element(by.xpath("//div[@data-id='MOBE9TGVE7ZBRAEN']")).isPresent()
		}, 10000);
	}
}

module.exports = SearchPage