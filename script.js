// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    const name = event.target[0].value; // Get name input value
    const email = event.target[1].value; // Get email input value
    const message = event.target[2].value; // Get message input value

   // Here you can add functionality to send the form data to your server or email service

   alert(`Thank you for your message, ${name}! We will get back to you soon.`);
   event.target.reset(); // Reset form fields after submission
});