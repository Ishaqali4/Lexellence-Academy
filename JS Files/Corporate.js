document.addEventListener("DOMContentLoaded", function () {
    let masterCourtroom = document.querySelector(".MasterCourtroom");

    // 🖱 Mouse hover effect for laptops
    masterCourtroom.addEventListener("mouseenter", function () {
        masterCourtroom.classList.add("active");
    });

    // 📱 Intersection Observer for mobile (triggers animation on scroll)
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    masterCourtroom.classList.add("active"); // Activate animation when visible
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    observer.observe(masterCourtroom);
});



document.addEventListener("DOMContentLoaded", function () {
    const courtroomSkills = document.querySelector(".CourtroomSkills");

    // Intersection Observer to detect when the section is visible
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    courtroomSkills.classList.add("active"); // Activate animation when visible
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    observer.observe(courtroomSkills);
});

document.addEventListener("DOMContentLoaded", function () {
    const featuresSection = document.querySelector(".Features");

    // Intersection Observer to trigger animation when section enters viewport
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    featuresSection.classList.add("active"); // Activate animation
                } else {
                    featuresSection.classList.remove("active"); // Remove animation if not in view
                }
            });
        },
        { threshold: 0.2 } // Animation triggers when 20% of the section is visible
    );

    observer.observe(featuresSection);
});
