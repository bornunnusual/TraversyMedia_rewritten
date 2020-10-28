paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
    };

    Pace.on('done', function() {
    $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));


    $('#preloader').delay(1500).animate({top: '-200%'}, 2000, $.bez([0.19,1,0.22,1]));

    TweenMax.from(".title", 2, {
         delay: 1.8,
              y: 10,
              opacity: 0,
              ease: Expo.easeInOut
        })
   });

TweenMax.from(".herooverlay", 1.5, {
    delay: 2,
    opacity: 0,
    z: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".nav", 2, {
    delay: 2.0,
    opacity: 0,
    y: -40,
    ease: Expo.easeInOut
});

TweenMax.from(".welcomeText", 2, {
    delay: 2.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".introTitle", 2, {
    delay: 2.5,
    opacity: 0,
    x: 40,
    ease: Expo.easeInOut
});

TweenMax.from(".introSubtitle", 2, {
    delay: 2.5,
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
});