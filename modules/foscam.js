var FoscamHdClient = require('foscamhd-client'),
    foscamLocal = require('./../config/local.js');

var client = new FoscamHdClient(foscamLocal.FOSCAM_CRED);

client.getStreamUrl(function(err, url){
    if (err) {
      console.error(err);
    }
    console.log(url);
});
