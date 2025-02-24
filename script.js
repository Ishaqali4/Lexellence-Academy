document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbarCollapse = document.querySelector("#collapsibleNavId");

    navbarToggle.addEventListener("click", function () {
        // Toggle 'active' class for animation
        this.classList.toggle("active");
    });

    // Reset toggle icon when menu closes
    navbarCollapse.addEventListener("hidden.bs.collapse", function () {
        navbarToggle.classList.remove("active");
    });
});


// Create the custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Variables for tracking mouse position and smoothing
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// Listen for mouse movement
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smooth the cursor's movement with a small delay
function moveCursor() {
  const distX = mouseX - cursorX;
  const distY = mouseY - cursorY;

  // Apply some smoothing to the cursor movement
  cursorX += distX / 10;
  cursorY += distY / 10;

  // Set cursor position
  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;

  // Request the next animation frame for smooth movement
  requestAnimationFrame(moveCursor);
}

// Start the cursor movement
moveCursor();


