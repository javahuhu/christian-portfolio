import kismetPreview from '../assets/projects/kismet.png'
import kpopPreview from '../assets/projects/kpop-on.jpeg'
import petsympPreview from '../assets/projects/petsymp.png'
import taskmasterPreview from '../assets/projects/taskmaster.png'
import { techLogos } from './techLogos'

export const profile = {
  name: 'Christian Paul Gelera',
  shortName: 'Christian Gelera',
  role: 'Full-Stack Software Developer',
  email: 'cgelera3@gmail.com',
  phone: '09926675751',
  location: 'Caloocan City, Philippines',
  github: 'https://github.com/javahuhu',
  summary: 'I build scalable cross-platform mobile and web applications with Flutter, FastAPI, Python, and modern databases—from clean interfaces to production deployment.',
  about: 'Full-stack developer experienced in enterprise ERP modules, high-throughput RESTful APIs, Clean Architecture, BLoC/Cubit state management, database optimization, and Linux server deployment.',
}

export const navigationItems = [
  ['Work', 'projects'],
  ['About', 'about'],
  ['Stack', 'stack'],
  ['Contact', 'contact'],
]

export const metrics = [
  ['10+', 'ERP Modules Delivered'],
  ['30%+', 'Faster Report Queries'],
  ['85%+', 'ML Classification Accuracy'],
]

export const experienceTimeline = [
  ['Mar–Apr 2025', 'Front End Developer', 'moodLearning · React interfaces, categorized search, API integration, and interactive media.'],
  ['Aug 2025', 'B.S. Computer Science', 'Technological Institute of the Philippines · Dean’s Lister and VPAA’s Lister.'],
  ['Dec 2025–Present', 'Full-Stack Developer', 'Amici Mercantile Inc. · Enterprise Flutter, FastAPI, Python, and MySQL systems.'],
]

export const approachCards = [
  { icon: 'code', title: 'Clean Architecture', text: 'Reusable UI libraries and BLoC/Cubit state management keep features maintainable and testable.' },
  { icon: 'cloud', title: 'Scalable APIs', text: 'FastAPI microservices and REST integrations support reliable, low-latency business workflows.' },
  { icon: 'cpu', title: 'Data Performance', text: 'Optimized schemas, indexes, and stored procedures reduce reporting time and bottlenecks.' },
  { icon: 'branch', title: 'Production Delivery', text: 'Docker, Ubuntu, SSH, CI/CD, and store deployments take products safely from code to users.' },
]

export const currentWork = {
  title: 'Enterprise ERP Modules',
  description: 'Flutter • FastAPI • Python • MySQL • Docker',
}

export const mobileProjects = [
  {
    title: 'PetSymp',
    subtitle: 'AI-Based Pet Illness Classification',
    description: 'A cross-platform pet health application integrating a custom machine-learning model with more than 85% classification accuracy, diagnosis history, and Firebase authentication.',
    tags: [['Flutter', 'cyan'], ['FastAPI', 'green'], ['Python', 'blue'], ['Firebase', 'amber'], ['Machine Learning', 'violet']],
    image: petsympPreview,
    repositoryUrl: 'https://github.com/PetSymp-Team/PetSymp',
    featured: true,
    imagePosition: 'center',
  },

]

export const webProjects = [
  {
    title: 'Kismet Dating Platform',
    description: 'Social networking application with secure real-time messaging, profile matching, and user authentication.',
    tags: [['Flutter', 'cyan'], ['TypeScript', 'blue'], ['MongoDB', 'green']],
    image: kismetPreview,
    repositoryUrl: 'https://github.com/javahuhu/Dating-App',
  },
  {
    title: 'TaskMaster',
    description: 'Collaborative task-management system with projects, role-based invitations, Kanban tracking, profiles, and dark mode.',
    tags: [['Web App', 'blue'], ['Task Management', 'green'], ['Dark Mode', 'violet']],
    image: taskmasterPreview,
  },
  {
    title: 'KPOP On!',
    description: 'Responsive merchandise storefront with artist discovery, product catalog, cart, checkout, accounts, and mobile views.',
    tags: [['React', 'blue'], ['JavaScript', 'amber'], ['E-Commerce', 'green']],
    image: kpopPreview,
    repositoryUrl: 'https://github.com/javahuhu/KPOP-On',
  },
]

export const stackGroups = [
  {
    title: 'Languages',
    tone: 'blue',
    items: [
      [techLogos.dart, 'Dart'],
      [techLogos.python, 'Python'],
      [techLogos.javascript, 'JavaScript'],
      [techLogos.typescript, 'TypeScript'],
      [techLogos.swift, 'Swift'],
    ],
  },
  {
    title: 'Frameworks',
    tone: 'green',
    items: [
      [techLogos.flutter, 'Flutter'],
      [techLogos.fastapi, 'FastAPI'],
      [techLogos.flask, 'Flask'],
      [techLogos.react, 'React'],
      [techLogos.flutter, 'BLoC / Cubit'],
    ],
  },
  {
    title: 'Databases',
    tone: 'violet',
    items: [
      [techLogos.mysql, 'MySQL'],
      [techLogos.mariadb, 'MariaDB'],
      [techLogos.mongodb, 'MongoDB'],
      [techLogos.sqlite, 'SQLite'],
      [techLogos.firebase, 'Firebase'],
      [techLogos.supabase, 'Supabase'],
    ],
  },
  {
    title: 'Development Tools',
    tone: 'amber',
    items: [
      [techLogos.git, 'Git'],
      [techLogos.github, 'GitHub'],
      [techLogos.gitlab, 'GitLab CI/CD'],
      [techLogos.vscode, 'VS Code'],
      [techLogos.androidStudio, 'Android Studio'],
      [techLogos.figma, 'Figma'],
    ],
  },
  {
    title: 'Delivery & Platforms',
    tone: 'green',
    items: [
      [techLogos.docker, 'Docker'],
      [techLogos.ubuntu, 'Ubuntu'],
      [techLogos.nginx, 'Nginx'],
      [techLogos.postman, 'Postman'],
      [techLogos.googlePlay, 'Google Play'],
      [techLogos.appStore, 'App Store'],
    ],
  },
]

export const additionalSkills = [
  'Provider',
  'Riverpod',
  'React Hooks',
  'RESTful API Development',
  'Clean Architecture',
  'MVC',
  'MVVM',
  'SQL Query Optimization',
  'SSH',
]

// Display order and preview treatment are shared by the gallery and detail view.
export const selectedProjects = [
  { ...webProjects[0], id: 'kismet', title: 'Kismet', category: 'Web', subtitle: 'A little spark. A real connection.', imageAlt: 'Kismet landing page with a dating illustration and sign-up navigation' },
  { ...webProjects[2], id: 'kpop-on', title: 'KPOP-ON', category: 'Web', subtitle: 'A home for music and fandom.', imageAlt: 'KPOP-ON artist landing page featuring LE SSERAFIM' },
  { ...mobileProjects[0], id: 'petsymp', category: 'Mobile', subtitle: 'Pet care, a little more informed.', imageAlt: 'PetSymp welcome screen with a dog holding a first aid kit' },
  { ...webProjects[1], id: 'taskmaster', title: 'TaskMaster', category: 'Web', subtitle: 'Less juggling. More getting done.', imageAlt: 'TaskMaster account creation page with project collaboration notes' },
]
