const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Dynamically adjust hero section to avoid fixed navbar overlap
function adjustHeroPadding() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('#home');
    
    if (navbar && heroSection) {
        const navbarHeight = navbar.offsetHeight;
        // Add 20px extra breathing room
        heroSection.style.paddingTop = (navbarHeight + 20) + 'px';
    }
}

// Run on page load and on window resize
window.addEventListener('load', adjustHeroPadding);
window.addEventListener('resize', adjustHeroPadding);