import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'myDoctor - Telemedicine Ecosystem',
    description: 'A high-performance, full-stack telemedicine platform engineered with Angular Micro-Frontends (MFE) and Java Spring Boot Microservices. Features AI-driven symptom checking, secure Stripe payments, and automated medical record pipelines.',
    image: '/mydoctor_mockup.png',
    technologies: ['Java 21', 'Spring Boot 3.5', 'Angular 18', 'Nx', 'Stripe', 'AWS EKS', 'Terraform', 'Cypress'],
    company: 'Personal Project',
    date: '2025',
    featured: true,
    details: [
      'Orchestrated 7 independent microservices using Spring Cloud Gateway and Eureka.',
      'Developed 4 independent Micro-Frontends using Webpack Module Federation.',
      'Integrated AI-driven symptom checker and NLP suggestion engine.',
      'Implemented secure financial transactions using Stripe API and webhooks.',
      'Automated medical record generation with AWS S3 and Transcribe.',
      'Achieved 100% reliability in core journeys with a stabilized Cypress E2E suite.'
    ]
  },
  {
    title: 'Interview Simulator',
    description: 'Developed an interview preparation simulator that generates real-time technical questions and tracks user responses. Aimed at helping developers prepare effectively for coding interviews.',
    image: 'https://images.openai.com/thumbnails/64e6067fad68a0c6002baae6c6f13595.jpeg',
    technologies: ['Spring Boot', 'Java', 'PostgreSQL', 'JUnit', 'Mockito', 'Angular'],
    company: 'Personal Project',
    date: '2025',
    details: [
      'Real-time technical question generation',
      'User progress tracking and analytics',
      'Frontend built with Angular and TypeScript',
      'Backend with Java Spring Boot',
      'Posgresql for storing user sessions and questions',
      'Project link: https://github.com/hariti-asm/interview_simulator'
    ]
  },
  {
    title: 'CitronTrack - Lemon Farm Management',
    description: 'A comprehensive farm management platform designed to help lemon farmers efficiently track production, harvests, and sales. Built with Spring Boot, following multi-layer architecture.',
    image: 'https://images.unsplash.com/photo-1587324438673-56c78a866b15?auto=format&fit=crop&w=800&h=500',
    technologies: ['Spring Boot', 'Java', 'Postman', 'Swagger', 'JUnit', 'Mockito'],
    company: 'UM6P - YouCode',
    date: 'Current Project',
    details: [
      'Farm and field management with area constraints',
      'Tree lifecycle tracking with age-based productivity',
      'Seasonal harvest management',
      'Sales tracking and revenue calculation',
      'Exception handling and unit testing'
    ]
  },
  {
    title: 'ITLens Survey Platform',
    description: 'Developed a robust REST API for IT surveys using Spring Boot. Implemented complex survey structures with chapters and sub-chapters, supporting both single and multiple-choice questions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500',
    technologies: ['Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'JUnit 5', 'Mockito', 'Swagger'],
    company: 'UM6P - YouCode',
    date: '2024',
    details: [
      'Complex survey structure implementation',
      'Analytics and statistics generation',
      'RESTful API design',
      'Comprehensive testing suite'
    ]
  },
  {
    title: 'FranceTour Race Management',
    description: 'Built a comprehensive cycling event management system using Spring Boot and Hibernate. Implemented real-time race results tracking and automated ranking calculations.',
    image: 'https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?auto=format&fit=crop&w=800&h=500',
    technologies: ['Spring Boot', 'Hibernate', 'Spring MVC', 'MySQL', 'REST APIs'],
    company: 'Cyclo Club Horizon',
    date: '2023',
    details: [
      'Real-time race tracking system',
      'Automated ranking calculations using database triggers',
      'Comprehensive reporting functionality',
      'Multi-user access control',
      'Performance optimization for concurrent users'
    ]
  },
  {
    title: 'Football Competition Management System',
    description: 'A comprehensive football tournament management system built with Spring Boot and MongoDB, handling multiple competitions, teams, matches, and real-time statistics.',
    image: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?auto=format&fit=crop&w=800&h=500',
    technologies: ['Spring Boot', 'MongoDB', 'Spring Security', 'WebSocket', 'Docker', 'JUnit'],
    company: 'Personal Project',
    date: '2024',
    details: [
      'Real-time match scoring and statistics',
      'Tournament bracket generation and management',
      'Team and player performance analytics',
      'RESTful API with comprehensive documentation',
      'Role-based access control for officials and teams',
      'WebSocket integration for live updates'
    ]
  }
];
