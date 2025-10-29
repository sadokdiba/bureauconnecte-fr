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
            navMenu.classList.toggle('active');
            
            if (navMenu.classList.contains('active')) {
                mobileToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
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