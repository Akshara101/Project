// Enhanced favorite button functionality
document.querySelectorAll('.favorite').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const icon = button.querySelector('i');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
        
        // Add animation
        button.style.transform = 'scale(1.2)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced dropdown behavior
document.querySelectorAll('.nav-item').forEach(item => {
    const dropdown = item.querySelector('.dropdown');
    if (dropdown) {
        let timeout;

        item.addEventListener('mouseenter', () => {
            clearTimeout(timeout);
            dropdown.style.display = 'block';
            dropdown.style.opacity = '0';
            setTimeout(() => {
                dropdown.style.opacity = '1';
            }, 50);
        });

        item.addEventListener('mouseleave', () => {
            timeout = setTimeout(() => {
                dropdown.style.opacity = '0';
                setTimeout(() => {
                    dropdown.style.display = 'none';
                }, 200);
            }, 200);
        });
    }
});

// Enhanced search functionality
const searchInput = document.querySelector('.search-bar input');
const searchIcon = document.querySelector('.search-icon');

searchInput.addEventListener('input', () => {
    if (searchInput.value.length > 0) {
        searchIcon.style.color = '#22c55e';
    } else {
        searchIcon.style.color = '#9ca3af';
    }
});

// Mobile menu functionality
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        
        const nav = document.querySelector('.main-nav');
        nav.parentNode.insertBefore(mobileMenuBtn, nav);

        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('show');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
        });
    }
};

// Initialize mobile menu
createMobileMenu();

// Handle window resize
window.addEventListener('resize', () => {
    const existingBtn = document.querySelector('.mobile-menu-btn');
    if (window.innerWidth > 768 && existingBtn) {
        existingBtn.remove();
        document.querySelector('.main-nav').classList.remove('show');
    } else if (window.innerWidth <= 768 && !existingBtn) {
        createMobileMenu();
    }
});

// Lazy loading images
const lazyLoad = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
};

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoad);