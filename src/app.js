// alerts
import './alerts/alerts.css';
import './alerts/alerts.html';

// wheater
import './wheater/wheater.html';

// app
import "./app.css";


$(document).ready(function () {

  loadAlerts();
  // changePage("wheater");
  // setupEvents();


  // functions
  function loadAlerts() {
    $("#alerts").load("alerts.html");
    $("#content").load("wheater.html");

  }

  function changePage(feature) {
    $("#content").load(feature + "/" + "index.html", function () {
      animateOpacity("#content", 500, 0.3);

      const id = "nav-" + page;
      setActive(id);
    });
  }

  function setActive(id) {
    $("#nav-items li a").removeClass("active");
    $("#" + id).addClass("active");
  }

  function animateOpacity(selector, speed, startOpacity) {
    const s = $(selector);
    s.css({opacity: startOpacity});
    s.animate({opacity: "1"}, speed);
  }


  // setup events
  function setupEvents() {
    $("a[data-target='nav-click']").click(function (event) {
        const id = event.currentTarget.id;
        changePage(id.substring(4, id.length));
      }
    );
  }
});
