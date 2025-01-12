// JavaScript to handle mouse enter/leave behavior for the header section
const headerSection = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar-toggle'); // Hamburger button
const navbarLinks = document.querySelector('.navbar-links');  // Navbar links container

// Handle mouse leave the header section
headerSection.addEventListener('mouseleave', () => {
    navbar.classList.add('header-section-active'); // Make navbar white with black text on leave
});

// Handle mouse enter the header section
headerSection.addEventListener('mouseenter', () => {
    navbar.classList.remove('header-section-active'); // Revert navbar to transparent on enter
});

// Handle scroll behavior for sticky navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scroll-active'); // Add scroll active class
    } else {
        navbar.classList.remove('scroll-active'); // Remove scroll active class
    }
});

// Toggle the navbar menu visibility on small screens
navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active'); // Add 'active' class to toggle button for animation
    navbarLinks.classList.toggle('active');  // Toggle the visibility of navbar links
});

