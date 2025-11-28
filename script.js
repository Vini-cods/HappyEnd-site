// ===== CONFIGURAÇÕES E ESTADO =====
// Removido: let curtainOpened = false;

// ===== DADOS DOS PROJETOS =====
const projectsData = [
  {
    id: 1,
    title: "Conecta Libras",
    subtitle: "Comunicação em tempo real para deficientes auditivos",
    members: "Beatriz Torres, Júlia de Freitas, Abigail Guimarães, Priscila da Silva",
    image: "src/img/banners/ConectaLibras.png",
    description: "Aplicativo que reconhece fala e traduz para Libras através de avatar 3D, com suporte a texto e sensores IoT para ambientes.",
    problem: "Barreiras de comunicação para pessoas com deficiência auditiva em situações cotidianas e ambientes diversos.",
    solution: "Sistema integrado mobile, web e IoT com reconhecimento de voz, avatar 3D para Libras e transcrição em tempo real.",
    results: "Solução completa de acessibilidade comunicacional que promove inclusão social em diferentes contextos.",
    tags: ["Libras", "Acessibilidade", "IoT", "Comunicação"],
    website: "#"
  },
  {
    id: 2,
    title: "AURA",
    subtitle: "Aprendizagem com Uso de Realidade Aumentada",
    members: "Gabriel Espindola, Cristian Mariano, Josué Bademian, Lucas Zamboti, Vinicius Pinhas",
    image: "src/img/banners/AURA.png",
    description: "Sistema híbrido de educação inclusiva que integra aplicativo móvel e dispositivo IoT. Personagens que ensinam, cartas que falam, tecnologia que inclui.",
    problem: "Falta de recursos educacionais inclusivos e interativos que atendam às necessidades de crianças com diferentes estilos de aprendizagem.",
    solution: "Integração de app com dispositivo IoT onde crianças escaneiam cartas físicas com personagens inclusivos para acessar minigames educativos.",
    results: "Sistema com 3 personagens inclusivos e 15 minigames educativos, proporcionando experiência interativa, acessível e inclusiva.",
    tags: ["Educação Inclusiva", "Realidade Aumentada", "IoT", "Gamificação"],
    website: "#"
  },
  {
    id: 3,
    title: "Jellyfish",
    subtitle: "Lembretes inteligentes de medicamentos",
    members: "Guilherme Umberto, Kauã Nunes, Rian dos Santos, Guilherme Rocha",
    image: "src/img/banners/Jellyfish.png",
    description: "Dispositivo IoT que emite alertas sonoros e visuais nos horários de medicação, configurável via app web e mobile.",
    problem: "Dificuldade de crianças, especialmente neurodivergentes, em seguir rotinas de medicação sem dependência de smartphones.",
    solution: "Acessório IoT independente que se prende à garrafa e alerta visual/sonoramente nos horários programados.",
    results: "Solução prática que promove autonomia e saúde sem depender do uso de celulares em ambientes escolares.",
    tags: ["Saúde", "IoT", "Autonomia", "Neurodivergência"],
    website: "#"
  },
  {
    id: 4,
    title: "English Adventure",
    subtitle: "Desbloqueie um novo idioma, conecte o jogo à aprendizagem",
    members: "Julya Teixeira, Soffia Santos, Sofia Ornellas, Thaynara Silva, Victor Cavalcante",
    image: "src/img/banners/english.png",
    description: "Sistema gamificado para ensino infantil de inglês com tabuleiro IoT integrado, site com desafios e aplicativo de acompanhamento.",
    problem: "Dificuldade no ensino de inglês para crianças através de métodos tradicionais pouco engajadores e interativos.",
    solution: "Tabuleiro físico com IoT que propõe desafios, combinado com site e app que acompanham o progresso e auxiliam no aprendizado.",
    results: "Sistema completo que torna o aprendizado de inglês divertido e interativo para crianças através da gamificação e tecnologia.",
    tags: ["Inglês", "Gamificação", "Educação Infantil", "IoT"],
    website: "#"
  },
  {
    id: 5,
    title: "Librali",
    subtitle: "A vida além dos sons",
    members: "Guilherme Bastos, Jefferson Silva, Nicole Kiyan, Karina Pagnani, Rafaela Matzak, Sarah Pontes",
    image: "src/img/banners/librali.jpeg",
    description: "Uma plataforma educacional dedicada a democratizar o ensino de LIBRAS, tornando o aprendizado acessível e completamente gratuito para todos. Oferecemos uma experiência completa tanto em versão web quanto mobile, projetada para atender diferentes perfis de aprendizes.",
    problem: "Falta de acesso a cursos de LIBRAS gratuitos e de qualidade, dificultando a inclusão social de pessoas surdas e a capacitação de ouvintes para comunicação inclusiva.",
    solution: "Desenvolvimento de uma plataforma completa com cursos para adultos e área kids gamificada, oferecendo ensino de LIBRAS de forma acessível, interativa e gratuita.",
    results: "Plataforma com metodologia prática e interativa para adultos e interface lúdica para crianças, promovendo o primeiro contato com LIBRAS de forma natural e divertida.",
    tags: ["LIBRAS", "Inclusão", "Educação", "Acessibilidade"],
    website: "#"
  },
  {
    id: 6,
    title: "EducaBoard",
    subtitle: "Comunicação alternativa para crianças",
    members: "Júlia Magalhães, Pedro Couto, Robert da Costa, Matheus Gregorio, Maria Eduarda",
    image: "src/img/banners/EducaBoard.png",
    description: "Dispositivo IoT com botões físicos que reproduzem palavras em áudio para crianças com dificuldades de fala.",
    problem: "Dificuldade de comunicação verbal em crianças com necessidades especiais de expressão.",
    solution: "Sistema com botões físicos IoT que enviam comandos para app mobile reproduzir áudios correspondentes.",
    results: "Ferramenta de comunicação alternativa que promove autonomia e inclusão social para crianças não-verbais.",
    tags: ["Comunicação", "IoT", "Inclusão", "Educação Especial"],
    website: "#"
  },
  {
    id: 7,
    title: "VisionCash",
    subtitle: "Autonomia financeira para deficientes visuais",
    members: "Cauã Ross, Yago Dias, Leonardo Freitas, Mateus Silva, Marcelo Oliveira, Vitor Vasconcelos",
    image: "src/img/banners/vision.png",
    description: "Tecnologia assistiva que reconhece e conta cédulas de forma inteligente, promovendo autonomia e inclusão para pessoas com deficiência visual.",
    problem: "Dificuldade de pessoas com deficiência visual em identificar e contar cédulas de dinheiro, limitando sua independência em transações financeiras.",
    solution: "Sistema que utiliza IoT e inteligência artificial para identificar valores de cédulas e registrar transações em um aplicativo acessível.",
    results: "Dispositivo funcional que garante segurança, praticidade e independência no manuseio do dinheiro para pessoas com deficiência visual.",
    tags: ["Acessibilidade", "Tecnologia Assistiva", "IoT", "Inclusão"],
    website: "#"
  },
  {
    id: 8,
    title: "Modsy",
    subtitle: "Moda inteligente e acessível",
    members: "Giovanna Mendes, Brenda de Oliveira, Milena Maria, Evelyn Victoria, Igor Matos",
    image: "src/img/banners/Modsy.png",
    description: "Guarda-roupa virtual inteligente com IA para sugestões de combinações e sensores IoT para auxiliar pessoas com deficiência visual.",
    problem: "Dificuldade na organização de roupas e escolha de combinações, especialmente para pessoas com deficiência visual.",
    solution: "App mobile com IA para organização e sugestões de outfits, combinado com sensores IoT para identificação de peças físicas.",
    results: "Sistema que oferece praticidade, autonomia e acessibilidade no vestir-se no dia a dia.",
    tags: ["Moda", "IA", "Acessibilidade", "IoT"],
    website: "#"
  },
  {
    id: 9,
    title: "Artflow",
    subtitle: "Expressão criativa para todas as crianças",
    members: "Bruno Arthur, Matheus Lopes, Thalita Andrade, Vinícius Briches, Vitor Martins",
    image: "src/img/banners/Artflow.png",
    description: "Ambiente criativo e inclusivo para crianças neurotípicas e neurodivergentes desenharem, montarem colagens e inventarem histórias.",
    problem: "Falta de espaços criativos inclusivos que atendam às necessidades de crianças com diferentes habilidades e estilos de aprendizagem.",
    solution: "Combinação de app mobile, web e IoT com painel físico interativo que conecta desenho físico ao digital em tempo real.",
    results: "Espaço lúdico e inclusivo que promove expressão artística e convívio social através da integração entre físico e digital.",
    tags: ["Arte", "Inclusão", "Criatividade", "IoT"],
    website: "#"
  },
  {
    id: 10,
    title: "PositiveSense",
    subtitle: "Tecnologia e inclusão para um ambiente escolar tranquilo",
    members: "Ana Luisa Alves, Heloisa Machado, Manuela Scarpari, Manuela Costa, Ryan Santos",
    image: "src/img/banners/positive.png",
    description: "Sensor de ruído escolar com tecnologia IoT e site interativo sobre TEA com orientações, playlists e jogos calmantes.",
    problem: "Altos níveis de ruído em sala de aula que prejudicam o aprendizado, especialmente de alunos com TEA, e falta de recursos educativos sobre autismo.",
    solution: "Sensor IoT que monitora ruído e envia histórico via app, combinado com site educativo sobre TEA com jogos interativos e conteúdos calmantes.",
    results: "Sistema de monitoramento de ruído funcional e site educativo que promove maior compreensão sobre TEA e oferece recursos para relaxamento.",
    tags: ["TEA", "IoT", "Inclusão", "Educação"],
    website: "#"
  },
  {
    id: 11,
    title: "KidzUp",
    subtitle: "Aprendizado lúdico com interação física",
    members: "Clara Eloah, Amanda Sales, Matheus Ferreira, Erick Alipio, Antonio Roberto",
    image: "src/img/banners/KidzUp.png",
    description: "Sistema educacional com dispositivo físico tipo controle para respostas, integrado com app web e painel para pais.",
    problem: "Falta de engajamento em atividades educativas tradicionais e dificuldade de acompanhamento parental.",
    solution: "Dispositivo físico interativo com feedback imediato, conectado a plataforma web com acompanhamento em tempo real.",
    results: "Experiência de aprendizado divertida e envolvente com participação ativa dos pais no progresso das crianças.",
    tags: ["Educação", "Gamificação", "IoT", "Família"],
    website: "#"
  },
  {
    id: 12,
    title: "Refx",
    subtitle: "Refeitório inteligente e comunicativo",
    members: "Felipe Cavalcanti, Gabriel Santos, Murilo Miguel, John Sutkewicius, Emanuelly Cristini, Ana Clara",
    image: "src/img/banners/Refx.png",
    description: "Sistema de monitoramento e comunicação para refeitórios escolares com controle de ruído, cardápio digital e avisos.",
    problem: "Falta de organização e comunicação eficiente em refeitórios escolares, com desperdício de comida e ruído excessivo.",
    solution: "Dispositivos IoT para monitorar ruído, exibir cardápios e avisos, com app para gestão pela nutricionista.",
    results: "Ambiente mais organizado, consciente e acolhedor no refeitório escolar com comunicação eficiente.",
    tags: ["Educação", "IoT", "Sustentabilidade", "Comunicação"],
    website: "#"
  }
];

