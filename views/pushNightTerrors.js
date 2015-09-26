var incomingNightTerror = 'child_added',
    NightTerrors = new Firebase('blinding-inferno-2101.firebaseio.com'),
    pushNightTerror = function () {
        var now = Date.now(); //'2015-09-26'; // Date.now()
        NightTerrors.push({timestamp: now, symptom: 'heartbeat spike'});
    };

document.querySelector('button').addEventListener("click", pushNightTerror, false);