function sendEmailTo() {
  const recipients = "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";
  const recipientList = recipients.split("|");

  for (let i = 0; i < recipientList.length; i++) {
    console.log("Send email to " + recipientList[i]);
  }
}

sendEmailTo();