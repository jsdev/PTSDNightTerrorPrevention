/**
 * Created by GTAS6 on 9/26/2015.
 */
var incomingNightTerror = 'child_added',
    NightTerrors = new Firebase('blinding-inferno-2101.firebaseio.com'),
    $messages = $('#messages');

NightTerrors.on(incomingNightTerror, function (possibleNightTerror) {
    var time = new Number(possibleNightTerror.val().timestamp);
    $messages.html('<div>wake up having a night terror</div>');
});
