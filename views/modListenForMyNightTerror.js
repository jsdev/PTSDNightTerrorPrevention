/**
 * Created by GTAS6 on 9/26/2015.
 */
var incomingNightTerror = 'child_added',
    me = 'alanisawesome',
    cadence = new Firebase('blinding-inferno-2101.firebaseio.com'),
    clock = document.querySelector('.contain-clock'),
    alarm = document.getElementById("audio"),
    tunes = document.getElementById("tunes"),
    nyanCat = document.getElementById("nyan");

function playAlarm() {
    //version two alarm is nyan cat with tunes
    playTunes();
}

function stopAlarm() {
    //version two alarm is nyan cat with tunes
    stopTunes();
    $('#chosen, #mainContainer').hide();
}

function playNyanCat() {
    $('#actions').hide();
    nyanCat.play();
}

function stopNyanCat() {
    nyanCat.pause();
}

function playTunes() {
    tunes.play();
}

function stopTunes() {
    tunes.pause();
}

cadence.child('users').child(me).child('night_terrors').limitToLast(5).on(incomingNightTerror, function (possibleNightTerror) {
    chooseCat();
//    playAlarm();
});

var optionsEl = document.getElementById('actions');
var chosen = document.getElementById('actions');

var chooseCat = function () {
    if ($('#mainContainer').css('display') === 'none') {
        return;
    }
    $('#actions').hide();
    $('#chosen, #mainContainer').show();
    playTunes();
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