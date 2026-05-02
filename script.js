/* ==========================================================================
   NAVBAR MOBILE TOGGLE
   ========================================================================== */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Close the mobile menu automatically when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navToggle) navToggle.checked = false;
    });
});

/* ==========================================================================
   DYNAMIC PADDING ADJUSTMENT
   ========================================================================== */
function adjustHeroPadding() {
    const navbar = document.querySelector('.navbar');
    // Updated selector to match your header-wrapper in the new CSS
    const headerWrapper = document.querySelector('.header-wrapper');
    
    if (navbar && headerWrapper) {
        const navbarHeight = navbar.offsetHeight;
        headerWrapper.style.paddingTop = (navbarHeight + 20) + 'px';
    }
}

// Run on load and resize to keep layout sharp on MacBook and Mobile
window.addEventListener('load', adjustHeroPadding);
window.addEventListener('resize', adjustHeroPadding);