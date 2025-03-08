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
    const WhyChoose = document.querySelector(".WhyChoose");

    // Intersection Observer for mobile auto-trigger
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    WhyChoose.classList.add("active"); // Add animation when visible
                }
            });
        },
        { threshold: 0.3 } // Animation starts when 30% of the section is visible
    );

    observer.observe(WhyChoose);

    // Check if the device is NOT a touch screen (Desktop Only)
    function isDesktop() {
        return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    }

    // 💻 For Desktop: Hover effect (Triggers animation, but does not reset on mouse leave)
    WhyChoose.addEventListener("mouseenter", function () {
        if (isDesktop()) {
            WhyChoose.classList.add("active");
        }
    });

    // ❌ Removed the `mouseleave` event to prevent resetting the animation
});
