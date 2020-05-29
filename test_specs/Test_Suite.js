var using = require('jasmine-data-provider');
var data = require('../utils/testDataProvider.js');
var locator = require('../object_repository/locators.json');
var browserAction = require('../utils/browserUtils');
var login_page = require("../pages/login_page.js");
var main_page = require("../pages/main_page.js");


describe("Hyphen Assignment", function () {

  using(data.hyphenDataProvider, function (testData) {
    it("TC_01 ValidateLogin", function () {
  
      browser.driver.manage().window().maximize();
      browser.driver.get(locator.testSiteURL);
      login_page.loginToHyphen(testData);
      // browser.ignoreSynchronization = true;
      // browserAction.hardPause(3);
     
    });
  });


  using(data.hyphenDataProvider, function (testData) {
    it("TC_02 Validate a post creation", function () {
    main_page.validatePostCreation(testData);
    });
  });



  

}); 
