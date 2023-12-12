// Function to toggle dark mode
function toggleDarkMode() {
  const isDarkModeEnabled = document.body.classList.toggle('darkmode');
  localStorage.setItem('darkMode', isDarkModeEnabled ? 'enabled' : 'disabled');
  changeIcon();
}

// Function to change the dark mode icon
function changeIcon() {
  const icon = document.getElementById('dark-mode-icon');
  if (icon.classList.contains('fa-sun')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
  } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
  }
}

// Start dark mode
const savedDarkMode = localStorage.getItem('darkMode');

// If dark mode was previously enabled or it's the user's first visit, enable dark mode
if (savedDarkMode === 'enabled' || savedDarkMode === null) {
  toggleDarkMode();
}

// When someone clicks the button to toggle dark mode
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);