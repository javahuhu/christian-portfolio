import kismetPreview from '../assets/projects/kismet.png'
import kismetSignIn from '../assets/projects/kismet-sign-in.png'
import kismetCreateProfile from '../assets/projects/kismet-create-profile.png'
import kismetMatches from '../assets/projects/kismet-matches.png'
import kismetMessages from '../assets/projects/kismet-messages.png'
import kismetProfile from '../assets/projects/kismet-profile.png'
import kpopPreview from '../assets/projects/kpop-on.jpeg'
import kpopShopPreview from '../assets/projects/kpop-on.png'
import kpopArtistsPreview from '../assets/projects/kpop-artists.png'
import kpopSeventeenShopPreview from '../assets/projects/kpop-seventeen-shop.png'
import petsympPreview from '../assets/projects/petsymp.png'
import petsympDogSelection from '../assets/projects/petsymp-dog-selection.png'
import petsympCatSelection from '../assets/projects/petsymp-cat-selection.png'
import petsympBreedSelection from '../assets/projects/petsymp-breed-selection.png'
import petsympResultsList from '../assets/projects/petsymp-results-list.png'
import petsympIllnessDetails from '../assets/projects/petsymp-illness-details.png'
import petsympChart from '../assets/projects/petsymp-chart.png'
import taskmasterPreview from '../assets/projects/taskmaster.png'
import taskmasterHome from '../assets/projects/taskmaster-home.png'
import taskmasterSignIn from '../assets/projects/taskmaster-sign-in.png'
import { techLogos } from './techLogos'
import { projectStories } from './projectStories'

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
  ['3', 'PetSymp Analysis Methods'],
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
    description: 'PetSymp turns pet details and observed symptoms into a guided assessment. It combines Forward Chaining, Gradient Boosting, and AdaBoost to rank possible illnesses, presents the scores in comparison charts, and saves assessment history for each dog or cat.',
    tags: [['Flutter', 'cyan'], ['FastAPI', 'green'], ['Python', 'blue'], ['Firebase', 'amber'], ['Machine Learning', 'violet']],
    image: petsympPreview,
    images: [
      { src: petsympPreview, caption: 'Welcome screen', alt: 'PetSymp welcome screen with a dog holding a first aid kit' },
      { src: petsympDogSelection, caption: 'Choose a dog', alt: 'PetSymp companion selection with a dog selected' },
      { src: petsympCatSelection, caption: 'Choose a cat', alt: 'PetSymp companion selection with a cat selected' },
      { src: petsympBreedSelection, caption: 'Choose a breed', alt: 'PetSymp cat breed selection with search, breed cards, and a continue button' },
      { src: petsympResultsList, caption: 'Illness results', alt: 'PetSymp results list showing possible cat illnesses with age, size, and illness type' },
      { src: petsympIllnessDetails, caption: 'Illness details', alt: 'PetSymp illness information with expandable severity, treatment, causes, and prevention sections' },
      { src: petsympChart, caption: 'Confidence comparison', alt: 'PetSymp chart comparing Forward Chaining, Gradient Boosting, and AdaBoost scores for a ranked illness', aspectRatio: '556 / 822' },
    ],
    repositoryUrl: 'https://github.com/PetSymp-Team/PetSymp',
    featured: true,
    imagePosition: 'center',
  },

]

export const webProjects = [
  {
    title: 'Kismet Dating Platform',
    description: 'Kismet brings the dating journey into one web experience: create a profile, discover people, respond to pending likes, and start a conversation when interest is mutual. Dedicated discovery, matches, and messaging views keep each stage easy to follow.',
    tags: [['Flutter', 'cyan'], ['TypeScript', 'blue'], ['MongoDB', 'green']],
    image: kismetPreview,
    images: [
      { src: kismetPreview, caption: 'Landing page', alt: 'Kismet dating platform landing page' },
      { src: kismetSignIn, caption: 'Sign in', alt: 'Kismet welcome back screen with email, password, and Google sign-in options' },
      { src: kismetCreateProfile, caption: 'Create your profile', alt: 'Kismet profile creation form with photo, name, age, and biography fields' },
      { src: kismetMatches, caption: 'Matches', alt: 'Kismet matches page with a profile preview and skip and like actions' },
      { src: kismetMessages, caption: 'Messages', alt: 'Kismet messaging screen with a match list and conversation' },
      { src: kismetProfile, caption: 'Profile details', alt: 'Kismet profile showing a biography, interests, personality, and motivations' },
    ],
    repositoryUrl: 'https://github.com/javahuhu/Dating-App',
  },
  {
    title: 'TaskMaster',
    description: 'TaskMaster is a collaborative planning workspace designed for the Philippine School of Business Administration. Teams can define projects, invite members with roles, set deadlines and priorities, and track tasks through To-Do, Doing, and Done.',
    tags: [['Web App', 'blue'], ['Task Management', 'green'], ['Dark Mode', 'violet']],
    image: taskmasterPreview,
    images: [
      { src: taskmasterPreview, caption: 'Create an account', alt: 'TaskMaster account creation screen' },
      { src: taskmasterHome, caption: 'Welcome page', alt: 'TaskMaster welcome page with register and login buttons' },
      { src: taskmasterSignIn, caption: 'Sign in', alt: 'TaskMaster sign-in form with username, password, and password recovery' },
    ],
  },
  {
    title: 'KPOP On!',
    description: 'KPOP-ON is a React storefront built around five K-pop artists. Visitors can explore artist profiles and releases, browse albums and merchandise, and move from product discovery through a cart and checkout flow, with layouts documented for desktop and mobile.',
    tags: [['React', 'blue'], ['JavaScript', 'amber'], ['E-Commerce', 'green']],
    image: kpopPreview,
    images: [
      { src: kpopPreview, caption: 'Artist discovery', alt: 'KPOP-ON artist landing page featuring LE SSERAFIM' },
      { src: kpopShopPreview, caption: 'Merchandise shop', alt: 'KPOP-ON shop with albums and merchandise', crop: 'shop-document' },
      { src: kpopArtistsPreview, caption: 'Artist directory', alt: 'KPOP-ON artist directory featuring LE SSERAFIM, aespa, SEVENTEEN, TWICE, and TREASURE' },
      { src: kpopSeventeenShopPreview, caption: 'SEVENTEEN shop', alt: 'KPOP-ON SEVENTEEN shop with a light stick, photo cards, binder, and album' },
    ],
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
  { ...webProjects[0], id: 'kismet', title: 'Kismet', category: 'Web', subtitle: 'From first profile to first conversation.', imageAlt: 'Kismet landing page with a dating illustration and sign-up navigation' },
  { ...webProjects[2], id: 'kpop-on', title: 'KPOP-ON', category: 'Web', subtitle: 'From favorite artists to the shopping cart.', imageAlt: 'KPOP-ON artist landing page featuring LE SSERAFIM' },
  { ...mobileProjects[0], id: 'petsymp', category: 'Mobile', subtitle: 'From observed symptoms to clearer insights.', imageAlt: 'PetSymp welcome screen with a dog holding a first aid kit' },
  { ...webProjects[1], id: 'taskmaster', title: 'TaskMaster', category: 'Web', subtitle: 'From a shared goal to visible progress.', imageAlt: 'TaskMaster account creation page with project collaboration notes' },
].map(project => ({ ...project, story: projectStories[project.id] }))
