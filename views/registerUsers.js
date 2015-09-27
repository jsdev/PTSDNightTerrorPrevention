/**
 * Created by GTAS6 on 9/27/2015.
 */
var cadence  = new Firebase('blinding-inferno-2101.firebaseio.com'),
    users = cadence.child("users");

/* create our personas */
users.set({
    alanisawesome: {
        date_of_birth: "June 23, 1975",
        full_name: "Alan Turing",
        night_terrors : []
    },
    gracehop: {
        date_of_birth: "December 19, 1980",
        full_name: "Grace Hopper",
        night_terrors : []
    },
    dbag: {
        date_of_birth: "January 9, 1985",
        full_name: "Todd Glass",
        night_terrors : []
    },
    imdb: {
        date_of_birth: "December 6, 1970",
        full_name: "Doug Benson",
        night_terrors : []
    }
});