const { element } = require('protractor');

class LoginPage {

	constructor() {

	}

	login(userName, password) {
		var userNameSelector = "(//div[button[span[text()='Login']]]/preceding-sibling::div//input)[1]";
		var passwordSelector = "(//div[button[span[text()='Login']]]/preceding-sibling::div//input)[2]";
		var loginButtonSelector = "//button[span[text()='Login']]";

		element(by.xpath(userNameSelector)).sendKeys(userName);
		element(by.xpath(passwordSelector)).sendKeys(password);
		/*element(by.xpath(userNameSelector)).sendKeys(userName);
		element(by.xpath(passwordSelector)).sendKeys(password);*/
		element(by.xpath(loginButtonSelector)).click();
	}
}

module.exports = LoginPage