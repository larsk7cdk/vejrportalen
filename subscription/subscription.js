$(document).ready(function () {

  $("#btnSubmit").on('click', function () {
    // event.preventDefault();

    var data = {
      "subscription_id" : null,
      "email": $("#email").val(),
      "firstname": $("#firstname").val(),
      "lastname": $("#lastname").val(),
      "adress": $("#adress").val(),
      "postal_code": $("#postal_code").val(),
      "city": $("#city").val(),
      "phone": $("#phone").val(),
      "titel": $("#title").val()
    }

    // console.log(JSON.stringify(data));

    $.ajax({
      url: 'api/subscriptions/post.php',
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(data),
      success: function (result) {
        console.log(result);
      },
      error: function (xhr, resp, text) {
        console.log('error', xhr, resp, text);
      }
    })
  });
});
