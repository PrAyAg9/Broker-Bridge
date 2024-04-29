document.addEventListener("DOMContentLoaded", function() {
  // Get references to elements
  const loadingScreen = document.getElementById('loading-screen');
  const content = document.getElementById('content');

  // Simulate a loading delay (e.g., 3 seconds)
  setTimeout(() => {
      // Hide the loading screen
      loadingScreen.style.display = 'none';

      // Show the main content
      content.style.display = 'block';
  }, 1200); // Duration of 3 seconds (3000 milliseconds)
});
