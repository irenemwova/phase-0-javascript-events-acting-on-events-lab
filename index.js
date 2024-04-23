// Define the moveDodgerLeft function
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  // Define the moveDodgerRight function
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    // Adjust the condition to prevent dodger from moving beyond the right edge of the game container
    const gameContainer = document.getElementById("game"); // Assuming game container ID is "game"
    if (left < gameContainer.offsetWidth - dodger.offsetWidth) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  // Event listener for moving dodger left
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  
  // Event listener for moving dodger right
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  