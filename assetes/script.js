// Custom JavaScript (script.js)

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.custom-navbar');

    // Function to add or remove the 'scrolled' class
    function handleScroll() {
        if (window.scrollY > 50) { // Change header appearance after 50px of scrolling
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the user reloads while scrolled down
    handleScroll();
});

// You will also need to add the corresponding CSS for the 'navbar-scrolled' class
/*
    In style.css:
    .navbar-scrolled {
        background-color: rgba(255, 255, 255, 0.95) !important; 
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
    }
*/