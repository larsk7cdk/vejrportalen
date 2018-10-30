$(document).ready(function () {
  function getPositions(utc) {
    let date = new Date();

    let hr = utc ? date.getUTCHours() : date.getHours();
    let min = utc ? date.getUTCMinutes() : date.getMinutes();
    let sec = utc ? date.getUTCSeconds() : date.getSeconds();

    let fullDate = utc
      ? date.getUTCDate() + "." + date.getUTCMonth() + "." + date.getUTCFullYear()
      : date.getDate() + "." + date.getMonth() + "." + date.getFullYear();

    return {
      date: fullDate,
      hrPosition: (hr * 360) / 12 + (min * (360 / 60)) / 12,
      minPosition: (min * 360) / 60 + (sec * (360 / 60)) / 60,
      secPosition: (sec * 360) / 60
    };
  }

  function runTheClock(utc) {
    let postfix = utc === true ? "-utc" : "";
    let positions = getPositions(utc);

    let HOURHAND = $("#hour" + postfix);
    let MINUTEHAND = $("#minute" + postfix);
    let SECONDHAND = $("#second" + postfix);

    $("#date" + postfix).text(positions.date);

    hrPosition = positions.hrPosition + 3 / 360;
    minPosition = positions.minPosition + 6 / 60;
    secPosition = positions.secPosition + 6;

    HOURHAND.css({transform: "rotate(" + hrPosition + "deg)"});
    MINUTEHAND.css({transform: "rotate(" + minPosition + "deg)"});
    SECONDHAND.css({transform: "rotate(" + secPosition + "deg)"});
  }

  function runTheClocks() {
    runTheClock(false);
    runTheClock(true);
  }

  (function () {
    setInterval(runTheClocks, 1000);
  })();
});
