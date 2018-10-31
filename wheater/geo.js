var Geo = {};

$(document).ready(function() {
  const API_URL = "https://eu1.locationiq.com/v1/";
  const API_KEY = "6147b594e590c1";
  const API_FORMAT = "json";

  Geo.p1 = new Promise(function(resolve, reject) {
    console.log("p1");
    debugger;
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     function(pos) {
    //       resolve(pos);
    //     },
    //     function(err) {
        reject   ('err');
        })
      // );
    // }
  // }).then(function(pos1) {
  //   return new Promise(function(resolve, reject) {
  //     const url =
  //       API_URL +
  //       "reverse.php?key=" +
  //       API_KEY +
  //       "&lat=" +
  //       pos.coords.latitude +
  //       "&lon=" +
  //       pos.coords.longitude +
  //       "&format=" +
  //       API_FORMAT;
  //
  //     $.getJSON(url, function(data) {
  //       resolve(data.address.town);
  //     }).fail(function(err) {
  //       reject(err);
  //     });
  //   });
  // });
});
// function getLocation(foo) {
//   // console.log("get pos");
//   if (navigator.geolocation) {
//     return navigator.geolocation.getCurrentPosition(foo);
//   }
// }
//
// Geo.getcity2 = async function getCity() {
//   await getLocation(function(pos) {
//     console.log(pos);
//
//     const url =
//       API_URL +
//       "reverse.php?key=" +
//       API_KEY +
//       "&lat=" +
//       pos.coords.latitude +
//       "&lon=" +
//       pos.coords.longitude +
//       "&format=" +
//       API_FORMAT;
//
//     return Promise.resolve(
//       $.getJSON(url, function(data) {
//         console.log(data);
//         return data;
//       }).fail(function(err) {
//         return err;
//       })
//     );
//   });

// https://eu1.locationiq.com/v1/reverse.php?key=6147b594e590c1&lat=55.642522&lon=12.475386&format=json
// const url =
//   API_URL +
//   "reverse.php?key=" +
//   API_KEY +
//   "&lat=" +
//   pos.coords.latitude +
//   "&lon=" +
//   pos.coords.longitude +
//   "&format=" +
//   API_FORMAT;
//
// return await $.getJSON(url, function(data) {
//   return data;
// }).fail(function(err) {
//   return err;
// });
//   };
// });
