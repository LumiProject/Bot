// ================= DOCS SCRIPT PRINCIPAL =================
// Funcionalidad de navegación, tema, y UI general

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTheme();
    initializeBackToTop();
    initializeSearch();
    initializeSmoothScroll();
    initializeActiveLinks();
    initializeCopyCode();
    
    console.log('✅ LUMI Docs cargado correctamente');
});

// ================= NAVEGACIÓN RESPONSIVE =================
function initializeNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (!menuToggle || !navLinks) return;
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.className = navLinks.classList.contains('active') 
            ? 'fas fa-times' 
            : 'fas fa-bars';
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.className = 'fas fa-bars';
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    });
}

// ================= CAMBIO DE TEMA =================
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) return;
    
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('lumiDocsTheme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Event listener para cambiar tema
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('lumiDocsTheme', newTheme);
        updateThemeIcon(newTheme);
        
        // Animación suave
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// ================= BACK TO TOP =================
function initializeBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (!backToTop) return;
    
    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Scroll suave al hacer clic
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ================= BÚSQUEDA =================
function initializeSearch() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    
    if (!searchButton || !searchInput) return;
    
    // Búsqueda al hacer clic
    searchButton.addEventListener('click', performSearch);
    
    // Búsqueda al presionar Enter
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (!query) return;
        
        // Buscar en la página
        searchInPage(query);
    }
}

function searchInPage(query) {
    const lowerQuery = query.toLowerCase();
    const sections = document.querySelectorAll('.docs-section, .command-card, .faq-item');
    let found = false;
    
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(lowerQuery)) {
            section.style.outline = '2px solid var(--accent)';
            section.style.outlineOffset = '4px';
            
            if (!found) {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
                found = true;
            }
            
            // Quitar highlight después de 3 segundos
            setTimeout(() => {
                section.style.outline = '';
                section.style.outlineOffset = '';
            }, 3000);
        }
    });
    
    if (!found) {
        showNotification('No se encontraron resultados para: ' + query, 'warning');
    } else {
        showNotification('Se encontraron resultados para: ' + query, 'success');
    }
}

// ================= NAVEGACIÓN SUAVE =================
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 100; // Offset para navbar fijo
                const targetPosition = targetElement.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Actualizar URL sin recargar
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Manejar hash en URL al cargar
    window.addEventListener('load', () => {
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    const offset = 100;
                    const targetPosition = element.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 500);
        }
    });
}

// ================= ENLACES ACTIVOS =================
function initializeActiveLinks() {
    const sections = document.querySelectorAll('.docs-section, .faq-section');
    const navLinks = document.querySelectorAll('.category-list a, .quick-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.includes(current) && current) {
                link.classList.add('active');
            }
        });
    });
}

// ================= COPIAR CÓDIGO =================
function initializeCopyCode() {
    document.querySelectorAll('.copy-code').forEach(code => {
        code.style.cursor = 'pointer';
        code.title = 'Click para copiar';
        
        code.addEventListener('click', async function() {
            const text = this.textContent;
            
            try {
                await navigator.clipboard.writeText(text);
                
                // Feedback visual
                const originalText = this.textContent;
                const originalBg = this.style.background;
                const originalColor = this.style.color;
                
                this.textContent = '✓ ¡Copiado!';
                this.style.background = 'var(--accent)';
                this.style.color = '#000';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = originalBg;
                    this.style.color = originalColor;
                }, 1500);
                
            } catch (err) {
                console.error('Error al copiar:', err);
                showNotification('Error al copiar el código', 'error');
            }
        });
    });
}

// ================= NOTIFICACIONES =================
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getIconForType(type)}"></i>
        <span>${message}</span>
    `;
    
    // Estilos
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        padding: 15px 20px;
        box-shadow: var(--shadow-dark);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    
    // Color según tipo
    if (type === 'success') {
        notification.style.borderColor = '#4caf50';
        notification.querySelector('i').style.color = '#4caf50';
    } else if (type === 'error') {
        notification.style.borderColor = '#f44336';
        notification.querySelector('i').style.color = '#f44336';
    } else if (type === 'warning') {
        notification.style.borderColor = '#ff9800';
        notification.querySelector('i').style.color = '#ff9800';
    } else {
        notification.style.borderColor = 'var(--accent)';
        notification.querySelector('i').style.color = 'var(--accent)';
    }
    
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function getIconForType(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// ================= ANIMACIONES CSS =================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ================= UTILIDADES =================

// Debounce para optimizar eventos
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

// Throttle para scroll
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

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
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ================= DETECCIÓN DE SCROLL =================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', throttle(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Opcional: Ocultar navbar al hacer scroll down
        // if (scrollTop > lastScrollTop && scrollTop > 100) {
        //     navbar.style.transform = 'translateY(-100%)';
        // } else {
        //     navbar.style.transform = 'translateY(0)';
        // }
        
        // Agregar sombra al navbar cuando se hace scroll
        if (scrollTop > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    }, 100));
}

// ================= TOOLTIPS (opcional) =================
function initializeTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.dataset.tooltip;
            tooltip.style.cssText = `
                position: absolute;
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                padding: 8px 12px;
                border-radius: var(--radius-sm);
                font-size: 0.85rem;
                z-index: 10000;
                pointer-events: none;
                white-space: nowrap;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            tooltip.style.left = rect.left + (rect.width - tooltip.offsetWidth) / 2 + 'px';
            
            this._tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                this._tooltip.remove();
                this._tooltip = null;
            }
        });
    });
}

// ================= EXPORTAR FUNCIONES =================
window.lumiDocs = {
    showNotification,
    debounce,
    throttle,
    searchInPage
};