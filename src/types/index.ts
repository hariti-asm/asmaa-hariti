export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  company: string;
  date: string;
  details?: string[];
}

export interface Certification {
  title: string;
  organization: string;
  date: string;
  description: string;
  image: string;
  linkedInUrl: string;
}

export interface Skill {
  category: string;
  items: string[];
}