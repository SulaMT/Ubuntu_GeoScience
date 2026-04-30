* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', system-ui, sans-serif;
    background-color: #0a1428;
    color: #e2e8f0;
    line-height: 1.7;
    scroll-behavior: smooth;
}

/* NAVIGATION */
.navbar {
    background-color: rgba(10, 20, 40, 0.97);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid #1e40af;
}

.nav-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo a {
    color: white;
    font-size: 1.7rem;
    font-weight: 700;
    text-decoration: none;
}

.logo a:hover {
    color: #60a5fa;
}

/* Hamburger */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
}

.hamburger span {
    width: 32px;
    height: 3px;
    background-color: white;
    border-radius: 3px;
}

/* Menu */
.nav-menu {
    display: flex;
    list-style: none;
    gap: 40px;
}

.nav-menu a {
    color: #e2e8f0;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
}

.nav-menu a:hover {
    color: #60a5fa;
}

/* HEADER */
.header-wrapper {
    background: linear-gradient(135deg, #0f1f3d, #0a1428);
    padding: 110px 24px 90px;
    text-align: center;
}

.logo-landscape {
    max-width: 450px;
    height: auto;
    margin-bottom: 25px;
}

.arabic-sub {
    display: block;
    font-size: 1.45rem;
    color: #60a5fa;
    margin: 20px 0 35px 0;
    direction: rtl;
}

.text-section h1 {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
}

.partner-slogan {
    font-size: 1.4rem;
    color: #94a3b8;
    font-weight: 500;
}

/* General Sections */
.section {
    padding: 100px 0;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
}

h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 60px;
    color: white;
}

footer {
    background-color: #02060f;
    text-align: center;
    padding: 50px 20px;
    color: #94a3b8;
}

/* Mobile Hamburger Menu */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .nav-menu {
        position: fixed;
        top: 80px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 80px);
        background-color: #0a1428;
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
        gap: 40px;
        transition: 0.4s;
    }

    .nav-toggle:checked ~ .nav-menu {
        left: 0;
    }
}