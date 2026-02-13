// Registro del Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => console.log('SW registrado'))
            .catch(err => console.log('SW error:', err));
    });
}

// Elementos del DOM
const welcomeScreen = document.getElementById('welcomeScreen');
const messageScreen = document.getElementById('messageScreen');
const yesScreen = document.getElementById('yesScreen');
const maybeScreen = document.getElementById('maybeScreen');

const startButton = document.getElementById('startButton');
const yesButton = document.getElementById('yesButton');
const maybeButton = document.getElementById('maybeButton');
const reconsiderButton = document.getElementById('reconsiderButton');
const regresarButton = document.getElementById('regresarButton');

// Función para cambiar de pantalla
function switchScreen(hideScreen, showScreen) {
    hideScreen.classList.remove('active');
    setTimeout(() => {
        showScreen.classList.add('active');
    }, 300);
}

// Crear pétalos cayendo
function createPetals() {
    const petalsContainer = document.getElementById('petalsContainer');
    const colors = ['#FFD1DC', '#FFC4D9', '#E0BBE4', '#D7C0F0', '#FFE5D9'];
    
    for (let i = 0; i < 15; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        petal.style.animationDuration = (Math.random() * 10 + 15) + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        petalsContainer.appendChild(petal);
    }
}

// Crear confeti para la celebración
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#FFD1DC', '#FFC4D9', '#E0BBE4', '#D7C0F0', '#FFE5D9', '#F8C4D5'];
    
    for (let i = 0; i < 100; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * 0.5 + 's';
        piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        // Algunas piezas de confeti en forma de corazón (usando caracteres)
        if (Math.random() > 0.7) {
            piece.textContent = '♡';
            piece.style.fontSize = '12px';
            piece.style.width = 'auto';
            piece.style.height = 'auto';
            piece.style.color = colors[Math.floor(Math.random() * colors.length)];
        }
        
        confettiContainer.appendChild(piece);
    }
}

// Event Listeners
startButton.addEventListener('click', () => {
    switchScreen(welcomeScreen, messageScreen);
});

yesButton.addEventListener('click', () => {
    createConfetti();
    switchScreen(messageScreen, yesScreen);
    
    // Vibración si está disponible
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100, 50, 200]);
    }
});

maybeButton.addEventListener('click', () => {
    switchScreen(messageScreen, maybeScreen);
});

reconsiderButton.addEventListener('click', () => {
    switchScreen(maybeScreen, messageScreen);
});

regresarButton.addEventListener('click', () => {
    switchScreen(yesScreen, messageScreen);
});

// Inicializar pétalos al cargar
window.addEventListener('load', () => {
    createPetals();
});

// Efecto de cursor personalizado (opcional, comentado por defecto)
/*
const cursor = document.createElement('div');
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.15s ease;
`;
cursor.textContent = '🌸';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(1.3)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
});
*/

// Prevenir comportamiento de instalación automática
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Opcional: Mostrar un botón de instalación personalizado
    // Por ahora lo dejamos para que el navegador maneje la instalación
});

// Animación extra cuando se toca cualquier botón
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Crear efecto de onda
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: rippleEffect 0.6s ease-out;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Añadir la animación del ripple al CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
