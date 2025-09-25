// Theme Toggle Functionality
const logoText = document.getElementById('logoText');
if (logoText) {
    const logoTextContent = 'Tu Identidad en la Web...';
    let j = 0;
    
    function logoTypeWriter() {
        if (j < logoTextContent.length) {
            logoText.textContent += logoTextContent.charAt(j);
            j++;
            setTimeout(logoTypeWriter, 60);
        }
    }
    
    setTimeout(logoTypeWriter, 2500);
}
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const sunIcon = themeToggle.querySelector('.sun-icon');
const moonIcon = themeToggle.querySelector('.moon-icon');
// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
updateThemeIcons(savedTheme);
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
});
function updateThemeIcons(theme) {
    if (theme === 'dark') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}
// Loading screen
window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.classList.add('fade-out');
    }, 1000);
});
// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// Smooth scrolling for navigation links
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
// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', function() {
    navLinks.classList.toggle('mobile-active');
    mobileMenu.classList.toggle('active'); // Nueva línea para la animación X
});

// Cerrar menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const isClickInsideMenu = navLinks.contains(event.target);
    const isClickOnMenuButton = mobileMenu.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnMenuButton && navLinks.classList.contains('mobile-active')) {
        navLinks.classList.remove('mobile-active');
        mobileMenu.classList.remove('active');
    }
});

// También cerrar menú al hacer clic en un enlace del menú
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('mobile-active');
        mobileMenu.classList.remove('active');
    });
});
// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);
// Observe all sections for scroll animations
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});
// Portfolio items hover effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.classList.add('hover-effect');
    });
    
    item.addEventListener('mouseleave', function() {
        this.classList.remove('hover-effect');
    });
});
// Service cards animation on scroll
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    cardObserver.observe(card);
});
// Skills tags animation
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
    
    const tagObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    tagObserver.observe(tag);
});
// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && scrolled < hero.offsetHeight) {
        const parallaxValue = scrolled * 0.5;
        const opacityValue = 1 - (scrolled / hero.offsetHeight);
        heroContent.style.transform = `translateY(${parallaxValue}px)`;
        heroContent.style.opacity = opacityValue;
    }
});
// Add dynamic background particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    
    // Random color selection
    if (Math.random() > 0.5) {
        particle.classList.add('orange');
    } else {
        particle.classList.add('green');
    }
    
    document.body.appendChild(particle);
    
    const animation = particle.animate([
        {
            transform: 'translateY(0px)',
            opacity: 0.3
        },
        {
            transform: `translateY(-${window.innerHeight + 100}px)`,
            opacity: 0
        }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'linear'
    });
    
    animation.onfinish = () => {
        particle.remove();
    };
}
// Create particles periodically
setInterval(createParticle, 300);
// Add cursor glow effect
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
    cursorGlow.classList.add('active');
});
document.addEventListener('mouseleave', () => {
    cursorGlow.classList.remove('active');
});
// Form input focus effects
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});
// Add typing effect to hero subtitle
const heroSubtitle = document.querySelector('.hero p');
if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    setTimeout(typeWriter, 1500);
}
// Add scroll indicator
const scrollIndicator = document.createElement('div');
scrollIndicator.innerHTML = '↓';
scrollIndicator.className = 'scroll-indicator';
document.body.appendChild(scrollIndicator);
scrollIndicator.addEventListener('click', () => {
    document.querySelector('#sobre-mi').scrollIntoView({ behavior: 'smooth' });
});
// Hide scroll indicator when not at top
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollIndicator.classList.add('hidden');
    } else {
        scrollIndicator.classList.remove('hidden');
    }
    // ================== MENSAJE FLOTANTE AL ENVIAR FORMULARIO ==================
const form = document.querySelector('.form-contacto');
const successMessage = document.getElementById('successMessage');

if (form && successMessage) {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // evitamos envío inmediato para mostrar el mensaje

        // Validación de campos con HTML5 (ya tienes required, esto es por seguridad)
        if (form.checkValidity()) {
            successMessage.classList.add('show');

            // Ocultar el mensaje después de 4s
            setTimeout(() => {
                successMessage.classList.remove('show');
                // Aquí enviamos el formulario realmente
                form.submit();
            }, 4000);
        }
    });
}

});