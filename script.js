// Estado da cortina
let curtainOpened = false;

// Dados dos projetos TCC ATUALIZADOS
const projectsData = [
  {
    id: 1,
    title: "Librali",
    subtitle: "A vida além dos sons",
    members:
      "Guilherme Bastos, Jefferson Silva, Nicole Kiyan, Karina Pagnani, Rafaela Matzak, Sarah Pontes",
    image: "src/img/librali.jpeg",
    description:
      "Uma plataforma educacional dedicada a democratizar o ensino de LIBRAS, tornando o aprendizado acessível e completamente gratuito para todos. Oferecemos uma experiência completa tanto em versão web quanto mobile, projetada para atender diferentes perfis de aprendizes.",
    problem:
      "Falta de acesso a cursos de LIBRAS gratuitos e de qualidade, dificultando a inclusão social de pessoas surdas e a capacitação de ouvintes para comunicação inclusiva.",
    solution:
      "Desenvolvimento de uma plataforma completa com cursos para adultos e área kids gamificada, oferecendo ensino de LIBRAS de forma acessível, interativa e gratuita.",
    results:
      "Plataforma com metodologia prática e interativa para adultos e interface lúdica para crianças, promovendo o primeiro contato com LIBRAS de forma natural e divertida.",
    tags: ["LIBRAS", "Inclusão", "Educação", "Acessibilidade"],
  },
  {
    id: 2,
    title: "VisionCash",
    subtitle: "Autonomia financeira para deficientes visuais",
    members:
      "Cauã Ross, Yago Dias, Leonardo Freitas, Mateus Silva, Marcelo Oliveira, Vitor Vasconcelos",
    image: "src/img/banner Happ.png",
    description:
      "Tecnologia assistiva que reconhece e conta cédulas de forma inteligente, promovendo autonomia e inclusão para pessoas com deficiência visual.",
    problem:
      "Dificuldade de pessoas com deficiência visual em identificar e contar cédulas de dinheiro, limitando sua independência em transações financeiras.",
    solution:
      "Sistema que utiliza IoT e inteligência artificial para identificar valores de cédulas e registrar transações em um aplicativo acessível.",
    results:
      "Dispositivo funcional que garante segurança, praticidade e independência no manuseio do dinheiro para pessoas com deficiência visual.",
    tags: ["Acessibilidade", "Tecnologia Assistiva", "IoT", "Inclusão"],
  },
  {
    id: 3,
    title: "AURA",
    subtitle: "Aprendizagem com Uso de Realidade Aumentada",
    members:
      "Gabriel Espindola, Cristian Mariano, Josué Bademian, Lucas Zamboti, Vinicius Pinhas",
    image: "src/img/AURA.png",
    description:
      "Sistema híbrido de educação inclusiva que integra aplicativo móvel e dispositivo IoT. Personagens que ensinam, cartas que falam, tecnologia que inclui.",
    problem:
      "Falta de recursos educacionais inclusivos e interativos que atendam às necessidades de crianças com diferentes estilos de aprendizagem.",
    solution:
      "Integração de app com dispositivo IoT onde crianças escaneiam cartas físicas com personagens inclusivos para acessar minigames educativos.",
    results:
      "Sistema com 3 personagens inclusivos e 15 minigames educativos, proporcionando experiência interativa, acessível e inclusiva.",
    tags: ["Educação Inclusiva", "Realidade Aumentada", "IoT", "Gamificação"],
  },
  {
    id: 4,
    title: "PositiveSense",
    subtitle: "Tecnologia e inclusão para um ambiente escolar tranquilo",
    members:
      "Ana Luisa Alves, Heloisa Machado, Manuela Scarpari, Manuela Costa, Ryan Santos",
    image: "src/img/positive.png",
    description:
      "Sensor de ruído escolar com tecnologia IoT e site interativo sobre TEA com orientações, playlists e jogos calmantes.",
    problem:
      "Altos níveis de ruído em sala de aula que prejudicam o aprendizado, especialmente de alunos com TEA, e falta de recursos educativos sobre autismo.",
    solution:
      "Sensor IoT que monitora ruído e envia histórico via app, combinado com site educativo sobre TEA com jogos interativos e conteúdos calmantes.",
    results:
      "Sistema de monitoramento de ruído funcional e site educativo que promove maior compreensão sobre TEA e oferece recursos para relaxamento.",
    tags: ["TEA", "IoT", "Inclusão", "Educação"],
  },
  {
    id: 5,
    title: "English Adventure",
    subtitle: "Desbloqueie um novo idioma, conecte o jogo à aprendizagem",
    members:
      "Julya Teixeira, Sofia Santos, Sofia Ornellas, Thaynara Silva, Victor Rocha",
    image: "src/img/english.png",
    description:
      "Sistema gamificado para ensino infantil de inglês com tabuleiro IoT integrado, site com desafios e aplicativo de acompanhamento.",
    problem:
      "Dificuldade no ensino de inglês para crianças através de métodos tradicionais pouco engajadores e interativos.",
    solution:
      "Tabuleiro físico com IoT que propõe desafios, combinado com site e app que acompanham o progresso e auxiliam no aprendizado.",
    results:
      "Sistema completo que torna o aprendizado de inglês divertido e interativo para crianças através da gamificação e tecnologia.",
    tags: ["Inglês", "Gamificação", "Educação Infantil", "IoT"],
  },
];

