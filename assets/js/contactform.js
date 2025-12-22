$("#contact-form").on("submit", function(e) {
    e.preventDefault();

    $.ajax({
        url: "send-mail.php",
        method: "POST",
        data: $(this).serialize(),
        success: function(response) {
            if (response.trim() === "success") {
                $(".form-messege").html("Message sent successfully!").css("color", "green");
            } else {
                $(".form-messege").html("Failed to send message!").css("color", "red");
            }
        },
        error: function() {
            $(".form-messege").html("Server error!").css("color", "red");
        }
    });
});
