// Smooth Scroll e Navegação
document.addEventListener('DOMContentLoaded', function() {
    // Garantir que o vídeo carregue e toque
    const video = document.querySelector('.video-background video');
    const videoBackground = document.querySelector('.video-background');
    
    if (video) {
        // Tentar carregar e tocar o vídeo
        video.load();
        
        // Event listeners para garantir que o vídeo toque
        video.addEventListener('loadeddata', function() {
            console.log('Vídeo carregado com sucesso');
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    console.log('Vídeo está tocando');
                    // Vídeo está funcionando, remove fallback
                    videoBackground.style.background = 'transparent';
                }).catch(error => {
                    console.log('Autoplay bloqueado, tentando interação do usuário');
                    // Adicionar listener para iniciar vídeo na primeira interação
                    document.addEventListener('click', function playVideo() {
                        video.play();
                        document.removeEventListener('click', playVideo);
                    }, { once: true });
                });
            }
        });
        
        // Fallback para garantir o vídeo
        video.addEventListener('error', function() {
            console.log('Erro ao carregar vídeo, usando fallback gradiente');
            // Mantém o gradiente de fallback já definido no CSS
        });
        
        // Timeout para garantir que algo apareça
        setTimeout(() => {
            if (video.readyState < 2) {
                console.log('Vídeo demorou para carregar, mantendo fallback');
            }
        }, 3000);
    }
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load
    
    // Timeline Animation on Scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function animateTimeline() {
        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100) {
                setTimeout(() => {
                    item.style.animationDelay = `${index * 0.2}s`;
                    item.style.opacity = '1';
                }, index * 200);
            }
        });
    }
    
    window.addEventListener('scroll', animateTimeline);
    animateTimeline(); // Check on load
    
    // Scroll Indicator Click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            document.getElementById('apresentacao').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Form Submission
    const contactForm = document.querySelector('.contato-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            // Show loading state
            submitButton.innerHTML = '<span class="loading"></span> Enviando...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual Formspree integration)
            setTimeout(() => {
                submitButton.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
                submitButton.style.background = '#10B981';
                
                // Reset form
                this.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.style.background = '';
                    submitButton.disabled = false;
                }, 3000);
            }, 2000);
        });
    }
    
    // Tech Items Animation
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Project Cards Parallax Effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
    
    // Certificate Cards Animation
    const certificateCards = document.querySelectorAll('.certificate-card');
    certificateCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('reveal');
    });
    
    // Smooth scroll for anchor links
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
    
    // Dynamic header background on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            if (currentScroll > 100) {
                hero.style.filter = 'brightness(0.7)';
            } else {
                hero.style.filter = 'brightness(1)';
            }
        }
        
        lastScroll = currentScroll;
    });
    
    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '3px solid white';
        
        let index = 0;
        function typeWriter() {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            } else {
                heroTitle.style.borderRight = 'none';
            }
        }
        
        setTimeout(typeWriter, 500);
    }
    
    // Add floating animation to tech icons
    const techIcons = document.querySelectorAll('.tech-item i');
    techIcons.forEach(icon => {
        icon.style.animation = `float ${3 + Math.random() * 2}s ease-in-out infinite`;
    });
    
    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
    
    // Intersection Observer for better performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Add reveal class to elements that should animate
    document.querySelectorAll('.tech-item, .project-card, .certificate-card').forEach(el => {
        el.classList.add('reveal');
    });
    
    // Button ripple effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple effect
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // Console welcome message
    console.log('%c🚀 Bem-vindo ao portfólio de Raissa Costa!', 'color: #8B5CF6; font-size: 20px; font-weight: bold;');
    console.log('%cDesenvolvedora Front-End | HTML, CSS, JavaScript, Java, SQL', 'color: #10B981; font-size: 14px;');
    console.log('%cGitHub: https://github.com/raissacvf', 'color: #6B7280; font-size: 12px;');
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(function() {
    // Scroll-related animations here
}, 10));

// Lazy loading for images (if needed)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
