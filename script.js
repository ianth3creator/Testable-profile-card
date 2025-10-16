/**
 * Initializes the profile card functionality.
 * This script dynamically updates the current UNIX time in milliseconds.
 */
function initializeProfileCard() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  if (!timeElement) {
    console.error('Time element not found. Check data-testid="test-user-time"');
    return;
  }

  // Updates the time every 250ms
  function updateTime() {
    const currentTimeInMs = Date.now();
    timeElement.textContent = currentTimeInMs.toString();
  }

  updateTime();
  setInterval(updateTime, 250);
}

window.onload = initializeProfileCard;
