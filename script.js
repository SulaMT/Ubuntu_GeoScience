/* ==========================================================================
   NAVBAR MOBILE TOGGLE
   ========================================================================== */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

if (navToggle && navLinks.length) {
    // Close the mobile menu automatically when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
        });
    });
}

/* ==========================================================================
   BACK TO TOP BUTTON
   ========================================================================== */
const backBtn = document.getElementById('backToTop');

if (backBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backBtn.style.display = 'flex';
        } else {
            backBtn.style.display = 'none';
        }
    });

    backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}