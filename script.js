// Estado da cortina
let curtainOpened = false;

// Dados dos projetos TCC ATUALIZADOS (12 projetos) - EMBARALHADOS
const projectsData = [
  {
    id: 1,
    title: "Conecta Libras",
    subtitle: "Comunicação em tempo real para deficientes auditivos",
    members: "Beatriz Torres, Júlia de Freitas, Abigail Guimarães, Priscila da Silva",
    image: "src/img/ConectaLibras.png",
    description: "Aplicativo que reconhece fala e traduz para Libras através de avatar 3D, com suporte a texto e sensores IoT para ambientes.",
    problem: "Barreiras de comunicação para pessoas com deficiência auditiva em situações cotidianas e ambientes diversos.",
    solution: "Sistema integrado mobile, web e IoT com reconhecimento de voz, avatar 3D para Libras e transcrição em tempo real.",
    results: "Solução completa de acessibilidade comunicacional que promove inclusão social em diferentes contextos.",
    tags: ["Libras", "Acessibilidade", "IoT", "Comunicação"],
  },
  {
    id: 2,
    title: "AURA",
    subtitle: "Aprendizagem com Uso de Realidade Aumentada",
    members: "Gabriel Espindola, Cristian Mariano, Josué Bademian, Lucas Zamboti, Vinicius Pinhas",
    image: "src/img/AURA.png",
    description: "Sistema híbrido de educação inclusiva que integra aplicativo móvel e dispositivo IoT. Personagens que ensinam, cartas que falam, tecnologia que inclui.",
    problem: "Falta de recursos educacionais inclusivos e interativos que atendam às necessidades de crianças com diferentes estilos de aprendizagem.",
    solution: "Integração de app com dispositivo IoT onde crianças escaneiam cartas físicas com personagens inclusivos para acessar minigames educativos.",
    results: "Sistema com 3 personagens inclusivos e 15 minigames educativos, proporcionando experiência interativa, acessível e inclusiva.",
    tags: ["Educação Inclusiva", "Realidade Aumentada", "IoT", "Gamificação"],
  },
  {
    id: 3,
    title: "Jellyfish",
    subtitle: "Lembretes inteligentes de medicamentos",
    members: "Guilherme Umberto, Kauã Nunes, Rian dos Santos, Guilherme Rocha",
    image: "src/img/Jellyfish.png",
    description: "Dispositivo IoT que emite alertas sonoros e visuais nos horários de medicação, configurável via app web e mobile.",
    problem: "Dificuldade de crianças, especialmente neurodivergentes, em seguir rotinas de medicação sem dependência de smartphones.",
    solution: "Acessório IoT independente que se prende à garrafa e alerta visual/sonoramente nos horários programados.",
    results: "Solução prática que promove autonomia e saúde sem depender do uso de celulares em ambientes escolares.",
    tags: ["Saúde", "IoT", "Autonomia", "Neurodivergência"],
  },
  {
    id: 4,
    title: "English Adventure",
    subtitle: "Desbloqueie um novo idioma, conecte o jogo à aprendizagem",
    members: "Julya Teixeira, Sofia Santos, Sofia Ornellas, Thaynara Silva, Victor Rocha",
    image: "src/img/english.png",
    description: "Sistema gamificado para ensino infantil de inglês com tabuleiro IoT integrado, site com desafios e aplicativo de acompanhamento.",
    problem: "Dificuldade no ensino de inglês para crianças através de métodos tradicionais pouco engajadores e interativos.",
    solution: "Tabuleiro físico com IoT que propõe desafios, combinado com site e app que acompanham o progresso e auxiliam no aprendizado.",
    results: "Sistema completo que torna o aprendizado de inglês divertido e interativo para crianças através da gamificação e tecnologia.",
    tags: ["Inglês", "Gamificação", "Educação Infantil", "IoT"],
  },
  {
    id: 5,
    title: "Librali",
    subtitle: "A vida além dos sons",
    members: "Guilherme Bastos, Jefferson Silva, Nicole Kiyan, Karina Pagnani, Rafaela Matzak, Sarah Pontes",
    image: "src/img/librali.jpeg",
    description: "Uma plataforma educacional dedicada a democratizar o ensino de LIBRAS, tornando o aprendizado acessível e completamente gratuito para todos. Oferecemos uma experiência completa tanto em versão web quanto mobile, projetada para atender diferentes perfis de aprendizes.",
    problem: "Falta de acesso a cursos de LIBRAS gratuitos e de qualidade, dificultando a inclusão social de pessoas surdas e a capacitação de ouvintes para comunicação inclusiva.",
    solution: "Desenvolvimento de uma plataforma completa com cursos para adultos e área kids gamificada, oferecendo ensino de LIBRAS de forma acessível, interativa e gratuita.",
    results: "Plataforma com metodologia prática e interativa para adultos e interface lúdica para crianças, promovendo o primeiro contato com LIBRAS de forma natural e divertida.",
    tags: ["LIBRAS", "Inclusão", "Educação", "Acessibilidade"],
  },
  {
    id: 6,
    title: "EducaBoard",
    subtitle: "Comunicação alternativa para crianças",
    members: "Júlia Magalhães, Pedro Couto, Robert da Costa, Matheus Gregorio, Maria Eduarda",
    image: "src/img/EducaBoard.png",
    description: "Dispositivo IoT com botões físicos que reproduzem palavras em áudio para crianças com dificuldades de fala.",
    problem: "Dificuldade de comunicação verbal em crianças com necessidades especiais de expressão.",
    solution: "Sistema com botões físicos IoT que enviam comandos para app mobile reproduzir áudios correspondentes.",
    results: "Ferramenta de comunicação alternativa que promove autonomia e inclusão social para crianças não-verbais.",
    tags: ["Comunicação", "IoT", "Inclusão", "Educação Especial"],
  },
  {
    id: 7,
    title: "VisionCash",
    subtitle: "Autonomia financeira para deficientes visuais",
    members: "Cauã Ross, Yago Dias, Leonardo Freitas, Mateus Silva, Marcelo Oliveira, Vitor Vasconcelos",
    image: "src/img/banner Happ.png",
    description: "Tecnologia assistiva que reconhece e conta cédulas de forma inteligente, promovendo autonomia e inclusão para pessoas com deficiência visual.",
    problem: "Dificuldade de pessoas com deficiência visual em identificar e contar cédulas de dinheiro, limitando sua independência em transações financeiras.",
    solution: "Sistema que utiliza IoT e inteligência artificial para identificar valores de cédulas e registrar transações em um aplicativo acessível.",
    results: "Dispositivo funcional que garante segurança, praticidade e independência no manuseio do dinheiro para pessoas com deficiência visual.",
    tags: ["Acessibilidade", "Tecnologia Assistiva", "IoT", "Inclusão"],
  },
  {
    id: 8,
    title: "Modsy",
    subtitle: "Moda inteligente e acessível",
    members: "Giovanna Mendes, Brenda de Oliveira, Milena Maria, Evelyn Victoria, Igor Matos",
    image: "src/img/Modsy.png",
    description: "Guarda-roupa virtual inteligente com IA para sugestões de combinações e sensores IoT para auxiliar pessoas com deficiência visual.",
    problem: "Dificuldade na organização de roupas e escolha de combinações, especialmente para pessoas com deficiência visual.",
    solution: "App mobile com IA para organização e sugestões de outfits, combinado com sensores IoT para identificação de peças físicas.",
    results: "Sistema que oferece praticidade, autonomia e acessibilidade no vestir-se no dia a dia.",
    tags: ["Moda", "IA", "Acessibilidade", "IoT"],
  },
  {
    id: 9,
    title: "Artflow",
    subtitle: "Expressão criativa para todas as crianças",
    members: "Bruno Arthur, Matheus Lopes, Thalita Andrade, Vinícius Briches, Vitor Martins",
    image: "src/img/Artflow.png",
    description: "Ambiente criativo e inclusivo para crianças neurotípicas e neurodivergentes desenharem, montarem colagens e inventarem histórias.",
    problem: "Falta de espaços criativos inclusivos que atendam às necessidades de crianças com diferentes habilidades e estilos de aprendizagem.",
    solution: "Combinação de app mobile, web e IoT com painel físico interativo que conecta desenho físico ao digital em tempo real.",
    results: "Espaço lúdico e inclusivo que promove expressão artística e convívio social através da integração entre físico e digital.",
    tags: ["Arte", "Inclusão", "Criatividade", "IoT"],
  },
  {
    id: 10,
    title: "PositiveSense",
    subtitle: "Tecnologia e inclusão para um ambiente escolar tranquilo",
    members: "Ana Luisa Alves, Heloisa Machado, Manuela Scarpari, Manuela Costa, Ryan Santos",
    image: "src/img/positive.png",
    description: "Sensor de ruído escolar com tecnologia IoT e site interativo sobre TEA com orientações, playlists e jogos calmantes.",
    problem: "Altos níveis de ruído em sala de aula que prejudicam o aprendizado, especialmente de alunos com TEA, e falta de recursos educativos sobre autismo.",
    solution: "Sensor IoT que monitora ruído e envia histórico via app, combinado com site educativo sobre TEA com jogos interativos e conteúdos calmantes.",
    results: "Sistema de monitoramento de ruído funcional e site educativo que promove maior compreensão sobre TEA e oferece recursos para relaxamento.",
    tags: ["TEA", "IoT", "Inclusão", "Educação"],
  },
  {
    id: 11,
    title: "KidzUp",
    subtitle: "Aprendizado lúdico com interação física",
    members: "Clara Eloah, Amanda Sales, Matheus Ferreira, Erick Alipio, Antonio Roberto",
    image: "src/img/KidzUp.png",
    description: "Sistema educacional com dispositivo físico tipo controle para respostas, integrado com app web e painel para pais.",
    problem: "Falta de engajamento em atividades educativas tradicionais e dificuldade de acompanhamento parental.",
    solution: "Dispositivo físico interativo com feedback imediato, conectado a plataforma web com acompanhamento em tempo real.",
    results: "Experiência de aprendizado divertida e envolvente com participação ativa dos pais no progresso das crianças.",
    tags: ["Educação", "Gamificação", "IoT", "Família"],
  },
  {
    id: 12,
    title: "Refx",
    subtitle: "Refeitório inteligente e comunicativo",
    members: "Felipe Cavalcanti, Gabriel Santos, Murilo Miguel, John Sutkewicius, Emanuelly Cristini, Ana Clara",
    image: "src/img/Refx.png",
    description: "Sistema de monitoramento e comunicação para refeitórios escolares com controle de ruído, cardápio digital e avisos.",
    problem: "Falta de organização e comunicação eficiente em refeitórios escolares, com desperdício de comida e ruído excessivo.",
    solution: "Dispositivos IoT para monitorar ruído, exibir cardápios e avisos, com app para gestão pela nutricionista.",
    results: "Ambiente mais organizado, consciente e acolhedor no refeitório escolar com comunicação eficiente.",
    tags: ["Educação", "IoT", "Sustentabilidade", "Comunicação"],
  }
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
      curtainText.style.transform = `translate(-50%, -50%) scale(${1 - progress * 0.3
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