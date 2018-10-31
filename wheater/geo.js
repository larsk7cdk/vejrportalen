var Geo = {};

$(document).ready(function() {
  const API_URL = "https://eu1.locationiq.com/v1/";
  const API_KEY = "6147b594e590c1";
  const API_FORMAT = "json";

  Geo.p1 = function() {
    return new Promise(function(resolve, reject) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(pos) {
            resolve(pos);
          },
          function(err) {
            reject(err);
          }
        );
      }
    }).then(function(pos) {
      return new Promise(function(resolve, reject) {
        const url =
          API_URL +
          "reverse.php?key=" +
          API_KEY +
          "&lat=" +
          pos.coords.latitude +
          "&lon=" +
          pos.coords.longitude +
          "&format=" +
          API_FORMAT;

        $.getJSON(url, function(data) {
          resolve(data.address.town);
        }).fail(function(err) {
          reject(err);
        });
      });
    });
  };
});
