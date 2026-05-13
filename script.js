/* ==========================================================================
   NAVBAR MOBILE TOGGLE
   ========================================================================== */

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-menu a');

if (navToggle && navLinks.length) {

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
        });
    });
}

/* ==========================================================================
   NAVBAR SCROLL EFFECT
   ========================================================================== */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 40) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

/* ==========================================================================
   BACK TO TOP BUTTON
   ========================================================================== */

const backBtn = document.getElementById('backToTop');

if (backBtn) {

    window.addEventListener('scroll', () => {

        if (window.scrollY > 300) {
            backBtn.classList.add('show');
        } else {
            backBtn.classList.remove('show');
        }
    });

    backBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
