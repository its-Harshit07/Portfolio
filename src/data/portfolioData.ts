import { SkillCategory, ProjectItem, EducationItem, CertificateItem, ContactInfo } from '../types/portfolio';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'LANGUAGES',
    skills: [
      { name: 'C', icon: 'fa-solid fa-code' },
      { name: 'C++', icon: 'fa-solid fa-code' },
      { name: 'Python', icon: 'fa-brands fa-python' },
      { name: 'JavaScript', icon: 'fa-brands fa-js' }
    ]
  },
  {
    id: 'frontend',
    title: 'FRONTEND & UI',
    skills: [
      { name: 'React', icon: 'fa-brands fa-react' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-palette' },
      { name: 'HTML', icon: 'fa-brands fa-html5' }
    ]
  },
  {
    id: 'backend',
    title: 'BACKEND',
    skills: [
      { name: 'Flask', icon: 'fa-solid fa-flask' },
      { name: 'REST API', icon: 'fa-solid fa-network-wired' },
      { name: 'MySQL', icon: 'fa-solid fa-database' },
      { name: 'Node.js', icon: 'fa-brands fa-node-js' }
    ]
  },
  {
    id: 'machine-learning',
    title: 'MACHINE LEARNING',
    skills: [
      { name: 'PyTorch', icon: 'fa-solid fa-brain' },
      { name: 'Matplotlib', icon: 'fa-solid fa-chart-line' },
      { name: 'NumPy', icon: 'fa-solid fa-square-root-variable' },
      { name: 'Pandas', icon: 'fa-solid fa-table' }
    ]
  },
  {
    id: 'tools',
    title: 'TOOLS',
    skills: [
      { name: 'Word', icon: 'fa-solid fa-file-word' },
      { name: 'Excel', icon: 'fa-solid fa-file-excel' },
      { name: 'Canva', icon: 'fa-solid fa-wand-magic-sparkles' },
      { name: 'Gamma', icon: 'fa-solid fa-cubes' }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'indiangenderclassifier',
    title: 'INDIANGENDERCLASSIFIER',
    category: 'AI / ML • PYTHON • FASTAPI',
    description: 'Real-time deep learning gender classification web application using modern vision models.',
    fullDescription: 'IndianGenderClassifier is an advanced AI/ML computer vision application designed to accurately identify and classify facial profiles with custom deep neural networks trained on diverse demographic datasets.',
    image: '/assets/projects/indian-gender-classifier.png',
    technologies: ['PyTorch', 'Python', 'FastAPI', 'OpenCV', 'React'],
    liveUrl: 'https://indiangenderclassifier.onrender.com/'
  },
  {
    id: 'unomultiplayer',
    title: 'UNO-MULTIPLAYER',
    category: 'FULL-STACK • REACT • SOCKET.IO',
    description: 'Interactive real-time multiplayer UNO card game engine built for web browsers.',
    fullDescription: 'UNO-Multiplayer features real-time WebSocket room synchronization, custom card game state rule validation, sound effects, dynamic lobbies, and an intuitive responsive user interface.',
    image: '/assets/projects/uno-multiplayer.png',
    technologies: ['React', 'Node.js', 'Socket.IO', 'TypeScript', 'CSS Modules'],
    liveUrl: 'https://playuno-hl.vercel.app'
  },
  {
    id: 'calculator',
    title: 'CALCULATOR',
    category: 'WEB APP • JAVASCRIPT • CSS3',
    description: 'Sleek dark minimal web calculator with keyboard listeners & math history log.',
    fullDescription: 'A sleek minimal web calculation interface featuring full keyboard shortcut listeners, interactive ripple feedback, history logging, and scientific function calculations.',
    image: '/assets/projects/calculator.png',
    technologies: ['JavaScript', 'CSS3', 'HTML5', 'LocalStorage'],
    liveUrl: 'https://calculator-hl.vercel.app'
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'btech',
    period: '2025 — 2029 (CURRENT)',
    degree: 'B.TECH IN COMPUTER SCIENCE & ENGINEERING',
    institution: 'LOVELY PROFESSIONAL UNIVERSITY',
    institutionIcon: 'fa-graduation-cap',
    description: 'Specialized in Artificial Intelligence & Machine Learning. Currently maintaining an outstanding CGPA of 8.00.',
    tags: ['Specialization: AI / ML', 'Current CGPA: 8.00', 'B.Tech CSE'],
    isCurrent: true
  },
  {
    id: 'intermediate',
    period: 'INTERMEDIATE (HIGHER SECONDARY)',
    degree: 'SENIOR SECONDARY CERTIFICATE (CBSE)',
    institution: "ST. MICHAEL'S ACADEMY",
    institutionIcon: 'fa-building-columns',
    description: 'Completed 12th Grade under CBSE Board with 75% Aggregate Score, focusing on Science, Physics, Chemistry, and Mathematics.',
    tags: ['CBSE', '75% Aggregate', 'Physics & Math']
  },
  {
    id: 'matriculation',
    period: 'MATRICULATION (10TH GRADE)',
    degree: 'SECONDARY EDUCATION CERTIFICATE (CBSE)',
    institution: "ST. XAVIER'S HIGHER SECONDARY SCHOOL",
    institutionIcon: 'fa-school',
    description: 'Achieved 84% Aggregate Score under CBSE Board curriculum with academic excellence in Science and Mathematics.',
    tags: ['CBSE', '84% Aggregate', 'Science & Math']
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS CLOUD PRACTITIONER ESSENTIALS',
    issuer: 'AWS',
    issuerBadge: 'AWS CERTIFIED',
    issuerIcon: 'fa-brands fa-aws',
    credentialId: 'CLOUD ESSENTIALS',
    image: '/assets/certs/aws-cloud-practitioner.png',
    verifyUrl: 'https://skillbuilder.aws/c50e36cf-89d9-45d3-9b75-4cd2174b18a1'
  },
  {
    id: 'aws-technical-essentials',
    title: 'AWS TECHNICAL ESSENTIALS',
    issuer: 'AWS',
    issuerBadge: 'AWS CERTIFIED',
    issuerIcon: 'fa-brands fa-aws',
    credentialId: 'TECHNICAL ARCHITECTURE',
    image: '/assets/certs/aws-technical-essentials.png',
    verifyUrl: 'https://skillbuilder.aws/f6202879-ae61-4708-b18b-18e9691700d9'
  },
  {
    id: 'oracle-oci-ai',
    title: 'ORACLE CLOUD INFRASTRUCTURE AI FOUNDATIONS ASSOCIATE',
    issuer: 'ORACLE',
    issuerBadge: 'ORACLE ASSOCIATE',
    issuerIcon: 'fa-solid fa-database',
    credentialId: 'OCI AI ASSOCIATE',
    image: '/assets/certs/oracle-oci-ai.png',
    verifyUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=C8C1F145E87C21238FCCED0989450CDFAAB7F4C2CCA14D65B429576C303348A6'
  },
  {
    id: 'oracle-data-platform',
    title: 'ORACLE DATA PLATFORM FOUNDATIONS ASSOCIATE',
    issuer: 'ORACLE',
    issuerBadge: 'ORACLE ASSOCIATE',
    issuerIcon: 'fa-solid fa-server',
    credentialId: 'DATA PLATFORM ASSOCIATE',
    image: '/assets/certs/oracle-data-platform.png',
    verifyUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=ECB7BCEFB293B57920A0A9576AD027A79DCFC401BA3F814534BA7009104CAB92'
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: 'harshitlarenc@gmail.com',
  location: 'Punjab, India (Lovely Professional University)',
  github: 'https://github.com/its-Harshit07',
  linkedin: 'https://www.linkedin.com/in/harshit-larenc-750170386/',
  leetcode: 'https://leetcode.com/u/Harshit0715/'
};
