// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (!fullNameInput.value.trim()) {
      alert('Full Name is required!');
      event.preventDefault(); // Prevent form submission
      return;
    }

    if (!emailInput.value.trim()) {
      alert('Email is required!');
      event.preventDefault(); // Prevent form submission
      return;
    }

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      alert('Please enter a valid email address!');
      event.preventDefault(); // Prevent form submission
      return;
    }

    // If all checks pass, the form would typically be submitted
    // For this example, we'll just show an alert
    alert('Form submitted successfully! (Note: This is a demo; no actual submission occurs.)');
    event.preventDefault(); // Prevent actual form submission for demonstration
    this.reset(); // Clear the form
  });
}