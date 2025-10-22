document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-testid='test-contact-form']");
  const successMsg = document.querySelector("[data-testid='test-contact-success']");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();
    let isValid = true;

    // Trim all input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation checks
    if (name === "") {
      showError("name", "Full name is required.");
      isValid = false;
    }

    if (email === "") {
      showError("email", "Email is required.");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      showError("email", "Please enter a valid email address (e.g., name@example.com).");
      isValid = false;
    }

    if (subject === "") {
      showError("subject", "Subject is required.");
      isValid = false;
    }

    if (message.length < 10) {
      showError("message", "Message must be at least 10 characters long.");
      isValid = false;
    }

    // Success message
    if (isValid) {
      successMsg.textContent = "✅ Message sent successfully!";
      successMsg.style.display = "block";
      form.reset();
      setTimeout(() => (successMsg.style.display = "none"), 4000);
    }
  });

  function showError(field, message) {
    const errorEl = document.querySelector(`[data-testid="test-contact-error-${field}"]`);
    const inputEl = document.getElementById(field);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = "block";
      inputEl.setAttribute("aria-describedby", errorEl.id);
    }
  }

  function clearErrors() {
    document.querySelectorAll("[data-testid^='test-contact-error']").forEach((el) => {
      el.textContent = "";
      el.style.display = "none";
    });
    successMsg.style.display = "none";
  }
});
