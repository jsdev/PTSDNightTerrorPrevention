/**
 * Created by GTAS6 on 9/26/2015.
 */
var incomingNightTerror = 'child_added',
    me = 'alanisawesom',
    cadence = new Firebase('blinding-inferno-2101.firebaseio.com'),
    $messages = $('#messages'),
    snd = new Audio("rooster.mp3"),
    alarm = new Audio("alarm-clock-01.mp3"),
    clock = document.querySelector('.contain-clock');

cadence.child('users').child(me).on(incomingNightTerror, function (possibleNightTerror) {
//    var time = new Number(possibleNightTerror.val().timestamp);
    clock = document.querySelector('.contain-clock');
    clock.style.display = 'block';
    alarm = new Audio("alarm-clock-01.mp3");
    alarm.play();
});

var optionsEl = document.getElementById('options');

var chooseCat = function () {
    optionsEl.style.display = 'none';
    document.getElementById("mainContainer").style.display = "block";
};

var hide = function (el) {
    el.style.display = 'none';
    clock.style.display = 'none';
    optionsEl.style.display = 'block';
    alarm.stop();
};

//NightTerrors.on(incomingNightTerror, function (possibleNightTerror) {
//    var time = new Number(possibleNightTerror.val().timestamp);
//    $messages.html('<div>wake up having a night terror</div>');
//    // buffers automatically when created
//    snd.play();
//});
