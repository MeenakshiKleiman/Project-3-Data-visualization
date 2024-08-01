function geocodeAddress(geocoder, map, streetView, location) {
    geocoder.geocode({ 'address': location["Zip Code"] }, function (results, status) {
        if (status === 'OK') {
            const marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title: location["NCT Number"]
            });

            marker.addListener('click', function() {
                streetView.setPosition(results[0].geometry.location);
                map.setStreetView(streetView);
            });
        } else {
            console.error('Geocode was not successful for the following reason: ' + status);
        }
    });
}
