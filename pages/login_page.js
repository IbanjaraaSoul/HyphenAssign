var browserAction = require('../utils/browserUtils');
var locator = require("../object_repository/locators.json");

var login_page = function() {

    this.loginToHyphen = function(testData) {
    console.log(locator.loginPage.username);
    browserAction.setText(locator.loginPage.username,testData.username);
    browserAction.click(locator.loginPage.sendMeVerificationCode);
    browserAction.hardPause(1);
    browserAction.setText(locator.loginPage.password,testData.password);
    browserAction.click(locator.loginPage.loginButton);
    browserAction.hardPause(5);
    browserAction.getPageTitle().then(function (text) {
			console.log("Page title after successful login = " + text);
			expect(text).toEqual('Hyphen - Be Heard at Work!');
		});
  };

};
module.exports = new login_page();