var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    },
    success function (pos) {
        var crd = pos.coords;
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
        console.log('http://va.gov?latitude='+ crd.latitude + '&Longitude=' +  crd.longitude);
    },
    error = function (err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    };

navigator.geolocation.getCurrentPosition(success, error, options);
