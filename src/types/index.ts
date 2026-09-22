// Type for Project data
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

// Type for Skill data
export interface Skill {
  name: string;
  category: string;
  description: string;
}

// Type for Social Link data
export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}