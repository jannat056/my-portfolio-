import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "High-End Modern Portfolio",
    description: "A premium, minimal dark mode portfolio built with Next.js App Router, TypeScript, and Tailwind CSS featuring glassmorphism design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/portfolio.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/portfolio",
    featured: true,
  },
  {
    id: "2",
    title: "E-Commerce Web Application",
    description: "A full-featured modern store application with seamless UI, responsive layout, and robust state management.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    image: "/images/projects/ecommerce.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/ecommerce",
    featured: true,
  },
];