// ===== ANIMAÇÃO DA CORTINA (REMOVIDA) =====
// Função removida completamente

// ===== NAVEGAÇÃO =====
function initNavigation() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");

  // Menu mobile toggle
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      mobileMenuBtn.innerHTML = navMenu.classList.contains("active") ? "✕" : "☰";
    });
  }

  // Smooth scroll e active state
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Update active state
      document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      // Close mobile menu
      if (navMenu?.classList.contains("active")) {
        navMenu.classList.remove("active");
        if (mobileMenuBtn) mobileMenuBtn.innerHTML = "☰";
      }

      // Smooth scroll
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offset = 80;
        const targetPosition = targetSection.offsetTop - offset;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  });
}

// ===== NAVEGAÇÃO ATIVA POR SCROLL =====
function handleActiveNav() {
  const sections = document.querySelectorAll("section[id], main[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (sections.length === 0 || navLinks.length === 0) return;

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
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

// ===== CARROSSEL DE PROFESSORES =====
function initTeachersCarousel() {
  const carouselElement = document.getElementById("imageCarousel");
  if (!carouselElement) return;

  if (typeof Splide === 'undefined') {
    setTimeout(initTeachersCarousel, 200);
    return;
  }

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
      speed: 800,
      breakpoints: {
        1200: { perPage: 3, gap: "1.2rem" },
        1024: { perPage: 2, gap: "1rem" },
        768: { perPage: 1, gap: "0.8rem" },
        480: { perPage: 1, gap: "0.5rem" }
      },
    }).mount();
  } catch (error) {
    console.error("Erro ao inicializar carrossel de professores:", error);
  }
}

