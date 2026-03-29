// ================= LUMI BOT - JAVASCRIPT MEJORADO =================
// Experiencia inmersiva con efectos visuales y animaciones fluidas
// Archivo script-improved.js - CORREGIDO

document.addEventListener('DOMContentLoaded', function() {
    initializeNavbar();
    initializeTheme();
    initializeScrollEffects();
    initializeAnimations();
    initializeCommandCopy();
    initializeModal();
    initializeTypingEffect();
    initializeCounters();
    
    console.log('🌸 Lumi Bot cargado - Experiencia inmersiva activada');
});

// ================= NAVBAR CON EFECTOS =================
function initializeNavbar() {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    let lastScroll = 0;
    
    // Scroll effect con debounce
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const currentScroll = window.pageYOffset;
            
            // Agregar clase scrolled
            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        }, 10);
    });
    
    // Menu toggle
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            
            if (navLinks.classList.contains('active')) {
                icon.className = 'fas fa-times';
                document.body.style.overflow = 'hidden';
            } else {
                icon.className = 'fas fa-bars';
                document.body.style.overflow = '';
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').className = 'fas fa-bars';
                document.body.style.overflow = '';
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').className = 'fas fa-bars';
                document.body.style.overflow = '';
            }
        });
    }
}

// ================= SISTEMA DE TEMAS MEJORADO Y CORREGIDO =================
// ================= SISTEMA DE TEMAS MEJORADO =================
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) return;
    
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('lumiTheme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Event listener con animación
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Transición suave
        document.body.style.transition = 'background-color 0.4s ease, color 0.4s ease';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('lumiTheme', newTheme);
        updateThemeIcon(newTheme);
        
        // Crear efecto de ripple
        createRipple(this);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// ================= EFECTOS DE SCROLL MEJORADOS =================
function initializeScrollEffects() {
    const backToTop = document.getElementById('backToTop');
    
    if (!backToTop) return;
    
    // Mostrar/ocultar botón
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 400) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Scroll suave al hacer clic
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Efecto de rotación
        backToTop.style.transform = 'translateY(-8px) scale(1.15) rotate(360deg)';
        setTimeout(() => {
            backToTop.style.transform = '';
        }, 600);
    });
    
    // Navegación suave para todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offset = 100; // Aumentado para evitar que el navbar tape el contenido
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ================= ANIMACIONES MEJORADAS =================
function initializeAnimations() {
    // Intersection Observer para animaciones al scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                
                // Animación de contador
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos con atributo data-aos
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
    
    // Animaciones de hover mejoradas para tarjetas
    document.querySelectorAll('.luxury-card, .bento-item, .p-card').forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            this.style.transform = `translateY(-16px) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function(e) {
            this.style.transform = '';
        });
    });
    
    // Efecto parallax suave en el hero
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const heroImage = document.querySelector('.hero-background-image');
                
                if (heroImage && scrolled < window.innerHeight) {
                    heroImage.style.transform = `scale(1.1) translateY(${scrolled * 0.5}px)`;
                }
                
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ================= EFECTO DE ESCRITURA MEJORADO =================
function initializeTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    
    if (!typingElement) return;
    
    const texts = [
        'Lumi no es una waifu existente...',
        'Lumi es la waifu que tú creas.',
        'Lumi es tu compañera digital.',
        'Lumi está lista para la aventura.'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        // Cursor parpadeante
        typingElement.style.borderRight = '3px solid var(--accent)';
        
        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000; // Pausa al final
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pausa antes de escribir
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Iniciar después de un delay
    setTimeout(type, 1000);
}

// ================= CONTADORES ANIMADOS =================
function initializeCounters() {
    // Los contadores se animarán cuando entren en viewport
    // La animación real se maneja en initializeAnimations
}

function animateCounter(element) {
    const target = element.getAttribute('id');
    let endValue = 0;
    
    // Determinar el valor final
    switch(target) {
        case 'serversCount':
            endValue = 150;
            break;
        case 'usersCount':
            endValue = 10000;
            break;
        case 'commandsCount':
            endValue = 80;
            break;
        default:
            return;
    }
    
    const duration = 2000;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function para animación suave
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * endValue);
        
        if (target === 'usersCount') {
            element.textContent = (currentValue / 1000).toFixed(0) + 'K+';
        } else {
            element.textContent = currentValue + '+';
        }
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ================= COPIAR COMANDOS =================
function initializeCommandCopy() {
    document.querySelectorAll('.cmd-pill').forEach(pill => {
        pill.addEventListener('click', async function() {
            const command = this.getAttribute('data-cmd') || this.textContent;
            
            try {
                await navigator.clipboard.writeText(command);
                
                // Feedback visual mejorado
                const originalText = this.textContent;
                const originalBg = this.style.background;
                
                this.textContent = '✓ Copiado!';
                this.style.background = 'var(--accent)';
                this.style.color = '#000';
                this.style.transform = 'translateY(-4px) scale(1.1)';
                
                // Crear notificación
                showNotification('Comando copiado', command);
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = originalBg;
                    this.style.color = '';
                    this.style.transform = '';
                }, 2000);
                
            } catch (err) {
                console.error('Error al copiar:', err);
                showNotification('Error al copiar', '', 'error');
            }
        });
    });
}

// ================= MODAL MEJORADO =================
function initializeModal() {
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (!modal || !closeBtn) return;
    
    // Cerrar con botón
    closeBtn.addEventListener('click', closeModal);
    
    // Cerrar al hacer clic fuera
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.style.animation = 'modalFadeOut 0.3s ease both';
        setTimeout(() => {
            modal.style.display = 'none';
            modal.style.animation = '';
            document.body.style.overflow = '';
        }, 300);
    }
}

// Función global para abrir modal
window.openGallery = function() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
};

// ================= SISTEMA DE NOTIFICACIONES =================
function showNotification(title, message, type = 'success') {
    // Remover notificaciones previas
    const existingNotifications = document.querySelectorAll('.command-notification');
    existingNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = 'command-notification';
    notification.innerHTML = `
        <div class="notification-content" style="
            background: rgba(0, 0, 0, 0.95);
            border: 1px solid var(--accent);
            padding: 20px 28px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            gap: 16px;
            backdrop-filter: blur(16px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        ">
            <i class="fas fa-${getIconForType(type)}" style="
                color: var(--accent);
                font-size: 24px;
            "></i>
            <div style="flex: 1;">
                <strong style="
                    color: var(--text-main);
                    font-size: 15px;
                    display: block;
                    margin-bottom: 4px;
                ">${title}</strong>
                ${message ? `<code style="
                    color: var(--accent);
                    font-size: 13px;
                    font-family: 'SF Mono', monospace;
                ">${message}</code>` : ''}
            </div>
            <button class="close-notification" style="
                background: none;
                border: none;
                color: var(--text-sec);
                font-size: 24px;
                cursor: pointer;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.3s ease;
            ">&times;</button>
        </div>
    `;
    
    // Estilos inline para la notificación
    notification.style.cssText = `
        position: fixed;
        bottom: 32px;
        right: 32px;
        z-index: 10000;
        animation: slideIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        max-width: 420px;
    `;
    
    document.body.appendChild(notification);
    
    // Cerrar al hacer clic
    const closeBtn = notification.querySelector('.close-notification');
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
    
    closeBtn.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 182, 193, 0.2)';
    });
    
    closeBtn.addEventListener('mouseleave', function() {
        this.style.background = 'none';
    });
    
    // Auto cerrar después de 4 segundos
    setTimeout(() => {
        removeNotification(notification);
    }, 4000);
}

function removeNotification(notification) {
    notification.style.animation = 'slideOut 0.3s ease both';
    setTimeout(() => {
        notification.remove();
    }, 300);
}

function getIconForType(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'check-circle';
}

// ================= EFECTO RIPPLE =================
function createRipple(element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple 0.6s ease-out';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Añadir keyframes para animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
    
    @keyframes modalFadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// ================= LAZY LOADING DE IMÁGENES =================
function initializeLazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
                
                // Fade in effect
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                img.onload = () => {
                    img.style.opacity = '1';
                };
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading
initializeLazyLoad();

// ================= PRELOADER (OPCIONAL) =================
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
    
    console.log('✨ Todos los recursos cargados');
});

// ================= EASTER EGGS =================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    console.log('🎉 ¡Easter egg activado! Lumi te envía un abrazo digital 💕');
    showNotification('¡Easter Egg!', 'Lumi te envía un abrazo digital 💕', 'success');
}

// ================= PERFORMANCE OPTIMIZATIONS =================
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

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ================= EXPORTAR FUNCIONES GLOBALES =================
window.lumiBot = {
    showNotification,
    createRipple,
    debounce,
    throttle
};

console.log('✨ Lumi Bot - Todos los sistemas operativos');