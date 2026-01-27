export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
  videoUrl?: string;
  githubUrl?: string;
  gallery?: string[]; // Pour plusieurs images/vidéos
  details?: {
    fullDescription: string;
    features: string[];
    technologies: string[];
  };
}

export interface Skill {
  name: string;
  level: number;
  category: 'Hardware' | 'Software' | 'Tools' | 'Protocols';
  justification?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  logo?: string; // Chemin vers le logo
  description: string[];
  details?: {
    fullDescription: string;
    videoUrl?: string;
    technologies?: string[];
  };
}