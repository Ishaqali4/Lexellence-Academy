document.addEventListener("DOMContentLoaded", function () {
    const programDropdown = document.getElementById("programDropdown");
    const programDropdownMenu = document.getElementById("programDropdownMenu");
    const overlay = document.createElement("div");
    
    overlay.id = "overlay";
    document.body.appendChild(overlay);

    programDropdown.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        if (programDropdownMenu.classList.contains("show")) {
            programDropdownMenu.classList.remove("show");
            overlay.classList.remove("active");
        } else {
            programDropdownMenu.classList.add("show");
            overlay.classList.add("active");
        }
    });

    // Close dropdown when clicking outside
    overlay.addEventListener("click", function () {
        programDropdownMenu.classList.remove("show");
        overlay.classList.remove("active");
    });

    // Close dropdown on window resize if >1000px
    window.addEventListener("resize", function () {
        if (window.innerWidth > 1000) {
            programDropdownMenu.classList.remove("show");
            overlay.classList.remove("active");
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    let programDropdown = document.getElementById("programDropdown");
    let mobileProgramList = document.getElementById("mobileProgramList");

    programDropdown.addEventListener("click", function (e) {
        if (window.innerWidth < 1000) {
            e.preventDefault(); // Prevents default link behavior
            mobileProgramList.classList.toggle("show"); // Toggle visibility
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
        if (!programDropdown.contains(e.target) && !mobileProgramList.contains(e.target)) {
            mobileProgramList.classList.remove("show");
        }
    });
});


























document.addEventListener("DOMContentLoaded", function () {
    const whyChooseSection = document.querySelector(".whychose");

    // Function to trigger the animation
    function triggerAnimation() {
        whyChooseSection.style.animation = "none"; // Reset animation
        void whyChooseSection.offsetWidth; // Trigger reflow
        whyChooseSection.style.animation = "scrollUp 1s ease forwards"; // Reapply animation
    }

    // Trigger animation on page load
    triggerAnimation();

    // Optional: Re-trigger animation on window resize (for mobile devices)
    window.addEventListener("resize", function () {
        triggerAnimation();
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






document.addEventListener("DOMContentLoaded", function () {
    const programSections = document.querySelector(".ProgramSections");

    // Intersection Observer to detect visibility
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    programSections.classList.add("active"); // Add animation when visible
                }
            });
        },
        { threshold: 0.4 } // Trigger when 30% of the section is visible
    );

    observer.observe(programSections);
});
