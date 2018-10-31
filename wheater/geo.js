$(document).ready(function () {
  const API_URL = "https://eu1.locationiq.com/v1/";
  const API_KEY = "6147b594e590c1";
  const API_FORMAT = "json";


  // https://eu1.locationiq.com/v1/reverse.php?key=6147b594e590c1&lat=55.642522&lon=12.475386&format=json


  function getCity(lat, lon) {
    const url = API_URL + "reverse.php?q=key" + API_KEY + "&lat=" + lat + "&lon=" + lon + "&format=" + API_FORMAT;

    $.getJSON(url, function (data) {
      console.log('geo', data);
    })
      .done(function () {
      })
      .fail(function () {
        console.log("error");
      })
      .always(function () {
      });
  }
});
