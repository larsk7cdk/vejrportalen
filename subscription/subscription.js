$(document).ready(function () {

  $("#getBtn").click(function () {
    $.get("http://localhost/vejrportalen-api/subscriptions/get.php", function (data, status) {

      $("#listData").innerText = JSON.stringify(data);

      // alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
    });

  });

});
