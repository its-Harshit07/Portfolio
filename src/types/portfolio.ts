export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  institutionIcon: string;
  description: string;
  tags: string[];
  isCurrent?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issuerBadge: string;
  issuerIcon: string;
  credentialId: string;
  image: string;
  verifyUrl: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin: string;
  github: string;
  leetcode: string;
}
