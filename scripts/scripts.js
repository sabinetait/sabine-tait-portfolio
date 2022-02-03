// Toggle to hamburger menu at small media queries
// Capture hamburger menu element
const hamburgerElement = document.querySelector('.hamburger');

// Capture nav element to manipulate 
const mobileNavElement = document.querySelector('.mobile-nav');

// Create an event listener for when the hamburger menu is clicked
hamburgerElement.addEventListener('click', (event) => {
    navToggle(event.target);
})

// when hamburger is clicked to open, header nav is displayed (adding opened class)
// hamburger menu is clicked to close, header nav is hidden (removing opened class)
navToggle = () => {
   mobileNavElement.classList.toggle('opened');
}

// Close hamburger menu when a mobile nav list link has been selected
// Capture nav link element
const mobileNavLinkElement = document.querySelectorAll(".menu-link");

// Create event listener for a click on any of the mobile nav links to toggle mobile nav closed
mobileNavLinkElement.forEach((link) => {
    link.addEventListener('click', navToggle);
})

// Project section animation on scroll
// Capture project containter element
const revealElement = document.querySelectorAll(".reveal");

// Reveal function that will add/remove the active class to project container at certain from the top viewport
reveal = () => {
    for (let i = 0; i < revealElement.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElement[i].getBoundingClientRect().top;
        const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
        revealElement[i].classList.add("active");
    } else {
        revealElement[i].classList.remove("active");
    }
    }
}
// Add event listener to scroll, call the reveal function
window.addEventListener("scroll", reveal);