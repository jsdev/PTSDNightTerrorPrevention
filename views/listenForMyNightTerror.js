/**
 * Created by GTAS6 on 9/26/2015.
 */
var incomingNightTerror = 'child_added',
    me = 'alanisawesome',
    cadence = new Firebase('blinding-inferno-2101.firebaseio.com'),
    $messages = $('#messages'),
    snd = new Audio("rooster.mp3"),
    alarm = new Audio("alarm-clock-01.mp3"),
    clock = document.querySelector('.contain-clock');

var alarm = document.getElementById("audio");
var tunes = document.getElementById("tunes");
var nyanCat = document.getElementById("nyan");
function playAlarm() {
    stopTunes();
    stopNyanCat();
    $('#chosen, #mainContainer').hide();
    $('.btn_alarm').show();
    alarm.play();
}

function stopAlarm() {
    alarm.pause();
}

function playNyanCat() {
    $('#actions').hide();
    nyanCat.play();
}

function stopNyanCat() {
    nyanCat.pause();
}

function playTunes() {
    $('#actions').hide();
    tunes.play();
}

function stopTunes() {
    tunes.pause();
}

cadence.child('users').child(me).child('night_terrors').on(incomingNightTerror, function (possibleNightTerror) {
    $('#chosen, #actions').hide();
    clock = document.querySelector('.contain-clock');
    clock.style.display = 'block';
    playAlarm();
});

var optionsEl = document.getElementById('actions');
var chosen = document.getElementById('actions');

var chooseCat = function () {
    $('#actions').hide();
    $('#chosen, #mainContainer').show();
    playNyanCat();
};

var seekTreatment = function () {
    $('#actions').hide();
    $('#chosen, #seek-treatment').show();
};

var sleep = function () {
    $('#actions').hide();
};

var hide = function (el) {
    el.style.display = 'none';
    clock.style.display = 'none';
    optionsEl.style.display = 'block';
    stopAlarm();
};

//NightTerrors.on(incomingNightTerror, function (possibleNightTerror) {
//    var time = new Number(possibleNightTerror.val().timestamp);
//    $messages.html('<div>wake up having a night terror</div>');
//    // buffers automatically when created
//    snd.play();
//});
