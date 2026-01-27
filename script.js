// Atualizar ano no footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Efeito de digitação no subtítulo
const heroSubtitle = document.querySelector('.hero-subtitle');
const originalText = heroSubtitle.textContent;
const typingSpeed = 100;

// Remover o ">" inicial para a animação
heroSubtitle.textContent = '';

let i = 0;
function typeWriter() {
  if (i < originalText.length) {
    heroSubtitle.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, typingSpeed);
  }
}

// Iniciar animação após um breve delay
setTimeout(typeWriter, 500);

// Smooth Scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if(targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Animação de entrada para os elementos
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Aplicar animação a elementos específicos
document.querySelectorAll('.highlight-card, .solution-card, .tech-category, .project-card, .contact-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});