// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'#555555'
});
var label = Ti.UI.createLabel();
var view = Titanium.UI.createView({
  backgroundColor:'#CCC'
});
window.add(label);
window.add(view);
window.open();

// TODO: write your module tests here
var notifi = require('com.jeremyfox.ultimatenotifications');
Ti.API.info("module is => " + notifi);

notifi.showToast({
  viewForNotifi: view,                  //View to show notification
  notifiImage: "",                      //Custom image icon for notification (50px X 38px) and (100px X 76px - RETINA)
  //notifiBg: "",                         //Custom image for notification background (320px X 60px) and (640px X 120px - RETINA)
  typeOfNotifi: "show",                 //Type of notification to show ("show" or "error")
  notifiMessage: "hthe theh theh theh theh theh theh theh!!!" //Short notification message.
});

setTimeout((function(){
    notifi.showToast({
      viewForNotifi: view,                  //View to show notification
      notifiImage: "test",                      //Custom image icon for notification (50px X 38px) and (100px X 76px - RETINA)
      notifiBg: "test",                         //Custom image for notification background (320px X 60px) and (640px X 120px - RETINA)
      typeOfNotifi: "error",                //Type of notification to show ("show" or "error")
      notifiMessage: "hthe theh theh theh theh theh!" //Short notification message.
    });
  }), 4000);

