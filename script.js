// let errorMessageText = document.getElementById('errorMessage').innerText('hello')

const successCallback = (position) => {
    console.log(position)
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + long + "&zoom=13&size=800x400&sensor=false";
    document.getElementById('maps').appendChild(img);

    $.get( "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude + "," + position.coords.longitude +"&sensor=false", function(data) {
        console.log(data);
      })

};

const errorCallback = (error) => {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('errorMessage').textContent = "Cannot find location due to User denied the request for Geolocation"
          break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('errorMessage').textContent = "Location information is unavailable."
          break;
        case error.TIMEOUT:
            document.getElementById('errorMessage').textContent = "The request to get user location timed out."
          break;
        case error.UNKNOWN_ERROR:
            document.getElementById('errorMessage').textContent = "An unknown error occurred."
          break;
      }
};

    
  

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
        enableHighAccuracy: true,
        timeout: 5000
    });
  } else { 
    document.getElementById.textContent = "Geolocation is not supported by this browser.";
  }




