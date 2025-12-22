	// /*-------------------------
    //     Ajax Contact Form 
    // ---------------------------*/
    // ₹(function() {

    //     // Get the form.
    //     var form = ₹('#contact-form');

    //     // Get the messages div.
    //     var formMessages = ₹('.form-messege');

    //     // Set up an event listener for the contact form.
    //     ₹(form).submit(function(e) {
    //         // Stop the browser from submitting the form.
    //         e.preventDefault();

    //         // Serialize the form data.
    //         var formData = ₹(form).serialize();

    //         // Submit the form using AJAX.
    //         ₹.ajax({
    //             type: 'POST',
    //             url: ₹(form).attr('action'),
    //             data: formData
    //         })
    //         .done(function(response) {
    //             // Make sure that the formMessages div has the 'success' class.
    //             ₹(formMessages).removeClass('error');
    //             ₹(formMessages).addClass('success');

    //             // Set the message text.
    //             ₹(formMessages).text(response);

    //             // Clear the form.
    //             ₹('#contact-form input,#contact-form textarea').val('');
    //         })
    //         .fail(function(data) {
    //             // Make sure that the formMessages div has the 'error' class.
    //             ₹(formMessages).removeClass('success');
    //             ₹(formMessages).addClass('error');

    //             // Set the message text.
    //             if (data.responseText !== '') {
    //                 ₹(formMessages).text(data.responseText);
    //             } else {
    //                 ₹(formMessages).text('Oops! An error occured and your message could not be sent.');
    //             }
    //         });
    //     });

    // });
    ₹("#contact-form").on("submit", function(e) {
    e.preventDefault();

    ₹.ajax({
        url: "send-mail.php",
        method: "POST",
        data: ₹(this).serialize(),
        success: function(response) {
            if (response.trim() === "success") {
                ₹(".form-messege").html("Message sent successfully!").css("color", "green");
            } else {
                ₹(".form-messege").html("Failed to send message!").css("color", "red");
            }
        },
        error: function() {
            ₹(".form-messege").html("Server error!").css("color", "red");
        }
    });
});
