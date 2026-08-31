import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description:
      "A brief description of the project explaining what it does and the value it provides.",
    problem: "Describe the problem this project solves.",
    solution: "Describe the solution and approach taken.",
    features: [
      "Feature one",
      "Feature two",
      "Feature three",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    imageUrl: "/images/projects/project-one.jpg",
    repoUrl: "https://github.com/yourusername/project-one",
    demoUrl: "https://project-one.vercel.app",
    status: "completed",
    role: "Full-Stack Developer",
    featured: true,
    order: 1,
  },
  {
    slug: "project-two",
    title: "Project Two",
    description:
      "A brief description of the second project explaining its purpose and impact.",
    techStack: ["React", "Node.js", "Express", "MySQL"],
    imageUrl: "/images/projects/project-two.jpg",
    repoUrl: "https://github.com/yourusername/project-two",
    status: "completed",
    featured: true,
    order: 2,
  },
  {
    slug: "project-three",
    title: "Project Three",
    description:
      "A brief description of the third project showcasing different skills.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    imageUrl: "/images/projects/project-three.jpg",
    demoUrl: "https://project-three.vercel.app",
    status: "in-progress",
    featured: true,
    order: 3,
  },
];
