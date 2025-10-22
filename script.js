// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // 1. TYPING ANIMATION (using Typed.js library)
    // =================================================================
    const typed = new Typed('.auto-type', {
        strings: ["a Developer.", "a Problem Solver.", "Technically Inclined."],
        typeSpeed: 70,  // Speed of typing
        backSpeed: 50,  // Speed of deleting
        loop: true      // Loop the animation
    });

    // =================================================================
    // 2. RESPONSIVE NAVIGATION (Hamburger Menu)
    // =================================================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    // Toggle nav menu on hamburger click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close nav menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // =================================================================
    // 3. FADE-IN EFFECT FOR SECTIONS ON SCROLL
    // =================================================================
    const sections = document.querySelectorAll('.content-section');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after it's visible
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // =================================================================
    // 4. ACTIVE NAVIGATION LINK HIGHLIGHTING ON SCROLL
    // =================================================================
    const allSections = document.querySelectorAll('section[id]');
    const navListItems = document.querySelectorAll('nav .nav-links a');

    const activeLinkObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the id of the visible section
                const id = entry.target.getAttribute('id');
                // Remove active class from all nav links
                navListItems.forEach(link => link.classList.remove('nav-active'));
                // Add active class to the corresponding nav link
                const activeLink = document.querySelector(`nav .nav-links a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('nav-active');
                }
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' }); // Triggers when section is in the middle 40% of the viewport

    allSections.forEach(section => {
        activeLinkObserver.observe(section);
    });

    // =================================================================
    // 5. SCROLL-TO-TOP BUTTON
    // =================================================================
    const scrollTopButton = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        // Show the button if user has scrolled down more than 400px
        if (window.scrollY > 400) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });

});