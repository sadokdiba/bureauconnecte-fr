/*!
    Le Bureau Connecté - Scripts
    
    Copyright (c) 2024 Le Bureau Connecté. All rights reserved.
    
    This HTML document and its content are proprietary and confidential.
    Unauthorized copying, distribution, modification, public display, or 
    public performance of this content, in whole or in part, is strictly 
    prohibited without the prior written consent of Le Bureau Connecté.
    
    For licensing inquiries, contact: sadokdiba@icloud.com
    
    UNAUTHORIZED USE IS PROHIBITED AND MAY RESULT IN LEGAL ACTION.
 */
function initializeNavigation() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            const expanded = navMenu.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', expanded);
            if (expanded) {
                mobileToggle.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i><span class="sr-only">Fermer le menu</span>';
                // Focus first nav link for accessibility
                const firstLink = navMenu.querySelector('.nav-link');
                if (firstLink) firstLink.focus();
            } else {
                mobileToggle.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i><span class="sr-only">Menu</span>';
                mobileToggle.focus();
            }
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileToggle.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i><span class="sr-only">Menu</span>';
                mobileToggle.setAttribute('aria-expanded', false);
                mobileToggle.focus();
            });
        });
    }

    // Smooth scroll for anchor links, support skip-link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#main-content') {
                // Skip-link: focus main content
                const main = document.getElementById('main-content');
                if (main) {
                    main.setAttribute('tabindex', '-1');
                    main.focus();
                    setTimeout(() => main.removeAttribute('tabindex'), 1000);
                }
                return;
            }
            // Only smooth scroll for in-page anchors
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    target.setAttribute('tabindex', '-1');
                    target.focus();
                    setTimeout(() => target.removeAttribute('tabindex'), 1000);
                }
            }
        });
    });
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const backToTopBtn = document.getElementById('backToTop');
    
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
    }
    
    if (backToTopBtn) {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
});

function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeBackToTop();
});