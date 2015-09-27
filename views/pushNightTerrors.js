var incomingNightTerror = 'child_added',
    cadence = new Firebase('blinding-inferno-2101.firebaseio.com'),
    pushNightTerror = function () {
        var now = Date.now(),
            user = $(this).data('user'),
            usersRef = cadence.child("users").child(user);
        usersRef.child('night_terrors').push({timestamp: now, symptom: 'heartbeat spike'});
    },
    $buttons = $('button');

// Fun FACT: Can't run a forEach on buttons as querySelectorAll doesn't return a true array
$buttons.on('click', pushNightTerror);
