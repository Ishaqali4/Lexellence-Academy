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
