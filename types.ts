
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
  videoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Hardware' | 'Software' | 'Tools' | 'Protocols';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
