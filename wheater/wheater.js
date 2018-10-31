$(document).ready(function() {
  const API_URL = "https://api.openweathermap.org/data/2.5/";
  const API_KEY = "fdb9a4d45104310c165d2a834b8171d1";
  const API_UNITS = "metric";

  const WEEK_DAY_NAMES = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
  const WEATHER_TEMP_TIME = "15:00:00";

  $("#weather-loading-content").hide();
  $("#weather-success-content").hide();
  $("#weather-error-content").hide();

  $("#search-section")
    .removeClass()
    .addClass("show-search-only");
  $("#search-buttons").show();

  Geo.p1()
    .then(function(data) {
      getWeather(data);
    })
    .catch(function(err) {
      console.log(err);
    });

  $("#search-form").submit(function() {
    event.preventDefault();

    $("#weather-no-content").hide();
    $("#search-btn").trigger("blur");

    const city = $("#search-text").val();

    getWeather(city);
  });

  function getWeather(city) {
    const url = API_URL + "forecast?q=" + city + "&appid=" + API_KEY + "&units=" + API_UNITS;

    const cityUpper = city.charAt(0).toUpperCase() + city.slice(1);
    $("#search-text").val(cityUpper);
    $("[data-target=city]").text(cityUpper);

    $("#weather-loading-content").show();
    $("#weather-success-content").hide();
    $("#weather-error-content").hide();

    setTimeout(function() {
      $.getJSON(url, function(data) {
        const filteredWeatherData = filterWeatherData(data);
        const parsedWeatherData = parseWeatherData(filteredWeatherData);
        setWeatherData(parsedWeatherData);
      })
        .done(function() {
          $("#search-section")
            .removeClass()
            .addClass("show-search-top-only");
          $("#search-buttons").hide();
          $("#weather-success-content").show();
        })
        .fail(function() {
          $("#weather-error-content").show();
          console.log("error");
        })
        .always(function() {
          $("#weather-loading-content").hide();
        });
    }, 500);
  }

  function filterWeatherData(data) {
    return data.list.filter(function(item) {
      return item.dt_txt.endsWith(WEATHER_TEMP_TIME);
    });
  }

  function parseWeatherData(data) {
    return data.map(function(item) {
      const dt = new Date(item.dt_txt);

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
        weather_icon: "./assets/weather-icons/" + item.weather[0].icon + ".png",
        wind_speed: item.wind.speed,
        wind_deg: item.wind.deg
      };
    });
  }

  function setWeatherData(data) {
    $.each(data, function(key, value) {
      $("#weekday-" + key + "-name").text(value.week_day_name);
      $("#weekday-" + key + "-img").attr("src", value.weather_icon);
      $("#weekday-" + key + "-temp").html(value.temp + "&#176;");
      $("#weekday-" + key + "-desc").text(value.weather_description);
    });
  }
});
