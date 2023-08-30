function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let body =
    "Name: " + name + "<br/> Email: " + email + "<br/> Message: " + message;

  Email.send({
    SecureToken: "9beaf804-8fb5-4da5-a798-1a06189336c1",
    To: "unbrokie.ca@gmail.com",
    From: "unbrokie.ca@gmail.com",
    Subject: "Contact Message from Unbroke",
    Body: body,
  }).then((message) => alert(message));
  window.location.reload(true);
}

