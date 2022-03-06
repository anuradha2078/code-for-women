$(document).ready(() => {
  let data = {
    name: "",
    email: "",
    phone: "",
  };

  $("#name").on("input", (e) => {
    data.name = e.target.value;
  });

  $("#email").on("input", (e) => {
    data.email = e.target.value;
  });

  $("#phone").on("input", (e) => {
    data.phone = e.target.value;
  });

  $("#submit").on("click", (e) => {
    // on submit
    e.preventDefault();
    $("#show-name").append(data.name);
    $("#show-email").append(data.email);
    $("#show-phone").append(data.phone);
    // $("#submit").attr("disabled", "true");
    $('a').attr('href', 'https://www.google.com')
  });
});
