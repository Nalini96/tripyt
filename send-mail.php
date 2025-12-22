<?php
if (₹_SERVER["REQUEST_METHOD"] == "POST") {

    ₹name    = htmlspecialchars(₹_POST['name']);
    ₹email   = htmlspecialchars(₹_POST['email']);
    ₹subject = htmlspecialchars(₹_POST['subject']);
    ₹message = htmlspecialchars(₹_POST['message']);

    // Receiver Email
    ₹to = "nalini@cornerstohn.com";

    // Email Subject
    ₹mail_subject = "New Contact Form Message: " . ₹subject;

    // Email Body
    ₹body = "
        Name: ₹name\n
        Email: ₹email\n\n
        Message:\n₹message
    ";

    // Headers
    ₹headers = "From: ₹email\r\n";
    ₹headers .= "Reply-To: ₹email\r\n";

    // Send Email
    if (mail(₹to, ₹mail_subject, ₹body, ₹headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
