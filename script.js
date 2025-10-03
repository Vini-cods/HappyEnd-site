// Estado da cortina
let curtainOpened = false;

// Scroll para controle da cortina
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const curtainContainer = document.getElementById('curtainContainer');
  const curtainLeft = document.getElementById('curtainLeft');
  const curtainRight = document.getElementById('curtainRight');
  const curtainTop = document.getElementById('curtainTop');
  const curtainText = document.getElementById('curtainText');
  const scrollIndicator = document.getElementById('scrollIndicator');
  
  if (!curtainContainer || !curtainLeft || !curtainRight) return;
  
  // Calcula o progresso do scroll (0 a 1)
  const maxScroll = 500;
  const progress = Math.min(scrolled / maxScroll, 1);
  
  if (progress > 0 && !curtainOpened) {
    const translateX = progress * 100;
    
    // Move as cortinas para as laterais
    curtainLeft.style.transform = `translateX(-${translateX}%)`;
    curtainRight.style.transform = `translateX(${translateX}%)`;
    
    if (curtainTop) {
      curtainTop.style.transform = `translateY(-${translateX}%)`;
    }
    
    // Fade do texto da cortina
    if (curtainText) {
      curtainText.style.opacity = `${1 - progress}`;
      curtainText.style.transform = `translate(-50%, -50%) scale(${1 - progress * 0.3})`;
    }
    
    // Esconde o indicador de scroll
    if (scrollIndicator) {
      scrollIndicator.style.opacity = `${Math.max(0, 1 - progress * 2)}`;
    }
    
    // Remove completamente quando totalmente aberta
    if (progress >= 0.98) {
      curtainOpened = true;
      setTimeout(() => {
        curtainContainer.style.display = 'none';
        if (scrollIndicator) {
          scrollIndicator.style.display = 'none';
        }
      }, 500);
    }
  }
});

// Força scroll para o topo no carregamento
window.addEventListener('load', function() {
  window.scrollTo(0, 0);
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Menu mobile
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    // Animação do botão
    if (navMenu.classList.contains('active')) {
      mobileMenuBtn.innerHTML = '✕';
    } else {
      mobileMenuBtn.innerHTML = '☰';
    }
  });
}

// Smooth scroll para navegação
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remove active de todos
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    // Adiciona active no clicado
    this.classList.add('active');
    
    // Fecha menu mobile se estiver aberto
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      if (mobileMenuBtn) {
        mobileMenuBtn.innerHTML = '☰';
      }
    }
    
    // Scroll suave
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offset = 80; // Altura do navbar
      const targetPosition = targetSection.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Criar partículas de fundo
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;
  
  // Limpa partículas existentes
  particlesContainer.innerHTML = '';
  
  const particleCount = window.innerWidth < 768 ? 30 : 60;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particle.style.opacity = Math.random() * 0.6 + 0.4;
    
    particlesContainer.appendChild(particle);
  }
}

// Criar partículas especiais (douradas)
function createSpecialParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;
  
  const specialCount = window.innerWidth < 768 ? 8 : 15;

  for (let i = 0; i < specialCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle special-particle';

    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (Math.random() * 6 + 4) + 's';
    
    const size = Math.random() * 2 + 3;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.background = '#ffed4e';
    particle.style.boxShadow = '0 0 6px #ffd700, 0 0 12px #ffd700';

    particlesContainer.appendChild(particle);
  }
}

// Animações de scroll com Intersection Observer
function handleScrollAnimations() {
  const elementsToAnimate = [
    document.getElementById('introText'),
    document.getElementById('logoTitle'),
    document.getElementById('descriptionBox')
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px',
    }
  );

  elementsToAnimate.forEach(element => {
    if (element) observer.observe(element);
  });
}

// Partículas seguindo o cursor (desktop apenas)
function createCursorTrail() {
  if (window.innerWidth < 768 || isTouchDevice()) return;

  document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.3) {
      createTrailParticle(e.clientX, e.clientY);
    }
  });

  function createTrailParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'trail-particle';
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = '#ffd700';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '3';
    particle.style.opacity = '1';
    particle.style.transition = 'all 1.5s ease-out';

    document.body.appendChild(particle);

    requestAnimationFrame(() => {
      particle.style.opacity = '0';
      particle.style.transform =
        'translate(' +
        (Math.random() - 0.5) * 100 +
        'px, ' +
        (Math.random() - 0.5) * 100 +
        'px) scale(0)';
    });

    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 1500);
  }
}

// Verifica se é dispositivo touch
function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

// Verifica preferência de movimento reduzido
function supportsReducedMotion() {
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

// Gerencia movimento reduzido
function handleReducedMotion() {
  if (supportsReducedMotion()) {
    document.body.classList.add('reduced-motion');
    const style = document.createElement('style');
    style.textContent = `
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      .reduced-motion .particle {
        display: none;
      }
    `;
    document.head.appendChild(style);
  }
}

// Gerencia redimensionamento da janela
function handleResize() {
  createParticles();
  createSpecialParticles();
}

// Inicializa o carrossel Splide
function initCarousel() {
  const carouselElement = document.getElementById('imageCarousel');
  if (!carouselElement) return;
  
  try {
    new Splide('#imageCarousel', {
      type: 'loop',
      perPage: 3,
      focus: 'center',
      gap: '1.5rem',
      pagination: true,
      arrows: true,
      autoplay: true,
      interval: 5000,
      pauseOnHover: true,
      pauseOnFocus: true,
      speed: 800,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      breakpoints: {
        1024: { 
          perPage: 2,
          gap: '1rem'
        },
        768: { 
          perPage: 1,
          gap: '0.5rem'
        },
      },
    }).mount();
  } catch (error) {
    console.error('Erro ao inicializar carrossel:', error);
  }
}

// Navegação ativa baseada no scroll
function handleActiveNav() {
  const sections = document.querySelectorAll('section[id], main[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (sections.length === 0 || navLinks.length === 0) return;
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  });
}

// Parallax suave no scroll
function handleParallax() {
  const logo = document.querySelector('.main-content .logo');
  const introText = document.querySelector('.intro-text');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    if (logo) {
      logo.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (introText) {
      introText.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });
}

// Inicialização da aplicação
function initializeApp() {
  // Verifica acessibilidade
  handleReducedMotion();
  
  // Cria efeitos visuais
  createParticles();
  createSpecialParticles();
  createCursorTrail();
  
  // Animações
  handleScrollAnimations();
  handleActiveNav();
  handleParallax();
  
  // Inicializa carrossel
  if (typeof Splide !== 'undefined') {
    initCarousel();
  } else {
    // Tenta novamente após um delay se Splide não estiver carregado
    setTimeout(initCarousel, 500);
  }

  // Event listener para redimensionamento
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 250);
  });
}

// Previne comportamento estranho no carregamento
document.addEventListener('DOMContentLoaded', function() {
  window.scrollTo(0, 0);
  initializeApp();
});

// Fallback se DOMContentLoaded já disparou
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Log de inicialização (pode remover em produção)
console.log('%c✨ HappyEnd carregado com sucesso! ✨', 'color: #FFD700; font-size: 16px; font-weight: bold;');
console.log('%c🎭 Desenvolvido com amor para SESI SENAI Ferraz de Vasconcelos', 'color: #FFA500; font-size: 12px;');