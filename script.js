// --- Efecto de Escritura (Typing Effect) ---
const typingText = document.getElementById('typing-text');
const text = "Fundamentos de la Ingeniería Multimedia";
let index = 0;

function type() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

// --- Animación al Scroll (Reveal) ---
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// --- Navegación Activa ---
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-links a');

function activeMenu() {
    let len = sections.length;
    while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
    navLinks.forEach(lt => lt.classList.remove('active'));
    if (len >= 0) {
        navLinks[len].classList.add('active');
    }
}

// --- Botón Volver Arriba ---
const backToTopBtn = document.getElementById('back-to-top');

window.onscroll = function() {
    reveal();
    activeMenu();
    
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Diagrama de Componentes ---
const nodes = document.querySelectorAll('.node');
const infoDisplay = document.getElementById('info-display');

nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
        const info = node.getAttribute('data-info');
        infoDisplay.innerHTML = `<p>${info}</p>`;
        infoDisplay.style.borderLeftColor = "var(--secondary)";
    });

    node.addEventListener('mouseleave', () => {
        infoDisplay.innerHTML = `<p>Pasa el cursor sobre cada componente para descubrir su función.</p>`;
        infoDisplay.style.borderLeftColor = "var(--primary)";
    });
});

// --- Tarjetas Volteables (Flip Cards) ---
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// Inicialización
window.onload = () => {
    type();
    reveal(); 
};
