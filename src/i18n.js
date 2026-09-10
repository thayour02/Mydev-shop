import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navbar
      nav: {
        home: "Home",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        resume: "Resume"
      },
      // Hero Section
      hero: {
        greeting: "Hello 👋, I'm",
        name: "Temitayo Emmanuel",
        title: "Software Engineer + AI Native",
        description: "Building exceptional web applications with React, Node.js, and MongoDB. Transforming ideas into elegant, scalable solutions.",
        viewWork: "View My Work",
        getInTouch: "Get In Touch",
        available: "Available for opportunities",
        scrollToExplore: "Scroll to explore"
      },
      // Skills Section
      skills: {
        title: "Skills & Technologies",
        subtitle: "Technologies I work with to build modern web applications",
        stats: {
          experience: "Years Experience",
          projects: "Projects Completed",
          technologies: "Technologies",
          clients: "Happy Clients"
        }
      },
      // Projects Section
      projects: {
        title: "Featured Projects",
        subtitle: "Showcasing my recent work in web development",
        viewMore: "View More on GitHub",
        liveDemo: "Live Demo",
        sourceCode: "Source Code",
        items: {
          jobFinder: {
            title: "Job Finder Platform",
            description: "A comprehensive job search platform built with the MERN stack. Features include job listings, advanced search filters, and user authentication."
          },
          restaurant: {
            title: "Restaurant eCommerce",
            description: "Full-featured restaurant ordering system with real-time order tracking, payment integration, and admin dashboard."
          },
          weatherApp: {
            title: "Weather Application",
            description: "Real-time weather app with location-based forecasts, interactive maps, and detailed weather metrics."
          },
          resumeBuilder: {
            title: "Resume Builder",
            description: "Professional resume builder with multiple templates, real-time preview, and PDF export functionality."
          }
        }
      },
      // Contact Section
      contact: {
        title: "Let's Work Together",
        subtitle: "Have a project in mind? Let's discuss how I can help bring your ideas to life",
        form: {
          name: "Your Name",
          namePlaceholder: "John Doe",
          email: "Your Email",
          emailPlaceholder: "john@example.com",
          message: "Message",
          messagePlaceholder: "Tell me about your project...",
          send: "Send Message"
        },
        getInTouch: "Get in Touch",
        description: "Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.",
        responseTime: "Response Time",
        responseMessage: "Usually responds within 24 hours"
      },
      // Footer
      footer: {
        description: "Full Stack Developer passionate about creating exceptional web experiences with modern technologies.",
        quickLinks: "Quick Links",
        connect: "Connect",
        rights: "All rights reserved.",
        builtWith: "Built with",
        using:"using"
      }
    }
  },
  fr: {
    translation: {
      // Navbar
      nav: {
        home: "Accueil",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
        resume: "CV"
      },
      // Hero Section
      hero: {
        greeting: "Bonjour 👋, je suis",
        name: "Temitayo Emmanuel",
        title: "Ingénieur Logiciel + IA Native",
        description: "Création d'applications web exceptionnelles avec React, Node.js et MongoDB. Transformer les idées en solutions élégantes et évolutives.",
        viewWork: "Voir Mon Travail",
        getInTouch: "Contactez-Moi",
        available: "Disponible pour des opportunités",
        scrollToExplore: "Faites défiler pour explorer"
      },
      // Skills Section
      skills: {
        title: "Compétences & Technologies",
        subtitle: "Technologies avec lesquelles je travaille pour créer des applications web modernes",
        stats: {
          experience: "Années d'Expérience",
          projects: "Projets Complétés",
          technologies: "Technologies",
          clients: "Clients Satisfaits"
        }
      },
      // Projects Section
      projects: {
        title: "Projets en Vedette",
        subtitle: "Présentation de mes travaux récents en développement web",
        viewMore: "Voir Plus sur GitHub",
        liveDemo: "Démo en Direct",
        sourceCode: "Code Source",
        items: {
          jobFinder: {
            title: "Plateforme de Recherche d'Emploi",
            description: "Une plateforme complète de recherche d'emploi construite avec la pile MERN. Les fonctionnalités incluent des listes d'emplois, des filtres de recherche avancés et l'authentification des utilisateurs."
          },
          restaurant: {
            title: "Commerce Électronique de Restaurant",
            description: "Système de commande de restaurant complet avec suivi des commandes en temps réel, intégration de paiement et tableau de bord administrateur."
          },
          weatherApp: {
            title: "Application Météo",
            description: "Application météo en temps réel avec prévisions basées sur la localisation, cartes interactives et métriques météorologiques détaillées."
          },
          resumeBuilder: {
            title: "Créateur de CV",
            description: "Créateur de CV professionnel avec plusieurs modèles, aperçu en temps réel et fonctionnalité d'exportation PDF."
          }
        }
      },
      // Contact Section
      contact: {
        title: "Travaillons Ensemble",
        subtitle: "Vous avez un projet en tête? Discutons de la façon dont je peux vous aider à concrétiser vos idées",
        form: {
          name: "Votre Nom",
          namePlaceholder: "Jean Dupont",
          email: "Votre Email",
          emailPlaceholder: "jean@exemple.com",
          message: "Message",
          messagePlaceholder: "Parlez-moi de votre projet...",
          send: "Envoyer le Message"
        },
        getInTouch: "Contactez-Moi",
        description: "N'hésitez pas à me contacter via l'un de ces canaux. Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités.",
        responseTime: "Temps de Réponse",
        responseMessage: "Répond généralement dans les 24 heures"
      },
      // Footer
      footer: {
        description: "Développeur Full Stack passionné par la création d'expériences web exceptionnelles avec des technologies modernes.",
        quickLinks: "Liens Rapides",
        connect: "Connexion",
        rights: "Tous droits réservés.",
        builtWith: "Construit avec"
      }
    }
  },
  es: {
    translation: {
      // Navbar
      nav: {
        home: "Inicio",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        resume: "Currículum"
      },
      // Hero Section
      hero: {
        greeting: "Hola 👋, soy",
        name: "Temitayo Emmanuel",
        title: "Ingeniero de Software + IA Nativo",
        description: "Construyendo aplicaciones web excepcionales con React, Node.js y MongoDB. Transformando ideas en soluciones elegantes y escalables.",
        viewWork: "Ver Mi Trabajo",
        getInTouch: "Ponte en Contacto",
        available: "Disponible para oportunidades",
        scrollToExplore: "Desplázate para explorar"
      },
      // Skills Section
      skills: {
        title: "Habilidades y Tecnologías",
        subtitle: "Tecnologías con las que trabajo para crear aplicaciones web modernas",
        stats: {
          experience: "Años de Experiencia",
          projects: "Proyectos Completados",
          technologies: "Tecnologías",
          clients: "Clientes Satisfechos"
        }
      },
      // Projects Section
      projects: {
        title: "Proyectos Destacados",
        subtitle: "Mostrando mi trabajo reciente en desarrollo web",
        viewMore: "Ver Más en GitHub",
        liveDemo: "Demo en Vivo",
        sourceCode: "Código Fuente",
        items: {
          jobFinder: {
            title: "Plataforma de Búsqueda de Empleo",
            description: "Una plataforma completa de búsqueda de empleo construida con la pila MERN. Las características incluyen listados de trabajos, filtros de búsqueda avanzados y autenticación de usuarios."
          },
          restaurant: {
            title: "Comercio Electrónico de Restaurante",
            description: "Sistema completo de pedidos de restaurante con seguimiento de pedidos en tiempo real, integración de pagos y panel de administración."
          },
          weatherApp: {
            title: "Aplicación del Clima",
            description: "Aplicación de clima en tiempo real con pronósticos basados en ubicación, mapas interactivos y métricas meteorológicas detalladas."
          },
          resumeBuilder: {
            title: "Creador de Currículum",
            description: "Creador de currículum profesional con múltiples plantillas, vista previa en tiempo real y funcionalidad de exportación a PDF."
          }
        }
      },
      // Contact Section
      contact: {
        title: "Trabajemos Juntos",
        subtitle: "¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a dar vida a tus ideas",
        form: {
          name: "Tu Nombre",
          namePlaceholder: "Juan Pérez",
          email: "Tu Email",
          emailPlaceholder: "juan@ejemplo.com",
          message: "Mensaje",
          messagePlaceholder: "Cuéntame sobre tu proyecto...",
          send: "Enviar Mensaje"
        },
        getInTouch: "Ponte en Contacto",
        description: "No dudes en contactarme a través de cualquiera de estos canales. Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades.",
        responseTime: "Tiempo de Respuesta",
        responseMessage: "Generalmente responde en 24 horas"
      },
      // Footer
      footer: {
        description: "Desarrollador Full Stack apasionado por crear experiencias web excepcionales con tecnologías modernas.",
        quickLinks: "Enlaces Rápidos",
        connect: "Conectar",
        rights: "Todos los derechos reservados.",
        builtWith: "Construido con"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
