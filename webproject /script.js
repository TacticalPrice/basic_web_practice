document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get user input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Display an alert with the user's input
        alert(`Thank you, ${name}!\n\nYour message has been sent.\n\nEmail: ${email}\n\nMessage: ${message}`);

        // Clear the form
        contactForm.reset();
    });
});
