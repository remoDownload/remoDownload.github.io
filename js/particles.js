// إنشاء تأثير الجسيمات الخلفية
const particles = document.getElementById('particles');
const colors = ['#4CAF50', '#8BC34A', '#CDDC39', '#FFC107'];

function createParticle() {
    const particle = document.createElement('div');
    const size = Math.random() * 8 + 3;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.position = 'absolute';
    particle.style.borderRadius = '50%';
    particle.style.opacity = Math.random() * 0.4 + 0.1;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    
    particles.appendChild(particle);
    
    const animationDuration = Math.random() * 30 + 15;
    
    particle.animate([
        { transform: 'translateY(0) rotate(0deg)' },
        { transform: `translateY(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100 + 100}vh) rotate(${Math.random() * 360}deg)` }
    ], {
        duration: animationDuration * 1000,
        iterations: Infinity,
        easing: 'linear'
    });
    
    setTimeout(() => {
        particle.remove();
        createParticle();
    }, animationDuration * 1000);
}

// إنشاء 20 جسيماً فقط لتحسين الأداء
for(let i = 0; i < 20; i++) {
    createParticle();
}