// ===== CARROSSEL DE DESENVOLVEDORES =====
function initDevsCarousel() {
  const devsCarouselElement = document.getElementById("devsCarousel");
  if (!devsCarouselElement) return;

  if (typeof Splide === 'undefined') {
    setTimeout(initDevsCarousel, 200);
    return;
  }

  try {
    new Splide("#devsCarousel", {
      type: "slide",
      perPage: 3,
      perMove: 1,
      gap: "1.5rem",
      pagination: true,
      arrows: true,
      autoplay: false,
      speed: 500,
      rewind: true,
      breakpoints: {
        1200: { perPage: 2, gap: "1rem" },
        768: { perPage: 1, gap: "0.5rem" },
      },
    }).mount();
  } catch (error) {
    console.error("Erro ao inicializar carrossel de devs:", error);
  }
}

// ===== GRADE DE PROJETOS (NÃO USADO - AGORA É CARROSSEL) =====
function createProjectsGrid() {
  // Função mantida para compatibilidade mas não utilizada
  // Projetos agora são exibidos apenas em carrossel
  return;
}

// ===== CARROSSEL DE PROJETOS =====
function createProjectsCarousel() {
  const carouselList = document.getElementById("projectsCarouselList");
  if (!carouselList) {
    console.error("❌ projectsCarouselList não encontrado!");
    return;
  }

  console.log("🚀 Criando carrossel de projetos...");
  carouselList.innerHTML = "";

  projectsData.forEach((project, index) => {
    console.log(`➕ Adicionando projeto ${index + 1}: ${project.title}`);
    
    const slide = document.createElement("li");
    slide.className = "splide__slide";

    slide.innerHTML = `
      <div class="project-card">
        <div class="project-image-container">
          <img src="${project.image}" 
               alt="${project.title}" 
               class="project-image"
               onerror="this.src='src/img/placeholder.jpeg'">
        </div>
        <div class="project-info">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-subtitle">${project.subtitle}</p>
          <p class="project-members">${project.members}</p>
          <div class="project-actions">
            <button class="project-details-btn" onclick="window.openProjectModal(${project.id})">Ver Detalhes</button>
          </div>
        </div>
      </div>
    `;

    carouselList.appendChild(slide);
  });

  console.log(`✅ ${projectsData.length} projetos adicionados!`);
  
  setTimeout(() => {
    initProjectsCarousel();
  }, 100);
}

