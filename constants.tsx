import { Project, Skill, Experience } from './types';

export const CV_DATA = {
  name: "Léa Desse",
  email: "lea.desse@hotmail.fr",
  location: "Mougins, France",
  cv_file: "CV_Lea_Desse.pdf",
  socials: {
    linkedin: "https://fr.linkedin.com/in/l%C3%A9a-desse-3446613a6"
  }
};

export const TRANSLATIONS: any = {
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      experience: "Parcours",
      hobbies: "Passions",
      contact: "Contact"
    },
    hero: {
      tag: "system_init",
      title_first: "LÉA",
      title_second: "DESSE",
      subtitle: "Ingénieure Logiciel Embarqué spécialisée dans les protocoles bas-niveau.",
      cta_primary: "Voir mes travaux",
      cta_secondary: "Collaborons",
      cta_cv: "Télécharger CV",
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
    hobbies: {
      title: "Hors-Piste",
      subtitle: "Ce qui m'anime en dehors des lignes de code.",
      moto_title: "Moto sur piste",
      moto_desc: "Adrénaline et précision technique. La recherche de la trajectoire parfaite, que ce soit sur le bitume ou dans un algorithme.",
      bivouac_title: "Bivouac & Nature",
      bivouac_desc: "L'autonomie totale. Explorer des lieux reculés, loin du bruit, pour revenir aux sources et recharger les batteries.",
      maker_title: "Passion Maker",
      maker_desc: "L'électronique ne s'arrête pas au bureau. Je passe mon temps libre à concevoir des gadgets hardware et à expérimenter de nouveaux composants."
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
      footer_copy: "© 2026 Léa Desse — Ingénieure Systèmes"
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
          description: "Système de correction d'assiette en temps réel avec IMU Bosch. Architecture dual-box communiquant via CAN FD.",
          category: "Robotique / Moto",
          details: {
            title: "Système d'Ailerons Actifs pour Moto",
            fullDescription: "Ce projet, présenté lors de plusieurs expositions, consiste en un système d'ailerons mobiles pour moto visant à stabiliser l'assiette en temps réel. L'architecture repose sur deux boîtiers distincts communiquant via le bus CAN FD. Un module de puissance sur mesure convertit le 12V de la batterie en 7V pour piloter l'ensemble.",
            features: [
              "Boîtier Guidon : Interface utilisateur pour la calibration de l'offset et le réglage du ratio d'inclinaison",
              "Stockage EEPROM : Sauvegarde permanente des paramètres de calibration et des ratios",
              "Boîtier Selle : Intègre une IMU Bosch pour le calcul d'angle en temps réel",
              "Contrôle Dynamique : Adaptation instantanée de l'angle des ailerons via servomoteurs",
              "Communication CAN FD : Échange de données haute performance entre les modules"
            ],
            technologies: ["STM32", "CAN FD", "Bosch IMU", "C/C++", "EEPROM", "Electronique de puissance"]
          }
        },
        {
          title: "Imprimante Thermique Connectée",
          description: "Imprimante thermique connectée en WiFi avec authentification API et configuration Point d'Accès.",
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
          period: "2021 - 2026",
          logo: "./st_logo.png",
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
          logo: "./elsys_logo.png",
          description: [
            "Développement de tests embarqués en C pour la validation de l'intégration OpenThread sur STM32WB.",
            "Développement d'outils de support pour Zigbee et OpenThread en Python."
          ]
        },
        {
          company: "Elsys Design",
          role: "Stage Ingénieure Logiciel Embarqué",
          period: "2019",
          logo: "./elsys_logo.png",
          description: [
            "Collecte et traitement de données de capteurs embarqués (IMU, GPS, radar) sur STM32H7.",
            "Développement d'un banc de test simulant le comportement d'un véhicule (protocoles I2C, UART, CAN FD)."
          ]
        },
        {
          company: "ESME Sudria",
          role: "Diplôme d'Ingénieur, Systèmes Embarqués",
          period: "2014 - 2019",
          logo: "./esme_logo.png",
          description: [
            "Formation d'ingénieur avec spécialisation en conception de systèmes embarqués.",
            "Projet de fin d'études : Contrôle d'une orthèse de bras à muscles artificiels (ballons de baudruche).",
            "2017 : Semestre d'études à l'Université Corvinus de Budapest (BCE)."
          ],
          details: {
            title: "Projet de fin d'études : Orthèse pour personne hémiplégique",
            fullDescription: "Réalisé pour l'hôpital de Garches, ce projet visait à concevoir une orthèse de bras pilotée par des muscles pneumatiques (ballons de baudruche remplis d'eau). Le système, orchestré par un Raspberry Pi, contrôlait une pompe et des électrovannes pour simuler la contraction musculaire. Grâce à des IMU sur le bras valide, l'orthèse répliquait les mouvements sur le bras invalide, tandis que des capteurs de pression assuraient la sécurité du patient contre tout risque d'éclatement.",
            videoUrl: "./orthese_demo.webm",
            imageUrl: "./orthese_demo.jpg",
            technologies: ["C", "Raspberry Pi", "Pneumatique", "IMU", "Capteurs de pression"]
          }
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
      hobbies: "Beyond",
      contact: "Contact"
    },
    hero: {
      tag: "system_init",
      title_first: "LÉA",
      title_second: "DESSE",
      subtitle: "Embedded Software Engineer specializing in low-level protocols.",
      cta_primary: "View my work",
      cta_secondary: "Let's collaborate",
      cta_cv: "Download CV",
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
    hobbies: {
      title: "Beyond Engineering",
      subtitle: "What drives me when I'm not writing code.",
      moto_title: "Track Motorcycling",
      moto_desc: "Adrenaline and technical precision. Searching for the perfect line, whether on the asphalt or in an algorithm.",
      bivouac_title: "Bivouac & Outdoors",
      bivouac_desc: "Total autonomy. Exploring remote places, far from the noise, to get back to basics and recharge.",
      maker_title: "Maker Passion",
      maker_desc: "Electronics don't stop at the office. I spend my free time designing hardware gadgets and experimenting with new components."
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
      footer_copy: "© 2026 Léa Desse — Systems Engineer"
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
          description: "Real-time attitude correction system with Bosch IMU. Dual-box architecture communicating via CAN FD.",
          category: "Robotics / Moto",
          details: {
            title: "Active Wing System for Motorcycles",
            fullDescription: "This project, showcased at several exhibitions, features a mobile wing system for motorcycles designed to stabilize attitude in real-time. The architecture utilizes two distinct units communicating via CAN FD bus. A custom-built power module converts 12V battery power to 7V to drive the system.",
            features: [
              "Handlebar Unit: User interface for offset calibration and tilt ratio adjustment",
              "EEPROM Storage: Permanent saving of calibration parameters and ratios",
              "Seat Unit: Integrates a Bosch IMU for real-time angle calculation",
              "Dynamic Control: Instantaneous adjustment of wing angles via servomotors",
              "CAN FD Communication: High-performance data exchange between modules"
            ],
            technologies: ["STM32", "CAN FD", "Bosch IMU", "C/C++", "EEPROM", "Power Electronics"]
          }
        },
        {
          title: "Connected Thermal Printer",
          description: "WiFi-connected thermal printer with API authentication and Access Point configuration.",
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
          period: "2021 - 2026",
          logo: "./st_logo.png",
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
          logo: "./elsys_logo.png",
          description: [
            "Development of embedded tests in C for OpenThread integration validation on STM32WB.",
            "Development of support tools for Zigbee and OpenThread in Python."
          ]
        },
        {
          company: "Elsys Design",
          role: "Embedded Software Intern",
          period: "2019",
          logo: "./elsys_logo.png",
          description: [
            "Collection and processing of embedded sensor data (IMU, GPS, radar) on STM32H7.",
            "Development of a test bench simulating vehicle behavior (I2C, UART, CAN FD protocols)."
          ]
        },
        {
          company: "ESME Sudria",
          role: "Master of Engineering, Embedded Systems",
          period: "2014 - 2019",
          logo: "./esme_logo.png",
          description: [
            "Engineering curriculum with a major in embedded systems design.",
            "Final year project: Control of an arm orthosis with artificial muscles (latex balloons).",
            "2017: Exchange semester abroad at Corvinus University of Budapest (BCE)."
          ],
          details: {
            title: "Final Year Project: Orthosis for Hemiplegic Patients",
            fullDescription: "Developed for the Garches Hospital, this project focused on controlling a robotic arm orthosis using water-filled balloons as pneumatic muscles. A Raspberry Pi controlled pumps and valves to simulate muscle contraction. Using IMUs on the patient's healthy arm, the orthosis replicated movements on the paralyzed arm, while pressure sensors monitored the system to eliminate any risk of bursting.",
            videoUrl: "./orthese_demo.webm",
            imageUrl: "./orthese_demo.jpg",
            technologies: ["C", "Raspberry Pi", "Pneumatics", "IMU", "Pressure Sensors"]
          }
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
    imageUrl: "./projet1_1.webp",
    videoUrl: "./projet1_2.mp4",
    gallery: ["./projet1_1.webp", "./projet1_2.mp4", "./projet1_3.webp", "./projet1_4.webp", "./projet1_5.webp", "./projet1_6.webp"]
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