// Scroll para controle da cortina
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const curtainContainer = document.getElementById("curtainContainer");
  const curtainLeft = document.getElementById("curtainLeft");
  const curtainRight = document.getElementById("curtainRight");
  const curtainTop = document.getElementById("curtainTop");
  const curtainText = document.getElementById("curtainText");
  const scrollIndicator = document.getElementById("scrollIndicator");

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
      curtainText.style.transform = `translate(-50%, -50%) scale(${
        1 - progress * 0.3
      })`;
    }

    // Esconde o indicador de scroll
    if (scrollIndicator) {
      scrollIndicator.style.opacity = `${Math.max(0, 1 - progress * 2)}`;
    }

    // Remove completamente quando totalmente aberta
    if (progress >= 0.98) {
      curtainOpened = true;
      setTimeout(() => {
        curtainContainer.style.display = "none";
        if (scrollIndicator) {
          scrollIndicator.style.display = "none";
        }
        // Força o scroll para o topo após a cortina desaparecer
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 500);
    }
  }
});

// Força scroll para o topo no carregamento
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Menu mobile
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    // Animação do botão
    if (navMenu.classList.contains("active")) {
      mobileMenuBtn.innerHTML = "✕";
    } else {
      mobileMenuBtn.innerHTML = "☰";
    }
  });
}

// Smooth scroll para navegação
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active de todos
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));

    // Adiciona active no clicado
    this.classList.add("active");

    // Fecha menu mobile se estiver aberto
    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      if (mobileMenuBtn) {
        mobileMenuBtn.innerHTML = "☰";
      }
    }

    // Scroll suave
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offset = 80; // Altura do navbar
      const targetPosition = targetSection.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Criar partículas de fundo
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  if (!particlesContainer) return;

  // Limpa partículas existentes
  particlesContainer.innerHTML = "";

  const particleCount = window.innerWidth < 768 ? 30 : 60;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 20 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    particle.style.opacity = Math.random() * 0.6 + 0.4;

    particlesContainer.appendChild(particle);
  }
}

// Criar partículas especiais (douradas)
function createSpecialParticles() {
  const particlesContainer = document.getElementById("particles");
  if (!particlesContainer) return;

  const specialCount = window.innerWidth < 768 ? 8 : 15;

  for (let i = 0; i < specialCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle special-particle";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 10 + "s";
    particle.style.animationDuration = Math.random() * 6 + 4 + "s";

    const size = Math.random() * 2 + 3;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.background = "#ffed4e";
    particle.style.boxShadow = "0 0 6px #ffd700, 0 0 12px #ffd700";

    particlesContainer.appendChild(particle);
  }
}

