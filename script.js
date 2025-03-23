document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbarMenu = document.querySelector("#collapsibleNavId");
    const dropdownContainer = document.getElementById("programDropdownContainer");
    const dropdownMenu = document.getElementById("programDropdownMenu");

    // Toggle navbar menu
    navbarToggle.addEventListener("click", function () {
        this.classList.toggle("active");
        navbarMenu.classList.toggle("show");
    });

    // Close navbar when clicking outside
    document.addEventListener("click", function (event) {
        if (!navbarMenu.contains(event.target) && !navbarToggle.contains(event.target)) {
            navbarMenu.classList.remove("show");
            navbarToggle.classList.remove("active");
        }
    });

    // Hover dropdown behavior for large screens
    dropdownContainer.addEventListener("mouseenter", function () {
        if (window.innerWidth > 991) {
            dropdownMenu.style.display = "flex";
        }
    });

    dropdownContainer.addEventListener("mouseleave", function () {
        if (window.innerWidth > 991) {
            setTimeout(function () {
                if (!dropdownMenu.matches(":hover")) {
                    dropdownMenu.style.display = "none";
                }
            }, 200);
        }
    });

    // Remove hover dropdown for mobile (click-based only)
    if (window.innerWidth <= 991) {
        dropdownContainer.removeEventListener("mouseenter", () => {});
        dropdownContainer.removeEventListener("mouseleave", () => {});
    }
});


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













document.addEventListener("DOMContentLoaded", function () {
    // Create the custom cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // Variables for tracking mouse position and smoothing
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    // Listen for mouse movement globally
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor movement
    function moveCursor() {
        const distX = mouseX - cursorX;
        const distY = mouseY - cursorY;

        cursorX += distX / 10;
        cursorY += distY / 10;

        // Set cursor position
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        requestAnimationFrame(moveCursor);
    }

    // Start the animation
    moveCursor();
});
















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

















// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carouselId');
    const dots = document.querySelectorAll('.progress-dot');
    const interval = 2000; // Interval time in milliseconds
    let completedSlides = new Set(); // Track completed slides using a Set

    if (!carousel || dots.length === 0) return; // Ensure elements exist

    // Get Bootstrap carousel instance
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: interval,
        ride: 'carousel'
    });

    // Update dots on slide change
    carousel.addEventListener('slid.bs.carousel', function (event) {
        const activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(event.relatedTarget);
        
        // Remove active class from all dots
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to the current dot
        dots[activeIndex].classList.add('active');
        
        // Mark previous slides as completed
        for (let i = 0; i < activeIndex; i++) {
            completedSlides.add(i);
            dots[i].classList.add('completed');
        }

        // If looping back to the first slide, reset completed slides
        if (activeIndex === 0 && completedSlides.size === dots.length - 1) {
            completedSlides.clear();
            dots.forEach(dot => dot.classList.remove('completed'));
        }
    });

    // Add click event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            carouselInstance.to(index); // Navigate to selected slide

            // Mark all previous slides as completed
            completedSlides.clear();
            for (let i = 0; i < index; i++) {
                completedSlides.add(i);
                dots[i].classList.add('completed');
            }
        });
    });

    // Initialize first dot as active
    dots[0].classList.add('active');
});
