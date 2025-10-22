document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMsg = document.querySelector('[data-testid="test-contact-success"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Reset messages
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    successMsg.textContent = "";

    const name = document.querySelector('[data-testid="test-contact-name"]');
    const email = document.querySelector('[data-testid="test-contact-email"]');
    const subject = document.querySelector('[data-testid="test-contact-subject"]');
    const message = document.querySelector('[data-testid="test-contact-message"]');

    if (!name.value.trim()) {
      document.querySelector('[data-testid="test-contact-error-name"]').textContent = "Name is required.";
      valid = false;
    }

    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!email.value.trim()) {
      document.querySelector('[data-testid="test-contact-error-email"]').textContent = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email.value)) {
      document.querySelector('[data-testid="test-contact-error-email"]').textContent = "Invalid email format.";
      valid = false;
    }

    if (!subject.value.trim()) {
      document.querySelector('[data-testid="test-contact-error-subject"]').textContent = "Subject is required.";
      valid = false;
    }

    if (!message.value.trim()) {
      document.querySelector('[data-testid="test-contact-error-message"]').textContent = "Message is required.";
      valid = false;
    } else if (message.value.trim().length < 10) {
      document.querySelector('[data-testid="test-contact-error-message"]').textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    if (valid) {
      successMsg.textContent = "✅ Message sent successfully!";
      form.reset();
    }
  });
});
