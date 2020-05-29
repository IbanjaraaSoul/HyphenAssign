
var browserAction = function () {

  this.click = function (locatorWithType) {
    return element(this.getElement(locatorWithType)).click().then(function () {
      browser.sleep(1000);
    });
  };

  this.setText = function (locatorWithType, data) {
    return element(this.getElement(locatorWithType)).sendKeys(data);
  };


  this.getPageTitle = function () {
    return browser.getTitle();
  }

  this.getText = function (locatorWithType) {
    return element(this.getElement(locatorWithType)).getText();
  }

  this.hardPause = function (timeToWait) {
    browser.sleep(timeToWait * 1000);
  };




  this.getElement = function (locator) {
    var locatorType = locator.toString().split(/:(.+)/)[0];
    var locatorValue = locator.split(/:(.+)/)[1];
    switch (locatorType) {
      case "XPATH":
        return by.xpath(locatorValue);
      case "ID":
        return by.id(locatorValue);
      case "NAME":
        return by.name(locatorValue);
      case "MODEL":
        return by.model(locatorValue);
      case "CSS":
        return by.css(locatorValue);
      case "BUTTON_TEXT":
        return by.buttonText(locatorValue);
      case "LINK_TEXT":
        return by.linkText(locatorValue);
      case "PARTIAL_LINK_TEXT":
        return by.partialLinkText(locatorValue);
      case "CLASS_NAME":
        return by.className(locatorValue);
      default:
        return null;
    }
  };
};
module.exports = new browserAction();