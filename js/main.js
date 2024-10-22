document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const submitBtn = document.getElementById("submitBtn");

  // Helper function to validate email format
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Helper function to validate password strength
  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordPattern.test(password);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get form input values
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirm-password")
      .value.trim();

    // Validate Firstname
    if (!firstname) {
      alert("Firstname is required.");
      return;
    }

    // Validate Lastname
    if (!lastname) {
      alert("Lastname is required.");
      return;
    }

    // Validate Email
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate Password strength
    if (!validatePassword(password)) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // Validate Password match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Log input data to console
    console.log(`Firstname: ${firstname}`);
    console.log(`Lastname: ${lastname}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Confirm Password: ${confirmPassword}`);

    // Add loading state to the submit button
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Loading... (1:00)";
    let timeLeft = 300; // 5 minutes in seconds

    const timer = setInterval(() => {
      timeLeft--;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      submitBtn.innerHTML = `Loading... (${minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
      })`;

      if (timeLeft <= 0) {
        clearInterval(timer);
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Submit";
      }
    }, 1000);

    // Simulate form submission delay (for demonstration purposes)
    setTimeout(() => {
      console.log("Form submitted successfully!");
      alert("Form submitted successfully!");
    }, 1000); // Simulate 1 seconds delay for form submission
  });
});
