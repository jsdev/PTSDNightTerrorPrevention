/**
 * Created by GTAS6 on 9/26/2015.
 */
var incomingNightTerror = 'child_added',
    NightTerrors = new Firebase('blinding-inferno-2101.firebaseio.com'),
    $messages = $('#messages'),
//    snd = new Audio("rooster.mp3");
    snd = new Audio("alarm-clock-01.mp3");

NightTerrors.on(incomingNightTerror, function (possibleNightTerror) {
    var time = new Number(possibleNightTerror.val().timestamp);
    $messages.html('<div>wake up having a night terror</div>');
    // buffers automatically when created
    snd.play();
});

NightTerrors.on(incomingNightTerror, function (possibleNightTerror) {
    var time = new Number(possibleNightTerror.val().timestamp);
    $messages.html('<div>wake up having a night terror</div>');
    // buffers automatically when created
    snd.play();
});
