// Resume content is kept separate from presentation and animation code.
export const experience = [
  {
    company: 'Amici Mercantile Inc.', role: 'Full-Stack Developer',
    location: 'Quezon City, PH', period: 'Dec. 2025 – Present', current: true,
    groups: [
      { title: 'Businessware (Web and Mobile)', responsibilities: [
        'Developed and deployed 10+ ERP modules across Flutter web/mobile and FastAPI, supporting business processes including ticketing, inventory tracking, reporting, and multi-stage approval workflows.',
        'Implemented Clean Architecture and BLoC/Cubit state management to improve separation of concerns, maintainability, and consistency across Flutter features.',
        'Built reusable Flutter UI components and shared application patterns to reduce repetitive frontend development and accelerate implementation of new modules.',
        'Integrated REST APIs with Flutter applications to support data retrieval, transaction processing, filtering, validation, and synchronization across enterprise workflows.',
      ] },
      { title: 'Backend & Infrastructure', responsibilities: [
        'Developed and maintained RESTful APIs using FastAPI and Python to connect Flutter applications with backend services and MySQL databases.',
        'Optimized MySQL schemas, indexes, queries, and stored procedures to improve report execution and database performance.',
        'Containerized and deployed applications using Docker on Ubuntu Linux, managing application dependencies, server configurations, deployments, and production troubleshooting.',
      ] },
    ],
  },
  {
    company: 'moodLearning', role: 'Front End Developer (Intern)',
    location: 'UP Diliman, Engr Bldg', period: 'Mar. 2025 – Apr. 2025',
    groups: [{ title: 'Frontend Development', responsibilities: [
      'Developed responsive React-based user interfaces for web application features.',
      'Improved search and content discovery by implementing categorized filters and integrating dynamic API-driven search functionality.',
      'Built interactive media components including animated carousels and video interfaces to improve content presentation and user interaction.',
    ] }],
  },
]

export const education = {
  school: 'Technological Institute of the Philippines',
  location: 'Aurora, Cubao, Quezon City',
  degree: 'Bachelor of Science in Computer Science',
  date: 'August 8, 2025', honors: 'Dean’s Lister · VPAA’s Lister',
}
