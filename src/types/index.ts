export interface Project {
  title: string;
  image: string;
  description: string;
  tech?: string[];
  github?: string;
}

export interface ExperienceItem {
  company: string;
  companyUrl?: string;
  role: string;
  duration: string;
  location?: string;
  points: string[];
  skills?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: number | string;
  url?: string;
}

export interface Skills {
  frontend: string[];
  backend?: string[];
  tools?: string[];
}
