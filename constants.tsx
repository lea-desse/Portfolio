import { Project, Skill, Experience } from './types';

export const CV_DATA = {
  name: "Léa Desse",
  email: "lea.desse@hotmail.fr",
  location: "Mougins, France",
  socials: {
    linkedin: "https://linkedin.com/in/leadesse"
  }
};

export const TRANSLATIONS: any = {
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      experience: "Parcours",
      contact: "Contact"
    },
    hero: {
      tag: "system_init",
      title_first: "LÉA",
      title_second: "DESSE",
      subtitle: "Ingénieure Logiciel Embarqué spécialisée dans les protocoles bas-niveau.",
      cta_primary: "Voir mes travaux",
      cta_secondary: "Collaborons",
      scroll: "Défiler",
      status: "DISPONIBLE"
    },
    skills: {
      title: "Expertises",
      subtitle: "Maîtrise technique acquise au fil de 5 ans d'expérience en R&D et firmware.",
      categories: {
        All: "Tout",
        Hardware: "Hardware",
        Software: "Software",
        Protocols: "Protocoles",
        Tools: "Outils"
      }
    },
    projects: {
      title: "Projets Techniques",
      subtitle: "Conception de systèmes complexes alliant développement firmware et électronique.",
      github_link: "GitHub Lab",
      details: "Détails"
    },
    experience: {
      title: "Parcours",
      subtitle: "Plus de 5 ans d'expérience au coeur de l'innovation embarquée."
    },
    contact: {
      title_first: "Parlons de votre",
      title_second: "prochain projet",
      subtitle: "Basée à Mougins, je suis disponible pour des projets innovants en électronique et logiciel embarqué.",
      form_title: "Message direct",
      label_name: "Nom complet",
      label_email: "Adresse Email",
      label_message: "Message",
      placeholder_name: "Ex: Jean Dupont",
      placeholder_email: "jean.dupont@exemple.com",
      placeholder_message: "Parlez-moi de votre projet...",
      send: "Envoyer",
      footer_copy: "© 2025 Léa Desse — Ingénieure Systèmes"
    },
    assistant: {
      welcome: "Salut ! Je suis Kernel, l'assistant de Léa. Pose-moi n'importe quelle question sur son parcours !",
      header: "Kernel_Assistant",
      placeholder: "Demande-moi n'importe quoi..."
    },
    data: {
      about: "Ingénieure passionnée avec plus de 5 ans d'expérience en développement de firmware. Experte en protocoles de communication (CAN, I2C, UART, Zigbee, OpenThread). Profil créatif avec plusieurs projets personnels alliant hardware et software.",
      projects: [
        {
          title: "Système d'Ailerons Stabilisateurs pour Moto",
          description: "Système de correction d'assiette en temps réel avec IMU Bosch. Architecture dual-box communiquant via CAN. Réalisation complète : design PCB, firmware, boîtiers imprimés en 3D.",
          category: "Robotique / Moto"
        },
        {
          title: "Imprimante Thermique Connectée",
          description: "Imprimante thermique connectée en WiFi avec authentification API et configuration Point d'Accès. Réalisation complète : design PCB, firmware ESP32, boîtier imprimé en 3D.",
          category: "IoT"
        },
        {
          title: "Système de Lecteur de Badges NFC",
          description: "Développement de firmware avec communication RS232 vers un serveur Python. Utilisation de STM32L0 et ST25R200.",
          category: "Sécurité"
        }
      ],
      experiences: [
        {
          company: "STMicroelectronics",
          role: "Ingénieure Logiciel Embarqué",
          period: "2021 - 2025",
          description: [
            "Développement et maintenance d'outils de validation pour les piles Zigbee et OpenThread.",
            "Intégration continue avec Jenkins et optimisation des processus de développement.",
            "Automatisation des mesures de consommation d'énergie (Joulescope, ST-Link V3 PWR)."
          ]
        },
        {
          company: "Elsys Design (Prestation chez ST)",
          role: "Ingénieure Logiciel Embarqué",
          period: "2020 - 2021",
          description: [
            "Développement de tests embarqués en C pour la validation de l'intégration OpenThread sur STM32WB.",
            "Développement d'outils de support pour Zigbee et OpenThread en Python."
          ]
        },
        {
          company: "Elsys Design",
          role: "Stage Ingénieure Logiciel Embarqué",
          period: "2019",
          description: [
            "Collecte et traitement de données de capteurs embarqués (IMU, GPS, radar) sur STM32H7.",
            "Développement d'un banc de test simulant le comportement d'un véhicule (protocoles I2C, UART, CAN FD)."
          ]
        }
      ]
    }
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      tag: "system_init",
      title_first: "LÉA",
      title_second: "DESSE",
      subtitle: "Embedded Software Engineer specializing in low-level protocols.",
      cta_primary: "View my work",
      cta_secondary: "Let's collaborate",
      scroll: "Scroll",
      status: "OPEN TO WORK"
    },
    skills: {
      title: "Expertise",
      subtitle: "Technical mastery acquired through 5 years of R&D and firmware experience.",
      categories: {
        All: "All",
        Hardware: "Hardware",
        Software: "Software",
        Protocols: "Protocols",
        Tools: "Tools"
      }
    },
    projects: {
      title: "Technical Projects",
      subtitle: "Designing complex systems combining firmware development and electronics.",
      github_link: "GitHub Lab",
      details: "Details"
    },
    experience: {
      title: "Experience",
      subtitle: "Over 5 years of experience at the heart of embedded innovation."
    },
    contact: {
      title_first: "Let's talk about your",
      title_second: "next project",
      subtitle: "Based in Mougins, France, I am available for innovative projects in electronics and embedded software.",
      form_title: "Direct message",
      label_name: "Full name",
      label_email: "Email Address",
      label_message: "Message",
      placeholder_name: "Ex: John Doe",
      placeholder_email: "john.doe@example.com",
      placeholder_message: "Tell me about your project...",
      send: "Send",
      footer_copy: "© 2025 Léa Desse — Systems Engineer"
    },
    assistant: {
      welcome: "Hi! I'm Kernel, Léa's AI buddy. Ask me anything about her work!",
      header: "Kernel_Assistant",
      placeholder: "Ask me anything..."
    },
    data: {
      about: "Passionate engineer with 5+ years of experience in firmware development. Expert in communication protocols (CAN, I2C, UART, Zigbee, OpenThread). Creative profile with several successful personal projects combining hardware and software.",
      projects: [
        {
          title: "Motorcycle Stabilizer Wing System",
          description: "Real-time attitude correction system with Bosch IMU. Dual-box architecture communicating via CAN. Complete realization: PCB design, firmware, 3D-printed enclosures.",
          category: "Robotics / Moto"
        },
        {
          title: "Connected Thermal Printer",
          description: "WiFi-connected thermal printer with API authentication and Access Point configuration. Complete realization: PCB design, ESP32 firmware, 3D-printed enclosure.",
          category: "IoT"
        },
        {
          title: "NFC Badge Reader System",
          description: "Firmware development with RS232 communication to a Python server. Using STM32L0 and ST25R200.",
          category: "Security"
        }
      ],
      experiences: [
        {
          company: "STMicroelectronics",
          role: "Embedded Software Engineer",
          period: "2021 - 2025",
          description: [
            "Development and maintenance of validation tools for Zigbee and OpenThread stacks.",
            "Continuous integration with Jenkins and development process optimization.",
            "Automation of power consumption measurements (Joulescope, ST-Link V3 PWR)."
          ]
        },
        {
          company: "Elsys Design (Contractor at ST)",
          role: "Embedded Software Engineer",
          period: "2020 - 2021",
          description: [
            "Development of embedded tests in C for OpenThread integration validation on STM32WB.",
            "Development of support tools for Zigbee and OpenThread in Python."
          ]
        },
        {
          company: "Elsys Design",
          role: "Embedded Software Intern",
          period: "2019",
          description: [
            "Collection and processing of embedded sensor data (IMU, GPS, radar) on STM32H7.",
            "Development of a test bench simulating vehicle behavior (I2C, UART, CAN FD protocols)."
          ]
        }
      ]
    }
  }
};

