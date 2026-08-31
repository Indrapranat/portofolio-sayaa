// ============================================
// Portfolio Content Type Definitions
// ============================================

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  about: string[];
  location: string;
  email: string;
  avatarUrl?: string;
  resumeUrl?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  category: "frontend" | "backend" | "tools" | "other";
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  features?: string[];
  techStack: string[];
  imageUrl?: string;
  screenshots?: string[];
  repoUrl?: string;
  demoUrl?: string;
  status?: "completed" | "in-progress" | "maintained";
  role?: string;
  featured: boolean;
  order: number;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string[];
  current?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  achievements?: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
