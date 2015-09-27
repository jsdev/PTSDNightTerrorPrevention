/**
 * Created by GTAS6 on 9/26/2015.
 */
var HISTORY_CAP = 50,
    me = 'alanisawesome',
    cadence = new Firebase('blinding-inferno-2101.firebaseio.com'),
    NightTerrors = cadence.child('users').child(me).child('night_terrors');

// Keep a mapping of firebase locations to HTML elements, so we can move / remove elements as necessary.
var htmlForPath = {};

// Helper function that takes a new score snapshot and adds an appropriate row to our leaderboard table.
function handleNewNightTerrorAdded(nightTerror, prevScoreName) {
    var newScoreRow = $("<tr/>");
    newScoreRow.append($("<td/>").append($("<em/>").text(moment(nightTerror.val().timestamp).fromNow())));
    newScoreRow.append($("<td/>").text(nightTerror.val().symptom));

    // Store a reference to the table row so we can get it again later.
    htmlForPath[nightTerror.key()] = newScoreRow;

    // Insert the new score in the appropriate place in the table.
    if (prevScoreName === null) {
        $("#leaderboardTable").append(newScoreRow);
    }
    else {
        var lowerScoreRow = htmlForPath[prevScoreName];
        lowerScoreRow.before(newScoreRow);
    }
}

// Helper function to handle a score object being removed; just removes the corresponding table row.
function handleNewNightTerrorRemoved(scoreSnapshot) {
    var removedScoreRow = htmlForPath[scoreSnapshot.key()];
    removedScoreRow.remove();
    delete htmlForPath[scoreSnapshot.key()];
}

// Create a view to only receive callbacks for the last LEADERBOARD_SIZE scores
var nightTerrorRecentHistory = NightTerrors.limitToLast(HISTORY_CAP);

// Add a callback to handle when a night terror is added.
nightTerrorRecentHistory.on('child_added', function (newScoreSnapshot, prevScoreName) {
    handleNewNightTerrorAdded(newScoreSnapshot, prevScoreName);
});

// Add a callback to handle when a night terror is removed
nightTerrorRecentHistory.on('child_removed', function (oldScoreSnapshot) {
    handleNewNightTerrorRemoved(oldScoreSnapshot);
});

// Add a callback to handle when a score changes or moves positions.
var changedCallback = function (scoreSnapshot, prevScoreName) {
    handleNewNightTerrorRemoved(scoreSnapshot);
    handleNewNightTerrorAdded(scoreSnapshot, prevScoreName);
};

nightTerrorRecentHistory.on('child_moved', changedCallback);
nightTerrorRecentHistory.on('child_changed', changedCallback);