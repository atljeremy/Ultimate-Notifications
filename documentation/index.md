# ultimate notifications Module

## Description

With this module, you will be integrating the best in mobile (iOS) notifications there is. Who likes alert boxes poping up in front of what you are trying to do? No one! Ultimate iOS Notifications unobtrusively animates all notifications in from the bottom of the screen and do not get in the way of what your users are trying to accomplish. The best part of all, it is extrememly easy to setup and use. With a one line command, you can have The Ultimate iOS Notifications in your app.

## Accessing the ultimate notifications Module

To access this module from JavaScript, you would do the following:

	var notifi = require("me.jeremyfox.ultimatenotifications");

The notifi variable is a reference to the Module object.	

### Ultimate Notifications function

this function is the core of Ultimate Notifications. It takes in 5 arguments and handles everything else.

showToast();

## Usage

Please note: "view" is the view you would like to show to notification in.

Success notification, which can be used for many different types of notifications.
notifi.showToast({
  viewForNotifi: view, //View to show notification
  notifiImage: "", //Custom image icon for notification (50px X 38px) and (100px X 76px - RETINA)
  notifiBg: "", //Custom image for notification background (320px X 60px) and (640px X 120px - RETINA)
  typeOfNotifi: "show", //Type of notification to show ("show" or "error")
  notifiMessage: "hthe theh theh theh theh theh theh theh!!!" //Short notification message.
});

Error notification, which should be used to notify a user of some sort of error or failure.
notifi.showToast({
  viewForNotifi: view, //View to show notification
  notifiImage: "test", //Custom image icon for notification (50px X 38px) and (100px X 76px - RETINA)
  notifiBg: "test", //Custom image for notification background (320px X 60px) and (640px X 120px - RETINA)
  typeOfNotifi: "error", //Type of notification to show ("show" or "error")
  notifiMessage: "hthe theh theh theh theh theh!" //Short notification message.
});

## Author

Jeremy Fox
Email: atljeremy@me.com
Website: www.jeremyfox.me

## License

Copyright Jeremy Fox. Paid licensing only.
