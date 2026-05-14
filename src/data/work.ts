export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  logo?: string;
}

export const workExperience: WorkExperience[] = [
  {
    role: 'Software Design & Development Engineer',
    company: 'Eurafric Information',
    location: 'Bouskoura',
    duration: 'March 2025 - Present',
    description: 'Developing and maintaining banking web applications using Java, Spring, and a custom framework. Automating financial processes from scratch via batch processing, improving speed and compliance. Refactoring complex business logic for enhanced performance and scalability in banking environments.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Alef Digital Solutions',
    location: 'Casablanca',
    duration: 'May 2024 - Sept 2024',
    description: 'Developed a car rental application from scratch, implementing business features, REST APIs, and a scalable architecture. Designed modern and intuitive user interfaces (user flows, wireframes, high-fidelity mockups). Acted as Scrum Master, leading Agile ceremonies and coordinating project teams.',
  },
  {
    role: 'Java Backend Developer',
    company: 'Gold Tech Technology',
    location: 'Canada (Remote)',
    duration: 'July 2023 - Dec 2023',
    description: 'Developed a meal reservation application using Spring Boot and Angular, focusing on backend/frontend integration and key feature implementation. Optimized REST APIs to improve system performance, data flow, and efficiency.',
  },
  {
    role: 'Java Developer',
    company: 'Oumdin',
    location: 'Casablanca',
    duration: 'May 2022 - July 2023',
    description: 'Participated in the development of a B2B e-commerce platform (Toubkal) using Spring Boot and Angular. Designed and implemented database architecture, optimized queries, and improved data access performance for high-volume commercial operations.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance',
    location: 'Remote',
    duration: 'May 2020 - May 2022',
    description: 'Worked with multiple languages and frameworks on various full-stack projects. Developed web applications using Java/Spring Boot and Angular, adapting to diverse technical requirements. Involved in design, development, and maintenance within Agile environments.',
  }
];
