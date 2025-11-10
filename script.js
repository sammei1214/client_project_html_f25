document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');
    const logo = navUl.querySelector('li:first-child');
    
    // Move logo outside of ul to sit beside hamburger
    nav.insertBefore(logo, navUl);
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.setAttribute('aria-label', 'Toggle navigation menu');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.innerHTML = `
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
    `;
    
    // Insert hamburger after the logo
    nav.insertBefore(hamburger, navUl);
    
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        navUl.classList.toggle('nav-open');
        hamburger.classList.toggle('active');
    });
    
    // Handle logo position on resize
    function handleLogoPosition() {
        if (window.innerWidth >= 768) {
            // Tablet/Desktop: move logo back to start of ul
            if (logo.parentElement !== navUl) {
                navUl.insertBefore(logo, navUl.firstChild);
            }
        } else {
            // Mobile: move logo outside ul
            if (logo.parentElement === navUl) {
                nav.insertBefore(logo, hamburger);
            }
        }
    }
    
    // Check on resize
    window.addEventListener('resize', handleLogoPosition);
    
    // Initial check
    handleLogoPosition();
});

document.getElementById("year").innerHTML = new Date().getFullYear();