// ===== INICIALIZAR CARROSSEL DE PROJETOS =====
function initProjectsCarousel() {
  const carouselElement = document.getElementById("projectsCarousel");
  
  if (!carouselElement) {
    console.error("❌ Elemento projectsCarousel não encontrado!");
    return;
  }

  console.log("✅ Elemento projectsCarousel encontrado");

  if (typeof Splide === 'undefined') {
    console.warn("⏳ Splide ainda não carregado, tentando novamente...");
    setTimeout(initProjectsCarousel, 200);
    return;
  }

  console.log("✅ Biblioteca Splide carregada");

  try {
    const splide = new Splide("#projectsCarousel", {
      type: "loop",
      perPage: 1,
      perMove: 1,
      focus: "center",
      gap: "2rem",
      padding: "5%",
      pagination: true,
      arrows: true,
      autoplay: false,
      speed: 800,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      breakpoints: {
        768: {
          padding: "2%",
          gap: "1rem",
        }
      },
    });
    
    splide.mount();
    console.log("✅ Carrossel de projetos montado com sucesso!");
    
  } catch (error) {
    console.error("❌ Erro ao inicializar carrossel de projetos:", error);
  }
}

// ===== MODAL DO PROJETO =====
function openProjectModal(projectId) {
  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectModal");
  if (!modal) return;

  // Preencher dados
  document.getElementById("modalProjectTitle").textContent = project.title;
  document.getElementById("modalProjectSubtitle").textContent = project.subtitle;
  document.getElementById("modalProjectMembers").textContent = project.members;
  document.getElementById("modalProjectImage").src = project.image;
  document.getElementById("modalProjectImage").alt = project.title;
  document.getElementById("modalProjectDescription").textContent = project.description;
  document.getElementById("modalProjectProblem").textContent = project.problem;
  document.getElementById("modalProjectSolution").textContent = project.solution;
  document.getElementById("modalProjectResults").textContent = project.results;

  // Preencher tags
  const tagsContainer = document.getElementById("modalProjectTags");
  tagsContainer.innerHTML = "";
  project.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
  });

  // Mostrar modal
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
  document.body.style.overflow = "hidden";

  // Função para fechar
  const closeModal = () => {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }, 300);
  };

  // Event listeners
  modal.querySelector(".close-modal").onclick = closeModal;
  modal.querySelector(".modal-back-btn").onclick = closeModal;
  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  // ESC para fechar
  const handleEsc = (e) => {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", handleEsc);
    }
  };
  document.addEventListener("keydown", handleEsc);
}

// Tornar função global para uso inline no HTML
window.openProjectModal = openProjectModal;

// ===== INICIALIZAÇÃO PRINCIPAL =====
function initializeApp() {
  console.log("🎬 Iniciando aplicação HappyEnd...");
  
  // Navegação
  initNavigation();
  handleActiveNav();

  // REMOVIDO: handleCurtainAnimation();

  // IMPORTANTE: Criar projetos ANTES de inicializar outros carrosséis
  console.log("📂 Carregando projetos...");
  createProjectsCarousel();

  // Carrosséis secundários
  setTimeout(() => {
    console.log("👨‍🏫 Carregando professores e desenvolvedores...");
    initTeachersCarousel();
    initDevsCarousel();
  }, 500);

  console.log("%c✨ HappyEnd inicializado com sucesso! ✨", "color: #FFD700; font-size: 16px; font-weight: bold;");
}

// ===== INICIALIZAÇÃO =====
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}