// Animações de scroll com Intersection Observer
function handleScrollAnimations() {
  const elementsToAnimate = [
    document.getElementById("introText"),
    document.getElementById("descriptionBox"),
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  elementsToAnimate.forEach((element) => {
    if (element) observer.observe(element);
  });
}

// Partículas seguindo o cursor (desktop apenas)
function createCursorTrail() {
  if (window.innerWidth < 768 || isTouchDevice()) return;

  document.addEventListener("mousemove", (e) => {
    if (Math.random() < 0.3) {
      createTrailParticle(e.clientX, e.clientY);
    }
  });

  function createTrailParticle(x, y) {
    const particle = document.createElement("div");
    particle.className = "trail-particle";
    particle.style.position = "fixed";
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particle.style.width = "2px";
    particle.style.height = "2px";
    particle.style.background = "#ffd700";
    particle.style.borderRadius = "50%";
    particle.style.pointerEvents = "none";
    particle.style.zIndex = "3";
    particle.style.opacity = "1";
    particle.style.transition = "all 1.5s ease-out";

    document.body.appendChild(particle);

    requestAnimationFrame(() => {
      particle.style.opacity = "0";
      particle.style.transform =
        "translate(" +
        (Math.random() - 0.5) * 100 +
        "px, " +
        (Math.random() - 0.5) * 100 +
        "px) scale(0)";
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
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

// Verifica preferência de movimento reduzido
function supportsReducedMotion() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// Gerencia movimento reduzido
function handleReducedMotion() {
  if (supportsReducedMotion()) {
    document.body.classList.add("reduced-motion");
    const style = document.createElement("style");
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
  const carouselElement = document.getElementById("imageCarousel");
  if (!carouselElement) return;

  try {
    new Splide("#imageCarousel", {
      type: "loop",
      perPage: 3,
      focus: "center",
      gap: "1.5rem",
      pagination: true,
      arrows: true,
      autoplay: true,
      interval: 5000,
      pauseOnHover: true,
      pauseOnFocus: true,
      speed: 800,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      breakpoints: {
        1024: {
          perPage: 2,
          gap: "1rem",
        },
        768: {
          perPage: 1,
          gap: "0.5rem",
        },
      },
    }).mount();
  } catch (error) {
    console.error("Erro ao inicializar carrossel:", error);
  }
}

// Navegação ativa baseada no scroll
function handleActiveNav() {
  const sections = document.querySelectorAll("section[id], main[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (sections.length === 0 || navLinks.length === 0) return;

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// Parallax suave no scroll
function handleParallax() {
  const logo = document.querySelector(".main-content .logo");
  const introText = document.querySelector(".intro-text");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    if (logo) {
      logo.style.transform = `translateY(${scrolled * 0.5}px)`;
    }

    if (introText) {
      introText.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });
}

// Função para criar a grade de projetos (Desktop)
function createProjectsGrid() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = "";

  projectsData.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.setAttribute("data-project-id", project.id);

    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" onerror="this.src='src/img/placeholder.jpeg'">
        <div class="project-overlay">
          <div class="project-number">${project.id}</div>
          <div class="project-title">${project.title}</div>
          <div class="project-subtitle">${project.subtitle}</div>
          <div class="project-view-text">Ver Projeto</div>
        </div>
      </div>
    `;

    projectCard.addEventListener("click", () => openProjectModal(project.id));
    projectsGrid.appendChild(projectCard);
  });
}

// Função para criar o carrossel de projetos (Mobile)
function createProjectsCarousel() {
  const carouselList = document.getElementById("projectsCarouselList");
  if (!carouselList) return;

  carouselList.innerHTML = "";

  projectsData.forEach((project) => {
    const slide = document.createElement("li");
    slide.className = "splide__slide";
    slide.setAttribute("data-project-id", project.id);

    slide.innerHTML = `
      <img src="${project.image}" alt="${project.title}" onerror="this.src='src/img/placeholder.jpeg'">
      <div class="slide-project-overlay">
        <div class="project-number">${project.id}</div>
        <div class="project-title">${project.title}</div>
        <div class="project-subtitle">${project.subtitle}</div>
        <div class="project-view-text">Toque para ver detalhes</div>
      </div>
    `;

    slide.addEventListener("click", () => openProjectModal(project.id));
    carouselList.appendChild(slide);
  });

  // Inicializar carrossel de projetos apenas se existir
  initProjectsCarousel();
}

// Inicializa o carrossel de projetos
function initProjectsCarousel() {
  const carouselElement = document.getElementById("projectsCarousel");
  if (!carouselElement) return;

  try {
    new Splide("#projectsCarousel", {
      type: "slide",
      perPage: 1,
      focus: "center",
      gap: "1rem",
      pagination: true,
      arrows: true,
      autoplay: false,
      speed: 600,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      breakpoints: {
        768: {
          perPage: 1,
          gap: "0.5rem",
        },
      },
    }).mount();
  } catch (error) {
    console.error("Erro ao inicializar carrossel de projetos:", error);
  }
}

// Função para abrir o modal do projeto
function openProjectModal(projectId) {
  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectModal");
  if (!modal) return;

  // Preencher dados do modal
  document.getElementById("modalProjectTitle").textContent = project.title;
  document.getElementById("modalProjectSubtitle").textContent =
    project.subtitle;
  document.getElementById("modalProjectMembers").textContent = project.members;
  document.getElementById("modalProjectImage").src = project.image;
  document.getElementById("modalProjectImage").alt = project.title;
  document.getElementById("modalProjectDescription").textContent =
    project.description;
  document.getElementById("modalProjectProblem").textContent = project.problem;
  document.getElementById("modalProjectSolution").textContent =
    project.solution;
  document.getElementById("modalProjectResults").textContent = project.results;

  // Preencher tags
  const tagsContainer = document.getElementById("modalProjectTags");
  tagsContainer.innerHTML = "";
  project.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.className = "tag";
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
  });

  // Mostrar modal
  setTimeout(() => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Previne scroll no body
  }, 10);

  // Event listeners para fechar modal
  const closeBtn = modal.querySelector(".close-modal");
  const backBtn = modal.querySelector(".modal-back-btn");

  const closeModal = () => {
    modal.classList.remove("active");
    setTimeout(() => {
      document.body.style.overflow = ""; // Restaura scroll
    }, 400);
  };

  closeBtn.addEventListener("click", closeModal);
  backBtn.addEventListener("click", closeModal);

  // Fechar modal ao clicar fora do conteúdo
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Fechar modal com tecla ESC
  const handleEscKey = (e) => {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", handleEscKey);
    }
  };

  document.addEventListener("keydown", handleEscKey);
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

  // Inicializa carrossel de homenagens
  if (typeof Splide !== "undefined") {
    initCarousel();
  } else {
    setTimeout(initCarousel, 500);
  }

  // Inicializar grade de projetos e carrossel
  createProjectsGrid();
  createProjectsCarousel();

  // Event listener para redimensionamento
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 250);
  });
}

// Previne comportamento estranho no carregamento
document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
  initializeApp();
});

// Fallback se DOMContentLoaded já disparou
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}

// Log de inicialização (pode remover em produção)
console.log(
  "%c✨ HappyEnd carregado com sucesso! ✨",
  "color: #FFD700; font-size: 16px; font-weight: bold;"
);
console.log(
  "%c🎭 Desenvolvido com amor para SESI SENAI Ferraz de Vasconcelos",
  "color: #FFA500; font-size: 12px;"
);
