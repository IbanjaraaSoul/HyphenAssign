
var browserAction = require('../utils/browserUtils');
var locator = require("../object_repository/locators.json");

var main_page = function () {


	this.validatePostCreation = function (testData) {

		browserAction.click(locator.mainPage.createNewPostButton);
		browserAction.click(locator.mainPage.anonymousOpenTypeQuestionButton);
		browserAction.click(locator.mainPage.selectGroupDropDown);
		browserAction.hardPause(3);
		browserAction.click(locator.mainPage.selectGroupButton);
		browserAction.setText(locator.mainPage.writePostInput, testData.postData);
		browserAction.click(locator.mainPage.writePostPublishButton);
		browserAction.getText(locator.mainPage.postedData).then(function (text) {
			console.log("Posted article after successful post = " + text);
			expect(text).toEqual(testData.postData);
		});


	};





};
module.exports = new main_page(); 
