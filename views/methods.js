var facilitiesLink,
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    },
    success = function (pos) {
        var crd = pos.coords;
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
        facilitiesLink = 'http://va.gov/directory/guide/Findlocations.cfm?statusok=1&FACTYPE=4&latitude='+ crd.latitude + '&longitude=' +  crd.longitude + '&SEARCH_CRITERIA=2';
    },
    error = function (err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    },
    goToVaFacilitiesPage = function () {
        window.location.href = facilitiesLink;
    };

navigator.geolocation.getCurrentPosition(success, error, options);
