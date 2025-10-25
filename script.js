// Estado da cortina
let curtainOpened = false;

// Dados dos projetos TCC
const projectsData = [
  {
    id: 1,
    title: "EcoSoluções",
    subtitle: "Sustentabilidade na Prática",
    members: "Ana, Bruno, Carlos, Daniela",
    image: "src/img/projeto1.jpg",
    description:
      "Projeto focado em desenvolver soluções sustentáveis para problemas ambientais locais, com foco na reciclagem e reutilização de materiais.",
    problem:
      "A crescente geração de resíduos sólidos e a falta de conscientização sobre práticas sustentáveis na comunidade escolar e local.",
    solution:
      "Desenvolvimento de um sistema de compostagem e horta vertical utilizando materiais reciclados, além de campanhas educativas sobre sustentabilidade.",
    results:
      "Redução de 40% no lixo orgânico da escola, criação de 3 hortas verticais e aumento de 60% na conscientização ambiental dos alunos.",
    tags: ["Sustentabilidade", "Reciclagem", "Educação Ambiental"],
  },
  {
    id: 2,
    title: "TechInclusão",
    subtitle: "Tecnologia para Todos",
    members: "Eduardo, Fernanda, Gabriel, Helena",
    image: "src/img/projeto2.jpg",
    description:
      "Desenvolvimento de aplicativo para facilitar o acesso de pessoas com deficiência visual a conteúdos digitais.",
    problem:
      "Dificuldade de acesso a conteúdos digitais por pessoas com deficiência visual devido à falta de ferramentas adequadas.",
    solution:
      "Criação de um aplicativo com interface adaptada e recursos de áudio descrição para tornar conteúdos digitais mais acessíveis.",
    results:
      "Protótipo funcional testado com usuários reais, feedback positivo sobre usabilidade e planos para expansão das funcionalidades.",
    tags: ["Acessibilidade", "Tecnologia", "Inclusão Digital"],
  },
  {
    id: 3,
    title: "Alimentação Saudável",
    subtitle: "Da Horta à Mesa",
    members: "Isabela, João, Karina, Lucas",
    image: "src/img/projeto3.jpg",
    description:
      "Projeto de horta comunitária e educação nutricional para promover alimentação saudável na escola.",
    problem:
      "Baixo consumo de alimentos saudáveis entre os estudantes e desperdício de alimentos na merenda escolar.",
    solution:
      "Implementação de horta comunitária na escola e desenvolvimento de oficinas de educação nutricional e culinária saudável.",
    results:
      "Aumento de 35% no consumo de verduras e legumes, redução de 25% no desperdício de alimentos e criação de grupo de culinária saudável.",
    tags: ["Alimentação", "Saúde", "Educação Nutricional"],
  },
  {
    id: 4,
    title: "Energia Limpa",
    subtitle: "Fontes Renováveis na Escola",
    members: "Mariana, Nathan, Olivia, Pedro",
    image: "src/img/projeto4.jpg",
    description:
      "Implementação de sistema de energia solar para reduzir custos e promover consciência energética.",
    problem:
      "Alto consumo de energia elétrica na escola e falta de conscientização sobre fontes renováveis.",
    solution:
      "Instalação de painéis solares e desenvolvimento de material educativo sobre energia renovável.",
    results:
      "Redução de 30% na conta de energia e aumento de 70% no conhecimento sobre energias renováveis.",
    tags: ["Energia Solar", "Sustentabilidade", "Educação"],
  },
  {
    id: 5,
    title: "Biblioteca Digital",
    subtitle: "Conhecimento ao Alcance de Todos",
    members: "Quintino, Rafaela, Samuel, Tatiane",
    image: "src/img/projeto5.jpg",
    description:
      "Plataforma digital para compartilhamento de livros e materiais didáticos entre alunos.",
    problem:
      "Dificuldade de acesso a livros e materiais didáticos atualizados.",
    solution:
      "Desenvolvimento de aplicativo para empréstimo digital de livros e compartilhamento de materiais.",
    results:
      "Mais de 200 livros disponíveis digitalmente e 85% de satisfação dos usuários.",
    tags: ["Tecnologia", "Educação", "Biblioteca Digital"],
  },
  {
    id: 6,
    title: "Robótica Educacional",
    subtitle: "Tecnologia e Criatividade",
    members: "Ulisses, Vanessa, William, Xavier",
    image: "src/img/projeto6.jpg",
    description:
      "Desenvolvimento de kits de robótica acessíveis para ensino de programação e eletrônica.",
    problem:
      "Falta de recursos para ensino de robótica e programação nas escolas públicas.",
    solution:
      "Criação de kits de robótica de baixo custo utilizando materiais reciclados e componentes acessíveis.",
    results:
      "10 kits produzidos, 8 oficinas realizadas e interesse de outras escolas no projeto.",
    tags: ["Robótica", "Educação", "Tecnologia"],
  },
  {
    id: 7,
    title: "Saúde Mental",
    subtitle: "Cuidando das Emoções",
    members: "Yasmin, Zeca, Alice, Bernardo",
    image: "src/img/projeto7.jpg",
    description:
      "Projeto de conscientização e apoio à saúde mental dos estudantes.",
    problem:
      "Falta de espaços para discussão sobre saúde mental e emocional na escola.",
    solution:
      "Criação de grupo de apoio e desenvolvimento de materiais informativos sobre saúde mental.",
    results:
      "60% dos alunos participaram das atividades e relataram melhora no bem-estar emocional.",
    tags: ["Saúde Mental", "Bem-estar", "Educação"],
  },
  {
    id: 8,
    title: "Arte Urbana",
    subtitle: "Expressão e Transformação",
    members: "Carla, Diego, Elisa, Felipe",
    image: "src/img/projeto8.jpg",
    description:
      "Intervenções artísticas para revitalização de espaços públicos da escola.",
    problem:
      "Espaços escolares despersonalizados e falta de identidade visual.",
    solution:
      "Desenvolvimento de projeto de arte urbana com participação dos alunos.",
    results:
      "3 murais criados, aumento de 80% na identificação dos alunos com o espaço escolar.",
    tags: ["Arte", "Cultura", "Expressão"],
  },
  {
    id: 9,
    title: "Esporte Inclusivo",
    subtitle: "Todos Jogam",
    members: "Giovana, Henrique, Isabel, Julio",
    image: "src/img/projeto9.jpg",
    description:
      "Adaptação de práticas esportivas para inclusão de alunos com diferentes habilidades.",
    problem:
      "Falta de atividades esportivas adaptadas para alunos com diferentes capacidades físicas.",
    solution:
      "Desenvolvimento de metodologias e equipamentos para esportes inclusivos.",
    results:
      "Participação de 95% dos alunos nas atividades e criação de torneios inclusivos.",
    tags: ["Esporte", "Inclusão", "Saúde"],
  },
  {
    id: 10,
    title: "Jornal Estudantil",
    subtitle: "Vozes da Escola",
    members: "Larissa, Miguel, Nina, Otávio",
    image: "src/img/projeto10.jpg",
    description:
      "Criação de veículo de comunicação para dar voz aos estudantes.",
    problem:
      "Falta de canal de comunicação oficial dos estudantes e pouca divulgação de eventos.",
    solution:
      "Desenvolvimento de jornal impresso e digital com conteúdo produzido pelos alunos.",
    results:
      "6 edições publicadas, alcance de 90% dos alunos e reconhecimento da direção.",
    tags: ["Comunicação", "Jornalismo", "Educação"],
  },
  {
    id: 11,
    title: "Hidroponia Caseira",
    subtitle: "Cultivo sem Terra",
    members: "Patrícia, Ricardo, Sofia, Thiago",
    image: "src/img/projeto11.jpg",
    description:
      "Sistema de cultivo hidropônico para produção de alimentos em pequenos espaços.",
    problem:
      "Falta de espaço para hortas tradicionais e interesse em técnicas modernas de cultivo.",
    solution:
      "Desenvolvimento de sistema hidropônico vertical utilizando materiais reciclados.",
    results:
      "Produção de 15kg de hortaliças por mês e redução de 50% no uso de água.",
    tags: ["Hidroponia", "Agricultura", "Sustentabilidade"],
  },
];

// Scroll para controle da cortina - CORREÇÃO PARA POSICIONAMENTO INICIAL
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
        // CORREÇÃO: Força o scroll para o topo após a cortina desaparecer
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
    document.getElementById("logoTitle"),
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

// Função para criar a grade de projetos - ATUALIZADA
function createProjectsGrid() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = "";

  projectsData.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.setAttribute("data-project-id", project.id);

    // HTML ATUALIZADO: Removido o conteúdo abaixo da imagem
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" onerror="this.src='src/img/placeholder.jpeg'">
        <div class="project-overlay">
          <div class="project-number">${project.id}</div>
          <div class="project-view-text">Ver Projeto</div>
        </div>
      </div>
    `;

    projectCard.addEventListener("click", () => openProjectModal(project.id));
    projectsGrid.appendChild(projectCard);
  });
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

  // Inicializa carrossel
  if (typeof Splide !== "undefined") {
    initCarousel();
  } else {
    // Tenta novamente após um delay se Splide não estiver carregado
    setTimeout(initCarousel, 500);
  }

  // Inicializar grade de projetos
  createProjectsGrid();

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
