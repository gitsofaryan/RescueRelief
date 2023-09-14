



// Initialize Google Maps
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 }, // Default: Centered at (0, 0)
        zoom: 2, // Set your desired zoom level
    });
}

// Handle form submission
const form = document.getElementById('rescue-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get user input
    const role = document.getElementById('role').value;
    const location = document.getElementById('location').value;

    // Geocode the location to get coordinates
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: location }, function (results, status) {
        if (status === 'OK' && results[0]) {
            const coordinates = results[0].geometry.location;

            // Create a marker on the map
            const marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                title: role,
            });

            // Center the map on the new marker
            map.setCenter(coordinates);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
});
