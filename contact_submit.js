document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        console.log("Form Submitted:", { name, email, message });

        alert("Thank you for your message! We will get back to you soon.");
        // for now, cant really submit the form anywhere, so just reset it after submission
        // really need to somehow install php
        form.reset();
    });
});