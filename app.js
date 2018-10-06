$(document).ready(function () {
  loadAlerts();
  // changePage("wheater#wheater");
  changePage("subscription#subscription-form");
  setupEvents();


  // functions
  function loadAlerts() {
    $("#alerts").load("./alerts/alerts.html");
    // $("#content").load("./wheater/wheater.html");

  }

  function changePage(target) {
    var feature = target.split('#')[0];
    var page    = target.split('#')[1];

    $("#content").load(feature + "/" + page + ".html", function () {
      animateOpacity("#content", 500, 0.5);

      var id = "nav-" + feature;
      setActive(id);
    });
  }

  function setActive(id) {
    $("#nav-items li a").removeClass("active");
    $("#" + id).addClass("active");
  }

  function animateOpacity(selector, speed, startOpacity) {
    var s = $(selector);
    s.css({opacity: startOpacity});
    s.animate({opacity: "1"}, speed);
  }


  // setup events
  function setupEvents() {
    $("a[data-target='nav-click']").click(function (event) {
        var id = event.currentTarget.id;
        changePage(id.substring(4, id.length));
      }
    );
  }
});
