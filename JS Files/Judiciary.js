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
