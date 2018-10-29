class SnackBar {
  make(type, snack_array, time) {
    var snack_message = snack_array[0];
    var snack_action  = snack_array[1];
    var snack_class   = "snackbar " + type + " ";
    if (snack_array[2] == "" || snack_array[3] == "") {
      snack_array[2] = "bottom";
      snack_array[3] = "center";
    }

    snack_class += snack_array[2] + " " + snack_array[3];

    var snack_html =
          " <div class=\"" + snack_class + "\">" +
          " <div class=\"wrap\">" +
          "<div class=\"text\">" + snack_message + "</div>" +
          "<button><i class=\"material-icons\">close</i></button>" +
          "<button>" + snack_action + "</button>" +
          "</div>" +
          "</div>";

    $("snackbar").html(snack_html);
    this.open(time);
  }

  open(time) {
    $(".snackbar").addClass("slideUp");
    //timer
    var timer;
    if (time != null) {
      timer = setInterval(function() {
        clearInterval(timer);
        $(".snackbar").addClass("slideDown");
      }, time);
      //if user cancel
      $(".snackbar button:nth-child(2)").click(function() {
        clearInterval(timer);
        $(".snackbar").addClass("slideDown");
      });
    }
  }

  close() {
    $(".snackbar").addClass("slideDown");
  }

  action(callback) {
    $(".snackbar button:nth-child(2)").click(function() {
      callback(false);
    });
    $(".snackbar button:nth-child(3)").click(function() {
      callback(true);
    });
  }
}
