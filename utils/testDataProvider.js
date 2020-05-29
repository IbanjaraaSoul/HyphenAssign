
var loginData = require('../test_data/login_test_data.json');
var mainData = require('../test_data/main_test_data.json');

module.exports = {
  hyphenDataProvider: {
    'hyphen': {
      username: loginData.set1.username,
      password: loginData.set1.password,
      postData: mainData.admin.postData
    
    }
  },
  
};
