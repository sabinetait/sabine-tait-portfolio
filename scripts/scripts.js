// Namespacing
const portfolio = {};

portfolio.init = () => {
    portfolio.navToggle();
    portfolio.reveal();
}
// Toggle to hamburger menu at small media queries
portfolio.navToggle = () => {
    // Capture hamburger menu and body menu elements
    const hamburgerElement = document.querySelector('.hamburger');
    const bodyElement = document.querySelector('body');
    // Capture nav element to manipulate 
    const mobileNavElement = document.querySelector('.mobile-nav');
    // Create an event listener for when the hamburger menu is clicked
    hamburgerElement.addEventListener('click', (event) => {
    portfolio.handleMobileNav(event.target);
    })

    portfolio.handleMobileNav = () => {
        // when hamburger is clicked to open, header nav is displayed (adding opened class)
        // hamburger menu is clicked to close, header nav is hidden (removing opened class)
        mobileNavElement.classList.toggle('opened');
        // Prevent scroll on body when nav menu is open
        bodyElement.classList.toggle('stop-scroll');
        // Close hamburger menu when a mobile nav list link has been selected
        // Capture nav link element
        const mobileNavLinkElement = document.querySelectorAll(".menu-link");
        // Create event listener for a click on any of the mobile nav links to toggle mobile nav closed
        mobileNavLinkElement.forEach((link) => {
        link.addEventListener('click', portfolio.handleNavLinks);
        })
    }
    
    portfolio.handleNavLinks = () => {
        mobileNavElement.classList.remove('opened');
        bodyElement.classList.remove('stop-scroll');
    }
}
// Reveal function that will add/remove the active class to project container at certain height from the top viewport
portfolio.reveal = () => {
    // Project section animation on scroll
    // Capture project containter element
    const revealElement = document.querySelectorAll(".reveal");

    for (let i = 0; i < revealElement.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElement[i].getBoundingClientRect().top;
        const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
        revealElement[i].classList.add("active");
    } 
    // else do nothing (ie. "active" class remains on element so that once project container has translated in, the animation does not repeat unless page is refreshed)
    }
    // Add event listener to scroll, call the reveal function
    window.addEventListener("scroll", portfolio.reveal);
}

portfolio.init();