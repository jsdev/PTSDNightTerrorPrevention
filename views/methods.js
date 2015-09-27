var facilitiesLink,
    tunes = ['Sunday_Morning_Tamarama.mp3', 'Tamarama_lifetime_on_the_run.mp3'],
    service = {
        getNearestFacilityInfo: function (facilities) {
            return {
                nameLink: '<a href="facility.asp?id=982" id="982" title="Go to Alexandria Vet Center"><strong>Alexandria Vet Center</strong></a>',
                address: '6940 South Kings Highway #204, Alexandria, VA 22310',
                phone: '703-360-8633'
            }
        },
        parseAddress: function (address) {
            var parsedAddress = address.replace(/ /g, '+');
            console.log(address);
            console.log('parsing');
            console.log(parsedAddress);
            return parsedAddress;
        },
        playOneOfMyFavoriteTunes: function () {
            var snd = new Audio(tunes.pop());
            snd.play();
        }
    },
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    },
    success = function (pos) {
        var facility,
            template,
            crd = pos.coords,
            nearByFacilities = 'http://va.gov/directory/guide/Findlocations.cfm?statusok=1&FACTYPE=4&latitude='+ crd.latitude + '&longitude=' +  crd.longitude + '&SEARCH_CRITERIA=2';

        console.log(nearByFacilities);
        facility = service.getNearestFacilityInfo(nearByFacilities);

        console.log('nearest facility obj');
        console.log(facility);

        template = '<div>'+facility.nameLink+'</div><div>Auto Dial: <a href="tel:+1'+ facility.phone.replace(/[-,(,)]/g, '') + '">' + facility.phone + '</a></div>';
        template += '<div>' + facility.address + '</div><div><a href="http://maps.google.com/maps?q=' + service.parseAddress(facility.address)+ '">View Google Map</a></div>';
        console.log('template');
        console.log(template);
        var treatment = document.getElementById('seek-treatment');
        treatment.innerHTML = template;
        treatment.parentNode.style.display = 'block';
        treatment.style.display = 'inline-block';
    },
    error = function (err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    },
    goToVaFacilitiesPage = function () {
        window.location.href = facilitiesLink;
    };

navigator.geolocation.getCurrentPosition(success, error, options);
