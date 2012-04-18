//***************************************
// Private variables
//***************************************
sliderView = Titanium.UI.createView({
  bottom: -61,
  width: 320,
  height: 60
});
sliderViewBG = Titanium.UI.createImageView({
  image: '',
  width: 320,
  height: 60,
  zIndex: 9998
});
sliderLabel = Titanium.UI.createLabel({
  shadowColor: '#111',
  shadowOffset: {
    x:0,
    y:1
  },
  color: '#FFF',
  font:{ fontFamily: 'trebuchet',fontSize:14,fontWeight:'bold' },
  zIndex: 9999,
  height: 15,
  left: 50
});
sliderIcon = Titanium.UI.createImageView({
  image: '',
  width: 40,
  height: 28,
  left: 10,
  zIndex: 9999
});

//***************************************
// Create showToast function
//***************************************
exports.showToast = function (args){
  
  view        = args.viewForNotifi;
  type        = args.typeOfNotifi;
  userImage   = args.notifiImage;
  userBg      = args.notifiBg;
  userMessage = args.notifiMessage;
  
  if(userMessage.length > 40) {
    message = userMessage.substr(0,37) + "...";
  } else {
    message = userMessage;
  }
  
  //********************************************
  //  SHOW NOTIFICATION
  //********************************************
  if(type == 'show'){

    if(userBg != null && userBg != ""){
      sliderViewBG.image = userBg;
    } else {
      sliderViewBG.image = 'modules/com.jeremyfox.ultimatenotifications/notification-bg.png';
    }

    if(userImage != null && userImage != ""){
      sliderIcon.image = userImage;
    } else {
      sliderIcon.image = 'modules/com.jeremyfox.ultimatenotifications/checkmark.png';
    }

    sliderLabel.text = message;
    sliderView.add(sliderViewBG);
    sliderView.add(sliderIcon);
    sliderView.add(sliderLabel);
    sliderView.show();

    view.add(sliderView);
    view.animate({bottom: 60,duration:300});

    setTimeout((function() {
        view.animate({
          bottom: 0,
          duration: 300
        });
      }), 3000);

    setTimeout((function() {
        sliderView.remove(sliderViewBG);
        sliderView.remove(sliderIcon);
        sliderView.remove(sliderLabel);
        view.remove(sliderView);
      }), 3400);
  }

  //********************************************
  //  SHOW ERROR NOTIFICATION
  //********************************************
  if(type == 'error'){

    if(userBg != null && userBg != ""){
      sliderViewBG.image = userBg;
    } else {
      sliderViewBG.image = 'modules/com.jeremyfox.ultimatenotifications/notification-bg.png';
    }

    if(userImage != null && userImage != ""){
      sliderIcon.image = userImage;
    } else {
      sliderIcon.image = 'modules/com.jeremyfox.ultimatenotifications/error.png';
    }
    
    sliderLabel.text = message;
    sliderView.add(sliderViewBG);
    sliderView.add(sliderIcon);
    sliderView.add(sliderLabel);
    sliderView.show();

    view.add(sliderView);
    view.animate({bottom: 60,duration:300});

    setTimeout((function() {
        view.animate({
          bottom: 0,
          duration: 300
        });
      }), 3000);
      
    setTimeout((function() {
        sliderView.remove(sliderViewBG);
        sliderView.remove(sliderIcon);
        sliderView.remove(sliderLabel);
        view.remove(sliderView);
      }), 3400);
  }
}