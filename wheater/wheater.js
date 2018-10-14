$(document).ready(function () {
  var API_KEY   = 'fdb9a4d45104310c165d2a834b8171d1';
  var API_URL   = 'https://api.openweathermap.org/data/2.5/';
  var API_UNITS = 'metric';

  var WEEK_DAY_NAMES = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];

  // https://api.openweathermap.org/data/2.5/forecast?q=hvidovre&appid=fdb9a4d45104310c165d2a834b8171d1&units=metric

  $("#searchBtn").click(function () {
    var city = $("#searchText").val();
    getWeather(city);
  });


  function getWeather(city, querytype) {

    // var url = API_URL + "weather?q=" + city + "&appid=" + API_KEY + "&units=" + API_UNITS;
    // var url = API_URL + "forecast?q=" + city + "&appid=" + API_KEY + "&units=" + API_UNITS;

    var url = "/assets/data/hvidovre-forecast.json";

    $.getJSON(url, function (data) {

        var filteredWeatherData = filterWeatherData(data);
        var parsedWeatherData   = parseWeatherData(filteredWeatherData);

        console.log(parsedWeatherData);

        // console.log("success");
      }
    )
      .done(function () {
        // console.log("second success");
      })
      .fail(function () {
        // console.log("error");
      })
      .always(function () {
        // console.log("complete");
      });
  }

  function filterWeatherData(data) {
    return data.list.filter(function (item) {
      return item.dt_txt.endsWith("15:00:00");
    });
  }

  function parseWeatherData(data) {
    return data.map(function (item) {
      var dt = new Date(item.dt_txt);

      return {
        date: dt.getDate() + "-" + dt.getMonth() + "-" + dt.getFullYear(),
        time: item.dt_txt.substr(11, 5),
        week_day_name: WEEK_DAY_NAMES[dt.getDay()],
        temp: item.main.temp.toFixed(0),
        temp_min: item.main.temp_min.toFixed(0),
        temp_max: item.main.temp_max.toFixed(0),
        weather_id: item.weather[0].id,
        weather_main: item.weather[0].main,
        weather_description: item.weather[0].description,
        weather_icon: '/assets/weather-icons/' + item.weather[0].icon + '.png',
        wind_speed: item.wind.speed,
        wind_deg: item.wind.deg
      }
    })
  }

  function getDayName(date) {

  }
});