export const SKILLS: Skill[] = [
  { name: 'C', level: 95, category: 'Software' },
  { name: 'Python', level: 85, category: 'Software' },
  { name: 'C++', level: 75, category: 'Software' },
  { name: 'STM32 Ecosystem', level: 90, category: 'Hardware' },
  { name: 'ESP32 / ESP-IDF', level: 85, category: 'Hardware' },
  { name: 'PCB Design & 3D Printing', level: 80, category: 'Hardware' },
  { name: 'CAN / CAN FD', level: 95, category: 'Protocols' },
  { name: 'I2C / UART / SPI', level: 95, category: 'Protocols' },
  { name: 'Zigbee', level: 90, category: 'Protocols' },
  { name: 'OpenThread', level: 90, category: 'Protocols' },
  { name: 'NFC (ST25)', level: 85, category: 'Protocols' },
  { name: 'Bluetooth / BLE', level: 80, category: 'Protocols' },
  { name: 'Git', level: 90, category: 'Tools' },
  { name: 'Jenkins / CI-CD', level: 80, category: 'Tools' },
  { name: 'Joulescope / ST-Link V3', level: 85, category: 'Tools' },
];

export const PROJECTS_BASE: any[] = [
  {
    id: '1',
    tags: ["STM32F4", "CAN", "IMU"],
    imageUrl: "/projet1.jpg",
    videoUrl: "/projet1.mp4"
  },
  {
    id: '2',
    tags: ["ESP32", "WiFi", "UART"],
    imageUrl: "/projet2.jpg",
    videoUrl: "/projet2.mp4"
  },
  {
    id: '3',
    tags: ["STM32L0", "NFC", "RS232"],
    imageUrl: "/projet3.jpg",
    videoUrl: "/projet3.mp4"
  },
];
