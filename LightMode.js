// Get the button and body elements
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

// Function to toggle between dark and light mode
toggleButton.addEventListener('click', (event) => {
  // Prevent default behavior of the link
  event.preventDefault();

  // Toggle the dark-mode class on the body
  body.classList.toggle('dark-mode');

  // Update the button text based on the current mode
  if (body.classList.contains('dark-mode')) {
    toggleButton.querySelector('.white').textContent = 'Dark Mode';
  } else {
    toggleButton.querySelector('.white').textContent = 'Light Mode';
  }
});
