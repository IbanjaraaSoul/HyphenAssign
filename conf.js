exports.config = {
    framework: 'jasmine2',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./test_specs/Test_Suite.js'],
    onPrepare: function() {
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 800000
      }
  };